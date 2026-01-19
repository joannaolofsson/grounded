// app/page.tsx
import { ChatContainer } from "@/components/ChatContainer";
import { Chatbubble } from "@/components/Chatbubble";

export default function Page() {
  return (
    <main className="h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="w-full max-w-lg h-[600px] bg-slate-900 rounded-xl shadow-xl overflow-hidden">
        <ChatContainer>
          <Chatbubble side="left">
            Hej! Hur kan jag hjälpa dig idag?
          </Chatbubble>

          <Chatbubble side="right">
            Jag vill bygga en pratbubbla i Next.js.
          </Chatbubble>

          <Chatbubble side="left">
            Perfekt! Låt oss göra det tillsammans.
          </Chatbubble>
        </ChatContainer>
      </div>
    </main>
  );
}
