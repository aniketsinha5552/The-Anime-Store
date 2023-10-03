import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartRedux'

export const Product = () => {
  const {id} = useParams<any>()
  const [product, setProduct] = useState<any>([])
  const dispatch= useDispatch()
  const getProduct = async () => {
    try {
      const res = await publicRequest.get(`/products/${id}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  const addToCart = () => {
    const cartProduct:any= {
      product: product,
      quantity:1,
      price:product.price
    }
    dispatch(
      addProduct(cartProduct)
    )
    alert("Product Added")
  }

  return (
    <div className='flex flex-col justify-start p-10 md:flex-row overflow-hidden'>
      <div id="productLeft" className=''>
          <img src={product.img} alt="" className='h-[390px] min-w-[330px] border-2 border-slate-400 rounded-md md:h-[600px] md:min-w-[550px]'/>
      </div>
      <div className='bg-slate-100 flex-auto p-10 relative'>
          <h1 className='text-2xl text-center mb-10'>{product.title}</h1>
          <h2 className='text-xl mb-5'><strong>Price:</strong> Rs. {product.price}</h2>
          <p className='text-lg mb-5'><strong>Description:</strong> {product.desc}</p> 
         {product.color && <p className='text-lg mb-5'><strong>Color:</strong> <span>{product.color}</span></p> }
          {product.size &&<p className='text-lg mb-5'><strong>Size:</strong> {product.size}</p> }

          <p className='text-lg bg-red-500 rounded-md w-fit p-2 mb-5 text-white'>{product.anime}</p> 
          <p className='mt-3'>
          {product.categories?.map((item:any) => {
            return (
              <span key={item._id} className='text-sm bg-blue-300 rounded-xl w-fit p-2 mr-2 text-white'>{item}</span> 
            )
          })}
          </p>
          <button onClick={addToCart} className='bg-blue-500 text-white p-2 mt-10 rounded-lg w-48 bottom-20 left-1/3'>Add to Cart</button>
      </div>
    </div>
  )
}
