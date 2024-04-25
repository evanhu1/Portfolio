"use client"

import React from 'react';

const Page = () => {
  return (
    <div>
      <button className="fixed hover:bg-gray-200 top-8 left-6 bg-white border-none rounded-full w-12 h-12 shadow-lg flex items-center justify-center cursor-pointer" onClick={() => window.history.back()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
      <iframe className="w-full h-screen" src="https://yikuansun.github.io/deviantart-portfolio-embed?username=evanhu1" title="DeviantArt Portfolio"></iframe>
    </div>
  );
};

export default Page;

