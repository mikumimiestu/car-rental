export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  priceUnit: string; // "per day", "per hour", etc.
  type: string;
  transmission: string;
  fuel: string;
  seats: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  available: boolean;
}

const cars: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2023,
    price: 45,
    priceUnit: "per day",
    type: "Sedan",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "The Toyota Corolla is a reliable and fuel-efficient sedan perfect for city driving and longer trips. With its comfortable interior and modern features, it's an excellent choice for travelers who want a hassle-free driving experience.",
    features: [
      "Bluetooth Connection",
      "USB Ports",
      "Backup Camera",
      "Cruise Control",
      "Air Conditioning",
      "Power Windows",
      "Keyless Entry"
    ],
    available: true
  },
  {
    id: 2,
    make: "Honda",
    model: "CR-V",
    year: 2023,
    price: 65,
    priceUnit: "per day",
    type: "SUV",
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 5,
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/205337/pexels-photo-205337.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "The Honda CR-V is a versatile SUV that combines fuel efficiency with ample cargo space. Its elevated driving position offers excellent visibility, and the spacious interior ensures comfort for all passengers.",
    features: [
      "Apple CarPlay & Android Auto",
      "Parking Sensors",
      "Lane Departure Warning",
      "Automatic Climate Control",
      "Heated Seats",
      "Sunroof",
      "Navigation System"
    ],
    available: true
  },
  {
    id: 3,
    make: "BMW",
    model: "5 Series",
    year: 2023,
    price: 120,
    priceUnit: "per day",
    type: "Luxury",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    image: "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Experience the ultimate driving pleasure with the BMW 5 Series. This luxury sedan offers a perfect blend of performance, comfort, and cutting-edge technology. The elegant design and premium materials create a sophisticated driving environment.",
    features: [
      "Premium Sound System",
      "Leather Seats",
      "Wireless Charging",
      "Adaptive Cruise Control",
      "Panoramic Sunroof",
      "360° Camera System",
      "Ambient Lighting"
    ],
    available: true
  },
  {
    id: 4,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    price: 95,
    priceUnit: "per day",
    type: "Sports",
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 4,
    image: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Feel the thrill of the road with the iconic Ford Mustang. This American muscle car delivers exhilarating performance and head-turning style. The powerful engine and responsive handling provide an unforgettable driving experience.",
    features: [
      "Sport Mode",
      "Performance Tires",
      "Paddle Shifters",
      "Premium Audio System",
      "Rearview Camera",
      "Keyless Start",
      "Sport Seats"
    ],
    available: true
  },
  {
    id: 5,
    make: "Volkswagen",
    model: "Transporter",
    year: 2022,
    price: 85,
    priceUnit: "per day",
    type: "Van",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 9,
    image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/13917576/pexels-photo-13917576.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1981824/pexels-photo-1981824.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "The Volkswagen Transporter is a spacious and versatile van ideal for group travel or moving large items. With comfortable seating for up to 9 passengers and ample cargo space, it's perfect for family vacations or business trips.",
    features: [
      "Sliding Doors",
      "Folding Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Parking Sensors",
      "Power Windows",
      "Luggage Space"
    ],
    available: true
  },
  {
    id: 6,
    make: "Toyota",
    model: "Prius",
    year: 2023,
    price: 55,
    priceUnit: "per day",
    type: "Hybrid",
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 5,
    image: "https://images.pexels.com/photos/18718387/pexels-photo-18718387/free-photo-of-front-view-of-white-toyota-car-parked-on-roadside.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/18718387/pexels-photo-18718387/free-photo-of-front-view-of-white-toyota-car-parked-on-roadside.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "The Toyota Prius is an eco-friendly hybrid car that offers exceptional fuel efficiency without compromising on comfort. Its innovative technology and reliable performance make it an ideal choice for environmentally conscious travelers.",
    features: [
      "Hybrid Engine",
      "Fuel Efficiency Display",
      "Smart Key System",
      "Touchscreen Display",
      "Lane Departure Alert",
      "Automatic Climate Control",
      "Backup Camera"
    ],
    available: true
  }
];

export default cars;