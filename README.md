````markdown
# Aman Kumar Singh — Personal Portfolio

A modern, responsive personal portfolio website for **Aman Kumar Singh**, a Software Engineer from India.

The portfolio showcases my technical skills, projects, resume, GitHub, LinkedIn profile, and provides a contact form with an AI-powered portfolio assistant.

---

## 🚀 Live Portfolio

Coming soon...

---

## 👨‍💻 About the Project

This portfolio website is designed to present my professional profile, technical skills, projects, and software development journey in a clean and modern interface.

The website focuses on:

- Responsive design
- Modern UI/UX
- Project showcase
- Resume access
- Contact form
- AI portfolio assistant
- GitHub and LinkedIn integration
- Backend API integration

---

## ✨ Features

### 🎨 Modern Portfolio UI

- Responsive design
- Mobile-friendly navigation
- Modern typography
- Smooth animations
- Interactive project cards
- Clean and professional layout

### 👤 About Section

Provides information about my:

- Background
- Software development interests
- Professional goals
- Technical journey

### 🛠️ Skills Section

Technologies and skills include:

- C
- Java
- HTML
- CSS
- JavaScript
- SQL
- Node.js
- Next.js
- Git
- GitHub

### 📂 Projects Section

The portfolio currently showcases:

#### 1. Personal Portfolio

A responsive full-stack portfolio website built to showcase my professional profile, projects, skills, resume, and contact information.

**Technologies:**

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

#### 2. Expense Tracker

A full-stack expense management application for managing income, expenses, monthly budgets, notifications, and financial analytics.

**Technologies:**

- Next.js
- React.js
- Prisma ORM
- MySQL
- JWT Authentication

### 📄 Resume

Visitors can view my resume directly from the portfolio website.

### 📬 Contact Form

Visitors can send a message through the contact form.

The backend supports:

- Contact message validation
- Rate limiting
- Local storage
- MySQL storage
- Email delivery using Resend

### 🤖 AI Portfolio Assistant

The website includes an AI chatbot that can answer questions about:

- Aman’s skills
- Projects
- Resume
- GitHub
- LinkedIn
- Professional profile

---

## 🧰 Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive Web Design

### Backend

- Node.js
- Express.js

### Database

- MySQL
- Local JSON storage fallback

### Email

- Resend API

### Development Tools

- Git
- GitHub
- VS Code
- npm

---

## 📁 Project Structure

```text
portfolio/
│
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── animations.css
│   │   ├── chatbot.css
│   │   └── projects.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   ├── img/
│   │   ├── aman-kumar-singh.jpeg
│   │   ├── portfolio1.jpg
│   │   └── portfolio2.jpg
│   │
│   └── pdf/
│       └── aman-kumar-singh-resume.pdf
│
├── data/
│   └── contact-messages.json
│
├── index.html
├── server.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
````

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Amankrsingh07/portfolio.git
```

### 2. Open the Project

```bash
cd portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio

RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_email@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

> Never upload your `.env` file to GitHub.

---

## 🗄️ Database Setup

If MySQL is enabled, create a database:

```sql
CREATE DATABASE portfolio;
```

Configure your database credentials in `.env`.

If MySQL is not configured, the application can use local JSON storage for contact messages.

Contact messages are stored in:

```text
data/contact-messages.json
```

---

## 📧 Resend Email Configuration

The contact form can use the Resend API to send email notifications.

Add your Resend API key to `.env`:

```env
RESEND_API_KEY=your_resend_api_key
```

Also configure:

```env
CONTACT_TO_EMAIL=your_email@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

Do not expose the API key inside frontend JavaScript or HTML.

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

Open the URL in your browser.

---

## 🧪 Development

For development, the project uses Node.js watch mode.

```bash
npm run dev
```

After modifying backend files, Node automatically restarts the server.

---

## 🛑 Stop the Server

Press:

```text
Ctrl + C
```

in the terminal.

---

## 🔐 Security

The project follows basic security practices:

* Environment variables for secrets
* API keys are kept on the backend
* Contact form validation
* Request rate limiting
* `.env` excluded from Git
* No sensitive credentials stored in frontend code

Example `.gitignore`:

```gitignore
node_modules/
.env
.DS_Store
data/contact-messages.json
```

---

## 📱 Responsive Design

The portfolio is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🌐 Social Profiles

### GitHub

https://github.com/Amankrsingh07/

### LinkedIn

https://www.linkedin.com/in/amankumarsingh05/

---

## 🔮 Future Improvements

Planned improvements include:

* Advanced AI chatbot
* Admin dashboard
* Project management dashboard
* Blog section
* Visitor analytics
* Dark/light mode
* Database-backed contact management
* Email notifications
* Project filtering
* More interactive animations
* Deployment with custom domain
* CI/CD using GitHub Actions

---

## 🎯 Project Goals

The main goals of this portfolio are:

1. Build a professional online presence.
2. Showcase software development skills.
3. Demonstrate full-stack development knowledge.
4. Provide recruiters with easy access to projects and resume.
5. Demonstrate backend API development.
6. Integrate AI functionality into a real-world website.

---

## 📸 Screenshots

Add screenshots of the portfolio here:

```text
screenshots/
├── home.png
├── about.png
├── projects.png
└── contact.png
```

Example:

```markdown
![Portfolio Home](screenshots/home.png)
```

---

## 👨‍💻 Author

**Aman Kumar Singh**

Software Engineer | Full-Stack Developer

GitHub:
https://github.com/Amankrsingh07/

LinkedIn:
https://www.linkedin.com/in/aman-kumarsingh05/

---

## 📄 License

This project is created for personal portfolio and educational purposes.

© 2026 Aman Kumar Singh. All Rights Reserved.

````

### Save it

Project ke root mein:

```bash
cd portfolio
touch README.md
````

Phir VS Code mein:

```bash
code README.md
```

Aur upar wala content paste kar do.

**Important:** `.env` ko GitHub par push mat karna, especially `RESEND_API_KEY`.
