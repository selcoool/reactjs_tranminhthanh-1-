import React, { Component } from 'react';
import Shoes from './Shoes';

class ListShoes extends Component {
  renderShoes = () => {
    return this.props.shoesArr.map(item => {
      return (
        <Shoes 
          shoes={item} 
          key={item.id} 
          handleToggleModal={this.props.handleToggleModal}
          handleSelectProduct={this.props.handleSelectProduct}
        />
      );
    });
  }

  render() {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {this.renderShoes()}
      </div>
    );
  }
}

export default ListShoes;
