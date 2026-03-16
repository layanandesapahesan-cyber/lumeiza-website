export const users = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Admin Lumeza',
    email: 'admin@lumeza.com',
    password: 'Password123!',
  },
]

export const customers = [
  {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'PT Kreatif Nusantara',
    email: 'contact@kreatifnusantara.co.id',
    image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    name: 'Studio Digital Maju',
    email: 'info@digitalmaju.id',
    image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
]

export const invoices = [
  {
    customer_id: customers[0].id,
    amount: 8500000,
    status: 'paid',
    date: '2024-02-15',
  },
  {
    customer_id: customers[1].id,
    amount: 12000000,
    status: 'pending',
    date: '2024-03-10',
  },
]

export const revenue = [
  { month: 'Jan', revenue: 5600000 },
  { month: 'Feb', revenue: 7200000 },
  { month: 'Mar', revenue: 8100000 },
]
