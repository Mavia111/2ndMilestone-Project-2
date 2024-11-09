interface Ty {
    image: string; // Use `string` instead of `String`
}
export function Images(props: Ty){
    return(

        <img className="w-[20rem] ml-9" src={props.image}/>
    );
}