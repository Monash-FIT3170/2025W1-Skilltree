# Todo Spike Application

A simple Todo application built with Next.js and MongoDB/Express.

## Getting Started for Beginners

This guide will walk you through setting up and running this project, even if you have no prior development experience.

### Prerequisites

- Node.js (v14 or later)
- npm
- Git
- Code editor (we recommend Visual Studio Code)
- MongoDB (local installation or MongoDB Atlas account)

### Environment Setup

#### Install Required Software

1. **Install Node.js**

- Go to [nodejs.org](https://nodejs.org/)
- Download and install the LTS (Long Term Support) version
- This includes npm (Node Package Manager)

2. **Install Git**

- Go to [git-scm.com](https://git-scm.com/downloads)
- Download and install the version for your operating system

3. **Install a Code Editor**

- We recommend [Visual Studio Code](https://code.visualstudio.com/)
- Download and install it on your system

4. **Set up MongoDB**

- Option 1: Install MongoDB locally from [mongodb.com](https://www.mongodb.com/try/download/community)
- Option 2: Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### Get the Project

1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to your preferred directory:

```bash
cd /path/to/your/preferred/directory
```

3. Clone the repository:

```bash
git clone https://github.com/Monash-FIT3170/2025W1-Skilltree
```

4. Navigate into the project directory:

```bash
cd 2025W1-Skilltree
```

### Project Setup

1. **Install Dependencies for Frontend**

```bash
npm install
```

2. **Install Dependencies for Backend**

```bash
cd server
npm install
cd ..
```

3. **Configure Environment Variables**

- Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

- Create a `.env` file in the server directory with the following variables:

```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo-app
# Or if using MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo-app
JWT_SECRET=your_jwt_secret_key
```

### Running the Project

1. **Start the Backend Server**

```bash
cd server
npm start
```

2. **In a new terminal, build and start the Frontend**

```bash
# From the project root directory
npm run build
npm start
```

3. **Access the Application**

- Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Using the Application

1. **Register an Account**

- Create a new user account
- Fill in the required information and submit

2. **Login**

- Use your credentials to log in

3. **Manage Todos**

- Create, read, update, and delete todo items
- Mark todos as complete/incomplete

## Project Structure Overview

- `app/` - Contains the main application pages
- `components/` - Reusable UI components
- `lib/` - Utility functions and helpers
- `app/store/` - State management using Redux
- `server/` - Express backend server:
  - `controllers/` - Route handler functions
  - `models/` - MongoDB data models
  - `routes/` - API route definitions
  - `middleware/` - Custom middleware functions
  - `server.js` - Main server file

## Troubleshooting

If you encounter any issues:

1. **Server Won't Start**

- Make sure you've installed all dependencies with `npm install`
- Check that the correct version of Node.js is installed
- Ensure MongoDB is running if using a local installation

2. **Authentication Issues**

- Verify your JWT secret in the server `.env` file
- Check the console for error messages

## Tech Stack

This project is built with the following technologies:

- **[Next.js](https://nextjs.org/)**: A React framework that enables server-side rendering, static site generation, and efficient routing for web applications.

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces with reusable components and efficient DOM manipulation.

- **[Express.js](https://expressjs.com/)**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

- **[MongoDB](https://www.mongodb.com/)**: A document-oriented NoSQL database used for high volume data storage and flexibility in data models.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS.

- **[Redux Toolkit](https://redux-toolkit.js.org/)**: The official, opinionated toolset for efficient Redux development, simplifying state management in React applications.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Some Extra Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run server in development mode
cd server
npm run dev
```
