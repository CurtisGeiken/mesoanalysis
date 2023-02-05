import React from "react";
import { getProduct } from "./Product";

class MesoImage extends React.Component {
    constructor(props) {
      super(props);
      this.handleImgClick = this.handleImgClick.bind(this);
      this.handleFavClick = this.handleFavClick.bind(this);
    }
  
    handleImgClick(productId, e) {
        // Detect a double click
        // TODO: If double click, we'd like to move to the next favorite

        switch (e.detail) {
            case 1: {
              break;
            }
            case 2: {
              // Logs to browser developer tools console
              console.log("Current product Id: " + productId);
              break;
            }
            case 3: {
              break;
            }
            default: {
              break;
            }
          }            
    }

    handleFavClick(productId, e) {
        // TODO: Uncomment these lines when we take on the favorites feature
        //console.log("Adding or removing " + productId + " from favorites");
        //this.props.addOrRemoveFavorite(productId);      
    } 
  
    render() {
        const productId = this.props.productId;
        const mesoImageSector = this.props.mesoImageSector;

        // Get Product object based on the ProductId
        const productToDisplay = getProduct(productId);

        // Build the image url
        var url = "https://www.spc.noaa.gov/exper/mesoanalysis/" + mesoImageSector + "/" + productToDisplay.urlName + "/" + productToDisplay.urlName + ".gif";

      return (
        <>
        <h3 onClick={(e) => this.handleFavClick(productId, e)}>{productToDisplay.displayName}</h3>
        <img id="Meso-image" src={url} onClick={(e) => this.handleImgClick(productId, e)}/>
        <p>{productToDisplay.infoText}</p>
        </>
      );
    }
  }

  export default MesoImage;