import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 80%;
  height: 300px;
  position: relative;
  margin: 20px auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  transform: ${props => `translateX(-${props.translateX}%)`};
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LeftArrow = styled(Arrow)`
  left: 0;
`;

const RightArrow = styled(Arrow)`
  right: 0;
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const images = [    'https://picsum.photos/id/10/800/600',    'https://picsum.photos/id/20/800/600',    'https://picsum.photos/id/30/800/600',  ];

  return (
    <SliderContainer>
      <LeftArrow onClick={handlePrev}>&larr;</LeftArrow>
      <ImageContainer>
        {images.map((image, i) => (
          <Image key={i} src={image} alt="slider" translateX={100 * (i - index)} />
        ))}
      </ImageContainer>
      <RightArrow onClick={handleNext}>&rarr;</RightArrow>
    </SliderContainer>
  );
};

export default Slider;
