import React from 'react'
import { Text } from 'react-native-web';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink } 
    from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <Text>How it Works</Text>
                            <Text>Testimonials</Text>
                            <Text>Careers</Text>
                            <Text>Frequently Asked Questions</Text>
                            <Text>Terms of Service</Text>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <Text>How it Works</Text>
                            <Text>Testimonials</Text>
                            <Text>Careers</Text>
                            <Text>Frequently Asked Questions</Text>
                            <Text>Terms of Service</Text>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <Text>How it Works</Text>
                            <Text>Testimonials</Text>
                            <Text>Careers</Text>
                            <Text>Frequently Asked Questions</Text>
                            <Text>Terms of Service</Text>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  );
}

export default Footer