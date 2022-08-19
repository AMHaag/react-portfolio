import React from 'react';
import './contentStyle.css'
import profilePic from '../../images/Ahaag-Photo.jpg';

function AboutMe() {
  return (
    <div>
      <div className='boxContainer'>
        <div className='boxLeft'>
          <img
            src={profilePic}
            id='profilePicture'
            alt='selfie of Aaron Haag'
          ></img>
        </div>
        <div className='boxRight'>
          <h2>Who is Aaron Haag</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst vestibulum rhoncus est pellentesque. Adipiscing commodo
            elit at imperdiet dui accumsan sit amet nulla. Amet venenatis urna
            cursus eget nunc scelerisque viverra. Massa sapien faucibus et
            molestie ac feugiat. Rhoncus urna neque viverra justo nec ultrices.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra.
            Lorem ipsum dolor sit amet consectetur adipiscing elit. A diam
            maecenas sed enim. Donec enim diam vulputate ut pharetra sit amet
            aliquam id. Euismod quis viverra nibh cras pulvinar mattis. Nisl
            nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Sed adipiscing
            diam donec adipiscing tristique risus nec feugiat. Pretium quam
            vulputate dignissim suspendisse in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
