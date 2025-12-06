import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-5xl font-medium mb-6 text-black">Contáctanos</h2>

      <p className="max-w-xl text-lg opacity-80 mb-8 text-black">
        Conversemos sobre tu marca o proyecto. Nos encantará trabajar contigo.
      </p>

      <a
        href="mailto:hola@astromeria.com"
        className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition text-black inline-block"
      >
        Enviar correo
      </a>
    </SectionWrapper>
  );
}
