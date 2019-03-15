db.getCollection('catalogs')
    .drop();
db.getCollection('catalogs')
    .insertMany([
      {
        _id: 'home', name: 'Головна', ancestors: [], parent: 'null',
        auth: 'casual', order: 0, assets: ['catalog'], description: '',
      },
      {
        _id: 'common', name: 'Загальні', ancestors: ['home'], parent: 'home',
        auth: 'casual', order: 1, assets: ['catalog'], description: '',
      },

      {
        _id: 'about', name: 'Про себе', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, assets: [''], description: '',
      },
      {
        _id: 'products', name: 'Мої роботи', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, assets: [''], description: '',
      },

      {
        _id: 'toys', ancestors: ['home', 'common', 'products'], parent: 'products', order: 1,
        assets: ['category-toys'], prefix: 'toy',
        name: 'Іграшки', description: '',
      },
      {
        _id: 'wreaths', ancestors: ['home', 'common', 'products'], parent: 'products', order: 2,
        assets: ['category-wreaths'], prefix: 'wrh',
        name: 'Віночки', description: '',
      },
      {
        _id: 'bouquets', ancestors: ['home', 'common', 'products'], parent: 'products', order: 3,
        assets: ['category-bouquets'], prefix: 'buq',
        name: 'Букети', description: '',
        seoTitle: 'HandMADE - Букети ручної роботи', seoMeta: 'Букети, композиції',
      },
      {
        _id: 'fruitBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 1,
        assets: ['category-fruitBouquets'], prefix: 'buf',
        name: 'Букети з фруктів та овочів', description: '',
        seoTitle: 'HandMADE - Букети з фруктів та овочів', seoMeta: 'Букети з фруктів, овочів, ковбаси, снеків, для чоловіків, для жінок, вегетаріанські, їстивні, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'sweetBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 2,
        assets: ['category-sweetBouquets'], prefix: 'bus',
        name: 'Букети з цукерок', description: '',
        seoTitle: 'HandMADE - Букети з цукерок', seoMeta: 'Букети та композиції з цукерок, солодкі букети, цукеркові, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'flowerBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 3,
        assets: ['category-flowerBouquets'], prefix: 'bfl',
        name: 'Букети з квітів', description: '',
        seoTitle: 'HandMADE - Букети з квітів', seoMeta: 'Букети та композиції з квітів, з живих квітів, з рослин, весільні, на ювілей, подарунок',
      },
      {
        _id: 'otherBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 4,
        assets: ['category-otherBouquets'], prefix: 'buo',
        name: 'Інші букети', description: '',
        seoTitle: 'HandMADE - Екзотичні букети', seoMeta: 'Екзотичні букети та композиції на весілля, на ювілей, на день народження, подарунок',
      },

      {
        _id: 'decorative', ancestors: ['home', 'common', 'products'], parent: 'products', order: 4,
        assets: ['category-decorative'], prefix: 'dcr',
        name: 'Декор', description: '',
      },
      {
        _id: 'easterDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 1,
        assets: ['category-easterDecor'], prefix: 'dce', name: 'Великодній декор', description: '',
      },
      {
        _id: 'weddingDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 2,
        assets: ['category-weddingDecor'], prefix: 'dcw', name: 'Весільний декор', description: '',
      },
      {
        _id: 'fotoZones', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 3,
        assets: ['category-fotoZones'], prefix: 'dcf', name: 'Фотозони', description: '',
      },
      {
        _id: 'presents', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 4,
        assets: ['category-presents'], prefix: 'dcp', name: 'Оформлення подарунків', description: '',
      },

      // { _id: 'knitting', ancestors: ['home', 'common', 'products'], parent: 'products', order: 5,
      //   assets: ['knitting'], prefix: 'kni',
      //   name: 'В\'язання', description: ''},
      //   { _id: 'mittens', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 1,
      //     assets: ['mittens'], prefix: 'knm',
      //     name: 'В\'язані рукавички', description: ''},
      //   { _id: 'hats', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 2,
      //     assets: ['hats'], prefix: 'knh',
      //     name: 'В\'язані шапки', description: ''},
      //   { _id: 'pads', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 3,
      //     assets: ['pads'], prefix: 'knp',
      //     name: 'Дитячі пінєтки', description: ''},
      //   { _id: 'knitedFlowers', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 4,
      //   assets: ['knitedFlowers'], prefix: 'knf',
      //   name: 'Квіти', description: ''},


      {
        _id: 'scrapbooking', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        assets: ['category-scrapbooking'], prefix: 'scr',
        name: 'Скрапбукінг', description: '',
      },
      {
        _id: 'albums', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 1,
        assets: ['category-albums'], prefix: 'sca', name: 'Альбоми', description: '',
      },
      {
        _id: 'cards', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 2,
        assets: ['category-cards'], prefix: 'scc', name: 'Листівки', description: '',
      },

      {
        _id: 'mcs', name: 'Майстер-класи', ancestors: ['home', 'common'], parent: 'common', prefix: 'mcs',
        auth: 'casual', order: 3, prefix: 'to', assets: [''], description: '',
      },
      // { _id: 'contacts', name: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 4, assets: [''],description: ''},

      {
        _id: 'system', name: 'Система', ancestors: ['home'], parent: 'home',
        auth: 'guest', order: 2, assets: ['catalog'], description: '',
      },

      {
        _id: 'dashboard', name: 'Dashboard', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 1, assets: ['catalog'], description: '',
      },
      // {_id: 'profile', name: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'guest', order: 1, assets: ['catalog'],description: ''},
      {
        _id: 'product-editor', name: 'Редактор виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 2, assets: ['catalog'], description: '',
      },
      {
        _id: 'mc-editor', name: 'Редактор майстеркласів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 2, assets: ['catalog'], description: '',
      },
      {
        _id: 'tools', name: 'Інструменти', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 5, assets: ['catalog'], description: '',
      },
      // {_id: 'dashboard-signup', name: 'Реєстрація', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'manager', order: 6, assets: ['catalog'],description: ''},

      {
        _id: 'login', name: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, assets: ['catalog'], description: '',
      },
      {
        _id: 'signup', name: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'manager', order: 3, assets: ['catalog'], description: '',
      },
      {
        _id: 'logout', name: 'Вийти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 4, assets: ['catalog'], description: '',
      },
    ]);
