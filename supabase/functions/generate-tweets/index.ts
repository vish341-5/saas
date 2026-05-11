import anglePrompt from "./prompts/generate-angle.ts";
import createPostPrompt from "./prompts/write-tweets.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  console.log("Function started");

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { product, icp, pain_points, tone } = await req.json();

    // Step 1: Generate angles using Groq
    const anglePromptText = anglePrompt({ product, icp, painPoints: pain_points });
    const angleResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("GROQ_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [{ role: "user", content: anglePromptText }],
        max_tokens: 500,
      }),
    });

    if (!angleResponse.ok) {
      throw new Error(`Groq API error for angles: ${angleResponse.statusText}`);
    }

    const angleData = await angleResponse.json();
    const angles = angleData.choices[0].message.content.trim();

    console.log("Generated angles:", angles);

    // Step 2: Generate tweets using angles and tone
    const tweetPromptText = createPostPrompt({ angles, tone });
    const tweetResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("GROQ_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [{ role: "user", content: tweetPromptText }],
        max_tokens: 1000,
        response_format: { type: "json_object" },
      }),
    });

    if (!tweetResponse.ok) {
      throw new Error(`Groq API error for tweets: ${tweetResponse.statusText}`);
    }

    const tweetData = await tweetResponse.json();
    const tweetsJson = tweetData.choices[0].message.content.trim();

    console.log("Raw tweets response:", tweetsJson);

    // Parse the JSON response
    const responseObj = JSON.parse(tweetsJson);
    const tweets = responseObj.tweets;

    return new Response(JSON.stringify({ tweets }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});