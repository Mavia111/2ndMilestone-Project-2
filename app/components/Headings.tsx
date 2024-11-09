interface Ty {
    name: string; // Use `string` instead of `String`
}

export function Heading1(props: Ty){
    return(
        <h1 className="text-stone-600 text-5xl title-font font-bold mb-1">{props.name}</h1>
    );
}

export function Heading2(props: Ty){
    return(
        <h2 className="text-center text-stone-600 text-3xl title-font font-bold mb-1">{props.name}</h2>
    );
}
export function Heading3(props: Ty){
    return(
        <h3 className="text-stone-600 text-2xl title-font font-bold mb-1">{props.name}</h3>
    );
}