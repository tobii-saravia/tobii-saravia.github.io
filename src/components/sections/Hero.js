import React from 'react'
import {
    Container,
    Content,
    InterText,
    RobotoText,
    Title,
    Subtitle
} from '../../styles/Hero.elements'
import { useNav } from '../hooks/useNav'
const content = {
    hi: 'Hi, my name is',
    title: 'Tobias Saravia',
    subtitle: 'I’m a Jr. Software Engineer',
    text:"I’m from Córdoba, Argentina and I love developing software. I specialize in building (and designing sometimes) web and mobile applications using common tools and languages, including React.js, RESTful API's, GraphQL, and more..."
}

const Hero = () => {

    const homeRef = useNav('Hero');

    return (
        <section ref={homeRef} id='heroContainer'>
            <Container>
                <Content>
                <RobotoText>{content.hi}</RobotoText>
                <Title>{content.title}</Title>
                <Subtitle>{content.subtitle}</Subtitle>
                <InterText>{content.text}</InterText>
                </Content>
            </Container>
        </section>
    )
}

export default Hero