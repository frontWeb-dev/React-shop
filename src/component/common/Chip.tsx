import styled from 'styled-components';

interface chipProps {
  children: string;
}

const Chip = (props: chipProps) => {
  return <ChipWrapper>{props.children}</ChipWrapper>;
};

const ChipWrapper = styled.div`
  width: 50px;
  height: 20px;
  line-height: 20px;
  padding: 0 9px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background-color: #1fb2a6;
  border-radius: 16px;
`;

export default Chip;
