'use client';
import React, { useState, useEffect } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for when the page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="relative">
        {/* Logo */}
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">M</span>
        </div>
        
        {/* Loading animation */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.2s]" />
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.4s]" />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          {/* <span className="text-sm text-gray-600">Loading MagnusForum...</span> */}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;