import { useSelector,useDispatch } from "react-redux";
import  { toast } from "react-hot-toast";
import { removeitem,additem } from "../redux/Slices/cartSlice";
import './Shadow.css'
const Product = ({post}) => {
  
  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch()

  function addtocart()
  {
    dispatch(additem(post));
    toast.success('item added to cart')
  }

  function removetocart(){
    dispatch(removeitem(post.id))
    toast.error('item remove to cart')
  }

  return(
    <div className="flex flex-col items-center justify-between hover:scale-105 transition duration-300 ease-in hover:shadow-zinc-900  gap-3 p-4 mt-10 ml-5 rounded-xl border-2 shadow flex-wrap "> 

      <div>
         <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">{post.title}</p>
      </div>

      <div>
         <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(' ').slice(0,10).join(' ')+"..."}</p>
      </div>

      <div className="h-[180px]">
         <img src={post.image} className="h-full w-full "/>
      </div>

      <div className="flex justify-between items-center gap-12 w-full mt-5">
              <div>
                <p className="text-green-600 font-semibold">${post.price}</p>
              </div>

              {
                cart.some((p)=>p.id == post.id) ?
                (<button   className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1  uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={removetocart}>
                    Remove to cart
                </button>): (<button   className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={addtocart}>
                    Add to cart
                </button>)
              }
      </div>
     
     
    </div>
  )
};

export default Product;
