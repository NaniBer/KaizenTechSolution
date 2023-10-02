import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import whyUs from "../Data/whyUsData.json"


const WhyUs=()=>{
    const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



    return(
        <div className="text-black text-center lg:pt-52 md:pt-36 pt-10 pb-36 bg-grey ">
            <p className="text-xl font-bold tracking-wide">Why Us</p>
            <div className="flex flex-col justify-center items-center md:mb-20 mb-10">
                <div className="mt-1.5 bg-red h-0.5 w-16"></div></div>
            
            
            <Carousel responsive={responsive} className="lg:ml-48 ml-10 lg:mt-10">
                {whyUs.map((items)=>(

                <div className=" p-3 h-80 w-72 rounded-xl text-center hover:border-2 hover:border-red ml-6">
                    <p className="text-2xl font-bold mt-5 mb-3">{items.title}</p>
                
                    <p className="mr-4 text-lg">{items.text}</p>
                    
                </div>
                ))}
                
            </Carousel>
  
        </div>
    )
}

export default WhyUs