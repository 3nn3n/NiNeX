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
    <>
      <Header />
      <Hero />
      <div>
        <h1>Build Brilliance Elevate Your Web Presence with WebStudio</h1>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', color: 'black', backgroundColor: 'pink', padding: '20px'}}>
      <Features children="Ask Anything" child="Your AI assistant for all queries" />
      <Features children="Improve Everyday" child="Engage in intelligent conversations with our AI-powered chat application" />
      <Features children="Connect Everywhere" child="Step-by-step guide to get started with our platform" />
      <Features children="Fast Response" child="Affordable plans tailored to your needs" />
      <Features children="Improve Everyday" child="Our vision and future plans for continuous improvement" />
      <Features children="Ask Anything" child="Your AI assistant for all queries" />
      </div>
      <Chat />
      <Use1 />
      <div style={{display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px', backgroundColor: '#dddddd', alignItems: 'stretch', justifyContent: 'center', height: 'auto'}}>
        <div style={{}}>
          <Use2 />
        </div>
        <div >
          <Use3 />
        </div>
      </div>
      <Getstartedcard />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '40px', backgroundColor: '#bbbbbb', color: 'black', gap: '20px'}}>
        <Pricing heading="Basic Plan" para1="Ideal for individuals" price="16,999" button="Subscribe" pt1="An AI chatbot that can understand your queries" pt2="Personalized recommendations based on your preferences" pt3="Ability to explore the app and its features without any cost" />
        <Pricing  heading="Pro Plan" para1="Best for professionals" price="25,999" button="Subscribe" pt1="An advanced AI chatbot that can understand complex queries" pt2="An analytics dashboard to track your conversations" pt3="Priority support to solve issues quickly" style={{height: '400px'}} />
        <Pricing heading="Enterprise Plan" para1="Suitable for businesses" price="39,999" button="Subscribe" pt1="An AI chatbot that can understand your queries" pt2="Personalized recommendations based on your preferences" pt3="Ability to explore the app and its features without any cost" />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', color: 'black', backgroundColor: '#888888'}}>
        <p>See the full details</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', color: 'black', backgroundColor: '#666666', gap: '20px'}}>
        <div>
          <p>Ready to get started</p>
        </div>
        <div>
          <h1>What we are working on...</h1>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', backgroundColor: '#444444', color: 'black'}}>
        <Roadmap date="May 2025" status="In Progress" heading="New Feature" para="We are working on a new feature that will enhance user experience." />
        <Roadmap date="June 2025" status="Completed" heading="Bug Fixes" para="We have fixed several bugs to improve performance."/>
        <Roadmap date="July 2025" status="Planned" heading="UI Overhaul" para="A complete redesign of the user interface is planned." />
        <Roadmap date="August 2025" status="In Progress" heading="Performance Improvements" para="Optimizing the app for better speed and responsiveness." />
      </div>

    </>
  );
}
