# Lumeiza Website

## Galeri Produk - Icons8 Style Upgrade Complete!

**Live Routes**:
- `/galeri` - Category landing (hero + grid)
- `/galeri/kategori/icon` - Category products (breadcrumb, header, pag/search)
- `/galeri/icon-pack-minimalis-vol1` - Detail (related products, download)

**Seed Data**:
```bash
pnpm prisma generate
node prisma/seed.ts  # 16 products seeded
```

**Development**:
```bash
pnpm dev
```

**Production**:
```bash
pnpm build
vercel --prod
```

Perfect! 🚀
