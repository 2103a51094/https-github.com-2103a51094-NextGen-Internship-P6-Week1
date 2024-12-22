import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";

const tours = [
  {
    id: "01",
    title: "Kerala, India",
    city: "India",
    distance: 300,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Antelope Canyon, USA",
    city: "USA",
    distance: 400,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Maldives, South Asia",
    city: "South Asia",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: " Nohkalikai Falls, India",
    city:  "Meghalaya",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "The Azores, Portugal",
    city: "Portugal",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Machu Pichu, Peru",
    city: "Peru",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Banff National Park, Canada",
    city: "Canada",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    {
      name: "jhon doe",
      rating: 4.6,
    },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Santorini, Greece",
    city: "Greece",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    {
      name: "jhon doe",
      rating: 4.6,
    },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
  {
    id: "09",
    title: "Aurora Borealis, Iceland",
    city: "Thailand",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    {
      name: "jhon doe",
      rating: 4.6,
    },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "10",
    title: "Mt. Fuji, Japan",
    city: "Japan",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    {
      name: "jhon doe",
      rating: 4.6,
    },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
];

const tourPackages = [
  {
    id: "01",
    title: "Golden Triangle",
    destination: "Delhi, Agra, Jaipur, Neemrana",
    description: "Visit historical landmarks including the Taj Mahal and Red Fort.",
    places: ["Delhi", "Sikandra", "Agra", "Fatehpur Sikri", "Jaipur", "Neemrana"],
    price: 799,
    duration: "7 days",
    photo: tourImg01, // You can add specific package images here
  },
  {
    id: "02",
    title: "Exotic Himachal Tour",
    destination: "Shimla, Manali, Kullu",
    description: "A mesmerizing tour of the Himalayan hills.",
    places: ["Delhi", "Chandigarh", "Shimla", "Kullu", "Manali", "Parwanoo"],
    price: 899,
    duration: "10 days",
    photo: tourImg02, // Use appropriate image
  },
  {
    id: "03",
    title: "Chandigarh Amritsar Sikh Pilgrimage",
    destination: "Amritsar",
    description: "Visit the Golden Temple and other Sikh pilgrimage sites.",
    places: ["Delhi", "Chandigarh", "Jalandhar", "Amritsar"],
    price: 399,
    duration: "5 days",
    photo: tourImg03, // Add photo for the package
  },
  {
    id: "04",
    title: "Char Dham Yatra",
    destination: "Badrinath, Kedarnath, Gangotri, Yamunotri",
    description: "Sacred pilgrimage to the Char Dham shrines.",
    places: ["Badrinath", "Kedarnath", "Gangotri", "Yamunotri"],
    price: 1299,
    duration: "15 days",
    photo: tourImg04, // Package image
  },
  // Add more packages here...
  {
    id: "05",
    title: "Europe Tourism",
    destination: "Paris, Rome, Barcelona, London",
    description: "Explore the best of Europe with visits to iconic cities.",
    places: ["Paris", "Rome", "Barcelona", "London"],
    price: 2399,
    duration: "14 days",
    photo: tourImg05,
  },
  {
    id: "06",
    title: "Dubai Tourism",
    destination: "Dubai",
    description: "Explore the stunning skyscrapers and luxurious resorts of Dubai.",
    places: ["Burj Khalifa", "The Palm Jumeirah", "Dubai Mall", "Dubai Marina"],
    price: 1499,
    duration: "7 days",
    photo: tourImg06,
  },
  {
    id: "07",
    title: "America Tourism",
    destination: "USA",
    description: "From NYC to the Grand Canyon, explore America's best sites.",
    places: ["New York City", "Grand Canyon", "San Francisco", "Yellowstone National Park", "Washington D.C."],
    price: 2999,
    duration: "21 days",
    photo: tourImg07,
  },
  {
    id: "08",
    title: "Thailand Tourism",
    destination: "Thailand",
    description: "Explore the rich culture and natural beauty of Thailand.",
    places: ["Bangkok", "Chiang Mai", "Ayutthaya", "Phi Phi Islands"],
    price: 999,
    duration: "10 days",
    photo: tourImg08,
  },
];

export { tours, tourPackages }; // Export both arrays for usage in your component

export default tours;
