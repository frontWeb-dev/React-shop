import styled from 'styled-components';
import { Inner } from '../../style';

const FooterWrapper = styled.div`
  width: 100%;
  height: 288px;
  padding: 40px 0;
  background-color: ${(props) => props.theme.subBgColor};
`;

const FooterInner = styled(Inner)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${(props) => props.theme.mainTextColor};
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
  filter: ${(props) => props.theme.svgFilter};
  background: ${(props) => `url('${props.bgUrl}')`};

  &:nth-child(2) {
    margin: 0 20px 0 16px;
  }
`;

export { FooterWrapper, FooterInner, CardsContanter, IconsContainer, IconButton };
