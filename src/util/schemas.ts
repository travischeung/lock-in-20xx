/**
 * Zod validation schemas for fitness app
 * All schemas use .strict() to prevent extra properties
 */

import { z } from 'zod';

/**
 * Gender enum schema
 */
export const GenderSchema = z.enum(['male', 'female', 'other']);

/**
 * Activity level enum schema
 */
export const ActivityLevelSchema = z.enum([
  'sedentary',
  'lightly_active',
  'moderately_active',
  'very_active',
  'extremely_active'
]);

/**
 * Goal enum schema
 */
export const GoalSchema = z.enum([
  'lose_weight',
  'gain_weight',
  'maintain',
  'build_muscle'
]);

/**
 * User profile schema for plan generation
 * Validates user input when generating workout/diet plans
 */
export const UserProfileSchema = z
  .object({
    id: z.string().optional(),
    age: z.number().int().positive().min(1).max(150),
    weight: z.number().positive().min(1).max(1000), // in kg
    height: z.number().positive().min(1).max(300), // in cm
    gender: GenderSchema,
    activityLevel: ActivityLevelSchema,
    goal: GoalSchema,
    targetWeight: z.number().positive().min(1).max(1000), // in kg
    createdAt: z.string().datetime().optional(),
    updatedAt: z.string().datetime().optional()
  })
  .strict();

/**
 * Calorie entry schema for tracking daily calories
 */
export const CalorieEntrySchema = z
  .object({
    id: z.string().optional(),
    userId: z.string().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    calories: z.number().int().nonnegative(),
    description: z.string().min(1),
    createdAt: z.string().datetime().optional()
  })
  .strict();

/**
 * Exercise entry schema for tracking exercises
 */
export const ExerciseEntrySchema = z
  .object({
    id: z.string().optional(),
    userId: z.string().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
    exerciseName: z.string().min(1),
    duration: z.number().int().positive(), // in minutes
    sets: z.number().int().positive(),
    reps: z.number().int().positive(),
    weight: z.number().positive().optional(), // optional, in kg
    caloriesBurned: z.number().nonnegative().optional(), // optional
    createdAt: z.string().datetime().optional()
  })
  .strict();

/**
 * Inferred TypeScript types from Zod schemas
 */
export type Gender = z.infer<typeof GenderSchema>;
export type ActivityLevel = z.infer<typeof ActivityLevelSchema>;
export type Goal = z.infer<typeof GoalSchema>;
export type UserProfile = z.infer<typeof UserProfileSchema>;
export type CalorieEntry = z.infer<typeof CalorieEntrySchema>;
export type ExerciseEntry = z.infer<typeof ExerciseEntrySchema>;