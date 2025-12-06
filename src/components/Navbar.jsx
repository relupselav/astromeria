export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md px-10 py-5 flex items-center justify-between">

      {/* Logo */}
        <a href="#hero" className="text-2xl text-black font-bold">Astromeria</a>

      {/* Center links */}
      <div className="hidden md:flex gap-10 text-black">
        <a href="#services" className="iridescent-underline px-2 py-1 rounded-md">Soluciones</a>
        <a href="#about" className="iridescent-underline px-2 py-1 rounded-md">Sobre Nosotras</a>
      </div>

      {/* Button */}
      <a
        href="#contact"
        className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white text-black transition"
      >
        Contáctanos
      </a>
    </nav>
  );
}
