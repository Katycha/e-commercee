import BigBg from "../assets/shop-hero-1-product-slide-1.jpg";
import Image from "next/image";
const HeroDesctop = () => {
  return (
    <div
      className="tw-hidden md:tw-block"
    >
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <Image src={BigBg} alt="Picture of the author" priority />
        <div className="tw-mt-[-400px] tw-flex tw-flex-col tw-gap-y-7 tw-text-white tw-font-bold tw-justify-start tw-items-center">
          <h6>SUMMER 2020</h6>
          <h6>NEW COLLECTION</h6>
          <p>
            We know how large objects will act, <br /> but things on a small
            scale.
          </p>
          <button className="tw-bg-[#2DC071] tw-px-10 tw-py-4 tw-rounded-md tw-text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroDesctop;