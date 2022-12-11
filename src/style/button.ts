import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 5px;
  border: none;
`;

const MoreViewButton = styled(ButtonStyle)`
  margin-top: 8px;
  padding: 12px 16px;
  color: ${(props) => props.theme.mainTextColor};
  background-color: ${(props) => props.theme.buttonColor}; ;
`;

const BgButton = styled(ButtonStyle)`
  height: 3rem;
  padding: 0 1rem;
  font-size: 0.9rem;
  color: #fff;
  background-color: #6419e6;
`;

const BorderButton = styled(BgButton)`
  color: ${(props) => props.theme.mainTextColor};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.mainTextColor};
`;

const CartButton = styled(ButtonStyle)``;

export { MoreViewButton, BgButton, BorderButton, CartButton };
