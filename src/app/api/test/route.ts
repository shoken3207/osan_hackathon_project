import OpenAI from 'openai';
import { NextResponse } from "next/server";

export async function POST() {
    try {
        console.log(process.env.API_KEY)
        const client = new OpenAI({
            apiKey:process.env.API_KEY, // This is the default and can be omitted
        });
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-4o-mini',
        }).catch(err => console.log("err: ", err));
        console.log("chatCompletion: ",chatCompletion )
        // const prompt = "こんにちは！";
        // const response = await fetch("https://api.openai.com/v1/chat/completions", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${process.env.API_KEY}`,
        //     },
        //     body: JSON.stringify({
        //         model: "gpt-4o-mini",
        //         max_tokens: 200,
        //         top_p: 1,
        //         temperature: 1.3,
        //         messages: prompt
        //     }),
        // });
        // const data = await response.json();
        // console.log("data: ", data)
        // return data["choices"][0]["message"].content;
      return NextResponse.json({  
        name: 'Mike',  // GETリクエストに対するレスポンス
      }); 
    } catch (error) {
      return NextResponse.error();
    }
  }