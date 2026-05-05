const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend congue massa suscipit fermentum. Fusce in tellus at urna hendrerit pharetra nec ut ex.",
    author: "Lorem ipsum",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend congue massa suscipit fermentum. Fusce in tellus at urna hendrerit pharetra nec ut ex.",
    author: "Lorem ipsum",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend congue massa suscipit fermentum. Fusce in tellus at urna hendrerit pharetra nec ut ex.",
    author: "Lorem ipsum",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light-bg py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Was die Leute über uns sagen
          </h2>
          <hr className="border-gray-400 max-w-lg mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-light-bg border border-testimonial-blue p-6 flex flex-col gap-4 text-center"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-gray-600 text-sm font-medium">
                – {t.author} –
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
