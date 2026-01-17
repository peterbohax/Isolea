# Isolea

A premium anatomical swimwear e-commerce platform with a brutalist design aesthetic. Built with React, TypeScript, Tailwind CSS, and Express.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **Data-Driven Fit System**: Custom measurement wizard for personalized sizing
- **Brutalist UI Design**: Bold, high-contrast design with dramatic typography
- **Responsive Layout**: Fully optimized for mobile and desktop
- **Performance Optimized**: Lazy-loaded routes and images
- **TypeScript**: Full type safety throughout the codebase
- **Modern Stack**: React 19, Vite, Tailwind CSS v4

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite 7
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI primitives
- **Routing**: Wouter
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- PostgreSQL (optional, for full database functionality)

### Installation

```bash
# Clone the repository
git clone https://github.com/peterbohax/Isolea.git
cd Isolea

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
Isolea/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── home/       # Home page components
│   │   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   │   ├── shop/       # Shop-related components
│   │   │   └── ui/         # Reusable UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── pages/          # Page components
│   └── public/             # Static assets
├── server/                 # Express backend
├── shared/                 # Shared types and constants
└── attached_assets/        # Generated images and assets
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## Design Philosophy

Isolea uses a **brutalist design approach** characterized by:
- High-contrast black and white color scheme
- Bold, oversized typography
- Thick borders and hard edges
- Dramatic hover interactions
- No rounded corners (radius: 0)

The accent color (hot pink: `hsl(330, 100%, 50%)`) provides visual punctuation throughout the design.

## Key Components

### Measurement Wizard
A multi-step form that collects anatomical measurements for custom-fit swimwear:
- Torso Length
- Full Bust
- Underbreast
- Lower Hips

### Product Grid
Displays products with hover effects revealing additional information and pricing.

### Hero Section
Features a marquee animation and dramatic split-screen layout with grayscale imagery.

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/isolea
NODE_ENV=development
PORT=5000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- ECONYL® regenerated nylon concept for sustainable fabric
- Brutalist web design inspiration
- Unsplash for placeholder imagery
