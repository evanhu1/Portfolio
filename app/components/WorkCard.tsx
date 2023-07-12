'use client'
import Image from 'next/image'
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface cardProps {
  name: string,
  imgPath: string,
  title: string,
  subtitle: string,
  children: React.ReactNode
}

export default function WorkCard(props: cardProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="my-4 rounded-lg py-2 bg-white text-neutral-800 w-80 flex flex-col justify-center items-center">
      <h4 className="text-xl">{props.name}</h4>
      <Image className="mx-auto my-4" src={props.imgPath} width={100} height={100} alt="Company logo" />
      <h5 className="text-sm">{props.title}</h5>
      <p className="text-sm">{props.subtitle}</p>
      <button onClick={open} className="text-sm m-2 px-3 text-white bg-slate-600 rounded-full">
        More
      </button>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered={true}>
          {props.children}
      </Modal>
    </div>
  );
}
