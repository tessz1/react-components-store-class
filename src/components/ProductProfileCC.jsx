import React from 'react';
import '../App.css'
class ProductProfileFC extends React.Component {
  formatPrice(price) {
    return price.toFixed(2);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="main-content">
        <h2>{product.brand}</h2>
        <h1>{product.title}</h1>
        <h3>{product.description}</h3>
        <div className="description">{product.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{product.currency} {this.formatPrice(product.price)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ProductProfileFC;
