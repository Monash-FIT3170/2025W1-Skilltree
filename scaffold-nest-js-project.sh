#!/bin/bash
if [[ "$1" == "--help" || "$1" == "-h" ]]; then
  echo "Usage: $0 <project-name>"
  echo ""
  echo "Example:"
  echo "  $0 my-nest-app"
  exit 0
fi

PROJECT_NAME=$1
CURRENT_DIR=$(pwd)

if [ -z "$PROJECT_NAME" ]; then
  echo "Error: Project name is required."
  echo "Usage: $0 <project-name>"
  exit 1
fi
if [ -d "$PROJECT_NAME" ]; then
  echo "Error: Directory '$PROJECT_NAME' already exists."
  exit 1
fi
if ! command -v pnpm &> /dev/null; then
  echo "pnpm could not be found. Please install pnpm first."
  exit 1
fi
if ! command -v docker &> /dev/null; then
  echo "Docker could not be found. Please install Docker first."
  exit 1
fi
if ! command -v docker-compose &> /dev/null; then
  echo "Docker Compose could not be found. Please install Docker Compose first."
  exit 1
fi
if ! command -v git &> /dev/null; then
  echo "Git could not be found. Please install Git first."
  exit 1
fi
if ! command -v node &> /dev/null; then
  echo "Node.js could not be found. Please install Node.js first."
  exit 1
fi
if ! command -v npm &> /dev/null; then
  echo "npm could not be found. Please install npm first."
  exit 1
fi
if ! command -v nest &> /dev/null; then
  echo "Nest CLI could not be found. Please install Nest CLI first."
  exit 1
fi

git clone https://github.com/aditya04tripathi/nestjs-starter-api-with-jwt-auth.git
mv nestjs-starter-api-with-jwt-auth $PROJECT_NAME
cd $PROJECT_NAME
pnpm add -g @nestjs/cli
pnpm install
echo "NestJS project '$PROJECT_NAME' has been created in $CURRENT_DIR/$PROJECT_NAME."
echo "To start the project run:"
echo "cd $PROJECT_NAME"
echo "pnpm run start"
echo ""
echo "To start the project in development mode, run:"
echo "pnpm run start:dev"
echo ""
echo "To set up the database, run:"
echo "docker compose up -d"
echo ""
echo "To run the tests, run:"
echo "pnpm run test"
echo ""
echo "To run the tests with coverage, run:"
echo "pnpm run test:cov"
echo ""
echo "To run the linter, run:"
echo "pnpm run lint"
echo ""
echo "To run the linter with fix, run:"
echo "pnpm run lint:fix"
echo ""
echo "To run prettier, run:"
echo "pnpm run format"
echo ""
echo "To run prettier with fix, run:"
echo "pnpm run format:fix"
