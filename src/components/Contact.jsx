import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact() {
    return (
        <div name='contact' className='bg-[#0a192f] w-full overflow-x-hidden h-screen'>
            <div className='max-w-[1600px] p-3 mx-auto mt-36 grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* address */}
                <div className='text-white  max-w-[800px] bg-[#214392] flex flex-col justify-center items-center p-[2em] rounded-lg gap-6 hover:bg-[#0A192F] transition-all duration-300'>
                    <MdOutlineLocationOn size={50} color='#B7094C'/>
                    <h3 className='font-bold text-2xl'>Our Branches</h3>
                    <p className='text-xl font-semibold'> Yelahanka old town, Bangalore</p>
                </div>

                {/* email  */}
                <div className='text-white bg-[#214392] max-w-[800px] flex flex-col justify-center items-center p-[2em] rounded-lg gap-6 hover:bg-[#0A192F] transition-all duration-300'>
                    <MdEmail size={50} color='#B7094C'/>
                    <h3 className='text-2xl font-bold'>Email</h3>
                    <p className='font-semibold text-xl text-center'>sujoykar9369@gmail.com</p>
                </div>

                {/* phone */}
                 {/* email  */}
                <div className='text-white bg-[#214392] max-w-[800px] flex flex-col justify-center items-center p-[2em] rounded-lg gap-6 hover:bg-[#0A192F] transition-all duration-300'>
                    <MdPhone size={50} color='#B7094C'/>
                    <h3 className='text-2xl font-bold'>Phone</h3>
                    <p className='font-semibold text-xl text-center'>+91 74781 66781</p>
                </div>

            </div>
        </div>
    );
}
export default Contact;