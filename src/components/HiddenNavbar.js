import { Flex, Link} from '@chakra-ui/react'
import React from 'react'

export default function HiddenNavbar() {

    const fontStyle = {
        fontSize: {base: '1rem', lg: '1.5rem'},
        fontWeight: 'bold',
        maxH: 'full',
        pl: '1rem',
        pr: '1rem',
        _hover: {
          color: "brand.800",
        }}

    return (
                          
          <Flex 
              bg='black' 
              padding='1.3rem' 
              width='full' 
              justify='center'
              position='fixed' 
              zIndex='1'
              transitionDuration='0.2s'
              transitionTimingFunction='ease-in'
              >
              
              <Link 
              sx={fontStyle} style={{ textDecoration: "none" }} 
              href='#menu-section'
            >MENU</Link>

              <Link 
              sx={fontStyle} 
              style={{ textDecoration: "none" }} 
              href='#hero-meta'
            >LOCATION</Link>

            <Link 
              sx={fontStyle} 
              style={{ textDecoration: "none" }} 
              href='#hero-meta'
              >HOURS</Link>

              <Link 
              sx={fontStyle} 
              style={{ textDecoration: "none" }} 
              target="_blank" 
              href="https://www.latimes.com/socal/glendale-news-press/tn-gnp-et-0521-dining-20160524-story.html"
            >PRESS</Link>
              
          </Flex>
  ) 
}
