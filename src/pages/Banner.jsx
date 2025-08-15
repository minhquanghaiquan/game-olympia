import { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export default function Banner() {
  const images = [banner1, banner2, banner3]; // dùng biến đã import

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

return (
<div className="w-full h-80 md:h-[26rem] lg:h-[30rem] overflow-hidden relative">
    <img
      src={images[index]}
      alt="Banner"
      className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30" />
  </div>
);


}
