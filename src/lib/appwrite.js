import { Client, Databases, ID } from 'appwrite'

// REACT_APP_APPWRITE_PROJECT_ID=6548cdb4aa7394989fef
// REACT_APP_APPWRITE_ENDPOINT=http://localhost/v1
// REACT_APP_APPWRITE_DATABASE_ID=654a04fe675fb1c5f56f
// REACT_APP_APPWRITE_COLLECTION_ID=654a050561c65ccaa61c
export const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID
export const COLLECTION_ID = process.env.REACT_APP_APPWRITE_COLLECTION_ID
const PROJECT_ID = process.env.REACT_APP_APPWRITE_PROJECT_ID
const ENDPOINT = process.env.REACT_APP_APPWRITE_ENDPOINT
const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID)

export const databases = new Databases(client)




