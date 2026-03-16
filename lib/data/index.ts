import { customers, invoices } from '@/lib/placeholder-data'

export type Invoice = {
  id: string
  name: string
  email: string
  image_url: string
  amount: number
  date: string
  status: 'pending' | 'paid'
}

export async function fetchFilteredInvoices(
  query: string,
  page: number,
  perPage = 10,
): Promise<Invoice[]> {
  const mapped = invoices.map((invoice) => {
    const customer = customers.find((c) => c.id === invoice.customer_id)

    return {
      id: `${invoice.customer_id}-${invoice.date}`,
      name: customer?.name ?? 'Unknown customer',
      email: customer?.email ?? 'unknown@lumeza.com',
      image_url:
        customer?.image_url ??
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      amount: invoice.amount,
      date: invoice.date,
      status: invoice.status as 'pending' | 'paid',
    }
  })

  const normalizedQuery = query.trim().toLowerCase()
  const filtered = normalizedQuery
    ? mapped.filter((invoice) =>
        [invoice.name, invoice.email].some((field) =>
          field.toLowerCase().includes(normalizedQuery),
        ),
      )
    : mapped

  const start = (page - 1) * perPage
  const end = start + perPage

  return filtered.slice(start, end)
}
