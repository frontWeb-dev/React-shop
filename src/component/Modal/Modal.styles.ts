import styled from 'styled-components';

const Wrapper = styled.div<{ sideBar: boolean }>`
  width: ${(props) => (props.sideBar ? '100vw' : 0)};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 19, 24, 0.5);
  overflow: hidden;
  z-index: 9999;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 32rem;
  color: #a6aaba;
  background-color: #2a303c;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px #00000040;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SideBarContainer = styled.div<{ sideBar: boolean }>`
  width: 20rem;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.mainBgColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.sideBar ? `translateX(0)` : `translateX(-100%)`)};
  z-index: 9999;
  cursor: Default;

  @media (max-width: 480px) {
    width: 15rem;
  }

  li {
    padding: 12px 16px;
    border-radius: 5px;
    &:hover {
      background-color: ${(props) => props.theme.hoverBgColor};
    }
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

export { Wrapper, ModalContainer, SideBarContainer, ButtonContainer };
