import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { MessageCircle, Heart, Repeat2, Bookmark } from "lucide-react"

export default function ExampleCards({p1,p2,p3,comments,likes,reposts,bookmarks}){
    return(
        <Card className="w-full">
  
  <CardContent className="flex flex-col gap-3">
    <p> {p1} </p>
    <p>{p2}</p>
    <p>{p3}</p>
    
  </CardContent>
  <CardFooter className="border-t border-0 flex justify-between md:justify-between">
    <div className="flex gap-1 text-xs md:text-sm">
      <MessageCircle className="w-4 h-4"/>
      {comments}
    </div>

    <div className="flex gap-1 text-xs md:text-sm">
      <Heart className="w-4 h-4"/>
      {likes}
    </div>

    <div className="flex gap-1 text-xs md:text-sm">
      <Repeat2 className="w-4 h-4"/>
      {reposts}
    </div>

    <div className="flex gap-1 text-xs md:text-sm">
      <Bookmark className="w-4 h-4"/>
      {bookmarks}
    </div>
    
  </CardFooter>
</Card>
    )
}