export default function Home() {
  return (
    <>
      <div className="h-screen relative">
        <img
          className="w-16 absolute left-5 top-5 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/500px-Uber_logo_2018.svg.png"
          alt=""
        />

        <div className="h-screen ">
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className="bg-white absolute buttom-0 w-full p-5">
            <div className="" >
                <h4 className="text-2xl font-semibold">Find a trip</h4>
                <form action="">
                    <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a Pick-up location" />
                    <input className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter Your destination" />
                </form>
            </div>
            <div className="h-0 "> 

            </div>
        </div>
      </div>
    </>
  );
}
