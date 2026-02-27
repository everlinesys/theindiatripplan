import Button from "./Button";
import { useState, useEffect } from "react"; 

export default function Hero() {
  const images = ["rjstan.jpg", "kllandscape.jpg"]; // Add your images
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <section
        className="h1 lg:rounded hero-bg lg:mx-[10vw] px-4 flex justify-center items-center text-center md:text-center lg:text-center  lg:px-40 overflow-hidden md:px-20 md:py-10 h-[50vh] lg:h-[60vh]"
        id="Home"
        style={{
          position: "relative",
          marginBottom: "20px",
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center max-w-[700px] relative text-white">
          <div className="text-4xl font-semibold  leading-tight">
            Your trusted travel partner across india
            <br />
            {/* <span className="text-white">You just Chill and Relax.</span> <br /> */}
          </div>
          {/* <p className="text-sm mt-6 text-gray-100 max-w-lg lg:text-base ">
            We ensure your systems run efficiently, so you can enjoy the perfect
            chill without the hassle.
          </p> */}
          <div className="flex gap-2 mt-8 justify-center cursor-pointer">
            {/* <Button href="tel:+9197471 01045" isPrimary>
              Call Now
            </Button> */}
            <Button href="/explore" className="text-red-500 z-[999] cursor-pointer">Explore plans</Button>
          </div>
        </div>
      </section>

      <section
        className="hidden rounded-lg flex justify-center items-center text-center lg:grid lg:grid-cols-3 h-screen overflow-hidden"
        id="Home"
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          maxHeight: "200px",
          marginBottom: "20px",
        }}
      ></section>
    </>
  );
}
