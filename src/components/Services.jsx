import React from 'react';
import dataPipeline from "../assets/dataPipeline.jpg";
import machinLearning from "../assets/machineLearning.jpg";
import realTimeData from "../assets/realTimeDataIntelligence.jpg";
import mlops from "../assets/mlops.jpg";
import recommendation from "../assets/recommendation.jpg";
import nlp from "../assets/nlp.webp";
import cloudIntegration from "../assets/cloudIntegration.webp";
import webScale from "../assets/webScale.jpeg";
import security from "../assets/security.jpeg";
import etl from "../assets/etl.png";
import dataQuality from "../assets/dataQuality.png";


function Services() {
    return (
        <div name="service" className='bg-[#0a192f] w-full overflow-hidden'>

            <h3 className='text-3xl sm:text-4xl md:text-5xl text-white flex justify-center items-center underline mt-36 mb-12 font-bold'>SERVICES PROVIDED</h3>


            {/* Data Pipeline  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={dataPipeline} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>Data Pipeline</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Craft Seamless Data Flows: Our data pipeline services empower you to effortlessly move, transform, and manage data from diverse sources. Whether structured or unstructured, batch or real-time, we design and implement pipelines that ensure a continuous and reliable flow of data. By optimizing data movement and transformation, we enable you to derive real-time insights and make informed decisions faster.</p>
                </div>
            </div>


            {/* Machine Learning Mastery */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={machinLearning} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] font-bold mx-auto p-3 text-2xl sm:text-3xl md:text-4xl'>Machine Learning Mastery</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Empower with Custom Models: Harness the power of machine learning to revolutionize your business processes. Our machine learning experts design and develop custom models tailored to your specific needs. By automating tasks and predicting future outcomes, these models optimize efficiency and strategic planning. From recommendation engines to fraud detection, we transform your data into predictive power.</p>
                </div>
            </div>


            {/* Real-time Data Intelligence */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={realTimeData} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto p-3 text-2xl sm:text-3xl md:text-4xl font-bold'>Real-time Data Intelligence</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Instant Insights, Timely Actions: In today's fast-paced world, real-time insights are crucial for effective decision-making. Our real-time data intelligence solutions provide you with instant access to actionable insights as data flows in. From real-time dashboards to automated alerts, you can respond promptly to changing scenarios, seize opportunities, and mitigate risks.</p>
                </div>
            </div>

            {/* MLOps Excellence */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white pl-4 pr-4 pb-6 rounded-xl mt-10 pt-4'>
                    <img src={mlops} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>MLOps Excellence</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Seamless Model Management: Our MLOps expertise bridges the gap between machine learning development and operations. We ensure the seamless deployment, monitoring, and management of your machine learning models throughout their lifecycle. By maintaining optimal performance and accuracy, we help you achieve sustained success with your Al initiatives.</p>
                </div>
            </div>


            {/* Natural Language Processing (NLP) */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white rounded-xl mt-14 p-4'>
                    <img src={nlp} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl p-3 md:text-4xl font-bold'>Natural Language Processing (NLP)</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Instant Insights, Timely Actions: In today's fast-paced world, real-time insights are crucial for effective decision-making. Our real-time data intelligence solutions provide you with instant access to actionable insights as data flows in. From real-time dashboards to automated alerts, you can respond promptly to changing scenarios, seize opportunities, and mitigate risks.</p>
                </div>
            </div>

            {/* Recommendation Systems */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl mt-10'>
                    <img src={recommendation} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Recommendation Systems</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Personalized Experiences: Enhance customer experiences and engagement through personalized recommendations. Our recommendation systems analyze user behavior to suggest products, content, or services tailored to individual preferences. By delivering relevant offerings, you deepen customer loyalty and drive conversions.</p>
                </div>
            </div>

            <h3 className='text-white flex justify-center items-center mt-36 underline mb-12 font-bold mx-auto text-center text-3xl p-3 sm:text-4xl md:text-5xl'>Data Engineering Services</h3>

            {/* Data Pipelines */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={dataPipeline} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Data Pipeline</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Craft Seamless Data Flows: Our data pipeline services empower you to effortlessly move, transform, and manage data from diverse sources. Whether structured or unstructured, batch or real-time, we design and implement pipelines that ensure a continuous and reliable flow of data. By optimizing data movement and transformation, we enable you to derive real-time insights and make informed decisions faster.</p>
                </div>
            </div>

            {/* Web-Scale Automation */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={webScale} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Web-Scale Automation</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Unleash Operational Efficiency: Manual tasks can slow down your operations. Our web-scale automation solutions eliminate bottlenecks by automating data-related processes from ingestion to deployment. This not only boosts efficiency but also enables seamless scaling, allowing your systems to adapt dynamically to changing demands without human intervention.</p>
                </div>
            </div>


            {/* Security & Governance */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl mt-6'>
                    <img src={security} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Security & Governance</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Fortify Data Assets: In the age of data breaches and compliance requirements, data security and governance are paramount. We provide end-to-end security solutions that safeguard your data throughout its lifecycle. Our robust governance frameworks ensure that your data is managed ethically, accurately, and in compliance with industry regulations.</p>
                </div>
            </div>

            {/* Cloud Integration */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={cloudIntegration} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Cloud Integration</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>End to end escrow automation functionality, from contract management to transaction and party execution. Stitched together upstream and downstream API journeys to integrate with the bank’s core systems and automate accounting. Automated reconciliation, budget tracking and reporting including offering lean operations teams the ability to manage exceptions.</p>
                </div>
            </div>

            {/* ETL Expertise */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={etl} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>ETL Expertise</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Mastering Data Transformation: Extract, transform, load (ETL) processes are where raw data transforms into actionable insights. Our ETL expertise ensures that data is extracted accurately, transformed comprehensively, and loaded seamlessly into target systems. This ensures the quality and consistency of data for downstream consumption.</p>
                </div>
            </div>


            {/* Data Quality Management */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl mt-10'>
                    <img src={dataQuality} alt="Image" loading='lazy' className='w-full h-auto md:max-w-[800px] md:w-full rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-[#de909e] mx-auto text-2xl sm:text-3xl md:text-4xl font-bold'>Data Quality Management</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Data Accuracy and Consistency: Poor data quality can lead to costly mistakes and inaccurate insights. Our data quality management strategies encompass data profiling, cleansing, enrichment, and monitoring. By maintaining data accuracy and consistency, we prevent errors from propagating downstream and empower you to make sound decisions.</p>
                </div>
            </div>


        </div>
    );
}
export default Services;