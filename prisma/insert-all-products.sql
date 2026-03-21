-- ICON Products
INSERT INTO products (id, name, slug, description, category, price, "imageUrl", "fileUrl", tags, downloads, featured, "createdAt", "updatedAt") VALUES 
(gen_random_uuid(), 'Icon Pack Minimalis Vol.1', 'icon-pack-minimalis-vol1', 'Koleksi 500 ikon minimalis untuk web, mobile, dan presentasi.', 'Icon', 150000, 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d9?w=400', '/downloads/icon-pack-minimalis-vol1.zip', ARRAY['Best Seller', 'New'], 1234, true, NOW(), NOW()),
(gen_random_uuid(), 'Icon Bisnis & Startup', 'icon-bisnis-startup', '320 ikon untuk kebutuhan bisnis, startup, dan perusahaan.', 'Icon', 120000, 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400', '/downloads/icon-bisnis-startup.zip', ARRAY['Best Seller'], 3456, true, NOW(), NOW()),
(gen_random_uuid(), 'Icon Sosial Media Pack', 'icon-sosial-media-pack', '200 ikon untuk semua platform sosial media.', 'Icon', 90000, 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400', '/downloads/icon-sosial-media-pack.zip', ARRAY['Popular'], 2345, false, NOW(), NOW()),
(gen_random_uuid(), 'Icon E-commerce', 'icon-ecommerce', '150 ikon untuk toko online dan marketplace.', 'Icon', 100000, 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400', '/downloads/icon-ecommerce.zip', ARRAY['New'], 567, false, NOW(), NOW()),
(gen_random_uuid(), 'Icon Pendidikan', 'icon-pendidikan', '180 ikon untuk sekolah, kursus, dan institusi pendidikan.', 'Icon', 85000, 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400', '/downloads/icon-pendidikan.zip', ARRAY['Sale'], 789, false, NOW(), NOW()),

-- ILUSTRASI Products
(gen_random_uuid(), 'Ilustrasi Karakter 3D Vol.1', 'ilustrasi-karakter-3d-vol1', '50 karakter 3D dengan berbagai ekspresi dan pose.', 'Ilustrasi', 250000, 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=400', '/downloads/ilustrasi-karakter-3d-vol1.zip', ARRAY['Best Seller', 'New'], 890, true, NOW(), NOW()),
(gen_random_uuid(), 'Ilustrasi Flat Design', 'ilustrasi-flat-design', '200 ilustrasi flat untuk website dan presentasi.', 'Ilustrasi', 180000, 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400', '/downloads/ilustrasi-flat-design.zip', ARRAY['Popular'], 2341, false, NOW(), NOW()),
(gen_random_uuid(), 'Ilustrasi Isometric', 'ilustrasi-isometric', '75 ilustrasi isometric untuk infografis dan diagram.', 'Ilustrasi', 220000, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', '/downloads/ilustrasi-isometric.zip', ARRAY['New'], 456, false, NOW(), NOW()),
(gen_random_uuid(), 'Ilustrasi Storytelling', 'ilustrasi-storytelling', '30 scene storytelling untuk presentasi dan cerita.', 'Ilustrasi', 190000, 'https://images.unsplash.com/photo-1542744094-3a31f272c2fc?w=400', '/downloads/ilustrasi-storytelling.zip', ARRAY['Sale'], 234, false, NOW(), NOW()),

-- TEMPLATE Products
(gen_random_uuid(), 'Template Presentasi Bisnis', 'template-presentasi-bisnis', '50 slide template premium untuk presentasi bisnis.', 'Template', 320000, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400', '/downloads/template-presentasi-bisnis.pptx', ARRAY['Best Seller'], 5678, true, NOW(), NOW()),
(gen_random_uuid(), 'Template Social Media', 'template-social-media', '100 template untuk Instagram, Facebook, dan LinkedIn.', 'Template', 210000, 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400', '/downloads/template-social-media.zip', ARRAY['Sale', 'Popular'], 3456, false, NOW(), NOW()),
(gen_random_uuid(), 'Template CV & Portfolio', 'template-cv-portfolio', '25 template CV dan portfolio siap edit.', 'Template', 150000, 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400', '/downloads/template-cv-portfolio.zip', ARRAY['New'], 789, false, NOW(), NOW()),

-- LOTTIE Products
(gen_random_uuid(), 'Lottie Animasi Loading', 'lottie-animasi-loading', '30 animasi loading untuk website dan app.', 'Lottie', 120000, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', '/downloads/lottie-animasi-loading.json', ARRAY['New', 'Popular'], 1234, false, NOW(), NOW()),
(gen_random_uuid(), 'Lottie Icon Animasi', 'lottie-icon-animasi', '50 icon animasi untuk interaksi UI/UX.', 'Lottie', 160000, 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400', '/downloads/lottie-icon-animasi.json', ARRAY['Best Seller'], 2345, true, NOW(), NOW());
