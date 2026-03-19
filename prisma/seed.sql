-- Clear existing data (safe)
DELETE FROM "products";

-- Insert test products - Prisma String[] as PG text[] without quotes
INSERT INTO "products" (name, slug, description, category, "price", "imageUrl", "fileUrl", tags, featured, downloads, "createdAt", "updatedAt") VALUES
('Icon Pack Minimalis Vol.1', 'icon-pack-minimalis-vol1', 'Koleksi 500 ikon minimalis untuk web, mobile, dan presentasi.', 'Icon', 150000, 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400', NULL, ARRAY['Best Seller','New'], true, 1234, NOW(), NOW()),
('Icon Bisnis & Startup', 'icon-bisnis-startup', '320 ikon untuk kebutuhan bisnis, startup, dan perusahaan.', 'Icon', 120000, 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400', NULL, ARRAY['Best Seller'], true, 3456, NOW(), NOW()),
('Icon Sosial Media Pack', 'icon-sosial-media-pack', '200 ikon untuk semua platform sosial media.', 'Icon', 90000, 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400', NULL, ARRAY['Popular'], false, 2345, NOW(), NOW()),
('Ilustrasi Karakter 3D Vol.1', 'ilustrasi-karakter-3d-vol1', '50 karakter 3D dengan berbagai ekspresi dan pose.', 'Ilustrasi', 250000, 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=400', NULL, ARRAY['Best Seller','New'], true, 890, NOW(), NOW());

SELECT COUNT(*) FROM "products";
SELECT name, category FROM "products" LIMIT 3;
