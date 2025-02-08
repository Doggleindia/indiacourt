import React from 'react'
import Findalawyer from '../home/component/Findalawyer'
import Faq from '../home/component/Faq'
import Advertisment from '../home/component/Advertisement'
import { Box } from '@chakra-ui/react'
import Inquiry from '../home/component/Inquiry'
import Footer from '../Footer'

const LongFooter = () => {
  return (
    <>
    <Findalawyer />
      <Faq />
      <Advertisment />
      <Box pb={5}>
        <Inquiry />
      </Box>
      <Footer />
    </>
  )
}

export default LongFooter