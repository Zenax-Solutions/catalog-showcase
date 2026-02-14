import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product8 from "@/assets/product-8.jpeg";
import product9 from "@/assets/product-9.jpeg";

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  images: string[];
  material: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Python Skin Bifold Wallet",
    price: "LKR 12,500",
    description: "Exotic python skin bifold wallet with premium interior finish. Features multiple card slots and a spacious bill compartment. Each scale pattern is unique, making every wallet one of a kind.",
    images: [product1],
    material: "Genuine Python Leather",
    category: "Exotic",
  },
  {
    id: "2",
    name: "Classic Bifold – Forest Green",
    price: "LKR 6,500",
    description: "Elegant bifold wallet in deep forest green with hand-stitched edges. Features 6 card slots, 2 bill compartments, and a slim profile that fits perfectly in your pocket.",
    images: [product2, product3],
    material: "Full Grain Leather",
    category: "Classic",
  },
  {
    id: "3",
    name: "Ostrich Leather Bifold",
    price: "LKR 15,000",
    description: "Luxurious ostrich leather wallet with distinctive quill pattern. The natural texture and warm tone make this a statement piece. Hand-stitched with waxed thread for durability.",
    images: [product4, product8],
    material: "Genuine Ostrich Leather",
    category: "Exotic",
  },
  {
    id: "4",
    name: "Slim Profile Wallet – Black",
    price: "LKR 5,500",
    description: "Ultra-slim wallet crafted from premium black leather. Designed for the minimalist who values quality and function. Hand-stitched contrast stitching adds a refined touch.",
    images: [product5, product6],
    material: "Full Grain Leather",
    category: "Classic",
  },
  {
    id: "5",
    name: "Heritage Brown Bifold",
    price: "LKR 7,000",
    description: "Rich brown bifold wallet with a beautiful patina that develops character over time. Features 8 card slots and a coin pocket. Traditional hand-stitching throughout.",
    images: [product7],
    material: "Vegetable Tanned Leather",
    category: "Classic",
  },
  {
    id: "6",
    name: "Dark Chocolate Card Holder",
    price: "LKR 4,500",
    description: "Compact card holder in dark chocolate brown. Perfect for carrying essentials. Premium full grain leather with visible hand stitching and multiple card slots.",
    images: [product9],
    material: "Full Grain Leather",
    category: "Card Holders",
  },
];
