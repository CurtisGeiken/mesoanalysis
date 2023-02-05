import React from "react";
import { NavDropdown } from "react-bootstrap"
import { getProduct } from "./Product";

class NavDropdownItemProduct extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(productId, e) {
        this.props.onProductClick(productId);
    }
  
    render() {
        const product = getProduct(this.props.productId);

      return (
        <NavDropdown.Item href="#" onClick={(e) => this.handleClick(product.id, e)}>
        { product.navDisplayName }
      </NavDropdown.Item>
    );
    }
}

export default NavDropdownItemProduct;