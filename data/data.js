const data = {
  nav: {
    navLinks: [
      { name: "Home", url: "/" },
      { name: "Shop", url: "/shop" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
    logo: {
      alt: "Logo",
      text: "Queeriosities",
    },
    btnText: "Shop",
  },
  hero: {
    title: "Queeriosities",
    subtitle: "The best place to buy",
    btnText: "Shop",
  },
  footer: {
    footerLinks: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
  },
  products: [
    {
      id: 1,
      slug: "queeriosities1",
      name: "Queeriosities",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
    },
    {
      id: 2,
      slug: "queeriosities2",
      name: "Queeriosities",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
    },
    {
      id: 3,
      name: "Queeriosities",
      slug: "queeriosities3",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
    },
  ],
  newArrivals: {
    title: "New Arrivals!",
    subtitle: "The best place to buy",
    btnText: "Shop Newest",
  },
  about: {
    title: "About Us",
    subtitle: "The best place to buy",
    btnText: "Find Out More",
  },
  contact: {
    title: "Contact Us",
    subtitle: "The best place to buy",
    btnText: "Send Message",
  },
};

export default data;
