const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// HOME / TEST API
// ===============================

app.get("/", (req, res) => {

    res.send("ProjectFlow Backend is running successfully!");

});


// ===============================
// LOGIN API
// ===============================

app.post("/api/login", (req, res) => {

    const { email, password, role } = req.body;


    // Check required fields

    if (!email || !password || !role) {

        return res.status(400).json({

            success: false,

            message: "Email, password and role are required."

        });

    }


    // Temporary users

    const users = [

        {
            email: "employee@gmail.com",
            password: "123456",
            role: "employee"
        },

        {
            email: "leader@gmail.com",
            password: "123456",
            role: "leader"
        },

        {
            email: "admin@gmail.com",
            password: "123456",
            role: "admin"
        }

    ];


    // Find matching user

    const user = users.find((u) => {

        return (
            u.email === email &&
            u.password === password &&
            u.role === role
        );

    });


    // Invalid login

    if (!user) {

        return res.status(401).json({

            success: false,

            message: "Invalid email, password or role."

        });

    }


    // Successful login

    res.status(200).json({

        success: true,

        message: "Login successful!",

        user: {

            email: user.email,

            role: user.role

        }

    });

});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, "127.0.0.1", () => {

    console.log("");
    console.log("=================================");
    console.log("ProjectFlow Backend Started");
    console.log("=================================");
    console.log(`Server: http://localhost:${PORT}`);
    console.log("Login API: POST /api/login");
    console.log("=================================");
    console.log("");

});