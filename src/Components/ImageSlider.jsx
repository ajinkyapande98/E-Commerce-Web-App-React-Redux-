import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    {
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a7aeb153544611.6331e2e8a18e1.jpg",
    },
    {
      url: "http://cdn.shopify.com/s/files/1/0470/0330/4086/collections/4.png?v=1649507994",
    },
    {
      url: "https://st2.depositphotos.com/25867432/42849/v/1600/depositphotos_428490718-stock-illustration-sale-poster-design-clothing-store.jpg",
    },
    {
      url: "https://www.shutterstock.com/image-photo/stack-jeans-clothes-tag-on-260nw-2202036501.jpg",
    },
    {
      url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shoes-craze-sale-facebook-ad-design-template-b1d1738fd5e9e0f6e3152ec502a1c2e1_screen.jpg?ts=1567579016",
    },
    {
      url: "https://hungamadeal.co.in/wp-content/uploads/2017/04/Screenshot_2017-04-09-13-09-48-43201.jpg",
    },
    // { url: "images/7.jpg" },
  ];

  return (
    <>
      <SimpleImageSlider
        width={1240}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </>
  );
};

export default ImageSlider;
