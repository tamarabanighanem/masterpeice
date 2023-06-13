import React from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
const ProductCollection = () => {
  return (
    <>
    <div>
<Nav/>
      <section>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        تصاميمنا
        </h2>
        <p className="max-w-md mt-4 text-gray-500 pb-10">
        توفرمخيطتنا العديد من التصاميم المناسبة للجميع..اليك بعضها
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="grid gap-4">
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
        alt=""
      /></Link>
    </div>
    <div>
    <Link to={"/Product"}>    <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
        alt=""
      /></Link>
    
    </div>
    <div>
    <Link to={"/Product"}>    <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
        alt=""
      /></Link>
      
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Link to={"/product"}>
    <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
        alt=""
      />
    </Link>
    </div>
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
        alt=""
      /></Link>
    </div>
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
        alt=""
      /></Link>
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
        alt=""
      /></Link>
    </div>
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
        alt=""
      /></Link>
    </div>
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
        alt=""
      /></Link>
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
        alt=""
      /></Link>
    </div>
    <div>
    <Link to={"/Product"}>  <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
        alt=""
      /></Link>
    </div>
    <div>
  <Link to={"/Product"}>    <img
        className="h-auto max-w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
        alt=""
      /></Link>
    </div>
  </div>
</div>

    </div>
  </section>
  </div>
  <Footer/>
  </>
  )
}

export default ProductCollection