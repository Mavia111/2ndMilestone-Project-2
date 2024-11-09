import Link from "next/link";
interface Ty {
    link: string; // Use `string` instead of `String`
}
export function Anc(props: Ty){
    return(
        <Link className="p-5 mt-5 rounded-lg text-stone-600 inline-flex items-center bg-stone-300 border-2 border-stone-600 font-bold" href={props.link} target="_blank">Click Here</Link>
    );
}