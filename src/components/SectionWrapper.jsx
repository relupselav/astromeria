const SectionWrapper = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-center"
    >
      {children}
    </section>
  );
}


export default SectionWrapper;