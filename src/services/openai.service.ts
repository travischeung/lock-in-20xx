import { Agent, run } from "@openai/agents";
import agentGatsbyInstructions from '../util/const'

/**
 * Creates and returns an OpenAI response for the given input.
 * @param {string} input - The prompt input for the AI.
 */
async function createPersonalTrainerResponse(input: string) {
  const verificationAgent = new Agent({
    name: 'CoachGatsby',
    instructions: agentGatsbyInstructions,
  });
  try {
    const result = await run(verificationAgent, input);
    console.log(result.finalOutput);
  } catch (error) {
    console.error("Agent execution failed:", error);
    throw error;
  }
}

export { createPersonalTrainerResponse };
