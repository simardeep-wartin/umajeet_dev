"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setVisible(false);
      return;
    }
    const hide = () => setVisible(false);
    window.addEventListener("load", hide);
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-pulse">
      {/* Navbar */}
      <div className="h-[88px] border-b border-gray-100 flex items-center px-8 gap-8 shrink-0">
        <div className="h-10 w-36 rounded-lg bg-gray-200" />
        <div className="flex-1" />
        <div className="hidden md:flex gap-6">
          {[80, 64, 72, 88].map((w, i) => (
            <div key={i} className="h-4 rounded bg-gray-200" style={{ width: w }} />
          ))}
        </div>
        <div className="hidden md:block h-10 w-36 rounded-2xl bg-gray-200" />
      </div>

      {/* Hero */}
      <div className="h-[700px] bg-gray-300 shrink-0 flex items-end px-16 pb-16">
        <div className="space-y-4 max-w-[600px]">
          <div className="h-14 w-[480px] rounded-lg bg-gray-400" />
          <div className="h-14 w-[360px] rounded-lg bg-gray-400" />
          <div className="h-8 w-[280px] rounded-lg bg-gray-400 mt-4" />
        </div>
      </div>

      {/* Reputation strip */}
      <div className="h-24 bg-gray-100 shrink-0" />

      {/* About */}
      <div className="py-16 px-8 bg-gray-50 shrink-0">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10">
          <div className="h-[328px] rounded-3xl bg-gray-200" />
          <div className="space-y-4 pt-4">
            <div className="h-10 w-48 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-4/6 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 px-8 bg-white shrink-0">
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="h-10 w-48 rounded bg-gray-200 mx-auto mb-8" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[368px] rounded-[25px] bg-gray-200" />
            <div className="h-[368px] rounded-[25px] bg-gray-200" />
          </div>
          <div className="h-[200px] rounded-[25px] bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
