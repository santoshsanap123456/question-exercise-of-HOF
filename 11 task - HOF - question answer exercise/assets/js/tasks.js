const products = [
    {
      productName: "Wireless Earbuds",
      productId: "P001",
      productPrice: 29.99,
      category: "Electronics",
      stockQuantity: 120,
      rating: 4.5
    },
    {
      productName: "Smartphone",
      productId: "P002",
      productPrice: 499.99,
      category: "Electronics",
      stockQuantity: 80,
      rating: 4.7
    },
    {
      productName: "Laptop",
      productId: "P003",
      productPrice: 999.99,
      category: "Computers",
      stockQuantity: 40,
      rating: 4.8
    },
    {
      productName: "Desk Lamp",
      productId: "P004",
      productPrice: 19.99,
      category: "Home Decor",
      stockQuantity: 200,
      rating: 4.3
    },
    {
      productName: "Gaming Keyboard",
      productId: "P005",
      productPrice: 59.99,
      category: "Accessories",
      stockQuantity: 150,
      rating: 4.6
    },
    {
      productName: "Electric Kettle",
      productId: "P006",
      productPrice: 39.99,
      category: "Kitchen Appliances",
      stockQuantity: 75,
      rating: 4.4
    },
    {
      productName: "Running Shoes",
      productId: "P007",
      productPrice: 69.99,
      category: "Footwear",
      stockQuantity: 130,
      rating: 4.5
    },
    {
      productName: "Backpack",
      productId: "P008",
      productPrice: 49.99,
      category: "Bags",
      stockQuantity: 90,
      rating: 4.3
    },
    {
      productName: "Bluetooth Speaker",
      productId: "P009",
      productPrice: 89.99,
      category: "Electronics",
      stockQuantity: 60,
      rating: 4.4
    },
    {
      productName: "Air Purifier",
      productId: "P010",
      productPrice: 129.99,
      category: "Home Appliances",
      stockQuantity: 50,
      rating: 4.6
    },
    {
      productName: "Coffee Maker",
      productId: "P011",
      productPrice: 79.99,
      category: "Kitchen Appliances",
      stockQuantity: 45,
      rating: 4.7
    },
    {
      productName: "Digital Camera",
      productId: "P012",
      productPrice: 349.99,
      category: "Photography",
      stockQuantity: 35,
      rating: 4.5
    },
    {
      productName: "Smartwatch",
      productId: "P013",
      productPrice: 199.99,
      category: "Wearable Tech",
      stockQuantity: 65,
      rating: 4.6
    },
    {
      productName: "Tablet",
      productId: "P014",
      productPrice: 299.99,
      category: "Electronics",
      stockQuantity: 70,
      rating: 4.4
    },
    {
      productName: "Electric Toothbrush",
      productId: "P015",
      productPrice: 49.99,
      category: "Personal Care",
      stockQuantity: 150,
      rating: 4.3
    },
    {
      productName: "Blender",
      productId: "P016",
      productPrice: 59.99,
      category: "Kitchen Appliances",
      stockQuantity: 100,
      rating: 4.5
    },
    {
      productName: "Yoga Mat",
      productId: "P017",
      productPrice: 29.99,
      category: "Fitness",
      stockQuantity: 200,
      rating: 4.2
    },
    {
      productName: "Hair Dryer",
      productId: "P018",
      productPrice: 39.99,
      category: "Personal Care",
      stockQuantity: 80,
      rating: 4.4
    },
    {
      productName: "Water Bottle",
      productId: "P019",
      productPrice: 15.99,
      category: "Accessories",
      stockQuantity: 300,
      rating: 4.6
    },
    {
      productName: "Smart Light Bulb",
      productId: "P020",
      productPrice: 19.99,
      category: "Home Decor",
      stockQuantity: 120,
      rating: 4.4
    },
    {
      productName: "Monitor Stand",
      productId: "P021",
      productPrice: 34.99,
      category: "Office Supplies",
      stockQuantity: 90,
      rating: 4.3
    },
    {
      productName: "Wireless Charger",
      productId: "P022",
      productPrice: 24.99,
      category: "Accessories",
      stockQuantity: 180,
      rating: 4.5
    },
    {
      productName: "Electric Scooter",
      productId: "P023",
      productPrice: 399.99,
      category: "Transportation",
      stockQuantity: 20,
      rating: 4.7
    },
    {
      productName: "Hiking Boots",
      productId: "P024",
      productPrice: 99.99,
      category: "Footwear",
      stockQuantity: 110,
      rating: 4.6
    },
    {
      productName: "Desk Organizer",
      productId: "P025",
      productPrice: 14.99,
      category: "Office Supplies",
      stockQuantity: 220,
      rating: 4.3
    },
    {
      productName: "USB Flash Drive",
      productId: "P026",
      productPrice: 12.99,
      category: "Accessories",
      stockQuantity: 400,
      rating: 4.5
    },
    {
      productName: "Power Bank",
      productId: "P027",
      productPrice: 39.99,
      category: "Electronics",
      stockQuantity: 160,
      rating: 4.6
    },
    {
      productName: "Wireless Mouse",
      productId: "P028",
      productPrice: 19.99,
      category: "Accessories",
      stockQuantity: 140,
      rating: 4.4
    },
    {
      productName: "Portable Projector",
      productId: "P029",
      productPrice: 249.99,
      category: "Electronics",
      stockQuantity: 30,
      rating: 4.7
    },
    {
      productName: "Office Chair",
      productId: "P030",
      productPrice: 129.99,
      category: "Furniture",
      stockQuantity: 60,
      rating: 4.5
    }


  ];
  

