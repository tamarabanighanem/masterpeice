
import Nav from './Nav';
import Footer from './Footer';
import pic1 from '../images/شعار مخيطة.jpg'
import pic2 from '../images/مخيطة 1.jpg'
import pic3 from '../images/محيطة 3.jpg'
import { Link } from "react-router-dom";
import {
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Ripple });
export default function Example() {
  return (
    <>
    <Nav/>
    <div className="text-center mt-16">
      <h1 className="text-3xl text-gray-800 font-semibold">
        المقالات
      </h1>
      <p className="mt-3 text-gray-500">
        المدونات التي يحبها المجتمع. يتم تحديثها كل ساعة.
      </p>
    </div>
    <section className="py-4  mx-auto max-w-screen-xl md:px-12 mt-8 grid gap-3 sm:grid-cols-1 lg:grid-cols-3 ">
    
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={pic1}
      alt=""
    />
  </a>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      عامر الخياط
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    مهنة الخياط واحدة من المهن القديمة في المجتمع، وعلى الرغم من بساطتها الا انها ليست مهنة سهَلْة بل تتطلب موهبة ومهارة عالية.
.
    </p>
    <Link to={"/ProductCollection"}><button
      type="button"
      className="inline-block rounded bg-fuchsia-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-fuchsia-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init=""
      data-te-ripple-color="light"
    >
      تصاميمي
    </button></Link>
  </div>
</div>

<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={pic2}
      alt=""
    />
  </a>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      مرقة
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    مهنة الخياط واحدة من المهن القديمة في المجتمع، وعلى الرغم من بساطتها الا انها ليست مهنة سهَلْة بل تتطلب موهبة ومهارة عالية.
.
    </p>
  <Link to={"/ProductCollection"}>  <button
      type="button"
      className="inline-block rounded bg-fuchsia-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-fuchsia-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init=""
      data-te-ripple-color="light"
    >
      تصاميمي
    </button></Link>
  </div>
</div>

<div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <a href="#!">
    <img
      className="rounded-t-lg"
      src={pic3}
      alt=""
    />
  </a>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      زينة خانوم 
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    مهنة الخياط واحدة من المهن القديمة في المجتمع، وعلى الرغم من بساطتها الا انها ليست مهنة سهَلْة بل تتطلب موهبة ومهارة عالية.
.
    </p>
    <Link to={"/ProductCollection"}><button
      type="button"
      className="inline-block rounded bg-fuchsia-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-fuchsia-300 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init=""
      data-te-ripple-color="light"
    >
      تصاميمي
    </button></Link>
  </div>
</div>

    </section>
    <Footer/>
    </>
  );
}