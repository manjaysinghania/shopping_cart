import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return(<div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
          <div>
             <NavLink to="/">
                 <div className="ml-5">
                    <img src="../logo.png" className="h-14"/>
                 </div> 
             </NavLink>  
          </div>
         
         <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
         <NavLink to="/">
            <p className="hover:text-xl hover:text-green-400 transition durstion-400 ">Home</p>
         </NavLink>
          
          <NavLink to="/cart">
           <div className="relative">
             <FaCartPlus  className="text-xl hover:text-2xl hover:text-blue-400 transition duration-800   "/>
             {
              cart.length>0&&(<span      className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" >
                  {cart.length}
              </span>)
             }
           </div>
             
          </NavLink>
          
         </div>
      </nav>
  </div>);
};

export default Navbar;
