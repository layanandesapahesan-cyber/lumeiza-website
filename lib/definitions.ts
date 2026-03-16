export type CustomerField = {
  id: string
  name: string
}

export type InvoiceForm = {
  id?: string
  customer_id: string
  amount: number
  status: 'pending' | 'paid'
}

export type LatestInvoice = {
  id: string
  name: string
  email: string
  image_url: string
  amount: number
}

export type Revenue = {
  month: string
  revenue: number
}

export type FormattedCustomersTable = {
  id: string
  name: string
  email: string
  image_url: string
  total_invoices: number
  total_pending: number
  total_paid: number
}

// Unused but kept for compatibility with older components
export type CustomersTableType = FormattedCustomersTable
