'use client'
import ProjectCard from "./components/ProjectCard";
import WorkCard from "./components/WorkCard";
import { Grid } from "@mantine/core";
import { List } from '@mantine/core';

export default function Portfolio() {
  return (
    <main className="">
      <div className="flex flex-col py-8 items-center justify-center">
        <p className="text-xl my-2">Work Experience</p>
        <Grid>
          <Grid.Col className="m-auto" span={"content"}>
            <WorkCard name="Amazon Web Services (AWS)" imgPath="/../public/aws_logo.png" title="SWE Intern" subtitle="May 2023 – August 2023">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Designed and deployed a dynamic configuration system for AWS S3..</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="Generative AI @ Berkeley" imgPath="/../public/ImagenLogo.png" title="President" subtitle="May 2022 – Current">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Founded Berkeley’s biggest Generative AI student organization</List.Item>
                </List>
              </div>
            </WorkCard>
          </Grid.Col>
          <Grid.Col className="m-auto" span={"content"}>
            <WorkCard name="Flexport" imgPath="/../public/flexport_logo.png" title="SWE Intern" subtitle="January 2021 – Februaru 2022">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Built and owned a document viewer using Ruby on Rails, ReactJS, Relay, and Flow.</List.Item>
                  <List.Item>- Instrumented analytics for a variety of products using Amplitude.</List.Item>
                  <List.Item>- Full stack cloud development using PostgreSQL, Kubernetes, Protocol Buffers, and GraphQL.</List.Item>
                </List>
              </div>
            </WorkCard>
            <WorkCard name="InterviewQuery" imgPath="/../public/IQ_logo.png" title="ML Engineer Intern" subtitle="May 2022 – July 2022">
              <div className="pt-2">
                <List className="mb-4 space-y-2">
                  <List.Item>- Trained a DistilBERT NLP classification model and developed a production pipeline to automate the
processing of new interview questions.</List.Item>
                  <List.Item>- Implemented a MapReduce algorithm on a Hadoop cluster to process email analytics data.</List.Item>
                  <List.Item>- Accelerated question tagging 5x by using NLP keyword extraction to automate question classification.</List.Item>
                </List>
              </div>
            </WorkCard>
          </Grid.Col>
        </Grid>
        <p className="text-xl my-2">Projects</p>
        <ProjectCard name="NeuroGenesis" code="https://github.com/evanhu1/NeuroGenesis/tree/main">
          <p className="text-sm text-center">Cellular automata neuroevolution simulator involving a computational model of the brain, built in C#.</p>
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
