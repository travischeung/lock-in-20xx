import { ExampleItem, CreateItemData, UpdateItemData } from '../types';

/**
 * Data access layer for example resources
 * Handles all database operations and queries
 * Currently uses in-memory storage - replace with actual database calls
 */

// Temporary in-memory storage
let items: ExampleItem[] = [];
let nextId = 1;

/**
 * Retrieves all items from the database
 * @returns {Promise<ExampleItem[]>} Array of all items
 */
async function findAll(): Promise<ExampleItem[]> {
  return items;
}

/**
 * Retrieves a single item by ID
 * @param {string} id - The item ID
 * @returns {Promise<ExampleItem | null>} The item or null if not found
 */
async function findById(id: string): Promise<ExampleItem | null> {
  return items.find(item => item.id === id) || null;
}

/**
 * Creates a new item in the database
 * @param {CreateItemData} itemData - The item data to create
 * @returns {Promise<ExampleItem>} The created item with generated ID
 */
async function create(itemData: CreateItemData): Promise<ExampleItem> {
  const newItem: ExampleItem = {
    id: String(nextId++),
    ...itemData,
    createdAt: new Date().toISOString()
  };
  items.push(newItem);
  return newItem;
}

/**
 * Updates an existing item in the database
 * @param {string} id - The item ID
 * @param {UpdateItemData} itemData - The updated item data
 * @returns {Promise<ExampleItem | null>} The updated item or null if not found
 */
async function update(id: string, itemData: UpdateItemData): Promise<ExampleItem | null> {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return null;

  items[index] = {
    ...items[index],
    ...itemData,
    updatedAt: new Date().toISOString()
  };
  return items[index];
}

/**
 * Removes an item from the database
 * @param {string} id - The item ID
 * @returns {Promise<boolean>} True if deleted, false if not found
 */
async function remove(id: string): Promise<boolean> {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) return false;

  items.splice(index, 1);
  return true;
}

export default {
  findAll,
  findById,
  create,
  update,
  remove
};
