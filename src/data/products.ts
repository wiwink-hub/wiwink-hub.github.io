export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    rating: 4.5,
    reviews: 12453,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 299.99,
    rating: 4.7,
    reviews: 8234,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Advanced fitness tracking, heart rate monitoring, and smartphone notifications.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "3",
    name: "4K Ultra HD Camera",
    price: 549.99,
    rating: 4.8,
    reviews: 3421,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Professional-grade 4K camera with image stabilization and WiFi connectivity.",
    inStock: true
  },
  {
    id: "4",
    name: "Portable Power Bank 20000mAh",
    price: 34.99,
    rating: 4.6,
    reviews: 15678,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "High-capacity portable charger with fast charging technology.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "5",
    name: "Ergonomic Office Chair",
    price: 249.99,
    rating: 4.4,
    reviews: 5432,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Comfortable ergonomic chair with lumbar support and adjustable armrests.",
    inStock: true
  },
  {
    id: "6",
    name: "LED Desk Lamp",
    price: 39.99,
    rating: 4.3,
    reviews: 7654,
    image: "/placeholder.svg",
    category: "Home",
    description: "Energy-efficient LED desk lamp with adjustable brightness and color temperature.",
    inStock: true
  },
  {
    id: "7",
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    rating: 4.7,
    reviews: 9876,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "8",
    name: "Coffee Maker Pro",
    price: 89.99,
    rating: 4.5,
    reviews: 6543,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "Programmable coffee maker with thermal carafe and auto-brew feature.",
    inStock: true
  },
  {
    id: "9",
    name: "Yoga Mat Premium",
    price: 29.99,
    rating: 4.6,
    reviews: 11234,
    image: "/placeholder.svg",
    category: "Sports",
    description: "Non-slip yoga mat with extra cushioning for comfort.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "10",
    name: "Air Purifier HEPA",
    price: 159.99,
    rating: 4.8,
    reviews: 4567,
    image: "/placeholder.svg",
    category: "Home",
    description: "Advanced HEPA air purifier with smart sensors and quiet operation.",
    inStock: true
  },
  {
    id: "11",
    name: "Wireless Gaming Mouse",
    price: 69.99,
    rating: 4.6,
    reviews: 8765,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "High-precision wireless mouse with customizable DPI and RGB lighting.",
    inStock: true
  },
  {
    id: "12",
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    rating: 4.7,
    reviews: 13456,
    image: "/placeholder.svg",
    category: "Sports",
    description: "Insulated water bottle keeps drinks cold for 24 hours.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "13",
    name: "USB-C Hub 7-in-1",
    price: 45.99,
    rating: 4.5,
    reviews: 6789,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Multiport adapter with HDMI, USB 3.0, SD card reader, and charging port.",
    inStock: true
  },
  {
    id: "14",
    name: "Noise Cancelling Earbuds",
    price: 119.99,
    rating: 4.6,
    reviews: 9234,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "True wireless earbuds with active noise cancellation and 24-hour battery.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "15",
    name: "Ring Light with Tripod",
    price: 39.99,
    rating: 4.4,
    reviews: 5678,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "LED ring light perfect for streaming, makeup, and photography.",
    inStock: true
  },
  {
    id: "16",
    name: "External SSD 1TB",
    price: 89.99,
    rating: 4.8,
    reviews: 7890,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Ultra-fast portable SSD with USB-C connection and shock resistance.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "17",
    name: "Webcam HD 1080p",
    price: 54.99,
    rating: 4.5,
    reviews: 4321,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Full HD webcam with auto-focus and built-in microphone.",
    inStock: true
  },
  {
    id: "18",
    name: "Standing Desk Converter",
    price: 179.99,
    rating: 4.6,
    reviews: 3456,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Adjustable height desk riser for ergonomic standing workspace.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "19",
    name: "Bookshelf 5-Tier",
    price: 89.99,
    rating: 4.3,
    reviews: 2345,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Modern industrial bookshelf with metal frame and wood shelves.",
    inStock: true
  },
  {
    id: "20",
    name: "Computer Desk with Drawers",
    price: 199.99,
    rating: 4.4,
    reviews: 4567,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Spacious desk with storage drawers and cable management.",
    inStock: true
  },
  {
    id: "21",
    name: "Gaming Chair RGB",
    price: 279.99,
    rating: 4.7,
    reviews: 8901,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Ergonomic racing-style chair with RGB lighting and lumbar support.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "22",
    name: "TV Stand Modern",
    price: 149.99,
    rating: 4.5,
    reviews: 3210,
    image: "/placeholder.svg",
    category: "Furniture",
    description: "Entertainment center with shelves for up to 65-inch TVs.",
    inStock: true
  },
  {
    id: "23",
    name: "Smart Light Bulbs 4-Pack",
    price: 34.99,
    rating: 4.6,
    reviews: 12345,
    image: "/placeholder.svg",
    category: "Home",
    description: "WiFi-enabled color-changing LED bulbs compatible with Alexa and Google.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "24",
    name: "Robot Vacuum Cleaner",
    price: 249.99,
    rating: 4.7,
    reviews: 6543,
    image: "/placeholder.svg",
    category: "Home",
    description: "Smart robot vacuum with mapping technology and auto-charging.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "25",
    name: "Humidifier Ultrasonic",
    price: 44.99,
    rating: 4.5,
    reviews: 5432,
    image: "/placeholder.svg",
    category: "Home",
    description: "Cool mist humidifier with essential oil diffuser and night light.",
    inStock: true
  },
  {
    id: "26",
    name: "Digital Door Lock",
    price: 129.99,
    rating: 4.4,
    reviews: 2987,
    image: "/placeholder.svg",
    category: "Home",
    description: "Keyless smart lock with fingerprint and smartphone access.",
    inStock: true
  },
  {
    id: "27",
    name: "Security Camera Indoor",
    price: 39.99,
    rating: 4.6,
    reviews: 8765,
    image: "/placeholder.svg",
    category: "Home",
    description: "1080p WiFi camera with night vision and two-way audio.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "28",
    name: "Blender High-Speed",
    price: 79.99,
    rating: 4.7,
    reviews: 9876,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "Professional blender for smoothies, soups, and frozen drinks.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "29",
    name: "Air Fryer 6-Quart",
    price: 99.99,
    rating: 4.8,
    reviews: 15234,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "Large capacity air fryer with 8 cooking presets and digital display.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "30",
    name: "Knife Set 15-Piece",
    price: 69.99,
    rating: 4.5,
    reviews: 4321,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "Professional kitchen knife set with wooden block and sharpener.",
    inStock: true
  },
  {
    id: "31",
    name: "Instant Pot Duo",
    price: 89.99,
    rating: 4.7,
    reviews: 23456,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "7-in-1 electric pressure cooker, slow cooker, rice cooker, and more.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "32",
    name: "Non-Stick Cookware Set",
    price: 119.99,
    rating: 4.6,
    reviews: 6789,
    image: "/placeholder.svg",
    category: "Kitchen",
    description: "12-piece cookware set with pots, pans, and cooking utensils.",
    inStock: true
  },
  {
    id: "33",
    name: "Resistance Bands Set",
    price: 19.99,
    rating: 4.5,
    reviews: 8901,
    image: "/placeholder.svg",
    category: "Sports",
    description: "5-level resistance bands with handles for home workouts.",
    inStock: true
  },
  {
    id: "34",
    name: "Adjustable Dumbbells",
    price: 199.99,
    rating: 4.8,
    reviews: 5678,
    image: "/placeholder.svg",
    category: "Sports",
    description: "Space-saving dumbbells adjustable from 5 to 52.5 pounds each.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "35",
    name: "Foam Roller",
    price: 24.99,
    rating: 4.6,
    reviews: 7654,
    image: "/placeholder.svg",
    category: "Sports",
    description: "High-density foam roller for muscle recovery and massage.",
    inStock: true
  },
  {
    id: "36",
    name: "Jump Rope Speed",
    price: 14.99,
    rating: 4.4,
    reviews: 4321,
    image: "/placeholder.svg",
    category: "Sports",
    description: "Adjustable speed jump rope with ball bearings and comfortable handles.",
    inStock: true
  },
  {
    id: "37",
    name: "Fitness Tracker Watch",
    price: 49.99,
    rating: 4.5,
    reviews: 11234,
    image: "/placeholder.svg",
    category: "Sports",
    description: "Activity tracker with heart rate monitor and sleep tracking.",
    inStock: true,
    badge: "Amazon's Choice"
  },
  {
    id: "38",
    name: "Wireless Charger 3-in-1",
    price: 39.99,
    rating: 4.6,
    reviews: 5432,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Fast charging station for phone, watch, and earbuds simultaneously.",
    inStock: true
  },
  {
    id: "39",
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    rating: 4.7,
    reviews: 9876,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Waterproof speaker with 20-hour battery and deep bass.",
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: "40",
    name: "Monitor 27-inch 4K",
    price: 329.99,
    rating: 4.8,
    reviews: 4567,
    image: "/placeholder.svg",
    category: "Electronics",
    description: "Ultra HD monitor with HDR support and 75Hz refresh rate.",
    inStock: true
  }
];

export const categories = [
  "All",
  "Electronics",
  "Furniture",
  "Home",
  "Kitchen",
  "Sports"
];
