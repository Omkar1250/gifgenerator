import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

const API_KEY ='pr8IJ7mwueIYKVugnqzXpT67ulAhAZdB';

export default function Random() {
  const [gif , setGif] = useState('');
  const [loading, setLoading] =useState(false);
  
 async function fetchData(){
  setLoading(true);
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const {data} = await axios.get(url);
  const imageResource = data.data.images.downsized_large.url;
  setGif(imageResource);
  setLoading(false);
 } 

 useEffect(()=>{
  fetchData();
 },[])
  function clickHandler(){
        fetchData();
  }
  return (
    <div className='w-full  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] overflow-hidden'>
      <h1 className='text-2xl  mt-[15px] underline uppercase font-bold'>
        Random gif
      </h1>
      
      {
        loading ? (<Loader/>) : (<img src={gif} width="450" />)
      }
      
      
      <button onClick={clickHandler}
      className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px] '
      >Generate</button>
        
    </div>
  )
}
