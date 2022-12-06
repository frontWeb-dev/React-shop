import React from 'react';
import {
  FooterWrapper,
  FooterInner,
  CardsContanter,
  IconsContainer,
  IconButton,
} from './footer.styles';
import { icons } from './../../mock/icons';
import { cards } from '../../mock/card';
import { Hidden } from '../../style/hidden';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <button>제로베이스</button>
        <CardsContanter>
          {cards.map((a) => (
            <img src={a.image} alt={a.name} />
          ))}
        </CardsContanter>
        <IconsContainer>
          {icons.map((a) => (
            <IconButton bgUrl={a.image} onClick={() => window.open(a.path)}>
              <Hidden>{a.name}</Hidden>
            </IconButton>
          ))}
        </IconsContainer>
        <p>Copyright @ 2022 Zero Base</p>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
