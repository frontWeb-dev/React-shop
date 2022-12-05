import styled from 'styled-components';

const DetailWrapper = styled.div``;

const DetailNav = styled.p`
  margin-bottom: 50px;
  padding: 8px 0;
  font-size: 14px;
  color: #a6aaba;

  span {
    opacity: 0.6;
  }
`;

const DetailContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
  }
`;

const DetailImage = styled.div`
  min-width: 20em;
  padding: 16px;
  margin-bottom: 32px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;

  img {
    width: 100%;
    height: 18rem;
    object-fit: contain;
  }
`;

const ItemInfo = styled.div`
  color: #a6aaba;

  @media (min-width: 1025px) {
    padding: 0 3rem;
  }
`;

const ItemName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  h3 {
    font-size: 20px;
    margin-right: 16px;
  }
`;

const ItemRate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const RateImage = styled.div<{ rating: number }>`
  width: 120px;
  height: 25px;
  margin-right: 6px;
  background: ${(props) => `url('/assets/asset 30.svg') no-repeat 0 ${props.rating}px / 100%`};
`;

const ItemPrice = styled.p`
  font-size: 30px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 48px;
`;

export {
  DetailWrapper,
  DetailNav,
  DetailContainer,
  DetailImage,
  ItemInfo,
  ItemName,
  ItemRate,
  RateImage,
  ItemPrice,
  ButtonContainer,
};
