import React from 'react';
import matureWomanImg from '../../assets/image.jpg'; // Replace with your actual image paths
import doctorImg from '../../assets/doctor.jpg'; // Replace with your actual image paths
import mentalHealthImg from '../../assets/mental.jpg'; // Replace with your actual image paths
import Stat from "../../assets/medical-health.jpg";
import { IoIosArrowForward } from 'react-icons/io';

const ImageSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-4 shadow-md rounded-lg">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-8xl font-bold">Wellness
            within   reach
            at your fingertips
          </h1>

          <p className="mt-2 text-gray-600">
            Promoting peace, balance, and holistic
            wellness through personalized and compassionate care solutions.
          </p>
          <button className="mt-3 bg-black text-white text-sm px-2 py-1 rounded-full">Read More</button>
        </div>
        <div className="flex gap-8">
          <img
            src={matureWomanImg}
            alt="A mature woman smiling"
            className="rounded-lg w-60 h-60 object-cover"
          />
          <img
            src={doctorImg}
            alt="A doctor with a stethoscope"
            className="rounded-lg w-60 h-60 object-cover"
          />
        </div>
      </div>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Statistics</h2>
          <img
            src={mentalHealthImg}
            alt="Mental health support illustration"
            className="h-60 w-full rounded-lg"
          />
          <p className="text-blue-500 text-4xl font-bold"></p>
          <p className="text-gray-600"></p>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Mental Health Support</h2>
          <img
            src={Stat}
            alt="Mental health support illustration"
            className="h-60 w-full rounded-lg"
          />
        </div>

        <div className="bg-slate-50 p-6 shadow-md rounded-lg text-center flex-right">
          <h2 className="text-2xl font-bold mb-2">Telehealth Solutions</h2>
          <p className="text-gray-600">
            Our platform connects you with trusted healthcare professionals, providing personalized and reliable care for your wellness.
          </p>
          <button className="mt-6 bg-slate-100 text-black px-2 py-1 rounded-full flex items-right ml-94 text-sm">
            Explore
            <IoIosArrowForward className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImageSection;
