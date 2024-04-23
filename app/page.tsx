import Title from "@/components/Title";
import Wordle from "@/components/Wordle";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <Title/>
      <Wordle/>
    </main>
  );
}