import Image from "next/image";
import Header from "@/components/Header";
import AIServicePane from "@/components/AIServicePane";
import QuestionInput from "@/components/QuestionInput";
import ClaudeService from "@/components/AIService/ClaudeService";
import GeminiService from "@/components/AIService/GeminiService";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl mx-auto">
        <div className="w-full flex gap-4 overflow-x-auto pb-2">
          <AIServicePane serviceName="ChatGPT" isActive={true} />
          <AIServicePane serviceName="Claude" isActive={false} />
          <AIServicePane serviceName="Gemini" isActive={false} />
        </div>
        <QuestionInput />
        <ClaudeService question="" isActive={false} />
        <GeminiService question="" isActive={false} />
      </main>
    </div>
  );
}
