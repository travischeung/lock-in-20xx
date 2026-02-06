import { Agent, run } from "@openai/agents";
import prompts from '../util/const';
import {
  AskCoachRequestSchema,
  CoachStructuredResponseSchema,
  type CoachStructuredResponse,
} from '../util/schemas';

/**
 * Creates and returns an OpenAI response for the given ask-coach request body.
 * Validates body with Zod; throws ZodError if invalid.
 * @param body - Raw request body (e.g. req.body)
 * @returns The coach response text
 */
async function createPersonalTrainerResponse(body: unknown): Promise<string> {
  const { message } = AskCoachRequestSchema.parse(body);
  const verificationAgent = new Agent({
    name: 'CoachGatsby',
    instructions: prompts.agentGatsbyInstructions,
  });
  try {
    const result = await run(verificationAgent, message);
    const output = result.finalOutput;
    if (output === undefined) throw new Error('Agent returned no output');
    return output;
  } catch (error) {
    console.error("Agent execution failed:", error);
    throw error;
  }
}

/**
 * Same as createPersonalTrainerResponse but asks the agent for JSON in a fixed shape,
 * parses with Zod, and returns a typed object suitable for DB storage.
 * @param body - Raw request body (e.g. req.body)
 * @returns Parsed structured response; throws if agent output is invalid JSON or fails schema
 */
async function createStructuredCoachResponse(body: unknown): Promise<CoachStructuredResponse> {
  const { message } = AskCoachRequestSchema.parse(body);
  const instructions =
    prompts.agentGatsbyInstructions + prompts.agentGatsbyStructuredResponseFormat;
  const agent = new Agent({
    name: 'CoachGatsby',
    instructions,
  });
  const result = await run(agent, message);
  const raw = result.finalOutput;
  if (raw === undefined) throw new Error('Agent returned no output');

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error('Agent did not return valid JSON. Raw output: ' + raw.slice(0, 200));
  }

  const parsedResponse = CoachStructuredResponseSchema.parse(parsed);
  return parsedResponse;
  // Later: await coachResponseData.insert(parsedResponse);
}

export default { createPersonalTrainerResponse, createStructuredCoachResponse };
