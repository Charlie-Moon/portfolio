const dataProject = [
  {
    num: "1200+",
    text: "Finished Projects",
  },
  {
    num: "360+",
    text: "Happy Customer",
  },
  {
    num: "14k",
    text: "Global Customer",
  },
];
export default function Success() {
  return (
    <section className="site-project py-8 md:py-14">
      <h1 className="mb-6 text-center text-2xl font-medium leading-10 md:text-3xl">
        Completed 1200+ <br className="md:hidden block" /> Projects{" "}
        <br className="hidden md:block" /> Successfully
      </h1>
      <div className="project grid gap-x-6 gap-y-5 md:grid-cols-3">
        {dataProject &&
          dataProject.map((item, index) => (
            <article
              className="rounded-xl bg-yellow/[.16] px-6 py-6 pb-10 text-center shadow-lg"
              key={`project-index-${index}`}
            >
              <h1 className="mt-4 text-3xl font-medium text-yellow">
                {item.num}
              </h1>
              <h1 className="mt-3 text-xl font-medium">{item.text}</h1>
            </article>
          ))}
      </div>
    </section>
  );
}
