import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {Button} from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"
import { Select } from "../ui/select"

export default function GeneratePostForm({setTweets}){

    const handleSubmit = async(e) =>{
        e.preventDefault()

    const response= await fetch("https://whqkgfxwijcjecxgkpan.supabase.co/functions/v1/generate-tweets",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: document.getElementById("product").value,
          icp: document.getElementById("icp").value,
          pain_points: document.getElementById("pain-points").value,
          tone: document.getElementById("tone").value
        })
      }
    );

    const dummyTweets = await response.json();

    setTweets(dummyTweets.tweets)
    }
    return(
    <Dialog className= "bg-black text-white">
  <DialogTrigger className="bg-white text-black rounded-md p-1">+ Generate Posts</DialogTrigger>
  <DialogContent className="bg-black text-white flex flex-col gap-4">
    <DialogHeader>
      <DialogTitle>Create Tweet Batch</DialogTitle>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
            <Label>Product</Label>
            <Textarea className="bg-white text-black" id="product"/>
        </div>

        <div className="flex flex-col gap-3">
            <Label>Icp</Label>
            <Textarea className="bg-white text-black" id="icp"/>
        </div>

        <div className="flex flex-col gap-3">
            <Label>Pain Points</Label>
            <Textarea className="bg-white text-black" id="pain-points"/>
        </div>

        <div className="flex flex-col gap-3">
            <Label>Tone</Label>
            <Input className="bg-white text-black" id="tone"/>
        </div>

        <Button type="submit" onSubmit={handleSubmit} className="bg-white text-black">
            Generate Tweets
        </Button>

      </form>
    </DialogHeader>
  </DialogContent>
</Dialog>)
}