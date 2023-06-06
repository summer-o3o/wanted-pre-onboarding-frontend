import React from 'react';
import './Title.scss';

const Title = ({ title, desc }) => {
  return (
    <>
      <strong className="tit_g">{title}</strong>
      <p className="desc_g">{desc}</p>
    </>
  );
};

export default Title;
