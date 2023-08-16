const Intro=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <img src={require("../Assets/kaizenlogo.png")} className="h-20" alt=""/>
            <p className="w-1/2 mt-10 text-center leading-tight tracking-widest text-lg font-light">Welcome to Kaizen Technology Solutions. Empowering Your Business with Cutting-edge Tech Solutions.</p>
            <button className="w-40 mt-16 border-2 rounded-3xl p-3 border-red font-semibold tracking-wider text-lg cursor-pointer">Learn more</button>
        </div>


    )
}
export default Intro