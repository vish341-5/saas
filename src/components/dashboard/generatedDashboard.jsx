import { Copy } from "lucide-react";

export default function GeneratedDashboard({tweets}){

    const parsedTweets = JSON.parse(tweets);

    return(
        <div className="flex flex-col gap-3 p-6">
            {parsedTweets.map((tweet,index)=>(
                <div key={index} className="whitespace-pre-line border-white border-2 rounded-2xl p-2"> <button onClick={()=> navigator.clipboard.writeText(tweet)} className="bg-white text-black rounded-sm p-1"> <Copy/></button><br/>{tweet.split(". ").join("\n\n")} </div>
            ))}
        </div>
    )
}