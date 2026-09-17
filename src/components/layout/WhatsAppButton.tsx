"use client";

import { FormEvent, useEffect, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const API_URL = "http://127.0.0.1:8000/tanya";
const teaserMessages = [
  "Punya pertanyaan? Tanya kami di sini.",
  "Mau tahu kelas yang paling cocok? Kami siap bantu.",
  "Cari info HSK atau jadwal belajar? Yuk, ngobrol.",
];

const initialMessage: ChatMessage = {
  id: 1,
  role: "assistant",
  content:
    "Halo! Saya asisten Universal ETC. Ada yang ingin kamu tanyakan tentang kelas Mandarin, HSK, atau pendaftaran?",
};

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(true);
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  useEffect(() => {
    const teaserTimer = window.setTimeout(() => setTeaserVisible(false), 6500);
    const rotationTimer = window.setInterval(() => {
      setTeaserIndex((index) => (index + 1) % teaserMessages.length);
      setTeaserVisible(true);
      window.setTimeout(() => setTeaserVisible(false), 6500);
    }, 12000);

    return () => {
      window.clearTimeout(teaserTimer);
      window.clearInterval(rotationTimer);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmedQuestion,
    };
    setMessages((current) => [...current, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const storedSessionId = window.sessionStorage.getItem("universal-chat-session");
      const sessionId = storedSessionId ?? `user_${crypto.randomUUID()}`;
      window.sessionStorage.setItem("universal-chat-session", sessionId);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pertanyaan: trimmedQuestion,
          session_id: sessionId,
        }),
      });

      if (!response.ok) throw new Error("Gagal menghubungi chatbot");
      const data: { jawaban?: string } = await response.json();

      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: data.jawaban || "Maaf, saya belum punya jawaban untuk pertanyaan itu.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "Maaf, chatbot sedang belum tersambung. Pastikan API sedang berjalan, lalu coba lagi ya.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <section
          aria-label="Chat dengan asisten Universal ETC"
          className="flex h-[min(590px,calc(100vh-8rem))] w-[min(370px,calc(100vw-2.5rem))] flex-col overflow-hidden border border-ink/10 bg-paper shadow-[0_18px_60px_rgba(27,42,51,0.2)]"
        >
          <header className="flex items-center justify-between bg-ink px-5 py-4 text-paper">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-seal text-paper">
                <Bot size={21} />
              </span>
              <div>
                <p className="font-display text-lg leading-none">Asisten Universal</p>
                <p className="mt-1 flex items-center gap-1.5 text-[11px] text-paper/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8bbf78]" />
                  Siap membantu pertanyaanmu
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup chat"
              className="flex h-8 w-8 items-center justify-center text-paper/70 transition-colors hover:text-paper"
            >
              <X size={19} />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-[#f4f5ef] px-4 py-5">
            <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.14em] text-charcoal/45">
              <Sparkles size={12} className="text-seal" />
              Percakapan baru
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[84%] px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-seal text-paper"
                      : "border border-ink/5 bg-paper text-charcoal/85 shadow-sm"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-paper px-4 py-3 shadow-sm" aria-label="Asisten sedang mengetik">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40 [animation-delay:-0.2s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40 [animation-delay:-0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-charcoal/40" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-ink/10 bg-paper p-3">
            <div className="flex items-end gap-2 border border-ink/15 bg-paper p-1.5 focus-within:border-seal">
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                rows={1}
                placeholder="Tulis pertanyaanmu..."
                aria-label="Pertanyaan untuk chatbot"
                className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-ink outline-none placeholder:text-charcoal/45"
              />
              <button
                type="submit"
                disabled={loading || !question.trim()}
                aria-label="Kirim pertanyaan"
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-seal text-paper transition-colors hover:bg-seal-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-charcoal/45">Tekan Enter untuk mengirim</p>
          </form>
        </section>
      )}

      {!open && teaserVisible && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="max-w-[260px] border border-ink/10 bg-paper px-4 py-3 text-left text-sm leading-snug text-charcoal shadow-[0_8px_30px_rgba(27,42,51,0.14)] transition-transform hover:-translate-y-0.5"
        >
          <span className="font-semibold text-ink">Butuh bantuan?</span>
          <span className="mt-0.5 block text-charcoal/70">{teaserMessages[teaserIndex]}</span>
        </button>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-seal text-paper shadow-[0_8px_24px_rgba(193,68,45,0.32)] transition-all hover:scale-105 hover:bg-seal-dark"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-seal animate-ping opacity-20" />}
        {open ? <X size={23} className="relative" /> : <MessageCircle size={25} className="relative" />}
      </button>
    </div>
  );
}
