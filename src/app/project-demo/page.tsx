'use client';

import React from 'react';
import Image from 'next/image';

const ProjectDemo = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center min-h-screen px-6">

      {/* Spacer to push images slightly down on all screens */}
      <div className="h-20 md:h-32 lg:h-40"></div>

      {/* Images stacked vertically */}
      <div className="flex flex-col items-center gap-12 w-full max-w-5xl">

        {/* Image 1 */}
        <div className="w-full flex justify-center">
          <Image
            src="/project-demo/output1.jpg"
            alt="Demo 1"
            width={1200}
            height={700}
            className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto rounded-2xl shadow-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full flex justify-center">
          <Image
            src="/project-demo/output2.jpg"
            alt="Demo 2"
            width={1200}
            height={700}
            className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto rounded-2xl shadow-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full flex justify-center">
          <Image
            src="/project-demo/output3.jpg"
            alt="Demo 3"
            width={1200}
            height={700}
            className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-auto rounded-2xl shadow-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Optional bottom spacer for extra breathing room */}
      <div className="h-20 md:h-32 lg:h-40"></div>
    </section>
  );
};

export default ProjectDemo;
