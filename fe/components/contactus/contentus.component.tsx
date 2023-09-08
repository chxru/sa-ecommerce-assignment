
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>

      <div className="container px-2 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Contact form */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* Google Map iframe */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3967.3812615479233!2d80.1913555!3d6.0792187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1711db8038edd%3A0xb2bd1858f4089ced!2sEntrance%20of%20Faculty%20of%20Engineering%2C%20University%20of%20Ruhuna!5e0!3m2!1sen!2slk!4v1694112356404!5m2!1sen!2slk" 
          title="map"
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ filter: 'grayscale(0) contrast(1) opacity(1)' }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          ></iframe>
          {/* Contact information */}
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
              Faculty of Engineering, University of Ruhuna 
              (ඉංජිනේරු පීඨය, රුහුණු විශ්වවිද්‍යාලය,හපුගල )
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:example@email.com" className="text-blue-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We love hearing from you, our Shop customers.
            Please contact us and we will make sure to get back to you as soon as we possibly can.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            type="submit"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
