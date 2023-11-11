import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ItemDetails from './ItemDetails'


export default function CategoryBlock( {category, categoryItems } ) {
  
  const breakpoint = {
    base: '1rem',
    md: '1rem',
    lg: '1rem'
}
  
  return (
    <Box id={category} pt='4.5rem'>
      <Text fontSize='1.6rem' color='brand.800' fontWeight='bold' pb='1rem'>{category}</Text>
      <SimpleGrid 
        columns={2} 
        spacingX='4rem' 
        spacingY='1rem' 
        minChildWidth={{base: '20rem', md: '20rem', lg: '20rem', xl: '30rem', '2xl': '50rem'}}
        >
        {categoryItems.map(item => (
          <ItemDetails item_name={item.item_name} price={item.price} description={item.description} key={item.id}/>
        ))}
      </SimpleGrid>

      {/* Display additional information for pho category */}
      {category === 'PHO' && 
      <Box mt='2rem' p={0} color='brand.700'>
        <Text fontStyle='italic' fontSize={breakpoint}>*All soups are served with a plate of sprouts, lemon, green peppers, cilantro, and basil leaves.</Text>
        <Text fontStyle='italic' fontSize={breakpoint}>+3.50 Extra meat. +2.99 Extra noodle. +4.95 Extra soup. +2.99 Extra veggies. +0.50 Extra onion.</Text>
      </Box>
      }
    </Box>
  )
}
