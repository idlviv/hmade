db.getCollection('products')
.drop();
db.getCollection('products')
.insertMany([
  {
    _id: 'to0001',
    name: 'Toy1',
    description: 'Description Description Description Description Description Description Description Description ',
    parents: ['toys'],
    display: true,
    onMainPage: true,
    mainImage: 'default_product',
    menuImage: 'default_product'
  },
]);