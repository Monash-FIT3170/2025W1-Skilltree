# Todo Spike Application

A simple Todo application built with Next.js and Appwrite.

## Getting Started for Beginners

This guide will walk you through setting up and running this project, even if you have no prior development experience.

### Prerequisites

- Node.js (v14 or later)
- npm
- Git
- Code editor (we recommend Visual Studio Code)
- Appwrite account and project

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

1. **Install Dependencies**

```bash
npm install
```

2. **Set Up Appwrite**

- Create an account on [Appwrite](https://appwrite.io/)
- Create a new project in Appwrite console
- Create a database with collection for todos
- Set up authentication in Appwrite
- Collection: todos

  - Fields:
    - title (string)
    - description (string)
    - is_done (boolean)
    - author_email (string)
    - created_at (datetime)

- Set up authentication with email/password

- **OR** Move to the next step to use pre-configured AppWrite

3. **Configure Environment Variables**

- Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=67e4a1b600216c92061b
NEXT_PUBLIC_APPWRITE_DATABASE_ID=67e4a24f0020c7c392a0
NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID=67e4a2b500187aad4e3a
NEXT_PUBLIC_APPWRITE_STORAGE_ID=67e4a26f001d120cd54c
```

- Edit your `next.config.ts`

```js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ hostname: "picsum.photos" }],
	},
	env: {
		NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
		NEXT_PUBLIC_APPWRITE_PROJECT_ID:
			process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
		NEXT_PUBLIC_APPWRITE_DATABASE_ID:
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
		NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID:
			process.env.NEXT_PUBLIC_APPWRITE_TODOS_COLLECTION_ID,
		NEXT_PUBLIC_APPWRITE_STORAGE_ID:
			process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
	},
};

export default nextConfig;
```

### Running the Project

1. **Build the app**

```bash
npm run build
```

Then run the app

```bash
npm start
```

2. **Access the Application**

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
- `config/` - Configuration files (like Appwrite setup)
- `lib/` - Utility functions and helpers
- `app/store/` - State management using Redux

## Troubleshooting

If you encounter any issues:

1. **Server Won't Start**

- Make sure you've installed all dependencies with `npm install`
- Check that the correct version of Node.js is installed

2. **Authentication Issues**

- Verify your Appwrite configuration in `.env.local`
- Check the console for error messages

## Tech Stack

This project is built with the following technologies:

- **[Next.js](https://nextjs.org/)**: A React framework that enables server-side rendering, static site generation, and efficient routing for web applications.

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces with reusable components and efficient DOM manipulation.

- **[Appwrite](https://appwrite.io/)**: An open-source backend server that provides authentication, database, storage, and other backend services via a simple API.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom user interfaces without writing custom CSS.

- **[Redux Toolkit](https://redux-toolkit.js.org/)**: The official, opinionated toolset for efficient Redux development, simplifying state management in React applications.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
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
```
