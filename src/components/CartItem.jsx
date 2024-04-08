import { MdDelete } from "react-icons/md";
import { removeitem } from "../redux/Slices/cartSlice";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";


const CartItem = ({item,itemindex}) => {
  const dispatch=useDispatch()

  function removefromcart(){
    dispatch(removeitem(item.id))
    toast.success("Item cancel successfully")
  }
  return (
  <div className="flex flex-col gap-y-6">
       <div className=" hover:scale-105 transition duration-300 ease-in hover:shadow-zinc-900  gap-3 p-4 mt-10 ml-5 rounded-xl border-2 shadow  ">
    <div className="flex w-[450px] gap-x-8">
     <div className="h-[200px] w-[150px]">
         <img src={item.image} className="h-full w-full cursor-pointer"/>
      </div>

      <div className="flex flex-col ">
        <h1 className="text-gray-700 font-semibold text-lg text-left  w-60 mt-1 cursor-pointer">{item.title}</h1>
        <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left mt-2 cursor-pointer">{item.description.split(' ').slice(0,10).join(' ')+"..."}</h1>
        <div className="flex mt-12 justify-between ">
         <p className="text-green-600 font-semibold cursor-pointer">${item.price}</p>
         <div>
           <MdDelete className="border w-10 h-6 rounded-full bg-red-400 text-red-800 hover:scale-100 cursor-pointer" onClick={removefromcart}/>
         </div>
      </div>
      </div>

      

    </div>
      
    
    </div>

    <div className="border h-1 bg-slate-900 ml-4" >

    </div>
  </div>
  
  )
};

export default CartItem;
