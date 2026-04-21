export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverVideo?: string;
  rating: number;
  reviews: number;
  tag?: "new" | "sale" | "bestseller";
  material?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
  span?: string;
}

export interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  products?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=90&auto=format",
    count: 347,
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=90&auto=format",
    count: 213,
  },
  {
    id: 3,
    name: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=90&auto=format",
    count: 158,
  },
  {
    id: 4,
    name: "Workspace",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90&auto=format",
    count: 94,
  },
  {
    id: 5,
    name: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=90&auto=format",
    count: 76,
    span: "col-span-2",
  },
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "STRÖM Modular Sofa",
    category: "Living Room",
    price: 42990,
    originalPrice: 54990,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=90&auto=format",
    hoverVideo: "/videos/sofa-fabric.mp4",
    rating: 4.8,
    reviews: 1247,
    tag: "sale",
    material: "Linen & Oak",
  },
  {
    id: 2,
    name: "BJÖRK Dining Table",
    category: "Kitchen & Dining",
    price: 28990,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=90&auto=format",
    hoverVideo: "/videos/table-wood.mp4",
    rating: 4.9,
    reviews: 834,
    tag: "bestseller",
    material: "Solid Oak",
  },
  {
    id: 3,
    name: "DRÖM Platform Bed",
    category: "Bedroom",
    price: 18990,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=90&auto=format",
    hoverVideo: "/videos/bed-linen.mp4",
    rating: 4.7,
    reviews: 2156,
    tag: "new",
    material: "Walnut & Steel",
  },
  {
    id: 4,
    name: "MOLN Task Chair",
    category: "Workspace",
    price: 15990,
    originalPrice: 19990,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200&q=90&auto=format",
    hoverVideo: "/videos/chair-mesh.mp4",
    rating: 4.6,
    reviews: 967,
    tag: "sale",
    material: "Mesh & Aluminium",
  },
  {
    id: 5,
    name: "LJUS Arc Lamp",
    category: "Lighting",
    price: 4990,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab3fe?w=1200&q=90&auto=format",
    rating: 4.5,
    reviews: 543,
    material: "Brass & Marble",
  },
  {
    id: 6,
    name: "SKÅP Bookshelf",
    category: "Storage",
    price: 22990,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200&q=90&auto=format",
    rating: 4.8,
    reviews: 412,
    tag: "new",
    material: "Walnut Veneer",
  },
  {
    id: 7,
    name: "VILA Lounge Chair",
    category: "Living Room",
    price: 12990,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=90&auto=format",
    rating: 4.7,
    reviews: 678,
    tag: "bestseller",
    material: "Bouclé & Beech",
  },
  {
    id: 8,
    name: "NATT Side Table",
    category: "Bedroom",
    price: 6990,
    originalPrice: 8990,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=1200&q=90&auto=format",
    rating: 4.4,
    reviews: 321,
    tag: "sale",
    material: "Marble & Brass",
  },
];

export const rooms: Room[] = [
  {
    id: 1,
    name: "The Quiet Living Room",
    description: "Warm textures, low light, nowhere to be",
    image: "/images/room-living.png",
    products: 12,
  },
  {
    id: 2,
    name: "The Sunday Bedroom",
    description: "Linen sheets, morning light, slow mornings",
    image: "/images/room-bedroom.png",
    products: 8,
  },
  {
    id: 3,
    name: "The Maker's Desk",
    description: "Where focus meets comfort",
    image: "/images/room-workspace.png",
    products: 6,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya M.",
    location: "Mumbai",
    text: "The STRÖM sofa completely transformed our living room. The linen feels incredible and it's held up beautifully after a year of daily use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun K.",
    location: "Bangalore",
    text: "I was skeptical about buying furniture online, but the quality exceeded my expectations. The BJÖRK dining table is a centerpiece.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah L.",
    location: "Delhi",
    text: "Finally found furniture that matches the Scandinavian aesthetic I wanted without the imported price tag. The DRÖM bed is perfection.",
    rating: 4,
  },
  {
    id: 4,
    name: "Vikram R.",
    location: "Hyderabad",
    text: "Third purchase from HËMMA. The quality is consistent and the design language across pieces makes everything work together.",
    rating: 5,
  },
];

export const navLinks = [
  { name: "Living", href: "#categories" },
  { name: "Bedroom", href: "#categories" },
  { name: "Dining", href: "#categories" },
  { name: "Workspace", href: "#categories" },
  { name: "Collection", href: "#products" },
  { name: "Sale", href: "#products", highlight: true },
];
