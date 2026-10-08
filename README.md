# ISA3 Contact Form

A simple contact form for the ISA3 split-deployment assignment.

## Architecture

Frontend:
- HTML
- CSS
- JavaScript
- Hosted on Vercel

Backend:
- Node.js serverless API
- Hosted on Vercel

Database:
- MySQL
- Must be hosted remotely so Vercel can connect to it

## Project structure

```text
isa3-contact-form/
├── api/
│   └── submit.js
├── index.html
├── style.css
├── package.json
├── database.sql
├── .gitignore
└── README.md
```

## MySQL table

Run `database.sql` in your MySQL server.

## Vercel environment variables

Add these in Vercel Project Settings -> Environment Variables:

DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
DB_SSL

Do not put database credentials inside the HTML or JavaScript files.
