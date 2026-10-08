const mysql = require("mysql2/promise");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required."
      });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: true } : undefined
    });

    await connection.execute(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await connection.end();

    return res.status(200).json({
      message: "Message submitted successfully!"
    });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({
      message: "Unable to save the message. Please try again."
    });
  }
}
