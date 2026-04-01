import RetroBox from "@/components/RetroBox";

export default function AboutPage() {
  return (
    <section className="py-12 space-y-16">
      {/* Intro Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-gray-500">
          About Me
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-8">
          MY JOURNEY AS A <span className="underline decoration-wavy decoration-4 underline-offset-8">DEVELOPER</span>
        </h3>
        <RetroBox className="bg-gray-50 max-w-4xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            I am **Benedict Mequiabas**, currently a 3rd-year Computer Science student. 
            My journey in tech has been a constant process of turning logic into 
            visual experiences. From my first "Hello World" to building OS simulators, 
            here is how I've grown.
          </p>
        </RetroBox>
      </div>

      {/* Grid for Journey and Skills */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
        
        {/* Section 1: My Journey */}
        <div className="space-y-6">
          <h3 className="text-3xl font-black uppercase tracking-tighter">My Journey</h3>
          
          {/* 3rd Year */}
          <RetroBox className="bg-white relative">
            <div className="absolute -top-3 -right-3 bg-gray-900 text-white text-xs px-2 py-1 font-bold">CURRENT</div>
            <p className="font-bold text-sm text-gray-500 underline uppercase">3rd Year</p>
            <h4 className="font-extrabold text-xl uppercase">The Specialist</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Deep-diving into Operating Systems and Advanced Web Frameworks. 
              Developed the **FCFS Scheduler Simulator** and started mastering **Next.js 15** to build scalable, multi-page applications.
            </p>
          </RetroBox>

          {/* 2nd Year */}
          <RetroBox className="bg-white">
            <p className="font-bold text-sm text-gray-500 underline uppercase">2nd Year</p>
            <h4 className="font-extrabold text-xl uppercase">The Architect</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Focusing on Data Structures and Algorithms. This is where I fell in love with 
              **React** and **Tailwind CSS**, moving away from basic sites to 
              dynamic, component-based UI design.
            </p>
          </RetroBox>

          {/* 1st Year */}
          <RetroBox className="bg-white">
            <p className="font-bold text-sm text-gray-500 underline uppercase">1st Year</p>
            <h4 className="font-extrabold text-xl uppercase">The Foundation</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Started with the fundamentals of C++ and basic HTML/CSS. 
              Learned the core logic of programming and how to solve problems 
              step-by-step.
            </p>
          </RetroBox>
        </div>

        {/* Section 2: Skills */}
        <div className="space-y-6">
          <h3 className="text-3xl font-black uppercase tracking-tighter">Technical Skills</h3>
          
          <RetroBox className="bg-white">
            <div className="w-full">
              <h4 className="font-bold border-b-2 border-gray-900 mb-4 inline-block uppercase">Frontend Mastery</h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="text-sm font-bold space-y-2 uppercase">
                  <li>• Next.js / React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
                <ul className="text-sm font-bold space-y-2 uppercase">
                  <li>• Git / GitHub</li>
                  <li>• UI/UX Design</li>
                  <li>• Figma</li>
                  <li>• Vercel / Deployment</li>
                </ul>
              </div>
            </div>
          </RetroBox>

          <RetroBox className="bg-gray-100 border-dashed">
            <h4 className="font-bold mb-2 uppercase">Current Focus</h4>
            <p className="text-sm text-gray-600 italic">
              "Refining UI animations and exploring Backend integration to create 
              even more immersive and functional web experiences."
            </p>
          </RetroBox>
        </div>
        
      </div>
    </section>
  );
}