// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='text-center p-6 py-20 lg:pg-32 w-full overflow-hidden' id='contact'>
//         <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
//         Contact<span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
//       </h1>
//       <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>
//         Hear what our satisfied clients have to say about their experience with us.
//       </p>

//       <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
//         <div>
//             <div className='w-full md:w-1/2 text=left'>
//                 You Name
//                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
//             </div>

//             <div className='w-full md:w-1/2 text=left'>
//                 You Name
//                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
//             </div>

//             <div className='w-full md:w-1/2 text=left'>
//                 You Name
//                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
//             </div>

//             <div className='w-full md:w-1/2 text=left'>
//                 You Name
//                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
//             </div>
//         </div>
//         <div className='my-6 text-left'>
//             Message
//             <textarea
//             className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="massage" placeholder='Message' required></textarea>
//         </div>
//         <button className='bg-blue-600 text-white py-12 px-12 mb-10 rounded'>send Massge</button>
//       </form>  
//     </div>
//   )
// }

// export default Contact


import React from 'react';
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "ad5421e2-4aaf-4c45-9281-ed11d8898a96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" ");
      alert("form Submitted SuccessFully")
      toast.success("Form Submitted Successfully")
      event.target.reset();

    } else {
      console.log("Error", data);
      alert(data.message)
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
        Contact <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>
        Hear what our satisfied clients have to say about their experience with us.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
         <div>
             <div className='w-full md:w-1/2 text=left'>
                 You Name
                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
            </div>

          <div className='w-full md:w-1/2 text=left'>
                 You Name
                 <input className='w-full border border-garay-300 rounded py-3 px-4 mt-2' type="text"  name='Name' placeholder='Your Name' required/>
             </div>
        </div>

        <div className='my-6 text-left'>
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name="Message" placeholder='Message' required></textarea>
        </div>
        <button type='submit' className='bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition'>
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
