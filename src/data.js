// src/data/posts.js

import featuredImage from "./assets/featured.png";
import recent1 from './assets/recent1.png';
import recent2 from './assets/recent2.png';

export const defaultPosts = {
  featured: {
    id: 1,
    image: featuredImage,
    date: "Apr 23, 2025 at 5:48 pm",
    title: "E-Magazine April 2025 Edition (Pakistan’s Roadmap to Crypto Legalization)",
    authors: ""
  },
  recents: [
    {
      id: 2,
      image: recent1,
      date: "May 31, 2024",
      title: "Transforming FBR",
      authors: "Huzaima Bukhari, Dr. Ikramul Haq & Abdul Rauf Shakoori"
    },
    {
      id: 3,
      image: recent2,
      date: "May 31, 2024",
      title: "Taxes for growth & prosperity",
      authors: "Dr. Ikramul Haq and Abdul Rauf Shakoori"
    }
  ]
};
