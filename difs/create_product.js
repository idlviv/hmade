db.getCollection('mcs')
    .drop();
db.getCollection('mcs')
    .insertMany([
      {
        _id: 'mcs0001',
        name: 'MK перший',
        description: 'Description Description Description Description Description Description Description Description ',
        parents: ['toys'],
        createdAt: 1539004428299,
        display: true,
        onMainPage: true,
        mainImage: 'default_product',
        menuImage: 'default_product',
        views: 5,
      },
      {
        _id: 'mcs0002',
        name: 'MK другий',
        description: 'Description Description Description Description Description Description Description Description ',
        parents: ['wreaths'],
        createdAt: 1539004428272,
        display: true,
        onMainPage: true,
        mainImage: 'default_product',
        menuImage: 'default_product',
        views: 15,
      },
      {
        _id: 'mcs0003',
        name: 'MK третій',
        description: 'Description Description Description Description Description Description Description Description ',
        parents: ['wreaths'],
        createdAt: 1539004438272,
        display: true,
        onMainPage: true,
        mainImage: 'default_product',
        menuImage: 'default_product',
        views: 1,
      },
    ]);
