const AboutUsDetails=()=>{
    return(

        <div className="px-64">
            <p className="text-center tracking-wide mb-3 mt-24 text-2xl font-semibold">About us </p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16 mb-10"></div>
            </div>

            <div class=" ml-9 h-full">
                <img src={require("../Assets/AboutUsDetails.png")} className="h-2/4 w-1/3 pt-10 absolute z-10 " alt=""/>
                <div class="absolute right-64 border-2 border-red h-3/5 w-1/2 px-56 mr-10">
                    <p className="mt-10 ml-16 text-xl tracking-wider">Kaizen Technology Solutions is a startup technology company based in Addis Ababa, Ethiopia. We are a dynamic and innovative tech startup dedicated to providing comprehensive technology solutions to businesses of all sizes. With a team of highly skilled experts and a passion for excellence, we aim to optimize your business operations, boost productivity, and accelerate growth. With a deep commitment to excellence and a passion for continuous improvement, we are devoted to helping our clients thrive in an ever-evolving technological landscape.</p>

                </div>
            </div>
        </div> 
    )
}
export default AboutUsDetails