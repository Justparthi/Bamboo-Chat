import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Cross-Device Sync',
    description:
      'Access your chatrooms across multiple devices, whether on your phone, tablet, or computer. Stay connected and never miss a message, even if you switch devices.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Privacy First',
    description:
      'We prioritize your privacy with end-to-end encryption and secure cloud storage. Rest assured, your conversations are private and protected from prying eyes.',
    icon: LockClosedIcon,
  },
  {
    name: 'Always in Sync',
    description:
      'Never lose track of conversations. All messages, files, and media sync in real-time across your devices, so you’re always in the loop.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Secure by Design',
    description:
      'We prioritize your security. With advanced encryption and secure cloud backups, you can trust that your messages, files, and media are protected.',
    icon: FingerPrintIcon,
  },
]

export default function FeatuesH() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id='features'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-400">Secure, Scalable, and Reliable</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Experience the Difference
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-400">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}