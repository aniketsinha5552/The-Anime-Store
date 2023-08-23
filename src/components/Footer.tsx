import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <div className="mt-2 flex md:flex-row flex-col justify-evenly bg-slate-300 p-2">
      <div className="text-2xl font-bold flex flex-col justify-center align-middle">&copy; The Anime Store</div>
      <div className="flex-[0.2]">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <ul className="mt-2">
          <li className="text-sm mb-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </li>
          <li className="text-sm mb-1">aniketsinha5552@gmail.com</li>
          <li className="text-sm mb-2">123-4567-890</li>
        </ul>
      </div>
      <div className="flex-[0.2]">
        <h2 className="text-xl font-bold">About Us</h2>
        <ul className="mt-2">
          <li className="text-sm mb-1">
            Careers
          </li>
          <li className="text-sm mb-1">Products</li>
          <li className="text-sm mb-2">Contact</li>
        </ul>
      </div>
      <div className="flex-[0.2]">
        <h2 className="text-xl font-bold">Social</h2>
        <div className="mt-2 flex flex-row">
          <p className="text-2xl m-1">
          <Icon icon="mdi:instagram" />
          </p>
          <p className="text-2xl m-1"><Icon icon="ic:baseline-facebook" /></p>
          <p className="text-2xl m-1"><Icon icon="mdi:linkedin" /></p>
        </div>
      </div>
    </div>
  );
};
