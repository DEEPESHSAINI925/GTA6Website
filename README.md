# Productivity Development App

A productivity web application built with React, Vite, and Tailwind CSS. Features include a To-Do List, Daily Planner, Motivation, Pomodoro Timer, and Daily Goals.

## Features

- Animated landing page with GSAP and React
- To-Do List with add, complete, and delete functionality
- Responsive design
- Modern UI with Tailwind CSS
- Routing with React Router

## Technologies Used

- React
- Vite
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- React Router
- React Toastify

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Flow

1. **Landing Page:**  
   Users are greeted with an animated landing page (`HomePage`).

2. **Navigation:**  
   Users can navigate to different features using the app’s navigation.

3. **To-Do List:**  
   Users can add, complete, and delete tasks on the `/todo` route.

4. **Other Features:**  
   Additional features (like Pomodoro Timer, Motivation, etc.) can be accessed via their respective routes.

## Project Structure

```
vite+projet/
├── public/                  # Static assets and images
├── src/
│   ├── App.jsx              # Main application component with routing
│   ├── Context/
│   │   └── Wrapper.jsx      # Context provider for global state
│   └── Router/
│       ├── HomePage.jsx     # Landing page component
│       ├── TodoList.jsx     # To-Do List component
│       └── Hh.jsx           # Additional feature/component
├── .gitignore
├── package.json
└── README.md
```

## File Descriptions

- **src/App.jsx**  
  Main entry point for the React application.  
  - Sets up routing using React Router.
  - Routes:
    - `/` → `HomePage` (Animated landing page)
    - `/todo` → `TodoList` (To-Do List feature)
    - `/hh` → `Hh` (Additional feature/component)

- **src/Router/HomePage.jsx**  
  Landing page component.  
  - Displays the animated introduction using GSAP and React.
  - Provides navigation to other features.

- **src/Router/TodoList.jsx**  
  To-Do List component.  
  - Allows users to add, complete, and delete tasks.
  - Manages task state and interactions.

- **src/Router/Hh.jsx**  
  Additional feature/component.  
  - Placeholder for future features (e.g., Pomodoro Timer, Motivation, etc.).

- **src/Context/Wrapper.jsx**  
  Context provider for global state management.  
  - Supplies shared state and functions to child components.

- **public/**  
  Contains static assets and images used throughout the app.

- **.gitignore**  
  Specifies files and directories to be ignored by Git (e.g., `node_modules`, build outputs, editor configs).

- **README.md**  
  Project documentation, setup instructions, and file descriptions.

---

You can expand these descriptions as your project grows or as you add more features and files.

## License

MIT

---

Created with ❤️ using React, Vite, and Tailwind CSS.