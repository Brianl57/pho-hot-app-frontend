/* Utility functions for frontend */


/**
 * Converts a list of items into an object with the following format:
 * { id: 1, item_name: 'Pho', price: 10, category: 'PHO', description: 'A bowl of pho' }
 *
 * @param   data  A list of items.
 * @returns A list of item objects.
 */
export function itemsToObject(data) {
    const menuList = data && data.map(item => (
      {
        id: item[0],
        item_name: item[1],
        price: item[2],
        category: item[3].toUpperCase(),
        description: item[4]
      }
    ));

    return menuList
  }

/**
 * Categorizes a list of items into a map of categories and items.
 *  
 * @param   data  A list of item objects.
 * @returns A map of categories and items.
 */
export function categorize(data) {
    const categories = {};

    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      var category = item.category

      if (category in categories) {
        categories[category].push(item)
      } else {
        categories[category] = [];
        categories[category].push(item)
      }
    }

    return categories;
  }

/**
 * Categories items for desktop view.
 * 
 * @param categorizedItems A map of categories and items.
 * @returns A map of categories and items with items ordered for desktop view.
 */
export function categorizeDestopView(categorizedItems) {
    let categories = Object.keys(categorizedItems);
    
    categories.forEach(category => {
        var leftColumn = [];
        var rightColumn = [];
        var newItemsOrder = [];
        
        let items = categorizedItems[category];
        let ITEMS_LENGTH = items.length;

        for (var i = 0; i < ITEMS_LENGTH; i++) {
            let threshold = ITEMS_LENGTH / 2;
            if (i < threshold) {
                leftColumn.push(items[i]);
            } else {
                rightColumn.push(items[i]);
            }
        }

        for (var i = 0; i < ITEMS_LENGTH; i++) {
            if (i % 2 === 0) {
                newItemsOrder.push(leftColumn.shift())
            } else {
                newItemsOrder.push(rightColumn.shift())
            }
        }
  
        categorizedItems = {...categorizedItems, [category]: newItemsOrder};  
    })
    return categorizedItems;
}