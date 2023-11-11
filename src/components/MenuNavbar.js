import { Link, UnorderedList, ListItem, Container } from '@chakra-ui/react'
import React from 'react'

export default function MenuNavbar() {
  const fontStyle = {
    fontSize: {base: '2.5rem', lg: '4rem'},
    fontWeight: 'bold',
    maxH: 'full',
    _hover: {
      color: "brand.800",
    }}

  
  return (
    <Container ml={0} mr={0} mt={'2rem'} mb={'3rem'} pl={0} pr={0}>
      <UnorderedList styleType="none" m={0}>
        <ListItem>
          <Link 
            sx={fontStyle} style={{ textDecoration: "none" }} 
            href='#menu-section'
          >MENU</Link>
        </ListItem>

        <ListItem>
          <Link 
            sx={fontStyle} 
            style={{ textDecoration: "none" }} 
            href='#hero-meta'
          >LOCATION</Link>
        </ListItem>

        <ListItem>
          <Link 
            sx={fontStyle} 
            style={{ textDecoration: "none" }} 
            href='#hero-meta'
            >HOURS</Link>
          </ListItem>

        <ListItem>
          <Link 
            sx={fontStyle} 
            style={{ textDecoration: "none" }} 
            target="_blank" 
            href="https://www.latimes.com/socal/glendale-news-press/tn-gnp-et-0521-dining-20160524-story.html"
          >PRESS</Link>
        </ListItem>
      </UnorderedList>
    </Container>
  )
}
