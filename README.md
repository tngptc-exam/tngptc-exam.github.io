# TNGPTC Exam Portal

A mobile-friendly online exam system for **Tamilnad Polytechnic College, Madurai**. Teachers create and schedule internal exams, students take them from their phones, and results appear instantly with a leaderboard.

Built as a static website on GitHub Pages with Supabase as the backend. Installable as a PWA.

## Features

**Students**
- Register, log in, and reset password
- See assigned exams and take them online
- Instant results, marks, and class leaderboard
- Profile page and in-app chat

**Teachers**
- Create exams and add questions one by one or upload them in bulk via CSV
- Assign exams to selected students and schedule re-exams
- Watch exams live with the real-time monitor
- View results per exam

**Admin**
- Create and manage teacher and student accounts
- Manage departments and classes
- Oversee all chats

**General**
- Installable on phones (PWA) with an offline fallback page
- Multiple themes
- Responsive layout for small screens

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Backend | Supabase (Auth, Postgres, Row Level Security) |
| Hosting | GitHub Pages |
| App mode | PWA (manifest + service worker) |

## Project Structure

| File | Purpose |
|---|---|
| `index.html` | Login, registration, password reset |
| `home.html` | Landing page after login |
| `student.html` | Student dashboard and exam page |
| `teacher.html` | Exam and question management |
| `admin.html` | Teachers, students, classes, departments |
| `monitor.html` | Live exam monitor |
| `results.html` | Results and leaderboard |
| `chat.html`, `profile.html` | Chat and profile |
| `diag.html` | Connection test page |
| `config.js` | Supabase URL and public key |
| `theme.js` | Themes |
| `sw.js`, `manifest.json`, `offline.html` | PWA files |

## Setup

1. Create a Supabase project and set up the tables, RLS policies, and functions.
2. Open `config.js` and add your Supabase project URL and **publishable (anon) key**.
3. Push the files to a GitHub repository and enable **GitHub Pages**.
4. Open the site, log in as admin, and create teacher accounts.

## Security

- Only the publishable key goes in `config.js`. Never commit `service_role` or secret keys.
- All access control is enforced by Supabase Row Level Security and database functions, not by page code.
- After any change, test login, exam start, and submit.

## Author

Built by a Diploma (Web Designing) student at TNGPTC, Madurai, using HTML, CSS, JavaScript, and AI-assisted development.

## License

For internal college use.
