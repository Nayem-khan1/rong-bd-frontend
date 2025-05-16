import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import InnerImageZoom from 'react-inner-image-zoom'
import "inner-image-zoom/lib/styles.min.css";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <InnerImageZoom src={image} />
          </div>
        </div>
        {/* Product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`cursor-pointer py-2 px-4 bg-gray-100 ${
                    item === size ? "border border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="text-gray-300 mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 Days</p>
          </div>
        </div>
      </div>

      {/* Description and Review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">Description</b>
          <p className="border border-gray-300 px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            exercitationem necessitatibus animi eligendi eveniet deserunt, unde
            earum omnis assumenda, cum numquam error quae excepturi minima,
            eaque pariatur aut? Aspernatur, voluptatibus. Amet fugiat corrupti,
            esse veritatis ducimus excepturi tenetur minima, quasi blanditiis
            magni voluptatum repellat doloribus recusandae nihil odit explicabo
            quod quam! Voluptates doloremque deleniti commodi nemo minima
            numquam recusandae? Obcaecati harum tempora consequuntur aspernatur
            esse expedita aperiam ipsa et repellendus ad repellat iusto vero
            dolorum sed ex, delectus incidunt quos temporibus inventore
            exercitationem quaerat deleniti natus quo. Fugit omnis consequatur,
            dolore veritatis aliqui
          </p>
          <p> Iure eos exercitationem hic voluptatum
            suscipit dolores non neque sit minima nostrum quibusdam, placeat
            ducimus amet ex inventore illum consectetur ullam nam porro quaerat
            explicabo? Voluptas saepe, repudiandae iste eius quia est voluptate
            aperiam officiis neque tempore laboriosam nulla dolor porro
            recusandae explicabo, aliquid illo pariatur iure necessitatibus
            quidem provident molestias debitis.</p>
        </div>
      </div>
      {/* disply related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
