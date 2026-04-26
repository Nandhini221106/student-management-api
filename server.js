const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nandhini2211@",
  database: "studentdb"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

app.get("/", (req, res) => {
  res.send("Student API Running");
});

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  db.query(
    "INSERT INTO students (name, age, course) VALUES (?, ?, ?)",
    [name, age, course],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Student Added Successfully");
      }
    }
  );
});
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
app.get("/students/:id", (req, res) => {
  db.query(
    "SELECT * FROM students WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
});
app.put("/students/:id", (req, res) => {
  const { name, age, course } = req.body;

  db.query(
    "UPDATE students SET name=?, age=?, course=? WHERE id=?",
    [name, age, course, req.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Student Updated Successfully");
      }
    }
  );
});
app.delete("/students/:id", (req, res) => {
  db.query(
    "DELETE FROM students WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Student Deleted Successfully");
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});