# Enterprise Level Task Management

A clean Angular task management app built with standalone components. The app lets you select a user, view their assigned tasks, add new tasks with a due date, complete tasks, and keep task data saved in the browser with `localStorage`.

## Live Demo

[View the deployed app on Vercel](https://enterprise-level-task-managment-akt.vercel.app/)

## Features

- User selection with active user highlighting
- Per-user task lists
- Add tasks with title, summary, and due date
- Complete/delete tasks from the list
- Task persistence with browser `localStorage`
- Reusable card component
- Standalone Angular component architecture
- Responsive task-focused layout

## Tech Stack

- Angular 18
- TypeScript
- CSS
- Angular standalone components
- Vercel deployment

## Project Structure

```text
src/
  app/
    header/              App header
    shared/card/         Reusable card wrapper
    tasks/               Task list, task item, new task form, and task service
    user/                User card component
    app.component.*      Root app component
    dummy-users.ts       Demo user data
  assets/                Images and static assets
  main.ts                Application bootstrap
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

## Build

```bash
npm run build
```

The production build is generated in:

```text
dist/essentials
```

## Tests

```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

## Recent Improvements

- Blocked empty task submissions
- Fixed the task owner heading text
- Added safer browser storage handling
- Added proper task date metadata for better HTML semantics

## Author

Assem Mohamed
