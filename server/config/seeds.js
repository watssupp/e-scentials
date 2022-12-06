const db = require('./connection');
const { User, Product,Category} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'Candles' },
      { name: 'Lotion' },
      { name: 'Bath' },
      { name: 'Skincare'}
    ]);

    console.log('categories seeded');
    
    await Product. deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Spiritual Awakening',
            description: 'Made from natural ingredients and transported by the soothing steam of a warm cup of matcha tea, the fresh scent of bergamot and green tea envelop you in a calming sense of serenity. The aromatic floral perfumes awaken the senses and a cool base of white chocolate, moss, and cedarwood brings the focus back to the present.',
            image: '',
            category: categories[2]._id,
            price: 15.00,
            quantity: 50
        },
        {
            name: 'Lilac & Lavender',
            description: 'A charismatic and intense yet botonical smell,  with an underlying floral sweetness.',
            image: '',
            category: categories[2]._id,
            price: 11.00,
            quantity: 50
        },
        {
            name: 'Risen Rose',
            description: 'A beautiful floral fragrence that feels welcoming to senses.',
            image: '',
            category: categories[0]._id,
            price: 11.99,
            quantity: 50
        },
        {
            name: 'Winter Pine',
            description: "A lovely woodsy aroma, that takes you back to the smells of grandma's house at Christmas",
            image: '',
            category: categories[1]._id,
            price: 13.99,
            quantity: 50
        },
        {
            name: 'Masterful Mahagony',
            description: 'A mellow wood smell with a slight sweet scent.',
            image: '',
            category: categories[1]._id,
            price: 15.99,
            quantity: 50
        },
        {
            name: 'Modest Oakmoss',
            description: 'The smells of a complex wet forest floorwith many layers. It smells earthy, green, and woody and can have hints of sweetness and resin while maintaining smoothness',
            image: '',
            category: categories[1]._id,
            price: 9.99,
            quantity: 50
        },
        {
            name: 'Spring Linen',
            description: 'The smell of fresh laundry on a clothes line in a floral breeze.',
            image: '',
            category: categories[2]._id,
            price: 8.99,
            quantity: 50
        },
        {
            name: 'Autumn Air',
            description: 'An aroma of musky leaves with a hint of cinnamon.',
            image: '',
            category: categories[2]._id,
            price: 11.99,
            quantity: 50
        },
        {
            name: 'Morning Breakfast',
            description: 'The awakening aroma of maple, buttermilk batter, with a slight hint of bacon.',
            image: '',
            category: categories[2]._id,
            price: 17.99,
            quantity: 50
        },
        {
            name: 'Mighty Mandrin',
            description: 'It smells sweet and fruity with a resounding zest.',
            image: '',
            category: categories[3]._id,
            price: 16.99,
            quantity: 50
        },
        {
            name: 'Great Red Grapefruit',
            description: 'A tart and citrus aroma.',
            image: '',
            category: categories[3]._id,
            price: 7.99,
            quantity: 50
        },
        {
            name: 'The Florida Keys Lime Pie',
            description: 'Smells like retirement.',
            image: '',
            category: categories[3]._id,
            price: 18.99,
            quantity: 50
        },
    ]);
    
    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'John',
        lastName: 'Williamson',
        email: 'jwill@testmail.com',
        password: 'password12345',
        orders: [
            {
              products: [products[0]._id, products[0]._id, products[1]._id]
            }
          ]
    });
    await User.create({
        firstName: 'Bethany',
        lastName: 'Hoyt',
        email: 'bhoyt@testmail.com',
        password: 'password12345'
      });
    
      console.log('users seeded');
    
      process.exit();
});
