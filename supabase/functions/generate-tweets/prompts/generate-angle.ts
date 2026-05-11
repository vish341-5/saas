// utils/prompts/anglePrompt.js

export default function anglePrompt({ product, icp, painPoints }) {
  return `
You are analyzing SaaS founders and their audience.

INPUT:
Product: ${product}
ICP: ${icp}
Pain Points: ${painPoints}

TASK:
Generate 6 sharp content angles.

Each angle must:
- Highlight a real frustration
- Include emotional trigger (frustration, anger, ambition)
- Be specific, not generic

Return ONLY a list of angles.
`;
}