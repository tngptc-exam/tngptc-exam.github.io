# tngptc-exam# TNGPTC Exam Portal
Internal exam system for Tamilnad Polytechnic College, Madurai. Static site (GitHub Pages) + Supabase backend.

## Files
- `config.js` – Supabase URL + public key, shared helpers (edit keys ONLY here)
- `index.html` login/register, `student.html`, `teacher.html`, `admin.html`, `monitor.html`, `results.html`
- `theme.js` themes + credit, `sw.js` / `manifest.json` / `offline.html` PWA
- `SECURITY_AUDIT.sql` read-only checks to run in Supabase SQL Editor

## Rules
- Never commit `.env`, `service_role` or secret keys. Only the publishable key lives in `config.js`.
- All security is enforced by Supabase RLS + functions, not by the page code.
- Change one thing at a time and test login, exam start, submit after each change.
