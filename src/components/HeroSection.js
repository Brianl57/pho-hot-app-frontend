import { Container, Box, Divider } from '@chakra-ui/react'
import { useState }from 'react'
import MenuNavbar from './MenuNavbar'
import Header from './Header'
import HeroMeta from './HeroMeta'
import HiddenNavbar from './HiddenNavbar'



export default function HeroSection() {
  
  // Show navbar when user scrolls past a certain point
  const [showNav, setShowNav] = useState(false);
  const scrollBreakpoint = 800;

  function setShowNavbar() {
    if (window.scrollY >= scrollBreakpoint) {
      setShowNav(true)
    } 
  }

  function hideNavbar() {
    if (window.scrollY < scrollBreakpoint) {
      setShowNav(false)
    }
  }

  window.addEventListener("scroll", setShowNavbar)
  window.addEventListener("scroll", hideNavbar)

  return (
      <Box 
        style={{backgroundSize: 'cover'}} 
        color='white' 
        width='full' 
        bg='black' 
        bgImage="url('/images/pho-image.png')" 
        bgRepeat="no-repeat" 
        bgPosition="center" 
        >
  
        {showNav ? <HiddenNavbar /> : null}
        
        <Container as='section' p={5} maxW={{base: '90vw', xl: '80vw'}} pb={20}>
              <Header/>
              <MenuNavbar/>
              <Divider borderWidth={1} borderColor='brand.700'/>
              <HeroMeta /> 
        </Container>
      </Box>
  )
}

