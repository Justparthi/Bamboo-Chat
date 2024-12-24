"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <nav className="flex space-x-4">
        <Link
          href="#"
          className={cn(
            "text-lg font-medium",
            active === "Services" && "text-blue-500"
          )}
          onClick={() => setActive("Services")}
        >
          Services
        </Link>

        <Link
          href="#"
          className={cn(
            "text-lg font-medium",
            active === "Products" && "text-blue-500"
          )}
          onClick={() => setActive("Products")}
        >
          Products
        </Link>

        <Link
          href="#"
          className={cn(
            "text-lg font-medium",
            active === "Pricing" && "text-blue-500"
          )}
          onClick={() => setActive("Pricing")}
        >
          Pricing
        </Link>

        <Link
          href="#"
          className={cn(
            "text-lg font-medium",
            active === "Panda" && "text-blue-500"
          )}
          onClick={() => setActive("Panda")}
        >
          Panda
        </Link>
      </nav>
    </div>
  );
}
