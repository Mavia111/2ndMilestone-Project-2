import { Anc } from "./components/anchor";
import { Heading1, Heading2, Heading3 } from "./components/Headings";
import { Images } from "./components/images";
import { Para } from "./components/para";

export default function Home(){
  return(
    <div className="p5">
  
<section className="text-stone-600 body-font bg-stone-200">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <Heading1 name="Welcome To My Website"/>       
     <Para name="I am a dedicated software engineer with a passion for creating efficient, scalable 
        solutions that drive impactful results. With expertise in languages like JavaScript, Python, and 
        frameworks such as React and Node.js, I build high-quality applications tailored to meet user needs 
        and exceed industry standards. My approach combines technical skill with a problem-solving mindset, 
        allowing me to adapt to complex challenges and deliver innovative products. I am committed to 
        continuous learning, staying current with emerging technologies, and refining my Skills to deliver 
        optimal solutions. Let’s collaborate to turn your vision into a high-performing, reliable software 
        solution."/>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Images image="images/icon1.png"/>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <Heading2 name="About Us" />
      <Para name="I have a lot of Experience in WordPress, Asp .Net MVC, PHP development, NextJs, Html, CSS, 
      JavaScript, TypeScript, Tailwind CSS, Android applications, and Desktop Application Developer. I can make 
      a magnificent and Professional site and applications within an exceptionally brief timeframe. I love to 
      work with customers from everywhere throughout the world."/>
      
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4">
        <div className="bg-stone-200 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="Jamiah Islamiah"/>       
          <Anc link="https://jamiahislamiah.com/"/>         
        </div>
      </div>
      <div className="p-4 lg:w-1/4">
        <div className="bg-stone-200 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="Infuse Fashion"/>       
          <Anc link="https://infusefashion.com/"/>         
        </div>
      </div>
      <div className="p-4 lg:w-1/4">
        <div className="bg-stone-200 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="KZ Supplements"/>       
          <Anc link="https://kzsupplements.com/"/>         
        </div>
      </div>
      <div className="p-4 lg:w-1/4">
        <div className="bg-stone-200 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
         <Heading3 name="Magic Trade Pro"/>       
          <Anc link="https://magictradepro.com"/>         
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}