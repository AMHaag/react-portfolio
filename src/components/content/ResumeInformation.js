import React from 'react';
import Starr from '../../SVGs/StarrLogo';
import EpicLogo from '../../SVGs/EpicLogo';
import Agrace from '../../SVGs/Agrace';

const ResumeInformation = [
  {
    company: 'Starr Companies',
    location: 'New York,NY',
    title: 'Invoice and Systems Analyst',
    start: 'March 2017',
    end: 'April 2022',
    list1:
      'Managed a RDBMS responsible for over one billion dollars in billing each year.',
    list2: 'Utilized VBA scripting language to automate excel tasks',
    list3:
      'Worked with contracted developers on system features and performed User Acceptance Testing',
    list4: 'Designed file management schema for sharing files between teams.',
    list5: '',
    icon: <Starr height='25px' />,
  },
  {
    company: 'Epic Software',
    location: 'Madison,WI',
    title: 'Accounting Assistant',
    start: 'January 2015',
    end: 'July 2015',
    list1: 'Handled billing milestones, invoicing and support for seven major US hospitals',
    list2: 'Lead work group to redesign billing for custom APIs created for clients',
    list3: 'Utilized a SQL database to calculate billable hours for all 200+ hospitals',
    list4: 'Wrote logic to filter for mislabeled billable time, increasing accuracy in charges',
    list5: '',
    icon: <EpicLogo height='35px'/>,
  },
  {
    company: 'Agrace Hospice Care',
    location: 'Madison,WI',
    title: 'Purchasing and Inventory Clerk',
    start: 'November 2012',
    end: 'January 2015',
    list1: 'Helped manage active inventory of over 900 medical supplies',
    list2: 'Implemented and developed a barcoding system for counting inventory',
    list3: '',
    list4: '',
    list5: '',
    icon: <Agrace height='30px'/>,
  },
];

export default ResumeInformation;
