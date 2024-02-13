import React, { Component } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

class Shoes extends Component {
  handleClick = () => {
    this.props.handleSelectProduct(this.props.shoes);
  
  
  };

  render() {
    const { image, name, price } = this.props.shoes;
    
    return (
      <div className='flex flex-col'>
        <div onClick={this.handleClick} style={{ cursor: 'pointer' }}> {/* Thêm style cursor: pointer để biểu thị là một phần tử có thể click */}
          <img src={image} alt={name} />
        </div>
        <p className='text-2xl'>{name}</p>
        <p className='text-lg'>{price}</p>
        <div className='bg-black flex justify-center items-center text-white gap-2 cursor-pointer'  onClick={this.handleClick}>Add To Cart <MdOutlineShoppingCart className='text-xl'  /></div>
      </div>
    );
  }
}

export default Shoes;
