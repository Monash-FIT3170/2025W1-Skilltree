# Skill Tree

Skill Tree is a web application that helps users build their skills and excel in their careers.

## Project Structure

The project follows a standard Next.js application structure with additional organization for components and utilities.

## Before Running

1. Setup the PostgreSQL container

   ```bash
   npm run setup:postgres
   ```

2. Run the server
   ```bash
   npm run server
   ```

## Directory Structure

### Root Directories

- `/app`: Contains Next.js application routes and layouts
- `/components`: UI components organized by category
- `/hooks`: Custom React hooks
- `/lib`: Utility functions and shared code
- `/models`: Database models using Mongoose

### Component Structure

Components are organized into logical groups:

- `/components/ui`: Reusable UI components based on Radix UI primitives
- `/components/shared`: Shared components used across different parts of the application

### Models Structure

The application uses MongoDB with Mongoose for data modeling. Models are organized in the `/models` directory:

- `User.ts`: User account information
- `SkillForest.ts`: A user's collection of communities and followers
- `Experience.ts`: Experience points for users in communities
- `Community.ts`: Community information including skill type and members
- `SkillTreeNode.ts`: Nodes in a community's skill tree
- `Leaderboard.ts`: Community leaderboards tracking user progress
- `Post.ts`: User posts within communities
- `Feedback.ts`: User feedback on posts
- `Verification.ts`: Verification requests for community skill validation
- `Event.ts`: Community events with experience rewards

Models follow a consistent pattern with Mongoose schemas and TypeScript types exported:

```typescript
// Schema definition
const modelSchema = new Schema({
  // Schema fields
});

// Export the model and its TypeScript type
export const Model = models.Model || model("Model", modelSchema);
export type ModelType = {
  // TypeScript type definition
};
```

All models are re-exported from an index file for convenient importing throughout the application.

### Import/Export Patterns

#### UI Components

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

#### Hooks

Custom hooks in `/hooks` follow these patterns:

- Each hook is defined in its own file with a descriptive name (e.g., `use-mobile.ts`)
- Hooks are exported directly and named with the `use` prefix

Example from `use-mobile.ts`:

```tsx
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  // Hook implementation

  return !!isMobile;
}
```

#### Utility Functions

Utility functions are stored in `/lib`:

- General utilities are in `utils.ts`
- The `cn` function is commonly used for combining class names with Tailwind

Example import pattern:

```tsx
import { cn } from "@/lib/utils";
```

### Component Composition

Components often make use of composition patterns:

1. **Slot Pattern**: Many components use Radix UI's `Slot` component to allow customizing the rendered element
2. **Compound Components**: Complex components like `Sidebar` export multiple related components (e.g., `SidebarHeader`, `SidebarContent`)
3. **Context Providers**: Components that need shared state use React Context (e.g., `SidebarProvider`)

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

### Styling

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
    throw new Error(
      "useComponentName must be used within a ComponentNameProvider"
    );
  }
  return context;
}

function ComponentNameProvider({ children, ...props }) {
  // Provider implementation
}
```

## Getting Started

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
