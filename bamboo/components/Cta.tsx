import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Join Our Vibrant Chatroom Community
        </h2>
        <p className="mt-4 text-lg text-gray-400">
        Connect with like-minded individuals, share ideas, and build lasting relationships in our engaging chatroom
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" size="lg">
            <a href="/chat">Sign Up Now</a>
          </Button>
          <Button variant="secondary" size="lg">
          <a href="/chat">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;