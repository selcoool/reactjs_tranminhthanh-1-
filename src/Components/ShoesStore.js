import React, { Component } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

export class ShoesStore extends Component {
  render() {
    return (
      <div className='flex flex-col'>
        <h1 className='text-3xl text-center'>Shoes Shop</h1>
        <div className='flex flex-col w-full'>
           <div className='grid grid-cols-1 pb-4 gap-2 '>
                <div>
                <img src={'http://svcy3.myclass.vn/images/adidas-prophere.png'} />
                <p>Title</p>
                <p>Title</p>
                <button>Add To Cart<MdOutlineShoppingCart/></button>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default ShoesStore
