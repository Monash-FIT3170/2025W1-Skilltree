# Todo Spike Application

A simple Todo application built with Next.js and MongoDB/Express.

## Getting Started

This guide will help you set up and run the project.

### Prerequisites

- Docker
- Docker Compose

### Setup and Run

1. **Clone the Repository**

```bash
git clone -b spike_mongo_express https://github.com/Monash-FIT3170/2025W1-Skilltree
cd 2025W1-Skilltree
```

2. **Build and Start the Application**

```bash
docker-compose -f 'docker-compose.yml' up -d --build
```

3. **Access the Application**

- Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Project Structure Overview

- `app/` - Main application pages
- `components/` - Reusable UI components
- `lib/` - Utility functions and helpers
- `app/store/` - State management using Redux
- `server/` - Express backend server:
  - `controllers/` - Route handler functions
  - `models/` - MongoDB data models
  - `routes/` - API route definitions
  - `middleware/` - Custom middleware functions
  - `server.js` - Main server file

## Tech Stack

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Express.js](https://expressjs.com/)**: Node.js web application framework.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for flexible data models.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: Toolset for efficient Redux development.

## Troubleshooting

1. **Application Won't Start**

- Ensure Docker and Docker Compose are installed and running.
- Check the logs with:

```bash
docker-compose logs
```

2. **Database Issues**

- Verify MongoDB is running inside the Docker container.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
