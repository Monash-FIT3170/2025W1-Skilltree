# Skill Tree

Skill Tree is a web application that helps users build their skills and excel in their careers.

## Project Structure

The project is now split into a Next.js frontend and a NestJS backend.  
The frontend follows a standard Next.js application structure; the backend follows a standard NestJS + Prisma layout that connects to a PostgreSQL database.

## Before Running

### Install prerequisites

- Node.js LTS (via nvm recommended)
- pnpm (package manager)
- NestJS CLI
- PostgreSQL (install from the official website; no Docker required)

```bash
npm i -g pnpm
pnpm add -g @nestjs/cli
```

### Set up, migrate, and run backend and frontend

#### Clone the repository

**Frontend (default branch):**
```bash
git clone https://www.github.com/Monash-FIT3170/2025W1-Skilltree.git skilltree-frontend
cd skilltree-frontend
pnpm install
cp .env.example .env
# IMPORTANT for the frontend:
# Add NEXT_PUBLIC_API_URL=http://localhost:6969
```

**(In a separate folder) Backend (backend branch):**
```bash
git clone -b backend https://www.github.com/Monash-FIT3170/2025W1-Skilltree.git skilltree-backend
cd skilltree-backend
pnpm install
cp .env.example .env
# Edit .env:
# DATABASE_URL="postgresql://<USER>:<PASSWORD>@localhost:5432/<DB_NAME>?schema=public"
# PORT=6969
# JWT_SECRET="your_secret"
```

#### Start PostgreSQL and apply migrations

```bash
# ensure your local PostgreSQL is running, then in the backend folder:
pnpm db:dev:migrate
```

#### Run the servers

```bash
# Backend (in skilltree-backend)
pnpm start:dev

# Frontend (in skilltree-frontend)
pnpm dev
```

## Directory Structure

### Root Directories

**Frontend (Next.js):**
- `/app`: Contains Next.js application routes and layouts
- `/components`: UI components organized by category
- `/hooks`: Custom React hooks
- `/lib`: Utility functions and shared code
- `/public`: Static assets (icons, images, etc.)
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `.eslintrc*`, `components.json`, `.env.example`

**Backend (NestJS + Prisma):**
- `/src`: NestJS source (modules, controllers, services, DTOs, guards, strategies)
- `/prisma`: Prisma schema and migrations (`schema.prisma`, `/migrations`)
- `nest-cli.json`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc`, `pm2.config.json`, `.env.example`, `api.http`

## Component Structure

Components are organized into logical groups (frontend):

- `/components/ui`: Reusable UI components (built with shadcn/ui & Radix primitives)
- `/components/shared`: Shared components used across different parts of the application

## Models Structure

The application uses PostgreSQL with Prisma for data modeling (backend).  
Models (entities) are defined in `prisma/schema.prisma`, and migrations live in `/prisma/migrations`.

Typical domain models include:

- **User**: User account information
- **SkillForest**: A user's collection of communities and followers
- **Experience**: Experience points for users in communities
- **Community**: Community information including skill type and members
- **SkillTreeNode**: Nodes in a community's skill tree
- **Leaderboard**: Community leaderboards tracking user progress
- **Post**: User posts within communities
- **Feedback**: User feedback on posts
- **Verification**: Verification requests for community skill validation
- **Event**: Community events with experience rewards

Models follow a consistent pattern with Prisma schema definitions and generated TypeScript types via Prisma Client:

```prisma
// prisma/schema.prisma (excerpt)
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  // relations ...
}

model Community {
  id        String   @id @default(cuid())
  name      String
  // relations ...
}
```

Use them in services via Prisma Client:

```typescript
// example usage in a NestJS service
const user = await this.prisma.user.findUnique({ where: { email } });
```

All Prisma models are compiled into a single client for convenient importing throughout the application.

## Import/Export Patterns

### UI Components

UI components in `/components/ui` follow a consistent pattern:

- Each component is defined in its own file (e.g., `button.tsx`, `card.tsx`)
- Components are exported directly from their files
- Components accept standard React props plus additional type-specific props
- Many components extend React's built-in types using `React.ComponentProps<"element">` pattern

Example from a component:

```tsx
function Button({ className, ...props }: React.ComponentProps<"button">) {
  return <button className={cn("button-styles", className)} {...props} />;
}

export { Button };
```

### Hooks

Custom hooks in `/hooks` follow these patterns:

- Each hook is defined in its own file with a descriptive name (e.g., `use-mobile.ts`)
- Hooks are exported directly and named with the `use` prefix

Example from `use-mobile.ts`:

```tsx
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  // Hook implementation

  return !!isMobile;
}
```

### Utility Functions

Utility functions are stored in `/lib`:

- General utilities are in `utils.ts`
- The `cn` function is commonly used for combining class names with Tailwind

Example import pattern:

```tsx
import { cn } from "@/lib/utils";
```

## Component Composition

Components often make use of composition patterns:

- **Slot Pattern**: Many components use Radix UI's `Slot` component to allow customizing the rendered element
- **Compound Components**: Complex components like `Sidebar` export multiple related components (e.g., `SidebarHeader`, `SidebarContent`)
- **Context Providers**: Components that need shared state use React Context (e.g., `SidebarProvider`)

Example of compound component exports:

```tsx
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  // ...more related components
};
```

## Styling

The project uses:

- Tailwind CSS for styling
- CSS variables for theming
- Class variance authority (cva) for component variants

The theme is defined in `/app/globals.css` with light and dark mode variables.

## Common Patterns

### Component Props

Components typically follow this pattern for props:

```tsx
function ComponentName({
  className,
  ...props
}: React.ComponentProps<"element"> & {
  // Additional custom props
  customProp?: string;
}) {
  // Component implementation
}
```

### Export Structure

Multiple related components are grouped and exported together:

```tsx
export {
  ComponentName,
  ComponentNameItem,
  ComponentNameHeader,
  // ...more related components
};
```

### Context Usage

For components with shared state:

```tsx
const ComponentNameContext = React.createContext<ContextType | null>(null);

function useComponentName() {
  const context = React.useContext(ComponentNameContext);
  if (!context) {
    throw new Error("useComponentName must be used within a ComponentNameProvider");
  }
  return context;
}

function ComponentNameProvider({ children, ...props }) {
  // Provider implementation
}
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
