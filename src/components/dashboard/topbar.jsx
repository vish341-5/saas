import {Button} from "@/components/ui/button"
import  GeneratePostForm  from "./generatePostForm"

export default function topbar({setTweets}){
    return(
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 gap-4 md:gap-0">
      <div className="gap-6">
        <h1 className="text-xl md:text-2xl font-bold">Welcome Back,</h1>
        <p className="text-sm md:text-base">What would you like to create today?</p>
     </div>
     <div className="w-full md:w-auto">
        <GeneratePostForm setTweets={setTweets}/>
     </div>
    </div>
    )
}