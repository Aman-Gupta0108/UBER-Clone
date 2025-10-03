function CaptainDetails(){
    return(<>
      <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-3">
                <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMPK5iFewnfucVwFUkuWLEgFNwdoDvItbtA&s" alt="" />
                <h4 className="text-lg font-medium">harsh patel</h4>
            </div>
            <div>
                <h4 className="text-xl font-semibold">$285.20</h4>
                <p className="text-sm text-gray-600">Earned</p>
            </div>
                    </div>

                    <div className="flex p-6 bg-gray-100 mt-6 rounded-xl justify-center gap-5 items-start ">
                        <div className="text-center"> 
                            <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                            <h5 className="text-lg font-medium" >10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>

                        <div className="text-center">
                            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                            <h5 className="text-lg font-medium">10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>

                        <div className="text-center">
                            <i className="text-3xl mb-2 font-thin ri-booklet-fill"></i>
                            <h5 className="text-lg font-medium">10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>
                    </div>
    </>)
}
export default CaptainDetails;