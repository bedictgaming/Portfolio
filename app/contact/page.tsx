import RetroBox from "@/components/RetroBox";

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center uppercase">
          Connect With Me
        </h3>
        
        <RetroBox className="bg-gray-50">
          <form className="space-y-6">
            <div>
              <label className="block font-bold mb-2 uppercase text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border-4 border-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 uppercase text-sm">Email Address</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full p-4 border-4 border-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 uppercase text-sm">Message</label>
              <textarea
                placeholder="What's on your mind?"
                rows={5}
                className="w-full p-4 border-4 border-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
              />
            </div>

            <button type="submit" className="w-full group">
              <RetroBox className="bg-gray-900 text-white group-hover:bg-black transition-all border-0 py-4 flex justify-center items-center">
                <span className="text-xl font-bold uppercase tracking-widest">
                  Send Message
                </span>
              </RetroBox>
            </button>
          </form>
        </RetroBox>

        <div className="mt-12 flex justify-center space-x-8">
          <a href="#" className="font-bold hover:underline">LinkedIn</a>
          <a href="#" className="font-bold hover:underline">GitHub</a>
          <a href="#" className="font-bold hover:underline">Twitter</a>
        </div>
      </div>
    </section>
  );
}