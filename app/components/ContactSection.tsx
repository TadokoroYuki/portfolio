'use client';

import { useInView } from '../hooks/useInView';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiArrowRight } from 'react-icons/hi';

interface ContactLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  label: string;
}

export default function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  const contactLinks: ContactLink[] = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-8 h-8" />,
      url: 'https://github.com/TadokoroYuki',
      label: '@TadokoroYuki',
    },
    {
      name: 'Email',
      icon: <HiOutlineMail className="w-8 h-8" />,
      url: 'mailto:tdkryk@icloud.com',
      label: 'tdkryk@icloud.com',
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              お気軽にご連絡ください
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {link.name}
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {link.label}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <HiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Additional Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              プロジェクトのご相談やお仕事のご依頼など、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
