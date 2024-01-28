import { VStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import { itemsToObject, categorize, categorizeDestopView } from './utils/utils.js';
import { config } from './Constants.js'

function App() {

  const [menuData, setMenuData] = useState(null); // list of item objects
  const [categories, setCategories] = useState(null); // map of categories and items (For mobile view)
  
  const [categoriesDesktop, setCategoriesDesktop] = useState(null); // list of categories (For desktop view)
  const [display, setDisplay] = useState('desktop');

  function handleDisplayChange() {
    if (window.innerWidth <= 768) {
      setDisplay('mobile');
    } else {
      setDisplay('desktop');
    }
  }
  
  window.addEventListener('resize', handleDisplayChange);
  
  const URL = config.url

  // Fetch menu items from backend and set state variables
useEffect(() => {
  const fetchMenuItems = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const newData = data.slice(1, data.length);
    const itemsObject = itemsToObject(newData);
    const categorizedItems = categorize(itemsObject);

    setMenuData(itemsObject);
    setCategories(categorizedItems);
    setCategoriesDesktop(categorizeDestopView(categorizedItems));
  }
  
  fetchMenuItems();
}, [URL]);


  return (

    <VStack bg='brand.900' fontStyle='DM Sans'>
      <HeroSection />
      <MenuSection menuData={menuData} categories={display === 'desktop'? categoriesDesktop : categories}/>
    </VStack>
    
  );
}

export default App;
