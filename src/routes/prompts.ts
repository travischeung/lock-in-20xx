import { Router } from 'express';
import { ZodError } from 'zod';
import openAIService from '../services/openai.service';

const router = Router();

/**
 * POST /api/agentGatsby/ask-coach
 * Body: { message: string }
 */
router.post('/agentGatsby/ask-coach', async (req, res) => {
    try {
        const response = await openAIService.createPersonalTrainerResponse(req.body);
        res.json(response);
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ error: 'Validation failed', details: error.flatten() });
            return;
        }
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// GET recent messages

// 



export default router;
