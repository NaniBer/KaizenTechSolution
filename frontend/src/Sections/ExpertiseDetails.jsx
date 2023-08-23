const detailsList=[
    {
        title: 'Custom Software Development',
        description:'We specialize in developing customized software solutions that align perfectly with your business objectives. Our team of talented developers and designers collaborate closely with you to create intuitive, scalable, and secure software applications'
    },
    {
        title:'Web and Mobile App Development',
        description: 'In the rapidly evolving digital landscape, having a strong online presence is essential. We leverage the latest technologies to create responsive, user-friendly web and mobile applications that enhance your brand visibility and engage your target audience'
    },
    {
        title:'Cloud Solutions',
        description: 'Embrace the power of the cloud with our advanced cloud solutions. We help you migrate your business processes to the cloud, providing scalability, flexibility, and improved efficiency. Our experts will guide you through the entire process, ensuring a seamless transition'
    },
    {
        title:'IT Consulting',
        description:'Our experienced consultants are here to provide strategic guidance and support to help you make the right technology decisions. We analyze your current infrastructure, identify areas for improvement, and recommend the most effective solutions to optimize your IT environment'
    },
    {
        title:'Graphics Design',
        description: 'Our dedicated team of skilled designers combines creativity, technical proficiency, and a deep understanding of visual communication to bring your ideas to life'
    }
]
const ExpertiseDetails=()=>{
    return(
        <div className="bg-black text-white pt-10 pb-15 px-72 ">
            <p className="text-xl text-center tracking-wide">Our Expertise</p>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-1.5 bg-red h-0.5 w-16"></div>
                <div className="mt-10 ">
                {detailsList.map((items)=>(

                <div className=" mb-5  p-6 text-lg">
                   <p className=" font-semibold"> <span className="bg-red rounded-full h-3 w-3 inline-block mr-2"></span>
                    {items.title}
                    <span className="text-red"> :</span>
                    </p>
                    <p className="mb-6 mt-2 tracking-wider">{items.description}</p>
                        
                    
                </div>
                ))}
            </div>

                </div>
        </div>
    )

}
export default ExpertiseDetails