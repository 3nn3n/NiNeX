import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Chat from "@/components/chat";
import Use1 from "@/components/use1";
import Use2 from "@/components/use2";
import Use3 from "@/components/use3";
import Getstartedcard from "@/components/getstartedcard";
import Pricing from "@/components/pricing";
import Roadmap from "@/components/roadmap";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="relative">
      {/* Left vertical line */}
      <div className="fixed left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent m-1"></div>
      
      {/* Right vertical line */}
      <div className="fixed right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent m-1"></div>
      
    <section>
      <div className="fixed z-10 top-0 left-0 w-full">
        <Header />
      </div>
    </section>
    <section>
      <div className="overflow-hidden
      px-4
      sm:px-6
      mt-25
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center
     
      ">
        <Hero />
      </div>
    </section>
      <div>
        <h1 className="text-washed-purple-300 text-7xl font-bold text-center m-10">No cameras<br/> No crews<br/> No complexity</h1>
      </div>
      <div className="grid grid-cols-2 gap-1 m-20 w-2/3">
      <Features children="Text-to-Video Generation" child="Just enter your text and let AI handle visuals, scenes, and flow automatically." />
      <Features children="Faceless Video Creation" child="
Perfect for creators who want professional content without being on screen." isSecondColumn={true} />
      <Features children="One-Click Short-Form Videos" child=" Generate vertical, scroll-stopping videos ready to post instantly." />
      <Features children="Smart Scene & Visual Selection" child="Automatically matches scenes, transitions, & layouts to your script." isSecondColumn={true} />
      <Features children="Fast Rendering & Export" child=" No timelines, no complex tools—just instant, high-quality outputs." />
      <Features children="Cloud-Based Web Studio" child="Your entire video studio runs directly in the browser."/>
      </div>
      <Chat />
      <Use1 />
      <div style={{display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'stretch', justifyContent: 'center', height: 'auto', margin: '80px'}}>
        <div style={{}}>
          <Use2 />
        </div>
        <div >
          <Use3 />
        </div>
      </div>
      <Getstartedcard />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '40px', color: 'black', gap: '20px', margin: '40px', justifyContent: 'center'}}>
        <Pricing heading="Basic Plan" para1="Ideal for individuals" price="16,999" button="Get Started" pt1="An AI chatbot that can understand your queries" pt2="Personalized recommendations based on your preferences" pt3="Ability to explore the app and its features without any cost" headingColor="#FCD34D"/>
        <Pricing  heading="Pro Plan" para1="Best for professionals" price="25,999" button="Get Started" pt1="An advanced AI chatbot that can understand complex queries" pt2="An analytics dashboard to track your conversations" pt3="Priority support to solve issues quickly" style={{height: '700px'}} headingColor="#60A5FA" />
        <Pricing heading="Enterprise Plan" para1="Suitable for businesses" price="39,999" button="Get Started" pt1="An AI chatbot that can understand your queries" pt2="Personalized recommendations based on your preferences" pt3="Ability to explore the app and its features without any cost" headingColor="#FB923C" />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', color: 'white'}}
      className="font-bold text-xl underline cursor-pointer"
      >
        <p className="hover:text-purple-500">See the full details</p>
      </div>
      <div style={{padding: '50px', color: 'white', gap: '20px'}}>
        <div className="
        font-thin text-xl pt-10 px-50 mb-10 text-gray-400">
          <p>[Ready to get started]</p>
        </div>
        <div className="font-semibold text-5xl mb-10 text-center text-purple-300">
          <h1>What we are working on...</h1>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', padding: '20px', margin: '60px', color: 'white'}}>
        <Roadmap date="[May 2025]" status="In Progress" heading="New Feature" para="We are working on a new feature that will enhance user experience." withGradient={true} image={<img src="./R1.png" alt="New Feature" />} />
        <Roadmap date="[June 2025]" status="Completed" heading="Bug Fixes" para="We have fixed several bugs to improve performance of the app for greater stability." image={<img src="./R3.png" alt="Bug Fixes" />} />
        <Roadmap date="[July 2025]" status="Planned" heading="UI Overhaul" para="A complete redesign of the user interface is planned." image={<img src="./R2.png" alt="UI Overhaul" />} />
        <Roadmap date="[August 2025]" status="In Progress" heading="Performance Improvements" para="Optimizing the app for better speed and responsiveness." image={<img src="./R4.png" alt="Performance Improvements" />} />
      </div>

    </div>
  );
}
