import React from "react";
//import { photos } from '../img/portfolio/DSC03798.DNG';

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

/*
const photos = [
    {
      src: '../img/portfolio/DSC03798.DNG',
      width: 4,
      height: 3
    },
    {
      src: '../img/portfolio/DSC03798.DNG',
      width: 1,
      height: 1
    }
  ];
*/

export default function Portfolio() {
  //const BasicRows = () => <Gallery photos={photos} />;

  const photos = importAll(
    require.context("../img/portfolio", false, /\.(png|jpe?g|svg)$/)
  );
  console.log("-----" + photos.length);
  return (
    <div className="cptPortfolio">
      {photos.map((image, index) => (
        <img key={index} src={image} alt="info"></img>
      ))}
    </div>
  );
}
