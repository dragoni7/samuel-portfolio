'use client';
import React, { useState } from 'react';
import transition from '../util/transition';

const Contact: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
      console.log('Message Successfully Sent!');
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> contact description </p>
        <div className="socials flex flex-row gap-2"></div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#04050e] border border-[#020307] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@google.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#04050e] border border-[#020307] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#04050e] border border-[#020307] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="message"
            />
          </div>
          <button
            type="submit"
            className="bg-white hover:bg-slate-500 text-black font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
          {emailSubmitted && <p className="text-green-500 text-sm mt-2"> Email Successfully Sent!</p>}
        </form>
      </div>
    </section>
  );
};

export default transition(Contact);
