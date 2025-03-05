import { FaBook, FaHome, FaPhoneAlt } from 'react-icons/fa';
import legalcourt from '../../../assets/icons/leagal.svg';
import resources from '../../../assets/home/resources.png'
import { RiBookShelfLine, RiUserSettingsLine } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { GiOpenBook } from 'react-icons/gi';
export const counterData = [{
  title: 'Legal Topics',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  suffix: 'K',
  icon: legalcourt,
  isImage: true,
  to:'/legal-topics'
}, {
  title: 'Books',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  suffix: '+',
  icon: FaBook,
to:'/books'
}, {
  title: 'Judgements',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  suffix: 'K+',
  icon: FaHome,
  to:'/judgements'
}
, {
  title: 'Case Library',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  count: 6,
  suffix: 'K+',
  icon: RiBookShelfLine,
  variant: 'info',
  to:'/case-number'
}
, {
  title: 'Helpline',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  count: 6,
  suffix: 'K+',
  icon: FaPhoneAlt,
  variant: 'info',
  to:'/help-line'
},
{
  title: 'Bare Acts',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  count: 6,
  suffix: 'K+',
  icon: BiSearchAlt,
  variant: 'info',
  to:'/acts'
},{
  title: 'Our Services',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  count: 6,
  suffix: 'K+',
  icon: RiUserSettingsLine,
  variant: 'info',
  to:'/find-lawyer'
}, {
  title: 'Resources',
  desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
  count: 6,
  suffix: 'K+',
  icon: GiOpenBook,
  variant: 'info',
  to:'/resources'
},

];

export const resourcesData = [
  {
    title: 'Legal notice format',
    desc: 'Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut.',
    icon: resources,
    URL: '/'
  },
  {
    title: 'Legal agreement templates',
    desc: 'Find legal agreements that can be customized for your needs.',
    icon: resources,
    URL: '/'
  },
  {
    title: 'Case studies',
    desc: 'Explore real-world legal case studies and their outcomes.',
    icon: resources,
    URL: '/'
  },
  {
    title: 'Guides & articles',
    desc: 'Read expert legal insights and guides.',
    icon: resources,
    URL: '/'
  }
];

export const faqData = [
  {
    title: 'What types of legal services do you offer?',
    desc: 'We offer a wide range of legal services, including personal injury, family law, business law, estate planning, and criminal defense.'
  },
  {
    title: 'How do I schedule a consultation?',
    desc: 'You can schedule a consultation through our website or by calling our office.'
  },
  {
    title: 'Do you offer free consultations?',
    desc: 'Yes, we provide free initial consultations for most of our legal services.'
  },
  {
    title: 'How much do legal services cost?',
    desc: 'Our pricing depends on the complexity of your case. Contact us for a detailed estimate.'
  }
];
