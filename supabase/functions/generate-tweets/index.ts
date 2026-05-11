import anglePrompt from "./prompts/generate-angle.ts"
import createPostPrompt from "./prompts/write-tweets.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods":
    "POST, OPTIONS",
};

Deno.serve(async(req)=>{

  if (req.method === "OPTIONS") {
  return new Response("ok", {
    headers: corsHeaders,
  });
}

  const body = await req.json();
  const {product, icp, painPoints, tone}=body

  const anglePromptText = anglePrompt({product,icp,painPoints});

  const angleResponse = await fetch("https://api.groq.com/openai/v1/chat/completions",{
    method:"POST",
    headers:{
      ...corsHeaders,
      "Content-Type":"application/json",
      Authorization:`Bearer ${Deno.env.get("GROQ_API_KEY")}`,
    },
    body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages:[
        {
          role:"user",
          content: anglePromptText,
        },
        ],
        temperature: 0.8,
      })
  }
  );

  const angleData = await angleResponse.json()

  const angles = angleData.choices[0].message.content

  const generateTweets = createPostPrompt({angles,tone})

  const tweetsResponse = await fetch("https://api.groq.com/openai/v1/chat/completions",{
    method:"POST",
    headers:{
      ...corsHeaders,
      "Content-Type":"application/json",
      Authorization:`Bearer ${Deno.env.get("GROQ_API_KEY")}`,
    },
    body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages:[
        {
          role:"user",
          content: generateTweets,
        },
        ],
        temperature: 0.8,
      })
  }
  );

  const tweetData = await tweetsResponse.json();

  const tweets = tweetData.choices[0].message.content

  return new Response(JSON.stringify({tweets}),
    {
      headers: {
        ...corsHeaders,
        "Content-Type":"application/json",
      }
    }
  )
})