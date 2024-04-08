import {useEffect,useState} from 'react'
import Product from '../components/Product'
import Spinner from '../components/Spinner';

const Home = () => {
  
  
   const [loading,setloading] =useState(false);
   const[posts,setpost]=useState([]);

   async function fetchdata(){
    const API_URL = "https://fakestoreapi.com/products";

    setloading(true)
     try{ 
      const output= await fetch(API_URL);
      const data= await output.json()
      setpost(data)
     
    }
    catch(error){
        console.log("Error aa gyaa bhai")
        setpost([])
    }
       
       setloading(false)
   }
  useEffect(()=>{
     fetchdata();
  },[])

  return(
      <div>
           {
            loading?(<Spinner/>):
            posts.length>0?(
              <div className="grid
               xs:grid-cols-2 
               sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-6 min-h-[80vh]">
              {
                posts.map((post)=>{ 
                  console.log(post)
                  return(<Product key={post.id} post={post}/>)}
                
            )}
            </div>):(<div className="flex items-center justify-center"><p>NO Data Found</p></div>)
           }
      </div>
  );
};

export default Home;
