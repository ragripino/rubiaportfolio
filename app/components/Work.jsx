import { assets, workData } from '@/assets/assets';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portifolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latasted Work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        molestias suscipit! Placeat, error ut. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quam, doloremque.
      </p>

      <div>
        {workData.map(project, index)=>(
          <div key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <Image src={assets.send_icon} alt='send icon' className='w-5' />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
