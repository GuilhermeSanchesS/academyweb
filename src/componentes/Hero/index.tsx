import React from 'react';
import { HeroContainer } from '../../styles/Containers';
import { Paragraph, Title } from '../../styles/TextElements';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroContainer>
      <Title hero>SDC</Title>
      <Paragraph light>Desenvolvendo pagina web</Paragraph>
    </HeroContainer>
  );
};

export default Hero;
