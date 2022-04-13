import React from 'react'
import { ServicesContainer, ServicesH1, ServicesIcon, ServicesH2, ServicesP, ServicesCardMusic, ServicesCardSport, ServicesCardTheatre, ServicesCardRewards} from './ServicesElements';
import { Text } from 'react-native-web';


const Services = () => {
  return (
      <ServicesContainer id="services">
          
        <ServicesCardSport>
            <ServicesH1>Sports</ServicesH1>
            <ServicesH2>Experience Sporting Events</ServicesH2>
            <Text>See Events</Text>

        </ServicesCardSport>

        <ServicesCardMusic>
            <ServicesH1>Concerts</ServicesH1>
            <ServicesH2>Move, Groove and Shake It</ServicesH2>
            <Text>See Events</Text>

        </ServicesCardMusic>

        <ServicesCardTheatre>
            <ServicesH1>Theatre</ServicesH1>
            <ServicesH2>West-End Shows</ServicesH2>
            <Text>See Events</Text>

        </ServicesCardTheatre>

        <ServicesCardRewards>
            <ServicesH1>Rewards</ServicesH1>
            <ServicesH2>Join Our Rewards Program!</ServicesH2>
            <Text>Join Today!</Text> 
        

        </ServicesCardRewards>


          
      </ServicesContainer>
      
  )
}

export default Services