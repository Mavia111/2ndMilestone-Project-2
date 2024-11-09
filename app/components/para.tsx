interface Ty {
    name: string; // Use `string` instead of `String`
}
export function Para(props: Ty){
    return(
        <p className="text-stone-400 font-mono">{props.name}</p>
    );
}