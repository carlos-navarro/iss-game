import React from 'react';

// Get the base URL from Vite environment
const base = import.meta.env.BASE_URL;

export const OpenSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={`${base}oss.png`} alt="Open Source" className="w-full h-full object-contain" />
  </div>
);

export const ClosedSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={`${base}css.png`} alt="Closed Source" className="w-full h-full object-contain" />
  </div>
);

export const InnerSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={`${base}iss.png`} alt="Inner Source" className="w-full h-full object-contain" />
  </div>
);