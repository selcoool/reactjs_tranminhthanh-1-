import React, { Component } from 'react';

class ModalCart extends Component {

  handleCloseModal = (e) => {
    // Kiểm tra xem người dùng có click ra ngoài modal không
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { isOpen, closeModal, cart } = this.props;
  
    if (!isOpen) return null;
    return (

      <div className='z-10 fixed inset-0 flex justify-center items-center bg-orange-200/20 h-screen w-screen' onClick={this.handleCloseModal}>
      <div className="relative bg-yellow-400 m-2 p-5 w-[380px] md:w-[550px] lg:w-[750px] flex flex-col gap-2 ">
        <span className='close absolute top-0 right-2 cursor-pointer' onClick={closeModal}>&times;</span>
               <h2 className='flex justify-center items-center text-orange-600 text-3xl '>Cart</h2>
             {cart.length === 0 ? <p>Your cart is empty</p> : (
               <ul>
                 {cart.map(item => (
                    
                   <li key={item.id}>
                    {console.log('ggggggggggg',item)}
                     {item.name} - 
                     Quantity: <span className='text-red-600'>{item.quantity}</span>
                     <img src={item.image} className='h-[100px] w-[100px]' alt={item.image}/>
                  </li>
                ))}
             </ul>
             )}
      </div>
    </div>



      // <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      //   <div className='modal-background' onClick={closeModal}></div>
      //   <div className='modal-content'>
      //     <div className='box'>
      //       <h2 className='title'>Cart</h2>
      //       {cart.length === 0 ? <p>Your cart is empty</p> : (
      //         <ul>
      //           {cart.map(item => (
      //             <li key={item.id}>
      //               {item.name} - Quantity: {item.quantity}
      //             </li>
      //           ))}
      //         </ul>
      //       )}
      //     </div>
      //   </div>
      //   <button className='modal-close is-large' aria-label='close' onClick={closeModal}></button>
      // </div>
    );
  }
}

export default ModalCart;