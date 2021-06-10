import React from 'react'
import { Navbar } from '../Navbar'
import Sidebar from '../Sidebar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <Sidebar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Best Sammiches Ever</HeroH1>
                    <HeroP>Ready In 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
