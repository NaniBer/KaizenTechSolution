const TopComponent=()=>{
    return(
        <div className="bg-black h-20 pt-5 pr-20 flex justify-between">

            <img src={require("../Assets/klogo3.png")} className="h-10 ml-20" alt=""/>
            <div className=" text-white text-lg flex ">
                <p className="mr-8">Home</p>
                <p className="mr-8">About</p>
                <p className="mr-8">Portfolio</p>
                <p className="mr-8">Contact</p>
            </div>
        </div>

    )
}
 
export default TopComponent 