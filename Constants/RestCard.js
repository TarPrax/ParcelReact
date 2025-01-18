import { Res } from "./Restaurants";

const RestCard =(props)=>{

return(
    <h1>{props.restaurant.info.name}</h1>
)

}

export const DisplayCards=()=>{
    return (Res.map((rest)=>{
        <RestCard  restaurant={rest}/>
    }) )
}



export default RestCard;