import React from "react"
const LocationSearchPanel = (props) =>{
console.log(props)
    // sample array for loccation 

    const locations = [
        "noida sector 122",
        "Grater noida sector beta",
        "noida sector 62"
    ] 

    return(
        <div> 

        {/* this is just a sample data  */}

        {
        locations.map((value , index )=>(
            <div onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} key={index} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium"> {value}</h4>
            </div>
        ))
        
        }

        

 
 
 


        </div>
    )
}
export default LocationSearchPanel;