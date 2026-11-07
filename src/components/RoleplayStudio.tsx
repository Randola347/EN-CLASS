import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Volume2 } from 'lucide-react';
import type { RoleplayScenario } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

interface Props {
  scenarios: RoleplayScenario[];
  onCompleteTurn: (chunkUsed: string, errorFeedback?: { error: string; correction: string }) => void;
}

export const RoleplayStudio: React.FC<Props> = ({ scenarios, onCompleteTurn }) => {
  const [selectedScenario, setSelectedScenario] = useState<RoleplayScenario>(scenarios[0]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: scenarios[0].aiFirstMessage
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { speak } = useSpeech();

  const handleScenarioChange = (s: RoleplayScenario) => {
    setSelectedScenario(s);
    setMessages([
      {
        id: `init-${s.id}`,
        sender: 'ai',
        text: s.aiFirstMessage
      }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userText = userInput;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText
    };

    setMessages(prev => [...prev, newMsg]);
    setUserInput('');
    setIsTyping(true);

    // Rule: Do not interrupt mid-thought. Analyze at the end with gentle positive coaching.
    setTimeout(() => {
      let aiResponseText = "";
      let foundChunk = selectedScenario.recommendedChunks.find(c => 
        userText.toLowerCase().includes(c.toLowerCase().slice(0, 10))
      );

      // Check common Spanish-to-English translation errors
      let detectedError: { error: string; correction: string } | undefined;
      if (userText.toLowerCase().includes("i have") && /\d+/.test(userText)) {
        detectedError = {
          error: userText,
          correction: "Recuerda que para la edad o tiempo decimos 'I am... years old' en lugar de 'I have'."
        };
      } else if (userText.toLowerCase().includes("depend of")) {
        detectedError = {
          error: "depend of",
          correction: "En inglés decimos 'depend on', no 'depend of'."
        };
      }

      if (selectedScenario.id === 'rp-coffee-shop') {
        aiResponseText = "Got it! That will be $4.50. You can tap your card right here. Would you like a receipt with that?";
      } else {
        aiResponseText = "Thanks for the heads up! Let's touch base this afternoon to unblock you if needed.";
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: aiResponseText
        }
      ]);
      setIsTyping(false);

      onCompleteTurn(foundChunk || selectedScenario.recommendedChunks[0], detectedError);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Sidebar: Scenario selector & Recommended Chunks */}
      <div className="md:col-span-1 space-y-4">
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Elige Escenario
          </h3>
          <div className="space-y-2">
            {scenarios.map(sc => (
              <button
                key={sc.id}
                onClick={() => handleScenarioChange(sc)}
                className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition ${
                  selectedScenario.id === sc.id
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <div className="font-bold">{sc.title}</div>
                <div className="text-[11px] opacity-80 mt-0.5">{sc.partnerRole}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Golden Chunks to use in this scenario */}
        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Chunks Recomendados
          </div>
          <p className="text-[11px] text-slate-300 mb-3">
            Úsalos en tu respuesta para sonar fluido y natural:
          </p>
          <div className="space-y-1.5">
            {selectedScenario.recommendedChunks.map((chunk, idx) => (
              <button
                key={idx}
                onClick={() => setUserInput(prev => (prev ? `${prev} ${chunk} ` : `${chunk} `))}
                className="w-full text-left text-xs bg-slate-900/80 hover:bg-indigo-900/60 border border-indigo-500/20 px-2.5 py-1.5 rounded-lg text-indigo-200 transition"
              >
                + "{chunk}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="md:col-span-2 bg-slate-800/90 border border-slate-700 rounded-2xl flex flex-col h-[520px] shadow-xl overflow-hidden">
        {/* Chat header */}
        <div className="p-4 border-b border-slate-700/80 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600/30 border border-indigo-500 flex items-center justify-center text-indigo-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{selectedScenario.partnerRole}</h4>
              <p className="text-[11px] text-emerald-400 font-medium">● Online • Interactive AI Partner</p>
            </div>
          </div>
        </div>

        {/* Message feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-indigo-600/30 text-indigo-400 border border-indigo-500/30'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                    : 'bg-slate-900 border border-slate-700/80 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => speak(msg.text)}
                    className="ml-2 inline-block opacity-60 hover:opacity-100 transition align-middle"
                    title="Pronounce"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 italic py-1">
              <Bot className="w-4 h-4 animate-bounce text-indigo-400" />
              <span>{selectedScenario.partnerRole} is typing...</span>
            </div>
          )}
        </div>

        {/* Input box */}
        <form onSubmit={handleSendMessage} className="p-3 bg-slate-900/80 border-t border-slate-700/80 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your reply using functional chunks..."
            className="flex-1 bg-slate-800 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition"
          />
          <button
            type="submit"
            className="px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
