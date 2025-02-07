import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <img src="/cart_banner_image.jpg" alt="" />
        <h1 className=' text-3xl'  >Chưa có sản phẩm trong giỏ hàng</h1>
        <p>Bạn có thể tới trang <Link className='text-blue-500' to={"/shop"}>sản phẩm</Link> để mua hàng</p>
    </div>
  )
}

export default EmptyCart