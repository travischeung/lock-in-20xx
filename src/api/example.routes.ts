import express, { Router, Request, Response, NextFunction } from 'express';
import * as PersonalTrainer from '../services/openai.service';

const router: Router = express.Router();

/**
 * GET /api/example
 * Retrieves all example items
 */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await PersonalTrainer.createPersonalTrainerResponse('Can you be a personal trainer?');
    res.json(items);
  } catch (error) {
    next(error);
  }
});

export default router;
