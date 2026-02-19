# DevDrill

A dark-themed interview prep flashcard app for software engineers. Practice 300 questions across 10 topics with exam mode, timed challenges, progress tracking, and keyboard shortcuts.

## Topics (300 Questions)

| Topic | Questions | Difficulty Mix |
|-------|:---------:|----------------|
| System Design | 85 | Easy, Medium, Hard |
| Spring Boot | 30 | Easy, Medium, Hard |
| Docker | 25 | Easy, Medium, Hard |
| Kubernetes | 25 | Easy, Medium, Hard |
| React JS | 25 | Easy, Medium, Hard |
| Java Core | 25 | Easy, Medium, Hard |
| SQL & Databases | 25 | Easy, Medium, Hard |
| Git | 20 | Easy, Medium, Hard |
| REST API Design | 20 | Easy, Medium, Hard |
| AWS / Cloud | 20 | Easy, Medium, Hard |

## Features

- **Dashboard** - Topic cards with progress tracking, mastered count, and streak stats
- **Practice Mode** - Browse questions by topic, reveal answers, bookmark for later
- **Exam Mode** - Configurable quiz (10/20/30 questions), optional 30s timer, letter grading (S/A/B/C/D)
- **Keyboard Shortcuts** - Space (reveal), Arrow keys (navigate), B (bookmark), 1/2 (score), Esc (back)
- **Streak Tracking** - Daily usage streaks persisted in localStorage
- **Bookmarks** - Save and review flagged questions
- **Dark Theme** - Slate-950 background with glass morphism cards and gradient accents per topic

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- lucide-react (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The app runs at `http://localhost:5173`.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Reveal answer |
| `Right Arrow` | Next question |
| `Left Arrow` | Previous question |
| `B` | Toggle bookmark |
| `1` | Not sure (exam mode) |
| `2` | I knew this (exam mode) |
| `Esc` | Back to dashboard |

## License

[MIT](LICENSE)
