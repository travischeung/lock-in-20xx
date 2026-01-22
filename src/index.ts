import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import config from './config';
import exampleRoutes from './api/example.routes'

const app = express();

/**
 * Middleware setup
 * - Parse JSON bodies
 * - Enable CORS
 * - Parse URL-encoded bodies
 */
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 * Mount API routes
 */
app.use('/api', exampleRoutes);

/**
 * Health check endpoint
 */
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

/**
 * 404 handler
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

/**
 * Global error handler
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status((err as any).status || 500).json({
    error: err.message || 'Internal server error'
  });
});

/**
 * Start the server
 */
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${config.env} mode`);
});
