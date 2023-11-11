import { Flex, Text, Spacer, Link } from '@chakra-ui/react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoYelp } from 'react-icons/bi'
import { FaPhoneSquareAlt } from 'react-icons/fa'

import React from 'react'

export default function Header() {
  const iconStyles = {
    size: '2rem'
  }
  
  return (
    <Flex>
        <Text fontSize='1.5rem' fontWeight='bold'>PHO HOT</Text>
        <Spacer/>
        <Flex width={110} justifyContent='space-between'>
            <Link target="_blank" href="https://www.google.com/search?kgmid=/g/11b8zcbqfs&hl=en-US&q=Pho+Hot&kgs=d3d4ea28e50597f2&shndl=17&source=sh/x/kp/osrp/m5/3"><AiFillGoogleCircle size={iconStyles.size}/></Link>
            <Link target="_blank" href='https://www.yelp.com/biz/pho-hot-glendale'><BiLogoYelp size={iconStyles.size}/></Link>
            <Link href="tel:818-696-2255" target="_parent"><FaPhoneSquareAlt size={iconStyles.size}/></Link>
        </Flex>
    </Flex>
  )
}
