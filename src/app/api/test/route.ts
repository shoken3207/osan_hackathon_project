import OpenAI from "openai";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const {
    brightness,
    saturation,
    indoorOutdoor,
    selfieOther,
    numberOfPeople,
  }: {
    brightness: number;
    saturation: number;
    indoorOutdoor: string;
    selfieOther: string;
    numberOfPeople: number;
  } = req.body;
  try {
    const text = `${brightness},${saturation},${indoorOutdoor},${selfieOther},${numberOfPeople}`;
    console.log("req: ", req.body);
    console.log("env: ", process.env.API_KEY);
    const client = new OpenAI({
      apiKey: process.env.API_KEY,
    });
    const chatCompletion = await client.chat.completions
      .create({
        messages: [
          {
            role: "system",
            content: `
                    1. ENFJ好む傾向: ENFJは外向的で他者とのつながりを重視するため、明るく、他撮りで、複数人が写っている画像を好む傾向が強いです。彩度も高い方が好まれます。
                    2. ENFP好む傾向: ENFPは冒険心が強く、屋外で撮られたカラフルな画像を好む傾向があります。自撮りでも他撮りでも、楽しさや自由さが感じられる写真が好まれるでしょう。
                    3. ENTJ好む傾向: ENTJは構造や秩序を重んじるため、シンプルで明確な構図の画像を好みます。明度が高いことも好まれ、他撮りで少人数が写っている写真に好感を持つ可能性が高いです。
                    4. ENTP好む傾向: ENTPはクリエイティブでアイデアに満ちているため、ユニークな視点や鮮やかな彩度がある画像を好む傾向があります。屋内外に関わらず、面白さや独自性が感じられる写真が良い印象を与えます。
                    5. ESFJ好む傾向: ESFJは他者との調和を重視するため、明るく親しみやすい雰囲気の画像を好みます。複数人が写っている、温かさが感じられる画像が特に好まれるでしょう。
                    6. ESFP好む傾向: ESFPは楽しさと冒険を追求するため、明るくカラフルで、楽しそうな画像を好みます。自撮りも好まれ、友達と一緒に撮影したような写真が特に良い印象を与えます。
                    7. ESTJ好む傾向: ESTJは実用的で効率的なものを好むため、シンプルで構造的な画像を好みます。他撮りで、少人数が写っている、明るい屋内の写真が特に好まれるでしょう。
                    8. ESTP好む傾向: ESTPは冒険心が強く、屋外で撮られたダイナミックな画像を好む傾向があります。自撮りでも他撮りでも、アクティブさが感じられる写真が好まれるでしょう。
                    9. INFJ好む傾向: INFJは感受性が高く、穏やかで落ち着いた画像を好みます。低彩度で柔らかい明度の画像、少人数で構成されるシンプルな写真が好まれるでしょう。
                    10. INFP好む傾向: INFPは創造的で、温かさや個性が感じられる画像を好みます。中程度の彩度と自然な明度がある写真、少人数または一人が写っている画像が特に好まれる傾向があります。
                    11. INTJ好む傾向: INTJは知的で戦略的なため、シンプルで構造的な画像を好みます。明るい明度が好まれ、他撮りで少人数が写っている写真に好感を持つことが多いでしょう。
                    12. INTP好む傾向: INTPは理論的で分析的なため、シンプルで中立的な画像を好みます。自然な明度と彩度、シンプルな構図で少人数が写っている写真が好まれます。
                    13. ISFJ好む傾向: ISFJは伝統や安定を重視するため、温かく、親しみやすい画像を好みます。低彩度で落ち着いた明度の写真、屋内で少人数が写っている写真が好まれる傾向があります。
                    14. ISFP好む傾向: ISFPは感受性が高く、温かさや個性が感じられる画像を好みます。自然な明度と彩度、少人数または一人が写っているシンプルな写真が特に好まれます。
                    15. ISTJ好む傾向: ISTJは実用的で、シンプルで明確な画像を好みます。明るい明度で、他撮りの少人数が写っている写真が特に好まれます。
                    16. ISTP好む傾向: ISTPは冷静で観察力が高いため、中立的な彩度と明度の画像を好みます。シンプルで構造的な画像が好まれ、特に屋内で少人数が写っている写真に好感を持つことが多いです。
                    このあとユーザーから下記のデータ形式で画像の明度、彩度、屋内か屋外か、自撮りか他撮りか、人数が送られてくるので、好まれたいmbtiをもとにアドバイスをしてください。
                    好まれたいmbtiはISTJとします。
                    ${brightness},${saturation},${indoorOutdoor},${selfieOther},${numberOfPeople}
                    `,
          },
          { role: "user", content: text },
        ],
        model: "gpt-4o-mini",
      })
      .catch((err) => console.log("err: ", err));
    console.log("chatCompletion: ", chatCompletion);
    // const responseMessage = chatCompletion.choices[0]?.message?.content;
    // console.log("Response message: ", responseMessage);

    return NextResponse.json({
      name: chatCompletion, // GETリクエストに対するレスポンス
    });
  } catch (error) {
    return NextResponse.error();
  }
}
