import { defineConfig } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  schema: 'prisma/schema.prisma', // Pastikan path ini benar
  db: {
    url: process.env.DATABASE_URL, // Hanya butuh DATABASE_URL di sini
  },
})