import React from 'react';
import aboutUsImg from "../assets/aboutUs.jpg";
import teamCulture from "../assets/teamCulture.jpeg";

function About() {
    return (
        <div name="about" className='bg-[#0a192f] w-full overflow-hidden'>

            <div className='flex bg-black mt-24 h-[600px] md:h-screen justify-between'>
                <div className='flex justify-center items-center mx-auto h-auto'>
                    <h3 className='text-white mx-auto text-5xl sm:text-6xl md:text-7xl font-extrabold'>ABOUT US</h3>
                </div>
                <img src={aboutUsImg} alt="Image of about us page" loading='lazy' className='w-[1000px] hidden md:flex' />
            </div>

            {/* Our Mission */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-full md:w-[1600px] mx-auto'>
                    <img src={teamCulture} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-lg' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6'>
                    <h3 className='text-[#de909e] mx-auto text-3xl md:text-5xl font-bold'>Our Mission</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start '>To provide high quality care to the elderly which leads to a high quality of life for them.
                    At Cure International Health-Care, we believe serving the old and needy is comparable to serving the almighty. With this thought, we have attempted to bring happiness and satisfaction to the old and needy and in the process, we feel we have fulfilled our mission.</p>
                </div>
            </div>

        </div>
    )
}

export default About;