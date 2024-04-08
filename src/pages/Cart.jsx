import { useSelector } from "react-redux";
import {useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import CartItem from '../components/CartItem'
const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const[totalAmount,settotalAmount]=useState(0);
  
  useEffect(()=>{
    settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return(<div>
    {
        cart.length>0 ? (
          <div className="md:flex p-2 max-w-4xl mx-auto space-y-10 space-x-4  min-h-[80vh] justify-between ">
             
             <div  >
                 {
                  cart.map((item,index)=>{
                    return(<CartItem key={item.id} item={item} itemindex={index}/>)
                  })
                 }
             </div>


           <div className="flex flex-col  ">
              <div className="flex flex-col ">
                 <div className="text-green-600  text-2xl uppercase" >Your Cart</div>
                 <div className="text-green-600 font-bold text-5xl">Summary</div>
                 <p>
                    <span className="flex  mt-6 text-2xl">Total Items:{cart.length}</span>
                 </p>
                
                 </div>

             <div className="flex flex-col mt-[200px] gap-y-6">
                <p className="text-green-600 font-bold text-xl">Total Amount:${totalAmount}</p>
               
               <NavLink to="/">
                <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">CheckOut Now</button>

           </NavLink>
             </div>


              </div>
             
          </div>
        ):(
          <div className="flex  flex-col   items-center mt-[150px] gap-y-6">
            <h1 className="text-3xl font-bold text-green-600">Cart Empty</h1>
            <NavLink to="/">
                <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
                    Shop Now
                </button>
            </NavLink>
          </div>
        )
    }
  </div>)
};

export default Cart;
