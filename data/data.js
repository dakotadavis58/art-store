const data = {
  nav: {
    navLinks: [
      { name: "Home", url: "/" },
      { name: "Shop", url: "/products" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" },
    ],
    logo: {
      alt: "Logo",
      text: "Queeriosities",
      img: require("/public/assets/logo.png"),
    },
    btnText: "Shop Now",
  },
  hero: {
    title: "Queeriosities",
    subtitle: "The best place to buy",
    btnText: "Shop Now",
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
      name: "Queeriosities1",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
      reviews: [
        {
          id: 1,
          name: "John Doe",
          rating: 5,
          comment: "This is a great product",
        },

        {
          id: 2,
          name: "Jane Doe",
          rating: 4,
          comment: "This is a great product",
        },
      ],
    },
    {
      id: 2,
      slug: "queeriosities2",
      name: "Queeriosities2",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
      reviews: [
        {
          id: 1,
          name: "John Doe",
          rating: 5,
          comment: "This is a great product",
        },

        {
          id: 2,
          name: "Jane Doe",
          rating: 4,
          comment: "This is a great product",
        },
      ],
    },
    {
      id: 3,
      name: "Queeriosities3",
      slug: "queeriosities3",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
      reviews: [
        {
          id: 1,
          name: "John Doe",
          rating: 5,
          comment: "This is a great product",
        },

        {
          id: 2,
          name: "Jane Doe",
          rating: 4,
          comment: "This is a great product",
        },
      ],
    },
    {
      id: 4,
      name: "Queeriosities4",
      slug: "queeriosities4",
      price: 10,
      image: "/public/assets/product.jpg",
      description: "The best place to buy",
      reviews: [
        {
          id: 1,
          name: "John Doe",
          rating: 5,
          comment: "This is a great product",
        },

        {
          id: 2,
          name: "Jane Doe",
          rating: 4,
          comment: "This is a great product",
        },
      ],
    },
  ],
  newArrivals: {
    title: "New Arrivals!",
    subtitle: "The best place to buy",
    btnText: "Shop Newest",
  },
  about: {
    title: "About Us!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi corporis perspiciatis quasi recusandae quisquam molestias et ad accusantium fuga officia, delectus, architecto, aliquid porro provident doloribus culpa dolore quam sunt.",
    btnText: "Find Out More",
    images: [
      {
        id: 1,
        img: "/assets/mrrp.jpeg",
        alt: "About Image",
      },
      {
        id: 2,
        img: "/assets/head.jpeg",
        alt: "About Image",
      },
      {
        id: 3,
        img: "/assets/spectral-fox.jpeg",
        alt: "About Image",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "The best place to buy",
    btnText: "Send Message",
  },
  seo: {
    home: {
      title: "Queeriosities",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
    products: {
      title: "Products",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
    about: {
      title: "About",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
    contact: {
      title: "Contact",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
    profile: {
      title: "Profile",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
    cart: {
      title: "Cart",
      description: "The best place to buy",
      keywords: "queeriosities, queer, lgbtq, lgbtqia, lgbtqia+",
    },
  },
};

export default data;
