import React from 'react'
import Navbar from '../header/Navbar'
import { Box, Container } from '@chakra-ui/react'
import Header from '../header/Header'
import Serachbutton from '../header/Serachbutton'
import LegalActsList from './LegalActsList'

const Acts = () => {
  return (
    <>
     <Navbar/>
      <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
        <Container maxW="container.xl">
          <Header
            title="Articles"
            headtitle="Articles"
            description="Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida "
          />

          <Serachbutton bordercolor="#C08729" />
          <LegalActsList/>
          </Container>
   </Box>
    </>
  )
}

export default Acts