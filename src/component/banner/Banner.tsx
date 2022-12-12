import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import {
  BannerSection,
  Sllck,
  SliderWrapper,
  BannerText,
  ArrowImage,
  ArrowWrapper,
} from './Banner.styles';
import { items } from '../../mock/bannerData';
import { useNavigate } from 'react-router-dom';
import { Inner, MoreViewButton } from '../../style';

function SampleNextArrow(props: any) {
  const { _, style, onClick } = props;
  return (
    <ArrowWrapper onClick={onClick} arrow='next'>
      <BiRightArrow style={{ ...style, display: 'block' }} />
    </ArrowWrapper>
  );
}

function SamplePrevArrow(props: any) {
  const { _, style, onClick } = props;
  return (
    <ArrowWrapper onClick={onClick} arrow='prev'>
      <BiLeftArrow size={24} style={{ ...style, display: 'block' }} onClick={onClick} />
    </ArrowWrapper>
  );
}

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.getAttribute('data-type');
    navigate(`/${type}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoPlay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <BannerSection>
      <Sllck {...settings}>
        {items.map((item, idx) => (
          <SliderWrapper key={idx} bgImage={item.image}>
            <BannerText>
              <Inner>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <MoreViewButton onClick={handleClick} data-type={item.type}>
                  바로 가기
                  <ArrowImage />
                </MoreViewButton>
              </Inner>
            </BannerText>
          </SliderWrapper>
        ))}
      </Sllck>
    </BannerSection>
  );
};

export default Banner;
