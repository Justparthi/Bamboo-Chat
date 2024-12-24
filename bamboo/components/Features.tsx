import React from 'react';
import { Upload, Lock, Server } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    name: 'Simple & Intuitive',
    description:
      'No steep learning curves. Our interface is designed to be user-friendly, so you can start chatting right away.',
    icon: Upload,
  },
  {
    name: 'Secure & Private',
    description: 'We take your privacy seriously. With end-to-end encryption, your conversations are always protected.',
    icon: Lock,
  },
  {
    name: 'Database backups.',
    description: 'Never worry about losing your conversations again! With Bamboo Chat, your chat history, files, and media are automatically backed up in real-time',
    icon: Server,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Where Ideas Meet.</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">
              Why Choose Bamboo Chat?

              </p>
              <p className="mt-6 text-lg/8 text-gray-400">
              From small groups to large teams, our app is built for high performance and reliability, ensuring smooth, uninterrupted communication no matter your size.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-200">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="https://i.ibb.co/qYn2rMq/Screenshot-2024-11-14-213804.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}