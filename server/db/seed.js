const db = require("./index.js");
const {
  User,
  Product,
  Review,
  Category,
  productType,
  Order,
  Invoice
} = require("../db/models");

const users = [
  {
    name: 'Luke Rice',
    email: "luke@riceisrice.com",
    password: "luke777",
    isAdmin: true
  },
  {
    name: 'Denis Rice',
    email: "denis@riceisrice.com",
    password: "denis777",
    isAdmin: true
  },
  {
    name: 'Anuj Rice',
    email: "anuj@riceisrice.com",
    password: "anuj777",
    isAdmin: true,
  },
  {
    name: 'Jordan Rice',
    email: "jordan@riceisrice.com",
    password: "jordan777",
    isAdmin: true,
  },
  {
    name: 'Ray Rice',
    email: "RR@riceisrice.com",
    password: "ray777",
    isAdmin: false,
  },
  {
    name: 'Peter Griffin',
    email: "PeatearGryfon@riceisrice.com",
    password: "peatear",
    isAdmin: false,
  },
  {
    name: 'Kim Jun Un',
    email: "rulernumberone@yahoo.com",
    password: "iloveusa",
    isAdmin: false,
  },
  {
    name: 'Donald Trump',
    email: "XxnycgansterXx@google.com",
    password: "ivanka",
    isAdmin: false,
  },
];

const products = [
  {
    id: 1,
    title: "iPhone X",
    description: "Apple's new iPhone",
    image:
      "http://i1.mirror.co.uk/incoming/article11129208.ece/ALTERNATES/s615/iPhone-X-box-leaked.jpg",
    price: 1000.0,
    inventory: 5
  },
  {
    id: 2,
    title: "MacBook Pro with Touch Bar",
    description: "Apple's high-end laptop",
    image:
      "https://cnet2.cbsistatic.com/img/wd-2myeZ62IKbNCATa11Cn1Si2A=/770x433/2017/06/06/dd40dd8d-e24b-4859-82e8-5848e5922109/apple-macbook-pro-touch-bar-15-inch-2017-4194.jpg",
    price: 2400.0,
    inventory: 1
  },
  {
    id: 3,
    title: "Jordan's Grandfather Rice (10lb)",
    description: "organic, hand-picked rice from Korea",
    image:
      "http://www.nutribrownrice.com/images/articles/white-brown-red02.jpg",
    price: 88.0,
    inventory: 5
  },
  {
    id: 4,
    title: "Luke's Girlfriend Rice (10lb)",
    description: "feminine, aromatic rice from China",
    image:
      "http://www.nutribrownrice.com/images/articles/white-brown-red03.jpg",
    price: 77.0,
    inventory: 2
  },
  {
    id: 5,
    title: "Anuj's Wife Rice (10lb)",
    description: "fresh married wife cooked rice from Nepal",
    image:
      "http://insiyatrading.com/wp-content/uploads/2016/05/rice-1.png",
    price: 99.0,
    inventory: 4
  },
  {
    id: 6,
    title: "Denis' Rice is Rice (10lb)",
    description: "super premium rice to blow your mouth",
    image:
      "http://www.rcelconnect.org/wp-content/uploads/2017/05/18446555_10156216410760550_1498699364306771099_n.jpg",
    price: 200.0,
    inventory: 1
  },
  {
    id: 7,
    title: "Sushi Rice (10lb)",
    description: "rice from Japan",
    image:
      "https://mms17-makemysushi.netdna-ssl.com/wp-content/uploads/2016/02/rice0-min.jpg",
    price: 20.0,
    inventory: 15
  },
  {
    id: 8,
    title: "Random Rice (10lb)",
    description: "randomly chosen rice",
    image:
      "https://s.yimg.com/ny/api/res/1.2/PD3mxO9nmwZVXinvA1srOg--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://magazines.zenfs.com/resizer/2.0/original/eSenGVuoU_XrmAmvsYgWducJP3U",
    price: 15.0,
    inventory: 10
  }
];

const reviews = [
  {
    content: "Way too expensive for a cellphone",
    productId: 1
  },
  {
    content: "It's cool that they removed the home button",
    productId: 1
  },
  {
    content: "Man, I like this gig, but a touch bar?",
    productId: 2
  },
  {
    content: "I like the keyboard",
    productId: 2
  },
  {
    content: "The screen is awesome!",
    productId: 2
  },
  {
    content: "Taste like grandpa",
    productId: 3
  },
  {
    content: "I can smell my Korean grandfather",
    productId: 3
  },
  {
    content: "I don't need a girlfriend any more",
    productId: 4
  }
];

const categories = [
  {
    id: 1,
    type: "United States of America"
  },
  {
    id: 2,
    type: "Republic of Korea"
  },
  {
    id: 3,
    type: "Republic of China"
  },
  {
    id: 4,
    type: "Federal Democratic Republic of Nepal"
  },
  {
    id: 5,
    type: "Japan"
  },
  {
    id: 6,
    type: "premium"
  },
  {
    id: 7,
    type: "organic"
  },
  {
    id: 8,
    type: "affordable"
  }
];

const productTypes = [
  {
    productId: 1,
    categoryId: 1
  },
  {
    productId: 2,
    categoryId: 1
  },
  {
    productId: 3,
    categoryId: 2
  },
  {
    productId: 3,
    categoryId: 4
  },
  {
    productId: 3,
    categoryId: 5
  },
  {
    productId: 4,
    categoryId: 3
  }
];

const invoices = [
  {
    status: "Created",
    address: "99 John Street Unit XXX, New York, NY, 10038",
    userId: 1
  }
];

const orders = [
  {
    quantity: 3,
    orderPrice: 88.0,
    userId: 1,
    productId: 3,
    invoiceId: 1
  },
  {
    quantity: 2,
    orderPrice: 77.0,
    userId: 1,
    productId: 4,
    invoiceId: 1
  },
  {
    quantity: 1,
    orderPrice: 1000.0,
    userId: 1,
    productId: 1,
    invoiceId: 1
  }
];

const seed = async () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() => Promise.all(products.map(product => Product.create(product))))
    .then(() => Promise.all(reviews.map(review => Review.create(review))))
    .then(() => Promise.all(categories.map(category => Category.create(category))))
    .then(() => Promise.all(productTypes.map(type => productType.create(type))))
    .then(() => Promise.all(invoices.map(invoice => Invoice.create(invoice))))
    .then(() => Promise.all(orders.map(order => Order.create(order))))
    .then(() => console.log("Seeding complete!"));

const main = () => {
  console.log("Syncing db...");
  db
    .sync({
      force: true
    })
    .then(() => {
      console.log("Seeding database...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
