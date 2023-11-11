import React from 'react'
import { Wrap } from '@chakra-ui/react'
import CategoryNavButton from './CategoryNavButton'

export default function CategoryNavbar({ categories }) {

  return (
    <Wrap>
      {categories && categories.map(category => (
        <CategoryNavButton key={category} category={category}/>
      ))}
    </Wrap>
      
    
  )
}
