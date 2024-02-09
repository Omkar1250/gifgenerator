import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';


const API_KEY ='pr8IJ7mwueIYKVugnqzXpT67ulAhAZdB';
export default function Tag() {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [tagName, setTagName] = useState('');
  async function fetchData(){
     setLoading(true);
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagName}`;
    const {data} = await axios.get(url); 
    const imageResource = data.data.images.downsized_large.url;
    setGif(imageResource);
    setLoading(false);
  }
  useEffect(()=>{
    fetchData()
  },[]);
  function tagValue(event){
    setTagName(event.target.value)
  }
  function clickHandler(event){
    fetchData();
  }
  return (
    <div className='w-full  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] overflow-hidden'>
      <h1 className='text-2xl  mt-[15px] underline uppercase font-bold'>
        Random {tagName} gif
      </h1>
      
      {
        loading ? (<Loader/>) : (<img src={gif} width="450" />)
      }
      
      <input type="text" name='tagName' id='tagName' value={tagName} onChange={tagValue} className='w-10/12 text-lg py-2 rounded-lg mb-[20px]' />
      <button onClick={clickHandler}
      className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px] '
      >Generate</button>
        
    </div>
  )
}
