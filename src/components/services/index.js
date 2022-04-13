import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';


const Services = () => {
  return (
      <ServicesContainer id="services">
          <ServicesH1>Events Near You</ServicesH1>
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon icon="fa-solid fa-futbol"/>
                  <ServicesH2>Sport</ServicesH2>
                  <ServicesP>Enjoy High-Action Sporting Events with the Best Seats in the House</ServicesP>
              </ServicesCard>

              <ServicesCard>
                  <ServicesIcon icon="fa-solid fa-amp-guitar" />
                  <ServicesH2>Music</ServicesH2>
                  <ServicesP>Local Gigs to World Tours</ServicesP>
              </ServicesCard>

              <ServicesCard>
                  <ServicesIcon icon="fa-solid fa-masks-theater" />
                  <ServicesH2>Theatre</ServicesH2>
                  <ServicesP>Thespians, Musicals and Monologues</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
      </ServicesContainer>
  )
}

export default Services