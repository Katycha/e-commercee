import SmallBg from "../assets/product-slide-1.jpg";
import Image from "next/image";
const HeroMobile = () => {
  return (
    <div className="tw-block md:tw-hidden tw-h-[753px]">
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
        <Image src={SmallBg} alt="Picture of the author" priority />
        <div className="tw-mt-[-500px] tw-flex tw-flex-col tw-gap-y-6 tw-text-white tw-font-bold tw-justify-center tw-items-center">
          <h6>SUMMER 2020</h6>
          <h6>NEW</h6>
          <h6>COLLECTION</h6>
          <p>
            We know how large objects <br /> will act, but things on a <br />
            small scale.
          </p>
          <button className="tw-bg-[#2DC071] tw-px-10 tw-py-4 tw-rounded-md tw-text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;