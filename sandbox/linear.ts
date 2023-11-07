import { LinearClient } from '@linear/sdk'
import 'dotenv/config'

// Api key authentication
const client1 = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY
})

console.log("hi")