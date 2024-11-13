import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Mike W.',
      title: 'Community Leader',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'I run an online community for gaming enthusiasts, and Bamboo Chat has been incredible for keeping everyone connected. Whether we’re chatting in rooms, it’s fast, fun, and keeps the conversation flowing.'
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Manager, Widget Inc',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'I was hesitant at first, but this product has exceeded all my expectations. Highly recommended!'
    },
    {
      name: 'Bob Johnson',
      title: 'Developer, Gadgets LLC',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      quote: 'The ease of use and powerful features make this product a must-have. I\'m impressed!'
    }
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-400">Hear from our satisfied customers about their experience with our product.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 shadow-lg rounded-lg">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="h-20 w-20 rounded-full overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <blockquote className="text-center text-lg font-medium leading-relaxed text-gray-400">
                  "{testimonial.quote}"
                </blockquote>
                <div className="w-full h-px bg-gray-700"></div>
                <div className="text-center">
                  <p className="text-gray-300 font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;