export const runtime = "edge";

export async function POST(req: Request) {
    const { prompt } = await req.json();

    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        }
    );
    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't respond.";

    return new Response(JSON.stringify({ text: reply }), {
        headers: { "Content-Type": "application/json" },
    });
}
