export type Project = {
  name: string;
  description: string;
  githubLink?: string;
  siteLink?: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    name: "talk2arxiv",
    description: "#1 on HackerNews, 450 stars on GitHub. Prepend any arxiv.org link with 'talk2' to load the paper into a responsive RAG chat application.",
    githubLink: "https://github.com/evanhu1/talk2arxiv",
    siteLink: "https://www.talk2arxiv.org/"
  },
  {
    name: "NeuroGenesis",
    description: "Cellular automata neuroevolution simulator involving a computational model of the brain, built in C#.",
    githubLink: "https://github.com/evanhu1/NeuroGenesis/tree/main",
  },
  {
    name: "FaceGAN",
    description: "Deep convolutional cGAN implementation with CelebA dataset that generates faces from textual input.",
    githubLink: "https://github.com/evanhu1/pytorch-CelebA-faCeGAN",
  },
  {
    name: "Chess Positional Trainer",
    description: "Chess practice tool built with ReactJS, Javascript, and Python.",
    siteLink: "https://evanhu1.github.io/chess-positional-trainer/",
    githubLink: "https://evanhu1.github.io/chess-positional-trainer/",
  }
];
