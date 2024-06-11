import React from 'react';
import Physio from "../assets/physiotherapy.jpg";


function Services() {
    return (
        <div name="service" className='bg-[#0a192f] w-full overflow-hidden'>

            <h3 className='text-3xl sm:text-4xl md:text-5xl text-white flex justify-center items-center underline mt-36 mb-12 font-bold'>SERVICES PROVIDED</h3>

            {/* Physiotherapy  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={Physio} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>Physiotherapy</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>As a Physiotherapist at Cure International, we focus on finding the problems through a detailed assessment of every individual elder. Over the period of time, each individual condition is focused upon and exercises are planned.

                        These natural age related conditions include reduced muscle strength, increased body fat, poorer coordination, reduced bone density, stiffer joints, and loss of flexibility, endurance and even memory.

                        These normally affect the elderly which make them more susceptible to injury and lead to disabilities. The elderly, with chronic illnesses such as heart diseases, high blood pressure, stroke, diabetes, arthritis and respiratory disorders. All of these can have a massive impact on living. However, we need not accept this as a part of aging.

                        Physiotherapy has the ability to aid the patients and help them overcome the negatives that hinder daily life of the elderly.

                        In fact , physiotherapy in our home has been seen to improve many of the factors associated with aging including strength, balance, coordination, flexibility, walking and also reduce the pain levels.

                        Ultimately, physiotherapy has been proven to help the elderly to maintain a better health, well-being, functionality and independence.</p>
                </div>
            </div>


            {/* Palliative Care  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={Physio} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>Palliative Care</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>For elderly who require hospice or palliative care, comfort care, pain management and counselling are essential to ensure a high quality of life. Our well-designed care facilities are managed by experienced, compassionate teams that provide superior hospice and palliative care according to the Cure Internation Health-Care Management Protocol at optimal cost here in Bangalore. Palliative care is more focused on providing comfort and improving the quality of life for people living with life-threatening, serious, or chronic illnesses. Palliative care improves patients’ quality of life and the lives of their loved ones. Palliative care is focused on wellness and not length of life.</p>
                </div>
            </div>


            {/* Post Operative Care  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={Physio} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>Post Operative Care</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Simply put, postoperative care is the care that a patient receives after undergoing a surgical procedure. The Postoperative period includes immediate care. The primary goal of Postoperative care is to prevent infection at the site where the surgery was performed. This will ensure that the incision heals completely. Postoperative nursing care aims to restore a patient’s mental and physical health.</p>
                </div>
            </div>

            {/* Assisted Living  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={Physio} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>Assisted Living</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Assisted Living is for seniors who can remain active and independent but require assistance. Assisted living is long-term care for loved ones that can be considered independent living and provides personal care services. Personal care can include assistance with daily activities like bathing, dressing and grooming.</p>
                </div>
            </div>

            {/* DEMENTIA & ALZHEIMER’S CARE  */}
            <div className='mt-24 flex flex-col md:flex-row gap-12 max-w-[1000px] mx-auto items-center'>
                {/*image */}
                <div className='max-w-[1000px] md:w-[30%] w-full mx-auto border border-white p-4 rounded-xl'>
                    <img src={Physio} alt="Image" loading='lazy' className='w-full h-auto rounded-xl' />
                </div>

                {/* description */}
                <div className='sm:px-10 mx-auto  flex flex-col gap-6 md:w-[80%]'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl mx-auto text-[#de909e] p-3 font-bold'>DEMENTIA & ALZHEIMER’S CARE</h3>
                    <p className='text-white text-xl p-3 text-center md:text-start'>Dementia refers to a set of symptoms that affect memory, thinking, and social abilities in a way that is so severe as to cause disruptions in your daily life. Memory loss can be caused by many different factors. Memory loss alone does not necessarily mean that you have dementia.
                        Alzheimer’s disease is the most common form of progressive dementia among older adults. However, there are many other causes. The signs and symptoms of dementia vary depending on the cause. Common symptoms include cognitive decline and psychological changes.</p>
                </div>
            </div>







        </div>
    );
}
export default Services;