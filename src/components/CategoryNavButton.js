import React from 'react'
import { Button, Link, Text } from '@chakra-ui/react'

export default function CategoryNavButton({ category }) {
  
  const buttonStyles = {
    borderColor: 'black',
    // marginRight: {base: '', lg: '1rem'},
    padding: {base: '0.3rem', lg: '1rem'},
    ':hover': {
      background: 'black',
      color: 'white'
    }
  }

  const textStyles = {
    fontSize: {base: '1rem', lg: '1rem'}
  }


  return (
    <Button sx={buttonStyles} variant='outline'>
        <Link href={`#${category}`} style={{ textDecoration: "none" }}>
          <Text sx={textStyles}>{category[0] + category.substring(1, category.length).toLowerCase()}</Text>
        </Link>
    </Button>
  )
}
