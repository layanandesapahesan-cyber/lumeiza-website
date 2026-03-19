const { prisma } = require('../lib/prisma');

async function main() {
  try {
    const count = await prisma.product.count();
    console.log(`Product count: ${count}`);
    
    const products = await prisma.product.findMany({ take: 3 });
    console.log('Sample products:', products.map(p => ({ name: p.name, category: p.category })));
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
