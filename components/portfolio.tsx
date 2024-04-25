import { Libre_Franklin } from "next/font/google";
import { Arimo } from "next/font/google";
import Image from "next/image";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
});

import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { projects } from "./projectData";

export function Portfolio() {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <div
        className="fixed bg-cover bg-center w-full min-h-screen -z-10 opacity-100 saturate-50"
        style={{ backgroundImage: "url(/scene.svg)" }}
      />
      <nav className="fixed top-4 left-0 right-0 z-50 flex justify-end py-4 bg-transparent">
        <Link
          className="mx-4 text-gray-600 bg-white hover:text-black px-4 py-2 rounded-full duration-200 hover:-translate-y-1 transition"
          href="/photography"
        >
          Photography
        </Link>
        <Link
          className="mx-4 text-gray-600 bg-white hover:text-black px-4 py-2 rounded-full duration-200 hover:-translate-y-1 transition"
          href="/art"
        >
          Art
        </Link>
        <Link
          className="mx-4 text-gray-600 bg-white hover:text-black px-4 py-2 rounded-full duration-200 hover:-translate-y-1 transition"
          href="/poetry"
        >
          Poetry
        </Link>
      </nav>
      <section className="flex flex-col items-center justify-center py-24 md:py-32 lg:h-screen mb-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/evanhu1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon className="h-6 w-6 text-sky-600 transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/evanhu1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedinIcon className="h-6 w-6 text-sky-600 transition-colors duration-300" />
              </a>
            </div>
            <Avatar className="h-32 w-32">
              <AvatarImage alt="Avatar" src="/me.png" />
            </Avatar>
            <div className="space-y-2 flex flex-col items-center">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${libre_franklin.className}`}
              >
                Evan Hu
              </h1>
              <div className="flex flex-row items-center space-x-2 justify-items-center align-middle">
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  CTO and Co-founder at
                </p>
                <a
                  href="https://shortbread.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2 transition-colors duration-300"
                >
                  <img
                    src="/shortbreadLogo.png"
                    alt="Shortbread Logo"
                    className="h-6 w-auto"
                  />
                  <p
                    className={`max-w-[700px] text-yellow-400 font-extrabold md:text-xl ${libre_franklin.className}`}
                  >
                    Shortbread
                  </p>
                </a>
              </div>
              <br></br>
              <p className="max-w-[800px] text-gray-600 text-md">
                My research interests include Human-AI interaction, agentic AI,
                LLM memory, neurocomputational models. In my free time, I enjoy
                singing, tennis, basketball, chess, reading, writing poetry, and
                rock climbing.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-48 bg-white flex flex-col items-center shadow-black/50 shadow-2xl">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-sky-100 px-3 py-1 text-sm text-sky-600">
                AI, Games, and Creativity
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-6xl">
                Projects
              </h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-56 rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col space-y-3">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row justify-start space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:bg-gray-200 rounded-full p-2"
                    >
                      <GithubIcon className="h-6 w-6 text-sky-600 transition-colors duration-300" />
                    </a>
                  )}
                  {project.siteLink && (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-gray-200 rounded-full p-2"
                    >
                      <GlobeIcon className="h-6 w-6 text-sky-600 transition-colors duration-300" />
                    </a>
                  )}
                </div>
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
