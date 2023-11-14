'use client'
import ProjectCard from "./components/ProjectCard";
import WorkCard from "./components/WorkCard";
import { Grid } from "@mantine/core";
import { List } from '@mantine/core';

export default function Portfolio() {
  return (
    <main className="">
      <div className="flex flex-col py-8 items-center justify-center">
        <p className="text-2xl my-2 mb-4">Work Experience</p>
        <Grid>
          <Grid.Col className="m-auto" span={"content"}>
            <WorkCard name="Shortbread" imgPath="/shortbreadlogo.png" title="Generative AI Researcher" subtitle="Sept 2023 – Dec 2023">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Researching, developing, and optimizing machine learning algorithms and production pipelines using Stable Diffusion and LLMs</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="Amazon Web Services (AWS)" imgPath="/aws_logo.png" title="SWE Intern" subtitle="May 2023 – August 2023">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Designed and developed a modular dynamic configuration service for AWS S3.</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="Generative AI @ Berkeley" imgPath="/LogoDarkTransparent.png" title="President" subtitle="May 2022 – Current">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Founded Berkeley’s biggest Generative AI student organization.</List.Item>
                </List>
              </div>
            </WorkCard>
          </Grid.Col>
          <Grid.Col className="m-auto" span={"content"}>
            <WorkCard name="Flexport" imgPath="/flexport_logo.png" title="SWE Intern" subtitle="January 2021 – February 2022">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Built and owned a document viewer using Ruby on Rails, ReactJS, Relay, and Flow.</List.Item>
                  <List.Item>- Instrumented analytics for a variety of products using Amplitude.</List.Item>
                  <List.Item>- Full stack cloud development using PostgreSQL, Kubernetes, Protocol Buffers, and GraphQL.</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="InterviewQuery" imgPath="/IQ_logo.png" title="ML Engineer Intern" subtitle="May 2022 – July 2022">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Trained a DistilBERT NLP classification model and developed a production pipeline to automate the
processing of new interview questions.</List.Item>
                  <List.Item>- Implemented a MapReduce algorithm on a Hadoop cluster to process email analytics data.</List.Item>
                  <List.Item>- Accelerated question tagging 5x by using NLP keyword extraction to automate question classification.</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="Machine Learning @ Berkeley" imgPath="/mlab.png" title="ML Engineer Intern" subtitle="May 2022 – July 2022">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Built a Conditional Generative Adversarial Network model to generate faces using textual keywords.</List.Item>
                </List>
              </div>
            </WorkCard>
          </Grid.Col>
        </Grid>
        <p className="text-2xl my-2 mb-4">Projects</p>
        <ProjectCard name="NeuroGenesis" code="https://github.com/evanhu1/NeuroGenesis/tree/main">
          <p className="text-sm text-center">Cellular automata neuroevolution simulator involving a computational model of the brain, built in C#.</p>
        </ProjectCard>

        <ProjectCard name="PintOS Operating System" code="">
          <p className="text-sm text-center">Designed and built a fully featured mini-OS using C and Assembly. Implemented process and thread management syscalls, multiple thread schedulers (e.g. MLFQS), a fully functional file system based on FFS, and virtual memory addressing + (m)alloc / free syscalls.</p>
        </ProjectCard>
        <ProjectCard name="FaceGAN" code="https://github.com/evanhu1/pytorch-CelebA-faCeGAN">
          <p className="text-sm text-center">Deep convolutional cGAN implementation with CelebA dataset that generates faces from textual input.</p>
        </ProjectCard>
        <ProjectCard name="Chess Positional Trainer" link="https://evanhu1.github.io/chess-positional-trainer/" code="https://evanhu1.github.io/chess-positional-trainer/">
          <p className="text-sm text-center">Chess practice tool built with ReactJS, Javascript, and Python.</p>
        </ProjectCard>
      </div>
    </main>
  )
}
