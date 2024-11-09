import Link from "next/link";
export function Navbar(){
return(
<header className="text-stone-600 body-font bg-stone-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl text-stone-600 font-2xl font-bold font-mono">Mavia Yousuf</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900 text-stone-500 font-1xl font-bold font-mono">Home</Link>
      <Link href="/about" className="mr-5 hover:text-gray-900 text-stone-500 font-1xl font-bold font-mono">About</Link>
      <Link href="/contact" className="mr-5 hover:text-gray-900 text-stone-500 font-1xl font-bold font-mono">Contact</Link>
      
    </nav>
    
  </div>
</header>
);}
