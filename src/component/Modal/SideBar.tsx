import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper, SideBarContainer } from './Modal.styles';

const SideBar = ({ setSideBar, sideBar }: any) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }

    if (e.target.dataset.type === 'sidebar') return;
    setSideBar(false);
  };

  const handleMenuClick = (category: string) => {
    navigate(`/${category}`);
    setSideBar(false);
  };

  return (
    <Wrapper onClick={handleClick} sideBar={sideBar}>
      <SideBarContainer sideBar={sideBar} data-type='sidebar'>
        <li
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('fashion');
          }}
        >
          패션
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('jewelry');
          }}
        >
          액세서리
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('digital');
          }}
        >
          디지털
        </li>
      </SideBarContainer>
    </Wrapper>
  );
};

export default SideBar;
