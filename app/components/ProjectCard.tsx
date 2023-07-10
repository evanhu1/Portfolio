'use client'
import { useDisclosure } from '@mantine/hooks';

interface cardProps {
  name: string,
  children: React.ReactNode
  code?: string,
  link?: string,
}

export default function ProjectCard(props: cardProps) {

  return (
    <div className="space-y-4 my-2 rounded-lg py-2 bg-white text-neutral-800 w-80 flex flex-col justify-center items-center">
      <h4 className="text-xl">{props.name}</h4>
      {props.children}
      <div className="flex flex-row">
        {props.link && <a href={props.link} className="text-sm m-2 px-3 text-white bg-slate-600 rounded-full">
          Link
        </a>}
        {props.code && <a href={props.code} className="text-sm m-2 px-3 text-white bg-slate-600 rounded-full">
          Code
        </a>}
      </div>
    </div>
  );
}
