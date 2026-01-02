"use client";

import Navbar from "@/components/Navbar";


export default function ResumePage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white dark:bg-black">
      <iframe
        src="https://drive.google.com/file/d/1lzvuzPeKiuWoGE-sDk0LHxyZZK4o9bH8/preview"
        className="w-full h-screen border-none"
        allow="autoplay"
      />
    </div>
    </>
  );
}