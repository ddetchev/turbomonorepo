import Image from "next/image";
import { Card } from "@repo/ui/card";
import Talk from "@repo/ui/talk";
import Talks from "../ui/talks";





export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Talks />
      <p className="text-red-500">Teest</p>
      
    </main>
  );
}