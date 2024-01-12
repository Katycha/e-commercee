import Image from "next/image";
import First from "@/assets/product-cover-5.png";
import Second from "@/assets/product-cover-5 (1).png";
import Third from "@/assets/product-cover-5 (2).png";
import Fourth from "@/assets/product-cover-5 (3).png";
import Fifth from "@/assets/product-cover-5 (4).png";
import Sixth from "@/assets/product-cover-5 (5).png";
import Seventh from "@/assets/product-cover-5 (6).png";

 <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-3">
   <Image src={First} alt="product" priority />
   <p className="tw-text-[#252B42] tw-font-bold">Graphic Design</p>
   <p className="tw-text-[#737373] tw-font-bold">English department</p>
   <div className="tw-flex tw-gap-x-2">
     <h4 className="tw-text-[#BDBDBD]">$16.48</h4>
     <h4 className="tw-text-[#23856D]">$6.48</h4>
   </div>
 </div>;

const BestsellerProducts = () => {
  return (
    <div className="tw-flex tw-flex-col">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <p className="tw-text-[#737373]">Featured Products</p>
        <h1 className="tw-text-[#252B42]">BESTSELLER PRODUCTS</h1>
        <p className="tw-text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-y-3">
          <Image src={First} alt="product" priority />
          <p className="tw-text-[#252B42] tw-font-bold">Graphic Design</p>
          <p className="tw-text-[#737373] tw-font-bold">English department</p>
          <div className="tw-flex tw-gap-x-2">
            <h4 className="tw-text-[#BDBDBD]">$16.48</h4>
            <h4 className="tw-text-[#23856D]">$6.48</h4>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default BestsellerProducts;
