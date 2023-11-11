import { Container, Heading } from '@chakra-ui/react';
import CategoryNavbar from "./CategoryNavbar";
import CategoryBlock from './CategoryBlock';


export default function MenuSection({ menuData, categories }) {

  return (
    <Container id="menu-section" as='section' maxW={{base: '90vw', xl: '80vw'}} pt='4rem' pb='4rem'>

        <Heading color='brand.800' pb='0.7rem'>OUR MENU</Heading>
        {categories && <CategoryNavbar categories={Object.keys(categories)}/>}
        <Container maxWidth='full' ml={0} p={0}>
          {categories && Object.entries(categories).map(item => (
            <CategoryBlock key={item[0]} category={item[0]} categoryItems={item[1]}/>
          ))}
        </Container>
    
    </Container>
  )
}
