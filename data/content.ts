export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Software Developer at Global Logic",
        subTitle: "Remote",
        date: "2024 - Present",
        description: "Distributed systems with Kubernetes, Docker, Go and GCP.",
      },
      {
        title: "Full-Stack Developer at Phi 1",
        subTitle: "Remote",
        date: "2023 - 2024",
        description: "Frontend with Angular and React, GraphQL, microservices backend with Kubernetes, Go, Python and Node.",
      },
      {
        title: "Web Developer at Universidad Autónoma de Ciudad Juárez",
        subTitle: "Remote",
        date: "2023 - 2024",
        description: "Frontend with vanilla HTML and Bootstrap, with PHP for backend.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Computer Systems Engineering",
        subTitle: "Universidad Autónoma de Ciudad Juárez",
        date: "2020 - Present",
        description: "Almost done!",
      },
    ],
  },
  //   @NOTE: You can add more sections here
  //   {
  //     title: "Projects",
  //     items: [
  //       {
  //         title: "Project 1",
  //         subTitle: "Sub Title",
  //         date: "2015 - 2016",
  //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  //       },
  //     ],
  //   },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
