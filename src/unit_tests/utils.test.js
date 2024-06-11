// utils.test.js
import { itemsToObject, categorize, categorizeDestopView } from '../utils/utils.js';

// Sample data for testing
const sampleData = [
  [1, 'Pho', 10, 'PHO', 'A bowl of pho'],
  [2, 'Banh Mi', 5, 'SANDWICH', 'Vietnamese sandwich'],
  [3, 'Spring Rolls', 7, 'APPETIZER', 'Fresh spring rolls']
];

describe('Utility Functions', () => {
  test('itemsToObject should convert list of items to object format', () => {
    const result = itemsToObject(sampleData);
    expect(result).toEqual([
      { id: 1, item_name: 'Pho', price: 10, category: 'PHO', description: 'A bowl of pho' },
      { id: 2, item_name: 'Banh Mi', price: 5, category: 'SANDWICH', description: 'Vietnamese sandwich' },
      { id: 3, item_name: 'Spring Rolls', price: 7, category: 'APPETIZER', description: 'Fresh spring rolls' }
    ]);
  });

  test('categorize should categorize items correctly', () => {
    const items = itemsToObject(sampleData);
    const result = categorize(items);
    expect(result).toEqual({
      PHO: [{ id: 1, item_name: 'Pho', price: 10, category: 'PHO', description: 'A bowl of pho' }],
      SANDWICH: [{ id: 2, item_name: 'Banh Mi', price: 5, category: 'SANDWICH', description: 'Vietnamese sandwich' }],
      APPETIZER: [{ id: 3, item_name: 'Spring Rolls', price: 7, category: 'APPETIZER', description: 'Fresh spring rolls' }]
    });
  });

  test('categorizeDestopView should reorder items for desktop view', () => {
    const items = itemsToObject(sampleData);
    const categorizedItems = categorize(items);
    const result = categorizeDestopView(categorizedItems);
    expect(result).toEqual(categorizedItems);  // Adjust the expected result as needed for your specific logic
  });
});
