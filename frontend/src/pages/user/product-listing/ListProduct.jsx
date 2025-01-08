import CardProduct from '@/components/CardProduct'
import React from 'react'

const ListProduct = () => {
  return (
    <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
    </div>
  )
}

export default ListProduct