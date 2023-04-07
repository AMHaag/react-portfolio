import React from 'react';
import Starr from '../../SVGs/StarrLogo';
import EpicLogo from '../../SVGs/EpicLogo';
import Agrace from '../../SVGs/Agrace';
import Uconn from '../../SVGs/UconnLogo';

const ResumeInformation = [
  {
    company: 'Bridgeton Research Group',
    location: 'Westport,CT',
    title: 'Software Engineer',
    start: 'December 2022',
    end: 'April 2023',
    list1: 'Quickly learned Python, Pandas and Tkinter.',
    list2:
      'Created a comprehensive data validation module to ensure client documents were accurate and fresh.',
    list3:
      'Built a GUI application in Python to allow research engineers to quickly graph and prototype market models.',
    list4:
      'Refactored data ingest to be asynchrounous and non blocking, reducing run time by 700%.',
    list5:
      'Implemented a combination of Polars in Rust and different file compression to make loading large data frames 40 times faster.',
    icon: null,
  },
  {
    company: 'University of Connecticut',
    location: 'Danbury, CT',
    title: 'Web Development Bootcamp',
    start: 'March 2022',
    end: 'August 2022',
    list1: 'Studied CSS,HTML and Javascript with a focus on ES6 features.',
    list2: 'Learned the MERN stack (MongoDB, Express, React and Node.js)',
    list3: 'Brushed up on using MySQL and making use of the Sequelize.js ORM',
    list4:
      'Additional topics covered were Git, PWAs, REST APIs, GraphQL and TDD',
    list5: '',
    icon: <Uconn height='25px' />,
  },
  {
    company: 'Starr Companies',
    location: 'New York,NY',
    title: 'Invoice and Systems Analyst',
    start: 'March 2017',
    end: 'April 2022',
    list1:
      'Oversaw a RDBMS responsible for over one billion dollars in billing each year',
    list2: 'Studied VBA scripting language to automate excel tasks',
    list3:
      'Facilitated contracted developers work on new features and provided User Acceptance Testing',
    list4: 'Designed file management schema for sharing files between teams',
    list5: '',
    icon: <Starr height='25px' />,
  },
  {
    company: 'Epic Software',
    location: 'Madison,WI',
    title: 'Accounting Assistant',
    start: 'January 2015',
    end: 'July 2015',
    list1:
      'Prepared billing milestones, invoicing and support for seven major US hospitals',
    list2:
      'Oversaw a redesign for executing billing for custom APIs created for clients',
    list3:
      'Utilized a SQL database to calculate billable hours for all 200+ hospitals',
    list4:
      'Created new logic to filter for mislabeled billable time, increasing accuracy in charges',
    list5: '',
    icon: <EpicLogo height='35px' />,
  },
  {
    company: 'Agrace Hospice Care',
    location: 'Madison,WI',
    title: 'Purchasing and Inventory Clerk',
    start: 'November 2012',
    end: 'January 2015',
    list1:
      'Regulated an active inventory of over 900 medical supplies, many crucial to patient comfort',
    list2:
      'Engineered and operated a barcoding system for counting inventory, reducing waste and miscounts',
    list3:
      'Converted supply rooms to a kanban system to almost eliminate out of stock time for all supplies',
    list4:
      'Introduced XML templates to quicken adding new items into inventory',
    list5: '',
    icon: <Agrace height='30px' />,
  },
];

export default ResumeInformation;
