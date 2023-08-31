const AboutUsDetails=()=>{
    return(

        <div className="lg:px-64">
            <p className="text-center tracking-wide mb-3 lg:mt-24 m-12 text-2xl font-semibold">About us </p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16 mb-10"></div>
            </div>

            <div class=" ml-9 h-full">
                <img src={require("../Assets/AboutUsDetails.png")} className="lg:h-2/4 lg:w-1/3 pt-10 absolute z-10 hidden lg:block" alt=""/>
                <div class="lg:absolute lg:right-64 border-2 border-red lg:h-3/5 lg:w-1/2 lg:px-56 mr-10 flex justify-center items-center">
                    <p className="mt-10 lg:ml-16 m-8 lg:m-0 lg:text-xl tracking-wider">Kaizen Technology Solutions is a startup technology company based in Addis Ababa, Ethiopia. We are a dynamic and innovative tech startup dedicated to providing comprehensive technology solutions to businesses of all sizes. With a team of highly skilled experts and a passion for excellence, we aim to optimize your business operations, boost productivity, and accelerate growth. With a deep commitment to excellence and a passion for continuous improvement, we are devoted to helping our clients thrive in an ever-evolving technological landscape.</p>

                </div>
            </div>
        </div> 
    )
}
export default AboutUsDetails