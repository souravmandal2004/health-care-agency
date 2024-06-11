import React from 'react'
import HealthCare from "../assets/health-care.png";

function Home() {
    return (
        <div name="home" className='bg-[#0a192f]  w-full overflow-x-hidden bg-center h-screen sm:bg-contain sm:bg-left' style={{ backgroundImage: `url(${HealthCare})`, backgroundSize: 'cover', opacity: '1'}}>

                <div className='max-w-[1600px] flex flex-col mx-auto justify-center h-full'>
                    <div className='flex flex-col md:flex-row gap-12'>

                        {/* description */}
                        <div className='sm:px-10 p-3'>
                            <h3 className='text-green-500 text-5xl md:text-7xl font-extrabold font-poppins p-4'>Cure International Health-Care</h3>
                            <p className='text-[#D87A00] text-2xl md:text-3xl font-semibold mt-6 bg-[#0e1d3e] rounded-lg p-3'>Welcome to Cure International Health-Care. We offer 
                            <span className='text-yellow-300'> exceptional care and advanced medical services. </span></p>
                        </div>

                        {/*image */}
                        <div className='max-w-full md:w-[1600px] h-auto mx-auto'>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Home;