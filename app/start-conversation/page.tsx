"use client";

import { StartConversationVisual } from "@/components/start-conversation/StartConversationVisual";
import { StartConversationForm } from "@/components/start-conversation/StartConversationForm";
import { Navbar } from "@/components/Navbar";

export default function StartConversationPage() {
  return (
    <main className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#050810]" />
      
      {/* Atmospheric fog layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e]/20 via-transparent to-[#0f1419]/30" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0f1419]/20 via-transparent to-[#1a2332]/15" />
      </div>
      
      {/* Subtle volumetric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#4F7DF3]/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[100px] opacity-50" />
      </div>
      
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>
      
      {/* Main split layout */}
      <div className="relative w-full h-full flex flex-col lg:flex-row">
        {/* Left Section - Visual Area (55%) */}
        <div className="relative w-full lg:w-[55%] h-[50vh] lg:h-full">
          <StartConversationVisual />
        </div>
        
        {/* Horizontal separator on mobile, vertical on desktop */}
        <div className="lg:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-[#4F7DF3]/30 to-transparent my-2" />
        
        {/* Vertical Glowing Separator Beam - Desktop only */}
        <div className="hidden lg:block absolute left-[55%] top-0 bottom-0 w-[2px] z-30 pointer-events-none">
          {/* Main beam */}
          <div 
            className="absolute inset-y-0 w-full"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(79, 125, 243, 0.3) 10%, rgba(34, 211, 238, 0.25) 30%, rgba(79, 125, 243, 0.3) 50%, rgba(34, 211, 238, 0.25) 70%, rgba(79, 125, 243, 0.3) 90%, transparent 100%)",
              filter: "blur(1px)",
              boxShadow: "0 0 20px rgba(79, 125, 243, 0.4), 0 0 40px rgba(34, 211, 238, 0.3)",
            }}
          />
          
          {/* Glow expansion */}
          <div 
            className="absolute inset-y-0 w-[4px] -left-[1px]"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(79, 125, 243, 0.15) 10%, rgba(34, 211, 238, 0.12) 30%, rgba(79, 125, 243, 0.15) 50%, rgba(34, 211, 238, 0.12) 70%, rgba(79, 125, 243, 0.15) 90%, transparent 100%)",
              filter: "blur(3px)",
            }}
          />
          
          {/* Outer glow */}
          <div 
            className="absolute inset-y-0 w-[8px] -left-[3px]"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(79, 125, 243, 0.08) 10%, rgba(34, 211, 238, 0.06) 30%, rgba(79, 125, 243, 0.08) 50%, rgba(34, 211, 238, 0.06) 70%, rgba(79, 125, 243, 0.08) 90%, transparent 100%)",
              filter: "blur(6px)",
            }}
          />
          
          {/* Animated pulse effect */}
          <div 
            className="absolute inset-y-0 w-[2px] animate-pulse"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(79, 125, 243, 0.2) 50%, transparent 100%)",
              filter: "blur(2px)",
              animation: "pulse 3s ease-in-out infinite",
            }}
          />
        </div>
        
        {/* Right Section - Form Area (45%) */}
        <div className="relative w-full lg:w-[45%] h-[50vh] lg:h-full bg-black/20 backdrop-blur-sm">
          <StartConversationForm />
        </div>
      </div>
      
      {/* Additional atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(79, 125, 243, ${0.2 + Math.random() * 0.3}) 0%, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(79, 125, 243, 0.3)`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </main>
  );
}
