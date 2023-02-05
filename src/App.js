import React from "react";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";
import NavDropdownItemSector from "./NavDropdownItemSector";
import NavDropdownItemProduct from "./NavDropdownItemProduct";
import MesoImage from "./MesoImage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectorClick = this.handleSectorClick.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleAddRemoveFavoriteClick = this.handleAddRemoveFavoriteClick.bind(this);
    this.state = {sectorUrl: "s11", productId: 1, favorites: [] };
  }

  handleSectorClick(sectorUrl) {
    this.setState({sectorUrl: sectorUrl});
  }

  handleProductClick(productId) {
    this.setState({ productId: productId});
  }

  handleAddRemoveFavoriteClick(productId) {
return;
    // TODO: Looks like Favorites component only gets rendered via this add/remove cookie click handler (I think) as it changes the favoritesarray state
    // Ex: add a few to cookie, then delete the cookie in dev tools.  You can click around on various products and there will still be some in Favorites dropdown.
    // Isn't until we refresh page that the dropdown re-renders
    // Is this a problem that will actually happen?

    //let favoritesJson = getCookie("favorites");
    //if(favoritesJson === "") {
    //  var json_str = JSON.stringify([productId]);
    //  setCookie("favorites", json_str, 365);
    //  this.setState({ favorites: [productId]});       
    //}
    //else {
      // If product Id exists in favorites, we remove it.
      // If product Id does not exist, add it.

    //  const favoritesArray = JSON.parse(favoritesJson);

    //  if(favoritesArray.includes(productId)) {
     //   const index = favoritesArray.indexOf(productId);
    //   favoritesArray.splice(index, 1);
     //   var json_str = JSON.stringify(favoritesArray);
    //    setCookie("favorites", json_str, 365);
    //  }
    //  else {
    //   favoritesArray.push(productId);
     //   var json_str = JSON.stringify(favoritesArray);
    //    setCookie("favorites", json_str, 365);
    //  }
    //  this.setState({ favorites: favoritesArray});   
   // }
  }


  // TODO: To get favorites working, add this nav section code below 
  //           <NavDropdown title="Favorites" id="collasible-nav-dropdown">
  // <Favorites favorites={favorites} onProductClick={this.handleProductClick} /> 
  // </NavDropdown>   

  render() {
    const sectorUrl = this.state.sectorUrl;
    const productId = this.state.productId;
    const favorites = this.state.favorites;

    return (
      <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        SPC Mesoanalysis
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Sector" id="collasible-nav-dropdown">

            <NavDropdownItemSector sectorName="Northwest" sectorUrl="s11" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="Southwest" sectorUrl="s12" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="North-Central" sectorUrl="s13" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="Central" sectorUrl="s14" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="South-Central" sectorUrl="s15" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="Northeast" sectorUrl="s16" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="East-Central" sectorUrl="s17" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="Southeast" sectorUrl="s18" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="Midwest" sectorUrl="s20" onSectorClick={this.handleSectorClick} />
            <NavDropdownItemSector sectorName="National" sectorUrl="s19" onSectorClick={this.handleSectorClick} />

          </NavDropdown>

          <NavDropdown title="Observations" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={1} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={2} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={3} onProductClick={this.handleProductClick} /> 
          </NavDropdown>

          <NavDropdown title="Basic Surface" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={4} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={5} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={6} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={7} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={8} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={9} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={10} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={11} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={12} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={13} onProductClick={this.handleProductClick} /> 
          </NavDropdown>

          <NavDropdown title="Basic UA" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={14} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={15} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={16} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={17} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={18} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={19} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={20} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={21} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={22} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={23} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={24} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={25} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={26} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={27} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={28} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={29} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={30} onProductClick={this.handleProductClick} /> 
          </NavDropdown>  

          <NavDropdown title="Kinematic Fields" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={31} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={32} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={33} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={34} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={35} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={36} onProductClick={this.handleProductClick} /> 
          <NavDropdownItemProduct productId={37} onProductClick={this.handleProductClick} /> 
          </NavDropdown>                     

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <MesoImage productId={productId} mesoImageSector={sectorUrl} addOrRemoveFavorite={this.handleAddRemoveFavoriteClick} />
    </>
    );
  }
}

export default App;