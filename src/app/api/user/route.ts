import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// OpenAIのAPIキーを設定
const openai = new OpenAI({
  apiKey: process.env.API_KEY,  // 環境変数からAPIキーを取得
});
// export async function POST(req: NextRequest, res: NextResponse) {
//     console.log("called");
//     // const chatCompletion = await openai.chat.completions.create({
//     //   messages: [{ role: 'user',  content: 'Say this is a test' }],
//     //   model: 'gpt-4o-mini',
//     // });
//     // console.log("chatCompletion: ",chatCompletion )
//     // return {text: "hello"}
// }
export async function POST(req: NextRequest, res: NextResponse) {
    console.log("called");
    return res.json();
}


// export async function POST(request: Request) {
//     console.log("called");
//   try {
//     // リクエストのボディからデータを取得
//     const { sentence } = await request.json();
//     console.log("sentence: ",sentence   )

//     // OpenAI APIを呼び出し
//     const response = await openai.chat.completions.create({
//       model: 'gpt-4.0-mini',
//       messages: [
//         {
//           role: 'system',
//           content: '日本語で応答してください',
//         },
//         {
//           role: 'user',
//           content: sentence,
//         },
//       ],
//     });
//     console.log("response: ", response)

//     const chatResult = response.choices[0].message.content;

//     // レスポンスとしてチャット結果を返す
//     return NextResponse.json({ chat_results: chatResult });
//   } catch (error) {
//     return NextResponse.error();
//   }}
