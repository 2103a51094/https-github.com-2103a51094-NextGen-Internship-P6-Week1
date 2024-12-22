import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.jpg";
import tourImg16 from "../images/tour-img16.jpg";
import tourImg17 from "../images/tour-img17.jpg";
import tourImg18 from "../images/tour-img18.jpg";

const tourPackages = [
  {
    id: "01",
    title: "Golden Triangle",
    category: "India",
    destinations: ["Delhi-Sikandra-Agra-FatehpurSikri-Jaipur-Neemrana-Delhi"],
    price: 500,
    maxGroupSize: 15,
    desc: "Explore the rich cultural heritage of India through the Golden Triangle – Delhi, Agra, and Jaipur.",
    reviews: [
      { name: "John Doe", rating: 4.8 },
      { name: "Jane Smith", rating: 4.6 },
    ],
    avgRating: 4.7,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "02",
    title: "Exotic Himachal Tour",
    category: "India",
    destinations: ["Delhi-Chandigarh-Shimla-Kullu-Manali-Parwanoo-Delhi"],
    price: 700,
    maxGroupSize: 12,
    desc: "Discover the scenic beauty and majestic hills of Himachal Pradesh, featuring Shimla, Kullu, and Manali.",
    reviews: [
      { name: "John Doe", rating: 4.7 },
    ],
    avgRating: 4.7,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "03",
    title: "Chandigarh Amritsar Sikh Pilgrimage Tour",
    category: "India",
    destinations: ["Delhi-Chandigarh-Jalandhar-Amritsar-Delhi"],
    price: 600,
    maxGroupSize: 10,
    desc: "Experience the spiritual journey through the sacred places of Punjab, including the Golden Temple.",
    reviews: [
      { name: "John Doe", rating: 4.6 },
      { name: "Michael Lee", rating: 4.5 },
    ],
    avgRating: 4.6,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "04",
    title: "Char Dham Yatra",
    category: "India",
    destinations: ["Badrinath-Kedarnath-Gangotri-Yamunotri"],
    price: 850,
    maxGroupSize: 10,
    desc: "Embark on the sacred Char Dham Yatra to the four revered Hindu pilgrimage sites in Uttarakhand.",
    reviews: [
      { name: "John Doe", rating: 4.9 },
    ],
    avgRating: 4.9,
    photo: tourImg14,
    featured: true,
  },
  {
    id: "05",
    title: "Europe Tourism",
    category: "International",
    destinations: ["Paris-France-Rome-Italy-Barcelona-Spain-London-United Kingdom"],
    price: 2000,
    maxGroupSize: 20,
    desc: "Explore the historical wonders of Europe including the Eiffel Tower, Colosseum, and the beaches of Barcelona.",
    reviews: [
      { name: "Emily Clark", rating: 5 },
      { name: "David Miller", rating: 4.7 },
    ],
    avgRating: 4.85,
    photo: tourImg15,
    featured: true,
  },
  {
    id: "06",
    title: "Dubai Tourism",
    category: "International",
    destinations: ["Burj Khalifa-The Palm Jumeirah-Dubai Mall-Dubai Marina"],
    price: 1200,
    maxGroupSize: 18,
    desc: "Explore the wonders of Dubai, from the Burj Khalifa to the luxurious Palm Jumeirah and more.",
    reviews: [
      { name: "Sarah Johnson", rating: 4.8 },
    ],
    avgRating: 4.8,
    photo: tourImg16,
    featured: true,
  },
  {
    id: "07",
    title: "America Tourism",
    category: "International",
    destinations: ["New York City-Grand Canyon-San Francisco-Yellowstone-Washington D.C."],
    price: 2500,
    maxGroupSize: 25,
    desc: "Travel through the iconic cities and landscapes of America, including New York and the Grand Canyon.",
    reviews: [
      { name: "Paul Adams", rating: 4.6 },
      { name: "Rachel Davis", rating: 4.7 },
    ],
    avgRating: 4.65,
    photo: tourImg17,
    featured: true,
  },
  {
    id: "08",
    title: "Thailand Tourism",
    category: "International",
    destinations: ["Bangkok-Chiang Mai-Ayutthaya-Phi Phi Islands"],
    price: 1300,
    maxGroupSize: 20,
    desc: "Discover the beauty of Thailand, from ancient temples to the stunning beaches of Phi Phi Islands.",
    reviews: [
      { name: "Emily Thompson", rating: 4.7 },
    ],
    avgRating: 4.7,
    photo: tourImg18,
    featured: true,
  },
];

export default tourPackages;
