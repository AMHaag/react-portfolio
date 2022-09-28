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
    list1: 'Prepared billing milestones, invoicing and support for seven major US hospitals',
    list2: 'Oversaw a redesign for executing billing for custom APIs created for clients',
    list3: 'Utilized a SQL database to calculate billable hours for all 200+ hospitals',
    list4: 'Created new logic to filter for mislabeled billable time, increasing accuracy in charges',
    list5: '',
    icon: <EpicLogo height='35px'/>,
  },
  {
    company: 'Agrace Hospice Care',
    location: 'Madison,WI',
    title: 'Purchasing and Inventory Clerk',
    start: 'November 2012',
    end: 'January 2015',
    list1: 'Regulated an active inventory of over 900 medical supplies, many crucial to patient comfort',
    list2: 'Engineered and operated a barcoding system for counting inventory, reducing waste and miscounts',
    list3: 'Converted supply rooms to a kanban system to almost eliminate out of stock time for all supplies',
    list4: 'Introduced XML templates to quicken adding new items into inventory',
    list5: '',
    icon: <Agrace height='30px'/>,
  },
];

export default ResumeInformation;
