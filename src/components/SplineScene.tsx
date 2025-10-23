'use client';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Spline (disable SSR)
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const SplineScene = () => {
  return (
    <div className="robot-wrapper relative w-full h-[80vh] overflow-hidden">
      <div className="robot-3d absolute top-10 right-0 w-full h-full">
        <Spline scene="https://prod.spline.design/aMrX-jwCwsBV03fi/scene.splinecode" />
      </div>
    </div>
  );
};

export default SplineScene;

