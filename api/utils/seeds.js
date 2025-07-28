import mongoose from "mongoose";
import dotenv from "dotenv";
import Hotel from "../models/Hotel.js";


dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

const hotels = [
  // ----- Jaipur -----
  {
    name: "InterContinental",
    type: "hotel",
    city: "Jaipur",
    address: "Sitapura",
    distance: "200",
    photos: [
      "https://images.pexels.com/photos/2611026/pexels-photo-2611026.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    ],
    title: "Best Stay in Jaipur",
    desc: "Best Hotel in the city",
    rooms: ["Deluxe Room", "Executive Room", "Suite Room"],
    cheapestPrice: 300,
    featured: true
  },
  {
    name: "Radisson Blu",
    type: "hotel",
    city: "Jaipur",
    address: "Tonk Road",
    distance: "350",
    photos: [
      "https://images.pexels.com/photos/2611873/pexels-photo-2611873.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/2611872/pexels-photo-2611872.jpeg"
    ],
    title: "Luxury at Its Best",
    desc: "Premium rooms with luxury facilities",
    rooms: ["Superior Room", "Business Class Room", "Presidential Suite"],
    cheapestPrice: 450,
    featured: false
  },
  {
    name: "Hilton Jaipur",
    type: "hotel",
    city: "Jaipur",
    address: "Hawa Sadak",
    distance: "500",
    photos: [
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
    ],
    title: "Comfort and Class",
    desc: "Modern amenities with royal elegance",
    rooms: ["Queen Room", "King Room", "Family Suite"],
    cheapestPrice: 380,
    featured: true
  },
  {
    name: "The Lalit Jaipur",
    type: "hotel",
    city: "Jaipur",
    address: "Jagatpura Road",
    distance: "300",
    photos: [
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
    ],
    title: "Royal Heritage Stay",
    desc: "Live like royalty with top-notch services",
    rooms: ["Heritage Room", "Royal Suite", "Deluxe Room"],
    cheapestPrice: 500,
    featured: true
  },
  {
    name: "Fairmont Jaipur",
    type: "hotel",
    city: "Jaipur",
    address: "Rajasthan Highway",
    distance: "700",
    photos: [
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Scenic View Stay",
    desc: "Nestled in nature with 5-star experience",
    rooms: ["Luxury Tent", "Valley View Room", "Deluxe Palace Room"],
    cheapestPrice: 600,
    featured: false
  },

  // ----- London -----
  {
    name: "London Bridge Hotel",
    type: "hotel",
    city: "London",
    address: "8-18 London Bridge St",
    distance: "100",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg",
      "https://images.pexels.com/photos/2611017/pexels-photo-2611017.jpeg"
    ],
    title: "Comfort Near the Bridge",
    desc: "Located near major attractions with cozy rooms",
    rooms: ["Single", "Double", "Executive"],
    cheapestPrice: 450,
    featured: false
  },
  {
    name: "The Ritz London",
    type: "hotel",
    city: "London",
    address: "150 Piccadilly",
    distance: "200",
    photos: [
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Royal Experience",
    desc: "High-end luxurious rooms and fine dining",
    rooms: ["Suite", "Presidential", "Deluxe"],
    cheapestPrice: 800,
    featured: true
  },
  {
    name: "Park Plaza Westminster",
    type: "hotel",
    city: "London",
    address: "200 Westminster Bridge Rd",
    distance: "500",
    photos: [
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Iconic London Stay",
    desc: "Next to Big Ben and London Eye",
    rooms: ["City View Room", "Twin Room", "Studio"],
    cheapestPrice: 420,
    featured: true
  },
  {
    name: "Premier Inn London City",
    type: "hotel",
    city: "London",
    address: "Tower Hill",
    distance: "150",
    photos: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg"
    ],
    title: "Budget with Class",
    desc: "Affordable comfort near the center",
    rooms: ["Budget Twin", "Budget Double"],
    cheapestPrice: 200,
    featured: false
  },
  {
    name: "The Langham London",
    type: "hotel",
    city: "London",
    address: "Regent Street",
    distance: "300",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/2611017/pexels-photo-2611017.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Historic Charm",
    desc: "Experience Victorian elegance with modern comfort",
    rooms: ["Classic Room", "Langham Club Room"],
    cheapestPrice: 550,
    featured: true
  },

  // ----- Berlin -----
  {
    name: "Hotel Adlon Kempinski",
    type: "hotel",
    city: "Berlin",
    address: "Unter den Linden 77",
    distance: "300",
    photos: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg"
    ],
    title: "Berlin's Luxury Landmark",
    desc: "Classic hotel with view of Brandenburg Gate",
    rooms: ["Junior Suite", "Panorama Suite"],
    cheapestPrice: 700,
    featured: true
  },
  {
    name: "Motel One Berlin",
    type: "hotel",
    city: "Berlin",
    address: "Alexanderplatz",
    distance: "500",
    photos: [
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Affordable Berlin",
    desc: "Modern hotel close to public transport",
    rooms: ["Standard", "Twin", "Double"],
    cheapestPrice: 180,
    featured: false
  },
  {
    name: "Scandic Berlin",
    type: "hotel",
    city: "Berlin",
    address: "Potsdamer Platz",
    distance: "350",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
    ],
    title: "Eco-Friendly Stay",
    desc: "Sustainable hotel with central location",
    rooms: ["Eco Double", "Green Twin"],
    cheapestPrice: 260,
    featured: false
  },
  {
    name: "NH Collection Berlin",
    type: "hotel",
    city: "Berlin",
    address: "Friedrichstraße",
    distance: "250",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg",
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
    ],
    title: "Elegant Escape",
    desc: "Style and service in heart of Berlin",
    rooms: ["Deluxe", "Superior"],
    cheapestPrice: 350,
    featured: true
  },
  {
    name: "Holiday Inn Express",
    type: "hotel",
    city: "Berlin",
    address: "Kurfürstendamm",
    distance: "400",
    photos: [
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Family Friendly Budget",
    desc: "Perfect for tourists and short stays",
    rooms: ["Family Room", "Standard Room"],
    cheapestPrice: 220,
    featured: false
  },

  // ----- Madrid -----
  {
    name: "Hotel Riu Plaza España",
    type: "hotel",
    city: "Madrid",
    address: "Gran Via",
    distance: "100",
    photos: [
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
    ],
    title: "Skyline Views",
    desc: "Iconic rooftop bar and beautiful views",
    rooms: ["Skyline Deluxe", "City Room"],
    cheapestPrice: 400,
    featured: true
  },
  {
    name: "Hotel Paseo del Arte",
    type: "hotel",
    city: "Madrid",
    address: "Atocha",
    distance: "200",
    photos: [
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg"
    ],
    title: "Museum Walk Stay",
    desc: "Perfect for art and museum lovers",
    rooms: ["Gallery Room", "Twin Room"],
    cheapestPrice: 320,
    featured: false
  },
  {
    name: "Only YOU Boutique Hotel",
    type: "hotel",
    city: "Madrid",
    address: "Barquillo Street",
    distance: "350",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
    ],
    title: "Trendy & Modern",
    desc: "Boutique style with modern design",
    rooms: ["Design Room", "Urban Room"],
    cheapestPrice: 360,
    featured: true
  },
  {
    name: "Hotel Regina Madrid",
    type: "hotel",
    city: "Madrid",
    address: "Alcalá Street",
    distance: "150",
    photos: [
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
    ],
    title: "Historic Heart Stay",
    desc: "Centrally located near Puerta del Sol",
    rooms: ["Classic", "Premium"],
    cheapestPrice: 330,
    featured: false
  },
  {
    name: "Hotel Atlantico Madrid",
    type: "hotel",
    city: "Madrid",
    address: "Gran Via 38",
    distance: "250",
    photos: [
      "https://images.pexels.com/photos/2611015/pexels-photo-2611015.jpeg",
      "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
    ],
    title: "Stylish Gran Via",
    desc: "Classic design on Madrid’s famous street",
    rooms: ["Superior", "Balcony View"],
    cheapestPrice: 410,
    featured: false
  }
];


const seedData = async () => {
  try {
    await connect();
    await Hotel.deleteMany({});
    const createdHotels = await Hotel.insertMany(hotels);
    console.log("Seed data inserted:", createdHotels);
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.disconnect();
  }
};

seedData();
