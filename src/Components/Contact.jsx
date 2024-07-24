import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-white to-[#b9c6ba] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/rbeqkmyb" className='flex flex-col max-w-[600px] w-full bg-white p-8 rounded-lg shadow-md'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-800'>Get in Touch!</p>
                <p className='text-gray-800 py-4'>Submit the form below or shoot us an email - lettucecookllc@gmail.com</p>
            </div>
            <input className='bg-gray-200 p-2 rounded mb-4' type="text" placeholder='Name' name='name' required />
            <input className='bg-gray-200 p-2 rounded mb-4' type="phone" placeholder='Phone Number' name='phone' required />
            <input className='bg-gray-200 p-2 rounded mb-4' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-gray-200 p-2 rounded mb-4' placeholder='Message' name="message" rows="6" required></textarea>
            <button className='text-white bg-green-600 hover:bg-green-800 px-4 py-3 rounded focus:outline-none'>Send Message</button>
        </form>
    </div>
  );
}

export default Contact;
