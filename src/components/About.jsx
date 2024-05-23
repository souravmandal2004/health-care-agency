import React from 'react';
import aboutUsImg from "../assets/aboutUs.jpg";
import aboutUsImgSmall from "../assets/aboutUsSmall.jpg";
// import knowHistory from "../assets/knowOurImage.png";
import teamCulture from "../assets/teamCulture.jpeg";
import firstValue from "../assets/value1.png";
import secondValue from "../assets/value2.png";
import thirdValue from "../assets/value3.png";
import fourthValue from "../assets/value4.png";

function About() {
    return (
        <div name="about" className='bg-[#0a192f] w-full overflow-hidden'>

            <div className='flex bg-black mt-24 h-[600px] md:h-screen justify-between'>
                <div className='flex justify-center items-center mx-auto h-auto'>
                    <h3 className='text-white mx-auto text-5xl sm:text-6xl md:text-7xl font-extrabold'>ABOUT US</h3>
                </div>
                <img src={aboutUsImg} alt="Image of about us page" loading='lazy' className='w-[1000px] hidden md:flex'/>
            </div>

            {/* Our Values  */}
            <div className='mt-36 '>
                <h3 className='text-5xl text-[#de909e] flex justify-center items-center mb-20 font-bold'>Our Values</h3>
                
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center pl-12 ml-3 mr-3'>
                    {/* first value  */}
                    <div className=''>
                        <img src={firstValue} alt="first value" loading='lazy' className='rounded-full' />
                        <p className='text-white mt-8 p-3 text-xl'>Creative Solution</p>
                    </div>
                    {/* second value  */}
                    <div className=''>
                        <img src={secondValue} alt="first value" loading='lazy' className='rounded-full' />
                        <p className='text-white mt-8 p-3 text-xl'>People First</p>
                    </div>
                    {/* third value  */}
                    <div className=''>
                        <img src={thirdValue} alt="first value" loading='lazy' className='rounded-full' />
                        <p className='text-white mt-8 p-3 text-xl'>Collaboration</p>
                    </div>
                    {/* fourth value  */}
                    <div className=''>
                        <img src={fourthValue} alt="first value" loading='lazy' className='rounded-full' />
                        <p className='text-white mt-8 p-3 text-xl'>Transparency</p>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>

                {/*image */}
                <div className='max-w-full md:w-[1600px] rounded-lg'>
                    <img src={aboutUsImgSmall} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-lg'/>
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 mb-12 mt-12'>
                    {/* <h3 className='text-[#de909e] text-5xl font-bold'>About Us</h3> */}
                    <p className='text-white text-xl p-3'>AIML Polestar Pvt. Ltd. is a data engineering and AI/ML solutions provider helping small and medium enterprises enhance efficiencies, reduce costs and drive growth through customized data pipelines, analytics, and machine learning models tailored to specific business needs.</p>
                    <p className='text-white text-xl p-3'>At AIML Polestar Pvt Ltd, we are a leading provider of AI and machine learning solutions aimed at helping companies leverage the power of their data. With expertise in artificial intelligence, machine learning, and data engineering, we partner with organizations to develop impactful solutions tailored to their specific business needs.</p>
                    <p className='text-white text-xl p-3'>Our mission is to enable businesses to accelerate innovation, improve efficiency, and gain a true competitive edge through applied data science. We have helped over 10 clients across industries by building custom machine learning algorithms and AI-based recommendation and prediction models.</p>
                </div>
            </div>

            {/* Our team and Culture  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-full md:w-[1600px] mx-auto'>
                    <img src={teamCulture} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-lg' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6'>
                    <h3 className='text-[#de909e] mx-auto text-3xl md:text-5xl font-bold mb-12'>Our Team and Culture</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start '>We have a diverse team of data scientists, machine learning engineers, and AI experts dedicated to staying at the cutting edge of artificial intelligence capabilities in order to best serve our clients’ needs. Innovation is at the core of our culture, and we invest heavily in R&D to push boundaries and uncover new opportunities.
                        We foster a supportive, creative environment where ideas can flourish and enable our employees to do their best work every day on behalf of our partners. Contact us today to learn more about how we can collaborate to tap into the true potential of your business data.</p>
                </div>
            </div>

        </div>
    )
}

export default About;