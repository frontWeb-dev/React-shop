import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  BannerSection,
  Sllck,
  SliderWrapper,
  BannerText,
  ArrowWrapper,
} from "./Banner.styles";

interface slickProps {
  children: React.ReactNode;
  className?: string;
  autoplay?: boolean | number;
  speed?: number;
  loop?: boolean;
}

interface itemsProps {
  image: string;
  name: string;
  title: string;
  text: string;
}

const items: itemsProps[] = [
  {
    image: "public/assets/asset 0.jpeg",
    name: "이미지01",
    title: "신선한 식품",
    text: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
  },
  {
    image: "public/assets/asset 1.jpeg",
    name: "이미지02",
    title: "물빠진 청바지!",
    text: "이제 막 도착한 패션 청바지를 구경해 보세요.",
  },
  {
    image: "public/assets/asset 2.jpeg",
    name: "이미지03",
    title: "신속한 업무처리!",
    text: "다양한 디지털 상품을 둘러보세요.",
  },
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowWrapper onClick={onClick}>
      <BiRightArrow style={{ ...style, display: "block" }} />
    </ArrowWrapper>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowWrapper>
      <BiLeftArrow
        size={24}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    </ArrowWrapper>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoPlay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <BannerSection>
      <Sllck {...settings}>
        {items.map((item, idx) => (
          <SliderWrapper bgImage={item.image}>
            <BannerText>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <button>
                바로 가기
                <BsArrowRightShort size={20} />
              </button>
            </BannerText>
          </SliderWrapper>
        ))}
      </Sllck>
    </BannerSection>
  );
};

export default Banner;
