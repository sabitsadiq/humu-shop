"use client";
import { Nerko_One } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const ImageSlider = ({ images }: any) => {
  const filteredImages = images.map((item: any) => {
    const { img, subImg, subImg2 } = item;
    return [img, subImg, subImg2];
  });
  console.log(filteredImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? filteredImages[0].length - 1 : currentIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === filteredImages[0].length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="image-slider">
      <div className="flex">
        <div className="flex flex-col justify-between w-4/12">
          <div className="flex flex-col gap-4">
            {filteredImages.map((item: any, index: any) => (
              <div key={index}>
                <Image
                  src={item.index}
                  width={50}
                  height={50}
                  alt={images?.title}
                />
              </div>
            ))}

            {/* <div>
              <Image
                src={filteredImages[1]}
                width={50}
                height={50}
                alt={images?.title}
              />
            </div>
            <div>
              <Image
                src={filteredImages[2]}
                width={50}
                height={50}
                alt={images?.title}
              />
            </div> */}
          </div>
          <div className="flex flex-col gap-5">
            <PiCaretUpBold onClick={previousImage} />
            <PiCaretDownBold onClick={nextImage} />
          </div>
        </div>
        <div className="flex w-96">
          {filteredImages[0].map((imageUrl: any, index: any) => (
            <div
              className={`relative h-64 w-64 ${
                index === currentIndex ? "block" : "hidden"
              }`}
              key={index}
            >
              <Image
                className="w-full h-full"
                src={imageUrl}
                fill
                //   sizes="40"
                alt={images.title}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex].img} alt="Product" />
      <img src={images[currentImageIndex].subImg} alt="Product" />
      <img src={images[currentImageIndex].subImg2} alt="Product" />
      <button onClick={nextImage}>Next</button> */}
    </div>
  );
};

// const ProductPage = () => {
//   // Assuming you have a product id
//   const productId = 0; // Example product id
//   const product = homeData.find((item) => item.id === productId);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.desc}</p>
//       <ImageSlider images={[product]} />
//     </div>
//   );
// };

export default ImageSlider;
