import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Header from '../header/Header'
import Serachbutton from '../header/Serachbutton'
import LegalDictionary from './LegalDictionary'

const Dictionary = () => {
  return (
    <Box pb={4} pt={{ base: "2rem", xl: "8rem" }}>
    <Container maxW="container.xl">
    <Header
        title=" Glossary"
        headtitle="Dictionary"
        description="Suspendisse nibh sapien, ultricies ac purus vel, eleifend commodo tortor. Nam sed tempor sapien. Interdum et  "
      />
      <Serachbutton bordercolor="#C08729" />
      <LegalDictionary/>
      </Container>
      
      </Box>
  )
}

export default Dictionary