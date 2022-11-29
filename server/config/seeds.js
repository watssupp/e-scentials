const db = require('./connection');
const { User, Product} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'floral' },
      { name: 'woods' },
      { name: 'aromatic' },
      {name: 'citrus'}
    ]);

    console.log('categories seeded');
    
    await Product. deleteMany();

    

});