# Task-Management
Task manager application using MERN stack


## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Screenshots](#screenshots-of-app)

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks
- Added Pagination 4 tasks in each page

### Developer-side features

- Toasts for success and error messages
- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Use of 404 page for wrong urls
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- No external CSS files needed (made using Tailwind CSS)
- Usage of Tooltips
- Dynamic document titles
- Redirect to previous page after login
- Use of various React hooks
- Custom hook also used (useFetch)
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Redux
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm i
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file and substitute your credentials there.

3. Start the application

   ```sh
   npm run dev
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /tasks/add        Add new task
- /tasks/:taskId    Edit a task
</pre>

## npm scripts


Inside frontend folder:

- `npm start`: Starts frontend in development mode


Inside backend folder:

- `npm run dev`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

## Useful Links

- This project

  - Github Repo: https://github.com/Sakuu89/Todo-Task

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world


- Deployed Links

- Backend deployed : https://todo-task-uikj.onrender.com/api

- Frontend deployed : https://todo-task-fromtend.vercel.app/


## Screenshots

- Home Page (Desktop View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20desktop%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20desktop%20view.png?raw=true)

- Signup Page(Desktop View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/signup%20desktop%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/signup%20desktop%20view.png?raw=true)

- Login Page(Desktop View)
![https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20desktop%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20desktop%20view.png?raw=true)

- Task App(Desktop View)
![https://github.com/Sakuu89/Todo-Task/blob/main/images/task1%20desktop%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/task1%20desktop%20view.png?raw=true)


![https://github.com/Sakuu89/Todo-Task/blob/main/images/tasks2%20desktop%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/tasks2%20desktop%20view.png?raw=true)

- Home Page (Mobile View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20mob%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20mob%20view.png?raw=true)

- SignUp Page(Mobile View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20mobile%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20mobile%20view.png?raw=true)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/pagination%20mob%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/pagination%20mob%20view.png?raw=true)


- Login Page(Mobile View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20mobile%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/login%20mobile%20view.png?raw=true)


- Task App(Mobile View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20mob%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/homepage%20mob%20view.png?raw=true)

- Navbar After Logging In(Mobile View)

![https://github.com/Sakuu89/Todo-Task/blob/main/images/navbar%20mob%20view.png?raw=true](https://github.com/Sakuu89/Todo-Task/blob/main/images/navbar%20mob%20view.png?raw=true)


