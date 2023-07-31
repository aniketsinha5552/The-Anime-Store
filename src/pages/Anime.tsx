import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { publicRequest, userRequest } from '../requestMethods';
import { Slider } from '../components/Slider';

export const Anime = () => {
  const [anime,setAnime]= useState<any>([])
  const anime_id = useParams();
  const [products, setProducts] = useState<any>([])

  const getAnime=async()=>{
    let res = await userRequest.get(`/animes/${anime_id.id}`)
    const res2 = await publicRequest.get(`/products?anime=${res?.data?.title}`)
    setProducts(res2.data)
    setAnime(res.data)
  }
  useEffect(()=>{
    getAnime()
  },[])
  return (
    <div className='text-slate-800'>
      <img src={anime?.cover} className='h-[65vh] w-full object-contain bg-slate-300 border-2 border-slate-500' />
      <div className='pl-5 pr-5'>
      <h1 className='text-center text-3xl mt-2 text-red-800'>{anime?.title}</h1>
      <p className='text-l text-center text-slate-700'>{anime?.releaseYear}</p>
      <p className='text-xl text-center text-slate-700'>{anime?.desc}</p>
      <Slider products={products} name="Products"/>
      </div>
    </div>
  )
}
