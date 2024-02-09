
import './App.css';
import Random from './Random';
import './index';
import Tag from './Tag';


function App() {
  return (
   <div className='w-full h-screen flex flex-col bg-yellow-300 relative overflow-x-hidden items-center'>
     <h1 className=' bg-white rounded-lg w-11/12 text-center mt-[40px] ml-[15px] 
     px-10 py-2 text-4xl font-bold '>RANDOM GIFS</h1>
     <div className='flex flex-col'>
     <Random/> 
     <Tag/>
     </div>
       
     

   </div>
  );
}

export default App;
