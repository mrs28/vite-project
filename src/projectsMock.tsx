// interface Technology {
//   tech1?: string;
//   tech2?: string;
//   tech3?: string;
//   tech4?: string;
// }

interface Project {
  id: string;
  name: string;
  category: string;
  img: string;
  description?: string;
  technologies: string;
  // technologies: Technology[];
}
export const items: Project[] = [
  {
    id: "1",
    name: "Travels",
    category: "Promotion Page",
    img: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1699371358/vista1_l5ffrd.png",
    description:
      "It's a promotional web application for a travel agencies that are seeking adventurous people who want to discover the world.",
    technologies:
      "https://skillicons.dev/icons?i=react,css,mui,firebase,vercel",
  },

  {
    id: "2",
    name: "Katz",
    category: "E-commerce",
    img: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1699371358/vista1_l5ffrd.png",
    description: "Katz E-commerce is a platform designed to offer high-quality products aimed at the well-being of kittens, with a social commitment to supporting shelters for abandoned animals.",
    technologies:
    "https://skillicons.dev/icons?i=react,css,mui,firebase,vercel",
  },

  {
    id: "3",
    name: "Derco",
    category: " Technical Service",
    img: "https://res.cloudinary.com/dzjf00pvx/image/upload/v1699371358/vista1_l5ffrd.png",
    description:
    "It is a web application for customers at an automotive workshop to track the status of their vehicle's technical inspection, displaying the current state of their service.",
    technologies:
    "https://skillicons.dev/icons?i=react,typescript,styledcomponents,vercel",
  },
];
