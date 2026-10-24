import OpenAI from "openai";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!client) {
    return res.status(503).json({ error: "AI is not configured. Add OPENAI_API_KEY in Vercel Environment Variables." });
  }

  const message = String(req.body?.message || "").trim();
  if (!message) return res.status(400).json({ error: "Please provide a message." });
  if (message.length > 6000) return res.status(400).json({ error: "Message is too long." });

  try {
    const history = Array.isArray(req.body?.history) ? req.body.history.slice(-8) : [];
    const input = history
      .filter(m => ["user", "assistant"].includes(m.role) && typeof m.text === "string")
      .map(m => ({ role: m.role, content: m.text.slice(0, 3000) }));
    input.push({ role: "user", content: message });

    const result = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: "You are Portfolia AI, a friendly expert portfolio designer and career storytelling assistant. Help users create excellent personal portfolio websites. Give practical, polished, beginner-friendly guidance. For bios and project descriptions, provide copy they can edit. Never claim to have published a website or changed account settings. Ask a concise follow-up if key information is missing.",
      input
    });

    res.status(200).json({ reply: result.output_text || "I couldn't create a response. Please try again." });
  } catch (error) {
    console.error("Assistant request failed:", error?.message || error);
    res.status(500).json({ error: "The AI assistant could not respond right now." });
  }
}
