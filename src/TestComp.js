import { useSelector } from "react-redux";

export default function TestComp(){
      
const home=useSelector((state)=>state.homeReducer?.data)
console.log(home);
    return (
        <>

        </>
    )
}