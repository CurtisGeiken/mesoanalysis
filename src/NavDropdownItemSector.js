import React from "react";
import { NavDropdown } from "react-bootstrap"

class NavDropdownItemSector extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(sectorUrl, e) {
        this.props.onSectorClick(sectorUrl);
    }
  
    render() {
      const sectorUrl = this.props.sectorUrl;
      const sectorName = this.props.sectorName;

      return (
        <NavDropdown.Item href="#" onClick={(e) => this.handleClick(sectorUrl, e)}>
        { sectorName }
      </NavDropdown.Item>
    );
    }
}

export default NavDropdownItemSector;