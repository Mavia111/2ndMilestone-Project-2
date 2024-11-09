import { Heading2, Heading3 } from "@/app/components/Headings";

export default function Contact(){
    return(
        <section className="text-stone-600 body-font relative ">
  <div className="container px-5 py-24 flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-1/3 md:w-1/2   rounded-lg overflow-hidden flex flex-col md:ml-auto w-full md:py-2 mt-19 md:mt-[100px]">
     <Heading3 name="Contact Us" />
    <ul className="list-none">
    <li className="font-mono text-stone-600 font-bold text-1xl racking-tight">Contact: 0322-5312580</li>
    <li className="font-mono text-stone-600 font-bold text-1xl racking-tight">Email: mavia21701@gmail.com</li>
    <li className="font-mono text-stone-600 font-bold text-1xl racking-tight">LinkedIn: linkedin.com/in/mavia-jiva-baa3aa183</li>
  
        </ul>
    </div>
    <div className="lg:w-1/3 md:w-1/2  rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
       <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-stone-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-stone-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-stone-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-stone-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-stone-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-stone-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-stone-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-stone-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-stone-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-stone-600 bg-stone-200 border-4 border-stone-500 py-2 px-6  hover:bg-stone-600 hover:text-stone-200 rounded text-lg">
        Submit
      </button>
      
    </div>
  </div>
</section>

    );
}