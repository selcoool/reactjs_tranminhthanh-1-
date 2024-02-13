import React, { Component } from 'react';

class Modal extends Component {
  handleCloseModal = (e) => {
    // Kiểm tra xem người dùng có click ra ngoài modal không
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { isOpen, detail, closeModal } = this.props;
    if (!isOpen) return null;

    return (
      <div className='z-10 fixed inset-0 flex justify-center items-center bg-orange-200/20 h-screen w-screen' onClick={this.handleCloseModal}>
        <div className="relative bg-blue-400 m-2 p-5 w-[380px] md:w-[550px] lg:w-[750px] flex flex-col gap-2 ">
          <span className='close absolute top-0 right-2 cursor-pointer' onClick={closeModal}>&times;</span>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          <p>Price: {detail.price}</p>
          {/* Thêm các thông tin chi tiết khác của sản phẩm */}
        </div>
      </div>
    );
  }
}

export default Modal;
