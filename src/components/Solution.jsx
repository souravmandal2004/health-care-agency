import React, { useState, useEffect } from 'react';
import productImg from "../assets/product.jpg";

function Solution() {
    const [showAll, setShowAll] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
        setShowButton(false);
    };

    const handleShowLess = () => {
        setShowAll(false);
        setShowButton(true);
    };

    return (
        <div name="solution" className='bg-[#0a192f] w-full overflow-x-hidden'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl text-white flex justify-center items-center mt-36 underline mb-12 font-bold'>SOLUTIONS DELIVERED</h3>
            
            {/* Use Case Delivered */}
            <div className='mt-36 max-w-[1000px] mx-auto'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-24 lg:grid-cols-4 gap-6 text-xl'>
                    {/* Render solutions based on screen size */}
                    {(showAll || !showButton || !isMobile) ? (
                        // Render all solutions
                        <>
                            <SolutionCard title="GenAI Implementation for Operational Efficiency" />
                            <SolutionCard title="Data Lake Design for a Retail Platform" />
                            <SolutionCard title="Transaction Fraud Detection" />
                            <SolutionCard title="Early Settlement Prediction" />
                            <SolutionCard title="New Customer Acquisition" />
                            <SolutionCard title="Electrical Equipment Failure Prediction" />
                            <SolutionCard title="Lifespan calculation of Thermal Component" />
                            <SolutionCard title="Patient 360 for Leading Healthcare Institution" />
                            <SolutionCard title="SQLGpt for Operational Efficiency" />
                            <SolutionCard title="Medical Report Analysis using GenAI" />
                            <SolutionCard title="Personal Health Assistance using GenAI" />
                            <SolutionCard title="Patient Health Score" />
                        </>
                    ) : (
                        // Render only three solutions initially
                        <>
                            <SolutionCard title="GenAI Implementation for Operational Efficiency" />
                            <SolutionCard title="Data Lake Design for a Retail Platform" />
                            <SolutionCard title="Transaction Fraud Detection" />
                        </>
                    )}
                </div>
                {/* Dropdown button to show all solutions for mobile */}
                {showButton && !showAll && isMobile && (
                    <div className="flex justify-center mt-8 sm:hidden">
                        <button onClick={handleShowAll} className="bg-blue-500 hover:bg-[#0A192F] text-white font-bold py-2 px-4 rounded">
                            Show All Solutions
                        </button>
                    </div>
                )}

                {/* Show Less button for mobile */}
                {showAll && isMobile && (
                    <div className="flex justify-center mt-8 sm:hidden">
                        <button onClick={handleShowLess} className="bg-blue-500 hover:bg-[#0A192F] text-white font-bold py-2 px-4 rounded">
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// Component for rendering individual solution cards
function SolutionCard({ title }) {
    return (
        <div className='flex flex-col justify-center text-center items-center border-white border-2 p-[2em] rounded-lg hover:bg-[#214392] transition duration-300 cursor-pointer'>
            <p className='text-white font-semibold'>{title}</p>
        </div>
    );
}

export default Solution;
