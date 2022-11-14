import styled from "styled-components";
import Slider from "react-slick";

const BannerSection = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 64px;
`;
const Sllck = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-dots {
    bottom: 20px;
    .slick-active {
      button::before {
        color: #fff;
      }
    }
    button::before {
      color: #a6adba;
    }
  }
`;

const SliderWrapper = styled.header<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 700px;
  color: #fff;
  background: ${(props) => `url('${props.bgImage}')`};
`;

const BannerText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 700px;
  padding: 0 40px;
  background-color: rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 36px;
  }
  button {
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 12px 16px;
    font-weight: 600;
    color: #a6aaba;
    background-color: #191d24;
    border-radius: 5px;

    svg {
      margin-left: 4px;
    }
  }
`;

const ArrowWrapper = styled.div`
  width: 50px;
  height: 700px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export { Sllck, BannerSection, SliderWrapper, BannerText, ArrowWrapper };
