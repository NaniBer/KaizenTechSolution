const ComingSoon = () => {
  return (
    <div class="flex flex-col items-center h-screen bg-black text-white lg:space-y-72 ">
      <img src={require("../Assets/klogo4.png")} className="h-24" alt="" />
      <div class="flex flex-col justify-center items-center relative w-9/12  ">
        <img
          src={require("../Assets/rocket.png")}
          className="lg:h-80 h-64  lg:absolute left-10 xl:left-80 lg:mt-0 mt-20 "
          alt="Rocket Image"
        />
        <div>
          <p className="lg:text-6xl text-3xl font-bold tracking-wide text-center lg:mt-0 mt-10">
            Coming Soon
          </p>
          <p className="mt-10 text-lg text-center">
            <span className="text-red text-xl">
              www.kaizenethiopia.com <br />
            </span>
            is under construction. <br />
            We will be here with our new site.
            <br />
            Please come back soon
          </p>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
