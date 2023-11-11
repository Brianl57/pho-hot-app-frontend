import { SimpleGrid, Box, Text, Link } from '@chakra-ui/react'
import React from 'react'

export default function HeroMeta() {
  const breakpoint = {
    base: '0.85rem',
    // sm: '1rem', 
    md: '1rem',
    lg: '1rem'
} 
  return (
    <SimpleGrid id='hero-meta' columns={2} maxW={{base: '90vw', lg: '35vw'}} pt={6}>
        <Box>
            <Text color='brand.800' fontWeight={'bold'}>LOCATION</Text>
            <Text fontSize={breakpoint}>6306 San Fernando Rd</Text>
            <Text fontSize={breakpoint}>Rd Glendale, CA 91201</Text>
            <Link target="_blank" href="https://www.google.com/maps?sca_esv=578070544&output=search&q=6306+San+Fernando+Rd+Rd+Glendale,+CA+91201&source=lnms&entry=mc&sa=X&ved=2ahUKEwjWl7mk6Z-CAxX9KlkFHcWqB_8Q0pQJegQIDRAB">
              <Text fontSize={breakpoint}>Google Maps</Text>
            </Link>
        </Box>
        <Box>
            <Text color='brand.800' fontWeight={'bold'}>HOURS</Text>
            <Text fontSize={breakpoint}>Mon to Friday: 10:00 - 8:00 PM</Text>
            <Text fontSize={breakpoint}>Closed on Saturday and Sunday</Text>
            <Text fontSize={breakpoint}>Dine-line stops at 7:30 PM</Text>
        </Box>
    </SimpleGrid>
  )
}
