/**
 * Shared type definitions
 */

/**
 * Example item for demonstration purposes
 */
export interface ExampleItem {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt?: string;
}

/**
 * Data required to create a new example item
 */
export interface CreateItemData {
  name: string;
  description?: string;
}

/**
 * Data for updating an existing example item
 */
export interface UpdateItemData {
  name?: string;
  description?: string;
}

/**
 * Fitness App Type Definitions
 */

export type Gender = 'male' | 'female' | 'other';

export type ActivityLevel = 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extremely_active';

export type Goal = 'lose_weight' | 'gain_weight' | 'maintain' | 'build_muscle';

/**
 * User profile containing personal information for plan generation
 */
export interface UserProfile {
  id: string;
  age: number;
  weight: number; // in kg
  height: number; // in cm
  gender: Gender;
  activityLevel: ActivityLevel;
  goal: Goal;
  targetWeight: number; // in kg
  createdAt: string;
  updatedAt?: string;
}

/**
 * Workout plan generated for a user
 */
export interface WorkoutPlan {
  id: string;
  userId: string;
  plan: string; // generated content from OpenAI
  createdAt: string;
}

/**
 * Diet plan generated for a user
 */
export interface DietPlan {
  id: string;
  userId: string;
  dailyCalorieTarget: number;
  plan: string; // generated content from OpenAI
  createdAt: string;
}

/**
 * Daily calorie tracking entry
 */
export interface CalorieEntry {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  calories: number;
  description: string; // food name/description
  createdAt: string;
}

/**
 * Exercise tracking entry
 */
export interface ExerciseEntry {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD format
  exerciseName: string;
  duration: number; // in minutes
  sets: number;
  reps: number;
  weight?: number; // optional, in kg
  caloriesBurned?: number; // optional
  createdAt: string;
}
