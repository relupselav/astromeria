import SectionWrapper from "../components/SectionWrapper";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <h2 className="text-3xl md:text-5xl font-medium mb-4 text-black">
        Soluciones
      </h2>

      <p className="max-w-2xl text-lg opacity-80 mb-10 text-black">
     Impulsamos tu marca con diseño, contenido y herramientas digitales que elevan tu presencia y optimizan tu crecimiento.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-black">
        <div className="p-6 rounded-xl border border-black/10 bg-white">
          <h3 className="text-xl font-semibold mb-2">Branding</h3>
          <p className="text-sm opacity-80">
            Identidades auténticas y memorables para marcas que quieren destacar.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/10 bg-white">
          <h3 className="text-xl font-semibold mb-2">Diseño & Visual</h3>
          <p className="text-sm opacity-80">
            Sistemas visuales, piezas gráficas y diseño inteligente para tu
            comunicación.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/10 bg-white">
          <h3 className="text-xl font-semibold mb-2">Contenido Digital</h3>
          <p className="text-sm opacity-80">
            Contenido estratégico para redes y campañas, pensado para conectar y convertir.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
