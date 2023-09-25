const Footer =()=>{
    const handleLocation=()=>{
        window.open("https://www.google.com/maps/place/Garad+Mall/@8.9961731,38.7593563,15z/data=!4m6!3m5!1s0x164b844af5fcdf03:0xe067e98047fad840!8m2!3d8.9961731!4d38.7593563!16s%2Fg%2F11gdkpqltp?entry=ttu","_blank")
    }
    const handleTwitter=()=>{
        window.open("https://twitter.com/kaizenEthiopia?t=PDZbkLZmIqVyqi3ef8qJAg&s=35","_blank")
    }
    const handleInsta=()=>{
        window.open("https://www.instagram.com/kaizen__tech/","_blank")
    }
    const handleLinkedIn=()=>{
        window.open("https://www.linkedin.com/company/kaizen-tech-solutions","_blank")
    }


    return(
        <div className="flex lg:justify-around justify-center items-center pb-10 mt-10 lg:flex-row flex-col " id="contact">
            <div className="flex flex-col justify-center items-center">
                <img src={require("../Assets/klogo6.png")} className="lg:h-24 h-16" alt=""/>
                <p className="mt-3 tracking-wider lg:text-left text-center text-sm lg:text-base">Welcome to the Future <br></br> Welcome to Kaizen Technologies Solutions</p>
            </div>
            <div>
                <p className="lg:text-left text-center mt-5 lg:mt-0 text-sm lg:text-base">Quick Links</p>
                <span className="flex flex-col lg:mt-8 lg:text-left text-center text-sm lg:text-base">
                    <a href="/#home" className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red">Home</a>
                    <a href="/#about" className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red">About</a>
                    <a href="/portfolio" className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red">Portfolio</a>
                    <a>Services</a>
                    <a href="/ourteam" className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red">Our team</a>
                    



        
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
                    <img src={require("../Assets/location.png")} className="h-8 cursor-pointer" alt="" onClick={handleLocation}/>
                     <p className="lg:text-lg text-base font-semibold ">Bole Garad 10th Floor</p>
                </div>
                <div className="flex lg:mt-2 mt-5">
                    <img src={require("../Assets/twitter.png")} className="h-8 mr-8 cursor-pointer" alt=""  onClick={handleTwitter}/>
                    <img src={require("../Assets/instagram.png")} className="h-8 mr-8 cursor-pointer" alt="" onClick={handleInsta}/>
                    <img src={require("../Assets/linkedin.png")} className="h-8 mr-8 cursor-pointer" alt="" onClick={handleLinkedIn}/>
                   
                </div>
            </div>

        </div>
    )

}
export default Footer