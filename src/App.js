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

          <NavDropdown title="Thermodynamic Fields" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={38} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={39} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={40} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={41} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={42} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={43} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={44} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={45} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={46} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={47} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={48} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={49} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={50} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={51} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={52} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={53} onProductClick={this.handleProductClick} />
          </NavDropdown>

          <NavDropdown title="Wind Shear" id="collasible-nav-dropdown">  
          <NavDropdownItemProduct productId={54} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={55} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={56} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={57} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={58} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={59} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={60} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={61} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={62} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={63} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={64} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={65} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={66} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={67} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={68} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={69} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={70} onProductClick={this.handleProductClick} />
          </NavDropdown>    

          <NavDropdown title="Composite Indices" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={71} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={72} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={73} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={74} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={75} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={76} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={77} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={78} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={79} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={80} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={81} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={82} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={83} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={84} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={85} onProductClick={this.handleProductClick} />
          </NavDropdown>

          <NavDropdown title="Multi-Parameter Fields" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={86} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={87} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={88} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={89} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={90} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={91} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={92} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={93} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={94} onProductClick={this.handleProductClick} />
          </NavDropdown>

          <NavDropdown title="Heavy Rainfall" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={95} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={96} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={97} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={98} onProductClick={this.handleProductClick} />
          </NavDropdown>

          <NavDropdown title="Winter Weather" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={99} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={100} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={101} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={102} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={103} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={104} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={105} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={106} onProductClick={this.handleProductClick} />
          </NavDropdown>      

          <NavDropdown title="Fire Weather" id="collasible-nav-dropdown">
          <NavDropdownItemProduct productId={107} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={108} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={109} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={110} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={111} onProductClick={this.handleProductClick} />
          <NavDropdownItemProduct productId={112} onProductClick={this.handleProductClick} />
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