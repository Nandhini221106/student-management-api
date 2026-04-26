📚 Student Management API

A simple RESTful API for managing student records built using Node.js and Express.js.
This project allows you to perform basic CRUD operations like creating, reading, updating, and deleting student data.

🚀 Features

➕ Add new students

📄 Get all students

🔍 Get student by ID

✏️ Update student details

❌ Delete student

⚡ Built with Express.js (fast and lightweight server)

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: (Add here if you are using MongoDB / MySQL / JSON file)

Tools: npm, Postman

📁 Project Structure

student-management-api/

│── server.js

│── package.json

│── package-lock.json

│── .gitignore

│── .gitattributes

└── (add your routes/controllers if any)

⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/Nandhini221106/student-management-api
2. Move into project folder
cd student-management-api
3. Install dependencies
npm install
4. Run the server
node server.js

Server will start at:

http://localhost:3000

📌 API Endpoints

➤ Get all students
GET /students

➤ Get student by ID
GET /students/:id

➤ Add new student
POST /students

Request Body:

{

  "name": "John Doe",
  
  "age": 20,
  
  "course": "Computer Science"
  
}

➤ Update student
PUT /students/:id

➤ Delete student
DELETE /students/:id

🧪 Testing

You can test APIs using:

Postman

Thunder Client (VS Code extension)

🚫 .gitignore Example

Make sure you ignore:

node_modules/

.env

👩‍💻 Author

Nandhini M

GitHub: Nandhini221106
