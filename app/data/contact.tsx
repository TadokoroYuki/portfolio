import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import type { ContactLink } from './types';

export const contactLinks: ContactLink[] = [
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
