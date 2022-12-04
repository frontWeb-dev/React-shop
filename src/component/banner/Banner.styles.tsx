import styled from 'styled-components';
import Slider from 'react-slick';

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
  background-color: rgba(0, 0, 0, 0.4);

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
  }
`;

const ArrowImage = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  background: url('/assets/asset 20.svg') no-repeat;
  filter: invert(90%) sepia(63%) saturate(5038%) hue-rotate(180deg) brightness(79%) contrast(81%);
`;

const ArrowWrapper = styled.div<{ arrow: string }>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.arrow === 'prev' ? 0 : 'auto')};
  right: ${(props) => (props.arrow === 'next' ? 0 : 'auto')};
  width: 50px;
  height: 700px;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export { Sllck, BannerSection, SliderWrapper, BannerText, ArrowImage, ArrowWrapper };
