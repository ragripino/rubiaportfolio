import Image from 'next/image';
import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="ml-6">
            <Image
              src={assets.profilephoto}
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, eius
              ipsum delectus deserunt dolor architecto veritatis? Hic et
              corrupti possimus nulla omnis vel suscipit excepturi, quasi dolor
              asperiores eos consequuntur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Optio adipisci corporis magni odit
              illo veniam beatae qui est minus recusandae maiores perferendis,
              esse, asperiores quis nesciunt exercitationem! Voluptatum, in
              molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Facere repudiandae maiores quos harum at, minus voluptas
              quod id voluptatibus, obcaecati ipsa nihil nam dolores fuga!
              Mollitia obcaecati sunt quis doloribus.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                  key={index}
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </li>
              ))}
            </ul>
            <h4 className="my-6 text-gray-700 font-Ovo">Tools I Use:</h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                  key={index}
                >
                  <Image src={tool} alt="" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
