import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import * as React from "react"

import { Target, Bookmark, Zap, ChartNoAxesCombined, AudioLines, PenTool, CalendarClock } from "lucide-react"

export function FeaturesCarousles(){

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
      icon:  PenTool,
      title: "Viral Formats",
      description: "Proven post formats that gets engagement",
    },

    {
      icon:  ChartNoAxesCombined,
      title: "Save & Reuse",
      description: "Save your best posts and reuse winning ideas",
    },

    {
      icon:  Zap,
      title: "Fast Workflow",
      description: "Go from idea to 10 posts in less than a minute",
    },

    {
      icon:  CalendarClock,
      title: "Auto Posting",
      description: "schedule and auto-post (coming soon)",
    },
  ]
    return(
        <Carousel className="w-full">
  <CarouselContent className="flex gap-2">
    {featureData.map((feature, index) => (
      <CarouselItem key={index} className="bg-[#0A0A0A] p-3 basis-1/2 md:basis-1/3 lg:basis-1/4 border-2 rounded-2xl flex flex-col items-center gap-2 min-h-[200px] md:min-h-[220px] max-h-[260px]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-2">
          <feature.icon className="w-6 h-6 md:w-8 md:h-8" />
          <h3 className="text-sm md:text-base text-center">{feature.title}</h3>
          <p className="text-xs md:text-sm text-center">{feature.description}</p>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="hidden md:flex" />
  <CarouselNext className="hidden md:flex" />
</Carousel>
    )
}

export function CarouselSpacing() {

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
      icon:  PenTool,
      title: "Viral Formats",
      description: "Proven post formats that gets engagement",
    },

    {
      icon:  ChartNoAxesCombined,
      title: "Save & Reuse",
      description: "Save your best posts and reuse winning ideas",
    },

    {
      icon:  Zap,
      title: "Fast Workflow",
      description: "Go from idea to 10 posts in less than a minute",
    },

    {
      icon:  CalendarClock,
      title: "Auto Posting",
      description: "schedule and auto-post (coming soon)",
    },
  ]

  return (
    <Carousel className="w-full max-w-none sm:max-w-xs md:max-w-sm">
      <CarouselContent className="-ml-1">
        {featureData.map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3 flex justify-center">
            <div className="p-1 w-full">
              <Card className="w-full aspect-square">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-2xl font-semibold">{_.title}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default function featuresCards({icon : Icon, title, description}){
  return(
    <Card className="w-[250px]">
  <CardHeader className="flex flex-col justify-center items-center">
    <Icon className="bg-white text-black rounded-2xl w-7"/>
    <CardTitle>{title}</CardTitle>
    <CardDescription className="text-center">{description}</CardDescription>
  </CardHeader>
</Card>
  )
}