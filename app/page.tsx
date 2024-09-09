import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
  <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px)] [background-size:16px_16px]">
    <Banner  />
    <Divider  />
    <HowItWorks  />
    <Divider  />
    <Pricing  />
    <Divider  />
    <Footer  />
  </main>
  );
}
