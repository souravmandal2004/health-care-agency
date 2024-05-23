import React, { useState, useEffect } from 'react';

function Training() {
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
        <div name="training" className='bg-[#0a192f] w-full overflow-x-hidden'>
            {/* AiML training  */}
            <div className='mt-36 max-w-[1000px] mx-auto'>
                <h3 className='text-5xl text-white flex justify-center items-center mt-36 underline mb-24 font-bold'>TRAININGS</h3>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-24 gap-6'>

                    {/* Render trainings based on screen size */}
                    {(showAll || !showButton || !isMobile) ? (
                        // Render all trainings
                        <>
                            <TrainingCard title="Python for AI" />
                            <TrainingCard title="Computer Vision" />
                            <TrainingCard title="Natural Language Processing" />
                            <TrainingCard title="LLM and GenAI Implementation" />
                            <TrainingCard title="Reinforcement Learning" />
                            <TrainingCard title="MLOPs and Model Ops" />
                            <TrainingCard title="Machine Learning Modeling" />
                            <TrainingCard title="Deep Learning" />
                            <TrainingCard title="Advance Artificial Intelligence" />
                            <TrainingCard title="Business Statistics and Mathematical Modeling" />
                            <TrainingCard title="Optimization and Simulation" />
                            <TrainingCard title="AI for Business Leaders" />
                            <TrainingCard title="AI Prohect Life Cycle" />
                            <TrainingCard title="Cloud Computing with AWS/Azure/GCP"/>
                        </>
                    ) : (
                        // Render only the first three trainings initially
                        <>
                            <TrainingCard title="Python for AI" />
                            <TrainingCard title="Computer Vision" />
                            <TrainingCard title="Natural Language Processing" />
                        </>
                    )}
                </div>
                {/* Dropdown button to show all trainings for mobile */}
                {showButton && !showAll && isMobile && (
                    <div className="flex justify-center mt-8 sm:hidden">
                        <button onClick={handleShowAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Show All Trainings
                        </button>
                    </div>
                )}

                {/* Show Less button for mobile */}
                {showAll && isMobile && (
                    <div className="flex justify-center mt-8 sm:hidden">
                        <button onClick={handleShowLess} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// Component for rendering individual training cards
function TrainingCard({ title }) {
    return (
        <div className='bg-[#5A9BD5] border-white border-2 p-[2em] rounded-lg hover:bg-[#214392] transition duration-300 cursor-pointer'>
            <p className='text-white font-semibold text-xl'>{title}</p>
        </div>
    );
}

export default Training;
