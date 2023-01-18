import {  Box  } from '@chakra-ui/react'
import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

const Footer2 = () => {
  return (
    <Box>
<Accordion fontSize={"15px"} defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h1>
      <AccordionButton fontSize={25} color={"#444444"}>
        <Box as="span" flex='1' textAlign='left' fontSize={18} color={"#444444"} fontWeight={"bold"}>
        More About Meesho
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h1>
    <AccordionPanel pb={4}>
    Meesho: Affordable Online Shopping at Your Fingertips
There are many benefits of shopping online.
You can take your time and look at different options to find exactly what you want.
It's easy to compare prices online and find exactly what you are looking for. And now with Meesho,
you can shop for anything you want at the lowest prices in the market.
Even if you want to shop for cool gifts for your friends and family,
there are many options that you can find on the Internet.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

 
    </Box>
  )
}

export default Footer2






