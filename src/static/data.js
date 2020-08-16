const sections = [
  {
    info: { name: "About", kind: "about", route: "/about" },
    content: {
      name: {
        prefix: "",
        firstName: "Shreevari",
        middleName: "",
        lastName: "SP",
      },
      bio: [
        "Rustacean.",
        "Multimedia geek.",
        "I love open-source.",
        "Computers are rocks that we tricked into thinking.",
      ],
      contacts: [
        {
          mode: "Email",
          details: ["shreevari.sp@protonmail.com", "shreevari.sp@gmail.com"],
        },
        { mode: "IRC", details: ["shreevari", "s_p"] },
        { mode: "Twitter", details: ["shreevari"] },
        { mode: "Phone", details: ["+91 9886739496"] },
      ],
    },
  },
  {
    info: {
      name: "Blog",
      kind: "blog",
      route: "/blog",
    },
    content: {
      posts: [
        {
          title: "Placeholder title for the first post",
          content: "Placeholder content",
        },
        {
          title: "This is going to be replaced by the second post",
          content: "Again, placeholder content",
        },
        {
          title: "Another day another placeholder",
          content: "What did you expect? Another placeholder it is!",
        },
      ],
    },
  },
  {
    info: {
      name: "Shitpost",
      kind: "microblog",
      route: "/shitpost",
    },
    content: { message: "Oh, don't you worry! This will come soon(TM)." },
  },
];

export default sections;
