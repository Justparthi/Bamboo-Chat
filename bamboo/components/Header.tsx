"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import ChatPresence from "./ChatPresence";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const products = [
  { name: "Analytics", description: "Get a better understanding of your traffic", href: "#", icon: ChartPieIcon },
  { name: "Engagement", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon },
  { name: "Security", description: "Your customers’ data will be safe and secure", href: "#", icon: FingerPrintIcon },
  { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header({ user }: { user: User | undefined }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Bamboo Chat</span>
            
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-gray-200">
            Home
          </a>

          <a href="/#features" className="text-sm/6 font-semibold text-gray-200">  
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-200">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-200">
            Company
          </a>
          
        </PopoverGroup>

        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLoginWithGithub}>Login</Button>
          )}
          &nbsp;&nbsp;
          <div ><Button style={{background:"rgb(17, 24, 39)"}}><a href="/chat">Get Started</a></Button></div>
                

        </div>
        
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-gray-900/80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bamboo  Chat</span>
              <img
                alt=""
                src="https://i.ibb.co/dcry0h1/Screenshot-2024-11-13-223910.png"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <a href="/">Home</a>
                <a
                  href="#feature"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-700"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-700"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-200 hover:bg-gray-700"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
              {user ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={handleLoginWithGithub}>Login</Button>
          )}
          <br />
          &nbsp;&nbsp;
          <div ><Button style={{background:"rgb(17, 24, 39)"}}>Get Started</Button></div>
               
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
