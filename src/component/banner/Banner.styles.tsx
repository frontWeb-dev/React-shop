import styled from 'styled-components';
import Slider from 'react-slick';

const BannerSection = styled.div`
  position: relative;
  width: 100%;
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
        opacity: 1;
      }
    }
    button::before {
      color: #a6adba;
      opacity: 1;
    }
  }
`;

const SliderWrapper = styled.header<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 700px;
  color: #fff;
  background: ${(props) => `url('${props.bgImage}') no-repeat bottom / cover`};

  @media (max-width: 1023px) {
    height: 220px;
  }
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

  @media (max-width: 1023px) {
    height: 220px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 8px;

    @media (max-width: 1023px) {
      font-size: 24px;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    margin-top: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.buttonTextColor};
    background-color: ${(props) => props.theme.buttonColor};
    border-radius: 5px;

    @media (max-width: 1023px) {
      padding: 5px 12px;
      font-size: 14px;
    }
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
  width: 30px;
  height: 700px;
  padding: 5px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 1023px) {
    height: 220px;
  }

  svg {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #1f2937;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);

    svg {
      color: #fff;
    }
  }
`;

export { Sllck, BannerSection, SliderWrapper, BannerText, ArrowImage, ArrowWrapper };
