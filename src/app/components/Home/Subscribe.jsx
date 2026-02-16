export default function Subscribe() {
  return (
    <section className="w-full bg-[#f3f3f6] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Stay Inspired
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-sm md:text-base text-gray-500">
          Receive weekly writing prompts, featured stories, and community
          highlights directly in your inbox.
        </p>

        {/* Input + Button */}
        <div className="mt-6 flex flex-col text-[#BBBBBB] sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-96 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8A63F7] focus:border-transparent transition"
          />

          <button className="px-6 py-3 rounded-md bg-[#8A63F7] text-white font-medium hover:opacity-90 transition">
            Subscribe
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-gray-400">
          By subscribing, you agree to our{" "}
          <span className="underline cursor-pointer">Privacy Policy</span> and
          to receive our emails.
        </p>
      </div>
    </section>
  );
}
