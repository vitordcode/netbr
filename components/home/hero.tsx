import { Button } from "../ui/button";
import { Navbar } from "./navbar";

export function Hero() {
  return (
    <div className="w-full h-screen relative bg-heroBackground bg-center bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Conteúdo principal */}
      <Navbar />
      <div className="container mx-auto h-full relative w-full">
        <div className="flex flex-col max-w-[800px] justify-center items-start h-full z-10">
          <h1 className="font-semibold text-zinc-100 text-6xl tracking-tighter ">
          Acelere Sua Conexão com Fibra Óptica!
          </h1>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            enim ratione doloremque inventore totam, voluptate eius illo, animi
            culpa nesciunt repudiandae debitis, sunt quas quidem quam quis
            tenetur quod error.
          </p>
          <div className="flex items-center gap-4">
          <Button className="mt-4 font-bold">Ver planos</Button>
          <Button className="mt-4 text-zinc-100 font-bold" variant="ghost">Ver planos</Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
