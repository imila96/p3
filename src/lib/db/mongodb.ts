// MongoDB Database Configuration
import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not constantly
  // recreated during hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client for each request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db('index101_storefront');
}

// Collections
export async function getStoresCollection() {
  const db = await getDb();
  return db.collection('stores');
}

export async function getContactsCollection() {
  const db = await getDb();
  return db.collection('contacts');
}

export async function getNewsletterCollection() {
  const db = await getDb();
  return db.collection('newsletter_subscribers');
}

// Initialize database with indexes
export async function initDatabase() {
  try {
    const db = await getDb();
    
    // Create indexes
    await db.collection('stores').createIndex({ url: 1 }, { unique: true });
    await db.collection('stores').createIndex({ featured: 1 });
    await db.collection('newsletter_subscribers').createIndex({ email: 1 }, { unique: true });
    
    console.log('MongoDB initialized successfully');
  } catch (error) {
    console.error('Error initializing MongoDB:', error);
    throw error;
  }
}

export default clientPromise;
