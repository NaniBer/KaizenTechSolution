const Footer =()=>{
    const handleClick=()=>{
        window.open("https://www.google.com/maps/place/Garad+Mall/@8.9961731,38.7593563,15z/data=!4m6!3m5!1s0x164b844af5fcdf03:0xe067e98047fad840!8m2!3d8.9961731!4d38.7593563!16s%2Fg%2F11gdkpqltp?entry=ttu","_blank")
    }
    return(
        <div className="flex lg:justify-around justify-center items-center pb-10 mt-10 lg:flex-row flex-col " id="contact">
            <div className="flex flex-col justify-center items-center">
                <img src={require("../Assets/kaizenlogo.png")} className="h-16" alt=""/>
                <p className="mt-10 tracking-wider lg:text-left text-center text-sm lg:text-base">Welcome to the Future <br></br> Welcome to Kaizen Technologies Solutions</p>
            </div>
            <div>
                <p className="lg:text-left text-center mt-5 lg:mt-0 text-sm lg:text-base">Quick Links</p>
                <span className="flex flex-col lg:mt-8 lg:text-left text-center text-sm lg:text-base">
                    <a>Home</a>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Services</a>
                </span>
            </div>
            <div className="mt-4 lg:mt-0">
                <div className="flex mb-3">
                    <img src={require("../Assets/phone.png")} className="h-8" alt=""/>
                    <p className="text-sm lg:text-base">
                          +(251) 97 827 5000<br></br> +(251) 96 594 1144 <br></br>+(251) 92 531 2037<br></br>
                          </p>


                </div>
                <div className="flex  mb-3 lg:mt:0 mt-5">
                    <img src={require("../Assets/location.png")} className="h-8 cursor-pointer" alt="" onClick={handleClick}/>
                     <p className="lg:text-lg text-base font-semibold ">Bole Garad 10th Floor</p>
                </div>
                <div className="flex lg:mt-2 mt-5">
                    <img src={require("../Assets/twitter.png")} className="h-8 mr-8" alt=""/>
                    <img src={require("../Assets/instagram.png")} className="h-8 mr-8" alt=""/>
                    <img src={require("../Assets/linkedin.png")} className="h-8 mr-8" alt=""/>
                   
                </div>
            </div>

        </div>
    )

}
export default Footer