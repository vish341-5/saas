export default function anglePrompt({
  product,
  icp,
  painPoints,
}) {
  return `
You deeply understand how SaaS founders think, complain, and post online.

PRODUCT:
${product}

ICP:
${icp}

PAIN POINTS:
${painPoints}

TASK:
Generate 6 highly specific Twitter content angles.

The angles should:
- expose painful truths
- challenge common beliefs
- feel emotionally real
- sound like founder observations
- include frustration, tension, ambition, fear, or ego
- feel naturally tweetable
- target the ICP directly

GOOD ANGLES:
- specific founder frustrations
- controversial observations
- emotional business pain
- hard truths
- hidden costs
- behavior patterns
- strong opinions

BAD ANGLES:
- generic startup advice
- motivational fluff
- productivity clichés
- broad statements
- corporate language
- vague inspiration

STYLE:
- sharp
- opinionated
- human
- emotionally charged
- realistic
- internet-native

IMPORTANT:
- No hashtags
- No numbering
- No explanations
- No introductions
- No bullet points

Return ONLY the raw angles.
`;
}