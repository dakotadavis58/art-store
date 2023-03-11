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
      slug: "fujifilm-camera",
      name: "Fujifilm Camera",
      price: 209.99,
      image: "/assets/product.jpg",
      description: "A camera that takes great photos",
      stock: 10,
      category: "Electronics",
      reviews: [
        {
          id: 1,
          name: "John Doe",
          rating: 1,
          comment: "This is a great product",
        },

        {
          id: 2,
          name: "Jane Doe",
          rating: 4,
          comment: "This is a great product",
        },
      ],
      date: "2021-04-01",
    },
    {
      id: 2,
      slug: "digital-watch",
      name: "Digital Watch",
      price: 2.56,
      image: "/assets/product1.jpg",
      description: " A watch that tells time",
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
          rating: 5,
          comment: "This is a great product",
        },
      ],
      date: "2021-05-01",
    },
    {
      id: 3,
      name: "Sunglasses",
      slug: "sunglasses",
      price: 25.89,
      image: "/assets/product2.jpg",
      description: "Sunglasses that block out the sun's rays",
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
      date: "2022-05-02",
    },
    {
      id: 4,
      name: "Sneakers",
      slug: "queeriosities4",
      price: 19.99,
      image: "/assets/product3.jpg",
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
      date: "2022-11-03",
    },
    {
      id: 5,
      name: "Sneakers1",
      slug: "queeriosities4",
      price: 19.99,
      image: "/assets/product3.jpg",
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
      date: "2022-11-04",
    },
    // {
    //   id: 5,
    //   name: "Queeriosities4",
    //   slug: "queeriosities4",
    //   price: 10,
    //   image: "/assets/product3.jpg",
    //   description: "The best place to buy",
    //   reviews: [
    //     {
    //       id: 1,
    //       name: "John Doe",
    //       rating: 5,
    //       comment: "This is a great product",
    //     },

    //     {
    //       id: 2,
    //       name: "Jane Doe",
    //       rating: 4,
    //       comment: "This is a great product",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   name: "Queeriosities4",
    //   slug: "queeriosities4",
    //   price: 10,
    //   image: "/assets/product3.jpg",
    //   description: "The best place to buy",
    //   reviews: [
    //     {
    //       id: 1,
    //       name: "John Doe",
    //       rating: 5,
    //       comment: "This is a great product",
    //     },

    //     {
    //       id: 2,
    //       name: "Jane Doe",
    //       rating: 4,
    //       comment: "This is a great product",
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   name: "Queeriosities4",
    //   slug: "queeriosities4",
    //   price: 10,
    //   image: "/assets/product3.jpg",
    //   description: "The best place to buy",
    //   reviews: [
    //     {
    //       id: 1,
    //       name: "John Doe",
    //       rating: 5,
    //       comment: "This is a great product",
    //     },

    //     {
    //       id: 2,
    //       name: "Jane Doe",
    //       rating: 4,
    //       comment: "This is a great product",
    //     },
    //   ],
    // },
  ],
  newArrivals: {
    title: "New Arrivals!",
    subtitle: "The best place to buy",
    btnText: "Shop Newest",
  },
  about: {
    title: "About Us!",
    description: `Welcome to Curiosities, an art store that features our original artwork and the products we create. We are a small group of friends and family from New England who love to make art in our free time, and we wanted to share our creations with the world. Our goal is to provide unique, high-quality art pieces and products that will inspire and delight our customers.`,
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
  productsPage: {
    title: "Products",
    subtitle: "The best place to buy",
    filters: [
      {
        id: 1,
        name: "Price",
        options: [
          {
            id: 2,
            name: "Under $25",
            value: "under25",
          },
          {
            id: 3,
            name: "Under $50",
            value: "under50",
          },
          {
            id: 4,
            name: "$50 - $100",
            value: "50to100",
          },
        ],
      },
    ],
    sorts: [
      {
        id: 1,
        name: "Sort By",
        options: [
          {
            id: 2,
            name: "Price: Low to High",
            value: "lowToHigh",
          },
          {
            id: 3,
            name: "Price: High to Low",
            value: "highToLow",
          },
          {
            id: 4,
            name: "Most Recent",
            value: "mostRecent",
          },
          {
            id: 1,
            name: "Featured",
            value: "featured",
          },
        ],
      },
    ],
  },

  contact: {
    title: "Contact Us",
    subtitle: "The best place to buy",
    btnText: "Send Message",
  },
  cart: {
    title: "Your Cart",
    subtitle: "The best place to buy",
    btnText: "Checkout",
  },
  profile: {
    title: "Your Profile",
    subtitle: "The best place to buy",
    btnText: "Update",
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
  orders: [
    {
      id: 1,
      date: "2021-01-01",
      total: 100,
      status: "delivered",
      products: [
        {
          id: 1,
          name: "Queeriosities",
          slug: "queeriosities",
          price: 10,
          image: "/assets/product1.jpg",
          description: "The best place to buy",
          quantity: 1,
        },
      ],
    },
  ],
};

export default data;