//   How can you create an array containing only the names of each product?

const productsName = products.map(product => product.productName)
cl(productsName)

// How would you generate an array of product prices, each increased by 10%?

const productprices10per = products.map(product => product.productPrice * 0.10)
cl(productprices10per)

// Use .filter() to find products costing less than $100, then use .map() to return an array of their productNames.

// How can you find all products with stockQuantity above 150 and return their productIds?

// Filter products in the "Footwear" category and map them to an array of strings like "Footwear: <productName>".

// How can you create a new array of strings in the format "ProductID - ProductName" for each product?

// How do you map an array of objects that only includes the productName and productPrice fields?

// Filter out products not in the "Home Decor" category and return their productNames in uppercase.

// Find all products with a price above $300, then return their productName and category in a new array.

// Filter for products with rating exactly 4.5, then map them to an array of objects containing productName and stockQuantity.

// How would you transform all product names to uppercase in a new array?

// How can you add a new key discountedPrice to each product, applying a 20% discount on the price?

// How would you create an array that shows whether each product is "In Stock" or "Out of Stock" based on its stockQuantity?

// How can you create an array containing only the category of each product?

// How would you generate an array in the format "ProductName costs $Price" for each product?

// How can you create an array of product prices, each rounded to the nearest integer?

// How can you map an array of ratings, each multiplied by 2?

// Use .filter() to find products priced below $50, and then use .map() to calculate their discounted price (10% off).

// Filter products with productName starting with "W", and map them to an array of their categorys.

// How would you create an array of product names that include the stock quantity in parentheses?

// How can you map an array with each product price converted to cents?

// How would you add a new key tax (5% of the price) to each product?

// How can you create an array that categorizes products by price range (e.g., "Low", "Medium", "High")?

// How would you map an array of boolean values that indicates if each product's rating is above 4.5?

// How can you create an array with only the first three characters of each product name?

// How would you generate an array of product prices formatted as strings like "$X.XX"?

// How can you map each product to a string format "ProductName (Rating/5)"?

// How would you add a new key stockValue, calculated as productPrice * stockQuantity, to each product?


// How can you filter the array to include only products that are in stock (i.e., stockQuantity > 0)?

// How would you filter the array to get only products with a rating above 4.5?

// How can you find products that cost more than $50?

// How would you filter products that belong to the "Electronics" category?

// How can you filter out products that have less than 100 units in stock?

// How would you find all products that have a price below $30?

// How can you filter products where the productName includes the word "Smart"?

// How would you get products with productIds starting with the letter "P"?

// How can you find products with productPrice between $20 and $100?

// How would you filter for products with a rating exactly equal to 4.5?

// How can you get products that are categorized under "Kitchen Appliances"?

// Find all products that belong to "Kitchen Appliances" and return their productName and productPrice.

// Filter for products with a rating greater than 4.5, and then create an array of their productNames.

// How would you filter products with productName longer than 10 characters?

// How can you filter products that cost more than $200 and are in stock?

// How would you find products with a stockQuantity less than 50?

// How can you filter out products that have a price above $100?

// How would you find products where the rating is less than 4.0?

// How can you filter products that have a productPrice as an integer (no decimals)?

// How would you get only those products with names that start with the letter "W"?

// How can you filter out all products that are not categorized as "Accessories"?

// How would you find products with a stockQuantity greater than or equal to 200?




