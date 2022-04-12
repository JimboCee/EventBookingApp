import React, {useState} from 'react'
import img from '../media/crowd.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../buttonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
        <VideoBg src={img} />
        </HeroBg>
        <HeroContent>
        <HeroH1>What's Good In...</HeroH1>
        <HeroP>
            USER LOCATION/USER SEARCH
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signin" onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            >
            Login {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>    
        </HeroBtnWrapper>
        </HeroContent>   
    </HeroContainer>
  )
}

export default HeroSection
