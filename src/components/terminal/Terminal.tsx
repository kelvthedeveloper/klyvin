'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Terminal = () => {
  const [lines, setLines] = React.useState<string[]>([]);
  const [currentLine, setCurrentLine] = React.useState('');
  
  const fullLines = [
    'booting systems...',
    'initializing realtime architecture...',
    'deploying scalable experiences...',
    'connection established: KLYVIN_NODE_01',
    'status: ready for production'
  ];

  React.useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    
    const typeInterval = setInterval(() => {
      if (lineIdx < fullLines.length) {
        const targetLine = fullLines[lineIdx];
        
        if (charIdx < targetLine.length) {
          setCurrentLine(prev => prev + targetLine[charIdx]);
          charIdx++;
        } else {
          setLines(prev => [...prev, targetLine]);
          setCurrentLine('');
          charIdx = 0;
          lineIdx++;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/60 bg-[#0A0A0A] font-mono text-sm"
    >
      <div className="bg-[#1A1A1A] px-4 py-2 border-b border-border/20 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[#666] text-xs font-medium uppercase tracking-widest">System Monitor</div>
      </div>
      <div className="p-6 h-64 overflow-y-auto custom-scrollbar text-white/90">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 flex">
            <span className="text-klyvin-blue mr-3">$</span>
            <span className={i === lines.length - 1 && line.includes('ready') ? 'text-klyvin-orange font-bold' : ''}>
              {line}
            </span>
          </div>
        ))}
        {currentLine && (
          <div className="flex">
            <span className="text-klyvin-blue mr-3">$</span>
            <span>{currentLine}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-klyvin-blue ml-1 align-middle"
            />
          </div>
        )}
        {!currentLine && lines.length < fullLines.length && (
          <div className="flex">
            <span className="text-klyvin-blue mr-3">$</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-klyvin-blue ml-1 align-middle"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
