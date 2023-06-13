import React, { useEffect, useState } from 'react';
import img1 from '../images/شعار_مخيطة-removebg-preview.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "عن أبرة وخيط", path: "/About" },
    { title: "تواصل معنا", path: "/ContactUs" },
    { title: "خدماتنا", path: "/" },
    { title: "التسعير", path: "/Pricing"}
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`bg-fuchsia-200 md:text-sm ${state ? "rtl:text-right shadow-lg text-black rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-1 md:block logoimg">
          
          <Link to={"/"}>  <img
              src={img1}
              width={70}
              height="100%"
              alt="Float UI logo"
            /></Link>
          
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800" onClick={() => setState(!state)}>
              {state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-black hover:text-gray-900 text-xl">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="rtl:text-right flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <a href="/Login" className="block text-fuchsia-700 hover:text-gray-900 text-xl">
              تسجيل دخول
            </a>
            <a href="/Signup" className="flex items-center justify-center gap-x-1 text-xl py-2 px-4 text-white font-medium bg-fuchsia-800 hover:bg-white hover:text-fuchsia-800 active:bg-gray-900 rounded-full md:inline-flex">
              تسجيل
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
