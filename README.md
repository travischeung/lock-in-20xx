# lock-in-20xx

Express.js application with TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy the example environment file and configure:
```bash
cp .env.example .env
```

3. Build the TypeScript code:
```bash
npm run build
```

4. Run the development server (with hot reload):
```bash
npm run dev
```

5. Run the production server:
```bash
npm start
```

## Project Structure

```
src/
├── api/            # Route handlers and API endpoints
├── config/         # Configuration and environment variables
├── data/           # Data access layer (database queries)
├── services/       # Business logic layer
├── types/          # TypeScript type definitions
└── util/           # Utility functions and helpers
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/example` - Get all items
- `GET /api/example/:id` - Get item by ID
- `POST /api/example` - Create new item
- `PUT /api/example/:id` - Update item
- `DELETE /api/example/:id` - Delete item

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run development server with hot reload
- `npm start` - Run production server
- `npm run clean` - Remove compiled files
