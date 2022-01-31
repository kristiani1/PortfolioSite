const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: `${ process.env.PUBLIC_URL || '' }`,
  title: 'Kristian Toivonen',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kristian Toivonen',
  role: 'Tieto- ja viestintätekniikan opiskelija',
  description: 'Olen innostunut web-kehityksestä, uuden oppimisesta ja itseni kehittämisestä. Olen ennen kaikkea tiimipelaaja, mitä joukkueurheilutaustani jalkapallossa ja jääkiekossa on vahvistanut. Harrastuksiini kuuluu ohjelmoinnin lisäksi sijoittaminen ja kuntosali. Luonteeltani olen ahkera, tunnollinen ja rauhallinen, panostan kaikkeni siihen, mistä olen kiinnostunut.',
  resume: `${ process.env.PUBLIC_URL || '' }/pdf/Kristian-Toivonen-CV.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/kristian-toivonen-288b2a1b0/',
    github: 'https://github.com/kristiani1',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Cocktail Vending Machine\n',
    description:
      'This was a school assignment project where we had to code a GUI to a RaspBerry Pi 4 that could be used with the RaspBerry Pi provided 7\'\' touchscreen. In addition, we had to design and develop a website that has a connection to a MongoDB database (we decided to use Atlas), an implementation of Socket.IO, route validation (all pages but login are usable only by logged in users) and authentication.',
    stack: [ 'Handlebars', 'Javascript', 'Python', 'MongoDB', 'Socket.IO' ,'HTML', 'CSS'],
    sourceCode: 'https://github.com/kristiani1/cocktailVendingMachine'
  },
  {
    name: 'Ecommerce next\n',
    description:
      'Storefront course from udemy, development in progress',
    stack: ['Next.js', 'Shopify', 'React', 'Typescript'],
    sourceCode: 'https://github.com/kristiani1/ecommerce-next',
    livePreview: 'https://ecommerce-next-blond.vercel.app/',
  },
  {
    name: 'React youtube search',
    description:
      'React youtube search clone project, development in progress',
    stack: ['JavaScript', 'React', 'React hooks'],
    sourceCode: 'https://github.com/kristiani1/videos-hooks',
    livePreview: 'https://videos-hooks-mu-sepia.vercel.app//',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'C#',
  'React',
  'Next.js',
  'Material UI',
  'Tailwind',
  'Bootstrap',
  'Node.js',
  'MongoDB',
  'Mongoose',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'krtoivon@edu.lapinamk.fi',
}

export { header, about, projects, skills, contact }
