const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jcronier.github.io/',
  title: 'JC',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jordan Cronier',
  role: 'Full Stack Developer',
  description:
  'Hi there! I am a full stack developer currently looking for work. I enjoy video games, table-top games and trying new activities in my spare time. I am currently working on a video game site that can show you information on the latest video games!',
  resume: 'https://resume.creddle.io/resume/eiovyr5cxdv',
  social: {
    linkedin: 'https://linkedin.com/in/jordan-cronier',
    github: 'https://github.com/JCronier',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'REST-aurant',
    description:
      ' A "smart-menu" app, allowing customers at a restaurant to order items off the menu to their table as well as being able to pay their bills',
    stack: ['SASS', 'Express', 'React', 'MongoDB'],
    sourceCode: 'https://github.com/JCronier/rest-aurant',
    livePreview: 'https://github.com/JCronier/rest-aurant',
  },
  {
    name: 'Interview Scheduler',
    description:
      'A React app that where a user can schedule, edit and delete interview appointments',
    stack: ['React', 'webpack', 'Axios' ],
    sourceCode: 'https://github.com/JCronier/interview-scheduler',
    livePreview: 'https://github.com/JCronier/interview-scheduler',
  },
  {
    name: 'Decision Maker',
    description:
      'A multi-page application designed to help you and your friends come to an agreement.',
    stack: ['Express', 'PostgreSQL', 'jQuery'],
    sourceCode: 'https://github.com/JCronier/decision-maker',
    livePreview: 'https://github.com/JCronier/decision-maker',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'React',
  'Redux',
  'PostgreSQL',
  'MongoDB',
  'SASS',
  'Material UI',
  'Git',
  'Jest',
  'Cypress',
  'GraphQL',
  'Next.js',
  'Express.js',
  'Bootstrap',
  'Ruby on Rails'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jcronier777@gmail.com',
}

export { header, about, projects, skills, contact }
