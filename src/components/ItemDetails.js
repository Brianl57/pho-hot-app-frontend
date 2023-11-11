import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
// 7a7976
function ItemDetails( { item_name, price, description } ) {
    const breakpoint = {
        base: '1rem',
        // sm: '1rem', 
        md: '1rem',
        lg: '1rem'
    }
    
    return (
       
       <Box>
            <Flex>
                <Text fontWeight='medium' fontSize={breakpoint}>{item_name}</Text>
                <Spacer/>
                <Text fontWeight='medium' fontSize={breakpoint}>{price}</Text>
            </Flex> 
            <Divider variant='dashed' borderColor='brand.700'/>
            <Text color='brand.700' fontSize={breakpoint}>{description}</Text>
        </Box>
    )
}

export default ItemDetails