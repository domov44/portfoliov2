'use client';

import styled from 'styled-components';
import Title from '../../ui/textual/Title';
import Stack from '../../ui/wrapper/Stack';
import Section from '../../ui/wrapper/Section';
import Container from '../../ui/wrapper/Container';
import Button from '../../ui/button/Button';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  padding-top: 80px;
  margin-left: -50vw;
  margin-right: -50vw;
  row-gap: calc((100vw / 12) - (1rem / 12 * 4));;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GridItem = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  aspect-ratio: 16 / 9;

  &:nth-child(1) {
    grid-column: 1 / 7;
    transform: translate(-33vw, 25%);
    grid-row: 1;
  }

  &:nth-child(2) {
    grid-column: 4 / 10;
    grid-row: 1;
  }

  &:nth-child(3) {
    transform: translate(33vw, -75%);
    grid-column: 7 / 13;
    grid-row: 1;
  }

  &:nth-child(4) {
    grid-column: 7 / 13;
    transform: translate(33vw, -75%);
    grid-row: 2;
  }


  @media (max-width: 768px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4) {
      grid-column: 1 / span 12;
      grid-row: auto;
      transform: none;
    }
  }
`;

const HomeGrid = () => {
    return (
        <Section>
            <Container direction="column" width="100%" maxwidth="1200px">
                <Stack width="100%" justify="center">
                    <Title level={2} fontSize="8vw" variant="colored" textalign="center">
                        PROJECT SHOWCASE
                    </Title>
                </Stack>
                <ProjectGrid>
                    <GridItem>
                        <Video src="https://ranlus.fr/assets/work/socomec/preview.mp4" autoPlay loop muted playsInline />
                    </GridItem>
                    <GridItem>
                        <Video src="https://ranlus.fr/assets/work/hugo-decrypte-mashup/preview.mp4" autoPlay loop muted playsInline />
                    </GridItem>
                    <GridItem>
                        <Video src="https://ranlus.fr/assets/work/pernod-ricard-humans-right/preview.mp4" autoPlay loop muted playsInline />
                    </GridItem>
                    <GridItem>
                        <Video src="https://ranlus.fr/assets/work/lyzis/preview.mp4" autoPlay loop muted playsInline />
                    </GridItem>
                </ProjectGrid>
                <Stack width="100%" justify="center" margin={"-20rem 0 0 0"}>
                    <Button className="step-1">all projects</Button>
                </Stack>
            </Container>
        </Section>
    );
}

export default HomeGrid;