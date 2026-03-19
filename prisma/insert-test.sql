INSERT INTO products (id, name, slug, description, category, price, "imageUrl", "fileUrl", tags, downloads, featured, "createdAt", "updatedAt") 
VALUES (
  gen_random_uuid(), 
  'Test Product', 
  'test-product', 
  'This is a test product to verify database connection', 
  'Icon', 
  100000, 
  'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400', 
  '/downloads/test.zip', 
  ARRAY['Test'], 
  0, 
  false, 
  NOW(), 
  NOW()
);
