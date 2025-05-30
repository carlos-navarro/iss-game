import React from 'react';

export const OpenSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src="/oss.png" alt="Open Source" className="w-full h-full object-contain" />
  </div>
);

export const ClosedSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src="/css.png" alt="Closed Source" className="w-full h-full object-contain" />
  </div>
);

export const InnerSourceLogo: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src="/iss.png" alt="Inner Source" className="w-full h-full object-contain" />
  </div>
);