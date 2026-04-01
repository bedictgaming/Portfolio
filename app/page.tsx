import Link from 'next/link';
import Image from 'next/image';
import RetroBox from '@/components/RetroBox';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-10 mb-12 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Side Text */}
        <div className="lg:w-3/5 mb-10 lg:mb-0">
          <h1 className="text-7xl md:text-9xl font-extrabold leading-none mb-2">
            Hello.
          </h1>
          <h2 className="text-7xl md:text-9xl font-extrabold leading-none mb-6">
            I'm <br /> BENEDICT.
          </h2>
          
          <div className="text-lg text-gray-700 mb-8 max-w-xl border-t border-gray-300 py-4">
            <p> 
              I'm Benedict Mequiabas, a Web Developer passionate about creating innovative 
              and visually engaging digital experiences.
            </p>
          </div>
          
          <Link href="/projects" className="inline-block">
            <RetroBox className="bg-gray-900 text-white hover:bg-black transition-all border-0 py-4 px-6">
              <span className="font-bold tracking-widest text-sm">
                CHECK OUT MY PROJECTS
              </span>
            </RetroBox>
          </Link>
        </div>

        {/* Right Side: Image Section */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end w-full mb-10 lg:mb-0">
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
            <RetroBox className="w-full h-full bg-white relative overflow-hidden p-2">
              <div className="relative w-full h-full border-2 border-gray-900 overflow-hidden bg-gray-100">
                <Image 
                  src="/project.jpg" 
                  alt="Benedict Mequiabas"
                  fill
                  className="object-cover hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </RetroBox>
            
            <div className="absolute -bottom-2 -left-2 bg-white border-4 border-gray-900 px-3 py-1 font-bold uppercase text-xs">
              BENEDICT MEQUIABAS
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Header */}
      <div className="mt-20">
        <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">Quick Links</h3>
        {/* Updated grid-cols to 5 to accommodate the Blog link */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['Home', 'Projects', 'About', 'Contact', 'Blog'].map((item) => (
            <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
              <RetroBox className="bg-white hover:bg-gray-50 cursor-pointer p-4 flex justify-between items-center group transition-all">
                <span className="font-bold text-sm uppercase">{item}</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
              </RetroBox>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}