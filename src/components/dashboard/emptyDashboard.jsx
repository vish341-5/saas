import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"

import FeaturesCarousles from "./featuresCarousles"
import ExampleCards from "./exampleCards"
import  GeneratePostForm  from "./generatePostForm"


import { Target, Zap, AudioLines, ChartNoAxesCombined  } from "lucide-react"

import React,{useState} from "react"

export default function EmptyDashboards({setTweets}){

    const featureData=[
    {
      icon:  Target,
      title: "Audience-Focused",
      description: "Tailor posts to your icp and speak their language",
    },

    {
      icon:  AudioLines,
      title: "Your Tone, Your Voice",
      description: "Match your unique tone from your X profile",
    },

    {
      icon:  Zap,
      title: "Viral Formats",
      description: "Proven post formats that gets engagement",
    },

    {
      icon:  ChartNoAxesCombined,
      title: "Save & Reuse",
      description: "Save your best posts and reuse winning ideas",
    }
  ]

  const exampleData=[
    {
        p1: "Most Saas founders focus on features." ,
        p2: "But users don't buy features.",
        p3: "But users don't buy features." ,
        comments: "23" ,
        likes: "54",
        resposts: "6" ,
        bookmarks: "2" ,
  },

  {
        p1: "One landing page change increased our sign ups by 37%." ,
        p2: "It wasn't the design.",
        p3: "it was the message." ,
        comments: "36" ,
        likes: "45",
        resposts: "4" ,
        bookmarks: "4" ,
  },

  {
        p1: "Saas growth isn't about hacks." ,
        p2: "It's about solving the right problem for thee right people.",
        p3: "Everything else is noise." ,
        comments: "34" ,
        likes: "67",
        resposts: "8" ,
        bookmarks: "2" ,
  }
]
    return(
        <Card className="bg-[#0A0A0A] ring-0 border border-[#1F1F1F] dark:border-[#1F1F1F] mx-2 md:mx-0">
            <CardHeader className="flex flex-col items-center gap-6 md:gap-8 mt-3 px-4 md:px-6">
                <Zap className="w-8 h-8 md:w-10 md:h-10" />
                <CardTitle className="text-xl md:text-2xl text-center">Create viral-worthy posts in seconds</CardTitle>
                 <CardDescription className="text-center text-sm md:text-base">Our AI analyzes your product, audience and tone to write engaging X posts that gets attention and growth. </CardDescription>
                 <div className="w-full max-w-md flex justify-center">
                    <GeneratePostForm setTweets={setTweets}/>
                 </div>
            </CardHeader>

            <CardContent className="flex flex-wrap items-center justify-center gap-3 md:gap-5 px-4 md:px-6">
             {featureData.map((_,index)=>(
                <FeaturesCarousles className="" icon={_.icon} title={_.title} description={_.description}/>
             ))}
            </CardContent>

            <CardFooter className="border-t border-[#1F1F1F] flex flex-col gap-3 px-4 md:px-6">
                <h1 className="text-lg text-center md:text-left"> Example posts you can create</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                   {exampleData.map((_,index)=>(
                    <ExampleCards key={index} p1={_.p1} p2={_.p2} p3={_.p3} comments={_.comments} likes={_.likes} reposts={_.resposts} bookmarks={_.bookmarks}/>
                   ))}
                </div>
            </CardFooter>
        </Card>
    )
}