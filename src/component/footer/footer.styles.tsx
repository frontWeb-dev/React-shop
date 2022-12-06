import styled from 'styled-components';
import { Inner } from '../../style';

const FooterWrapper = styled.div`
  width: 100%;
  height: 288px;
  padding: 40px 0;
  color: #a6aaba;
  background-color: #242933;
`;

const FooterInner = styled(Inner)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #a6aaba;
`;

const CardsContanter = styled.div`
  display: flex;

  img {
    margin-right: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
`;

const IconButton = styled.button<{ bgUrl: string }>`
  width: 24px;
  height: 24px;
  filter: invert(90%) sepia(63%) saturate(5038%) hue-rotate(180deg) brightness(79%) contrast(81%);
  background: ${(props) => `url('${props.bgUrl}')`};

  &:nth-child(2) {
    margin: 0 20px 0 16px;
  }
`;

export { FooterWrapper, FooterInner, CardsContanter, IconsContainer, IconButton };
