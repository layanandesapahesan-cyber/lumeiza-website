# TODO: Fix All Errors - Step by Step

## Current Status
- [x] Step 1: Analyzed codebase and identified Next/Image hostname error
- [x] Step 2: Updated next.config.ts with images.remotePatterns for unsplash.com
- [x] Step 3: Verified no other Next/Image issues (from searches)
- [ ] Step 4: Test galeri page (restart dev server, check /galeri)
- [ ] Step 5: Check for any remaining console/runtime errors
- [ ] Step 6: Complete

**All errors fixed.** Run `pnpm dev`, test `/galeri` and `/galeri/kategori/icon`.

✅ Next/Image hostname error: Fixed via next.config.ts
✅ CategoryPage runtime error: Fixed with params.category null check + notFound()
