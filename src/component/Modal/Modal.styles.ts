import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 19, 24, 0.5);
  overflow: hidden;
  z-index: 9999;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

export { Wrapper, ModalContainer, ButtonContainer };
