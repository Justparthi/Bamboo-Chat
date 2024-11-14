const posts = [
  {
    id: 1,
    title: 'Seamless Communication for Teams',
    href: '#',
    description:
      'As a remote team, staying connected is crucial, and this chatroom app has made it effortless. The real-time messaging feature have streamlined our collaboration. It’s intuitive and has really improved our productivity. Highly recommend it for any team!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Samantha L.',
      role: 'Project Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },{
    id: 2,
    title: 'Perfect for Community Building',
    href: '#',
    description:
      'I’ve been using this chatroom platform for my online community, and it’s been a game-changer. It’s a fantastic tool for building and nurturing a community!',
    date: 'May 23, 2022',
    datetime: '2023-05-23',
    category: { title: 'Consultant', href: '#' },
    author: {
      name: 'Daniel C',
      role: 'Community Moderator',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },{
    id: 3,
    title: 'Smooth User Experience',
    href: '#',
    description:
      'he interface is so clean and easy to use—both for new users and seasoned chat enthusiasts.  I’m really impressed with how smooth everything works!',
    date: 'Sep 05, 2022',
    datetime: '2022-09-05',
    category: { title: 'Digital Marketing', href: '#' },
    author: {
      name: 'Rachel M.',
      role: 'Digital Marketing Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
  
  // More posts...
]

export default function Example() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 text-white" id="test">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">From the Users</h2>
          <p className="mt-2 text-lg/8 text-gray-400">What Our Users Are Saying</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-400 hover:bg-gray-700"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-400">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


