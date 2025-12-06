import SectionWrapper from "../components/SectionWrapper";


export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <h1 className="text-[3rem] md:text-[4.5rem] font-light leading-tight text-black">
        Un nuevo comienzo<br />lleno de posibilidades
      </h1>

      <p className="max-w-2xl mt-6 text-lg md:text-xl text-black/70">
        Creamos marcas y contenido digital con diseño inteligente impulsado por IA,
        para que tu emprendimiento se vea profesional y pueda crecer con solidez.
      </p>

      <a
        href="#services"
        className="mt-10 inline-block px-8 py-3 border border-black rounded-full text-black
                   hover:bg-black hover:text-white transition-all duration-300"
      >
        Comienza hoy
      </a>
    </SectionWrapper>
  );
}
