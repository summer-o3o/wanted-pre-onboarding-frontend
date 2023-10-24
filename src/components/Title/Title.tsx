import React from 'react';
import { TitleTypes } from '../../types/types';
import './Title.scss';

const Title = (props: TitleTypes) => {
  const { title, desc } = props;
  return (
    <>
      <strong className="tit_g">{title}</strong>
      <p className="desc_g">{desc}</p>
    </>
  );
};

export default Title;
