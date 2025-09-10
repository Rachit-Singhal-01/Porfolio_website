# Rachit Singhal's Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website for Rachit Singhal, an AI/ML Engineer and MSc Artificial Intelligence graduate from the University of Manchester. The application showcases professional experience, skills, education, projects, and provides a contact form for potential opportunities. Built with a clean, professional design featuring dark/light mode theming and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: TailwindCSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Animations**: Framer Motion for smooth page transitions and component animations
- **Theme System**: Custom theme provider supporting light/dark mode with localStorage persistence

### Backend Architecture  
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Development Setup**: Vite integration for hot module replacement and fast development
- **Email Service**: Nodemailer integration for contact form submissions
- **Storage Layer**: In-memory storage implementation with interface for future database integration
- **Request Logging**: Custom middleware for API request/response logging

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **Schema**: Basic user table structure with UUID primary keys
- **Migration System**: Drizzle Kit for schema migrations and database management

### Component Architecture
- **Design System**: Consistent component library with variants for different states
- **Layout Structure**: Single-page application with smooth scrolling navigation
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels and keyboard navigation support throughout

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Module Resolution**: Path aliases for clean imports (@/, @shared/, @assets/)
- **Development Tools**: ESBuild for server-side bundling, TypeScript compilation
- **Asset Handling**: Static asset serving with proper caching headers

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing & Navigation**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state and caching

### UI & Styling Dependencies
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: TailwindCSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth transitions and interactions
- **Utility Libraries**: clsx and class-variance-authority for conditional styling

### Backend & Database Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon serverless with Drizzle ORM
- **Email Service**: Nodemailer for contact form email delivery
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development Tools**: tsx for TypeScript execution, Vite for development server

### Development & Build Dependencies
- **Build Tools**: Vite with React plugin, ESBuild for server bundling
- **TypeScript**: Full TypeScript support with strict configuration
- **Development Plugins**: Replit-specific plugins for development environment integration
- **Date Handling**: date-fns for date formatting and manipulation

### Authentication & Security
- Basic user schema prepared for future authentication implementation
- Session-based architecture ready for user login functionality
- Environment variable configuration for sensitive data (email credentials, database URLs)