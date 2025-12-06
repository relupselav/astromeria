export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md px-10 py-5 flex items-center justify-between">

      {/* Logo */}
        <a href="#hero" className="text-2xl text-black font-bold">Astromeria</a>

      {/* Center links */}
      <div className="hidden md:flex gap-10 text-black">
        <a href="#services" className="iridescent-hover px-2 py-1 rounded-md">Soluciones</a>
        <a href="#about" className="iridescent-hover px-2 py-1 rounded-md">Sobre Nosotras</a>
      </div>

      {/* Button */}
      <a
        href="#contact"
        className="iridescent-hover border border-black rounded-full text-black"
      >
        Contáctanos
      </a>
    </nav>
  );
}
