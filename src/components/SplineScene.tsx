'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const SplineScene = () => {
  return (
    <div className="robot-3d relative h-[95%] overflow-hidden">
      <Spline
        scene="https://prod.spline.design/aMrX-jwCwsBV03fi/scene.splinecode"
      />
    </div>
  );
};

export default SplineScene;
