import styled from 'styled-components';
import { Inner } from './../../style/inner';

const Layout = (props: any) => {
  const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 288px - 64px);
    margin-top: 64px;
    padding: 20px;
    background-color: #2a303c;
  `;

  const LayoutInner = styled(Inner)`
    width: 1360px;
    margin: 0 auto;
  `;

  return (
    <Wrapper>
      <LayoutInner>{props.children}</LayoutInner>
    </Wrapper>
  );
};

export default Layout;
