import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1>Welcome to grounded</h1>
     <p>This is the place where you practice dating and body awareness</p>
     <Button variant="link"><Link href="/start">Continue</Link></Button>
    </div>
  );
}
