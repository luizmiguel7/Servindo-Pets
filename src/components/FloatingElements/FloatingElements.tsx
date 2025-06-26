"use client";
import { Heart, PawPrint } from "lucide-react";

export const FloatingElements = () => (
  <>
    <div className="absolute top-20 left-10 animate-bounce">
      <PawPrint className="h-8 w-8 text-purple-300" />
    </div>
    <div className="absolute top-40 right-20 animate-bounce delay-200">
      <Heart className="h-6 w-6 text-pink-300" />
    </div>
    <div className="absolute bottom-20 left-1/4 animate-bounce delay-500">
      <PawPrint className="h-6 w-6 text-blue-300" />
    </div>
  </>
);
