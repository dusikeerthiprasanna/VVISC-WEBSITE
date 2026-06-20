import type { TeamMember } from '../types';

export const executivePanel: TeamMember[] = [
  {
    id: '1',
    name: 'K.Soniya',
    position: 'President',
    rollNumber: '23BQ1A1247',
    department: 'IT',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'B.Yeshitha',
    position: 'Vice President',
    rollNumber: '24BQ1A4312',
    department: 'CAI',
    photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'B.Lalith',
    position: 'Treasurer',
    rollNumber: '24BQ1A1219',
    department: 'IT',
    photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'SK. Abid',
    position: 'Secretary',
    rollNumber: '24BQ1A42U1',
    department: 'IT',
    photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const facultyCoordinators: TeamMember[] = [
  {
    id: 'f1',
    name: 'Dr. S. Venkateswarlu',
    position: 'Faculty Coordinator',
    photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 'f2',
    name: 'Dr. K. Lakshmi',
    position: 'Faculty Advisor',
    photo: 'https://images.pexels.com/photos/5215025/pexels-photo-5215025.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const leadsData: Record<string, TeamMember[]> = {
  'Digital Infrastructure': [
    { id: 'di1', name: 'P.RajVardhan', position: 'Lead', rollNumber: '24BQ5A6135', department: 'AIML', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Digital Infrastructure' },
    { id: 'di2', name: 'CH.Navya Sri', position: 'Associate Lead', rollNumber: '24BQ1A4331', department: 'CAI', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Digital Infrastructure' },
  ],
  'Operations': [
    { id: 'ev1', name: 'B.Praveena', position: 'Lead', rollNumber: '24BQ1A4322', department: 'CAI', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Events' },
    { id: 'ev2', name: 'E.Komal Sai', position: 'Associate Lead', rollNumber: '24BQ1A4730', department: 'CIC', photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Events' },
  ],
  'Research & Development': [
    { id: 'rd1', name: 'CH. Harshitha', position: 'Lead', rollNumber: '24BQ1A1232', department: 'IT', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Research & Development' },
    { id: 'rd2', name: '', position: 'Associate Lead', rollNumber: '22B01A0302', department: 'MECH',  photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Research & Development' },
  ],
  'Media & Arts': [
    { id: 'ma1', name: 'B.Abhishek', position: 'Lead', rollNumber: '24BQ1A1225', department: 'IT', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Media & Arts' },
    { id: 'ma2', name: 'T.Ujwal Datta', position: 'Associate Lead', rollNumber: '24BQ1A420D', department: 'CSM', photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Media & Arts' },
  ],
  'Public Relations': [
    { id: 'pr1', name: 'K. Harika', position: 'Lead', rollNumber: '24BQ1A1288', department: 'IT', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Public Relations' },
    { id: 'pr2', name: 'V. Jaahnavi', position: 'Associate Lead', rollNumber: '24BQ1A12L1', department: 'IT', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Public Relations' },
  ],
};

export const membersData: Record<string, TeamMember[]> = {
  'Digital Infrastructure': [
    { id: 'm1', name: 'Ravi Teja', position: 'Member', rollNumber: '23B01A0501', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Digital Infrastructure' },
    { id: 'm2', name: 'Sindhu P', position: 'Member', rollNumber: '23B01A0502', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Digital Infrastructure' },
  ],
  'Events': [
    { id: 'm3', name: 'Prasad K', position: 'Member', rollNumber: '23B01A0401', department: 'ECE', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Events' },
    { id: 'm4', name: 'Anjali R', position: 'Member', rollNumber: '23B01A0402', department: 'ECE', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Events' },
  ],
  'Research & Development': [
    { id: 'm5', name: 'Gautham N', position: 'Member', rollNumber: '23B01A0301', department: 'MECH', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Research & Development' },
    { id: 'm6', name: 'Harshitha V', position: 'Member', rollNumber: '23B01A0302', department: 'MECH', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Research & Development' },
  ],
  'Media & Arts': [
    { id: 'm7', name: 'Charan S', position: 'Member', rollNumber: '23B01A0201', department: 'CIVIL', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Media & Arts' },
    { id: 'm8', name: 'Bhavana K', position: 'Member', rollNumber: '23B01A0202', department: 'CIVIL', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Media & Arts' },
  ],
  'Public Relations': [
    { id: 'm9', name: 'Vamsi R', position: 'Member', rollNumber: '23B01A0101', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Public Relations' },
    { id: 'm10', name: 'Tejaswini M', position: 'Member', rollNumber: '23B01A0102', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Public Relations' },
  ],
  'Finance': [
    { id: 'm11', name: 'Sumanth P', position: 'Member', rollNumber: '23B01A0503', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Finance' },
    { id: 'm12', name: 'Shravya D', position: 'Member', rollNumber: '23B01A0504', department: 'CSE', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Finance' },
  ],
  'Operations': [
    { id: 'm13', name: 'Manoj K', position: 'Member', rollNumber: '23B01A0403', department: 'ECE', year: '2nd Year', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Operations' },
    { id: 'm14', name: 'Sahithi R', position: 'Member', rollNumber: '23B01A0404', department: 'ECE', year: '2nd Year', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400', council: 'Operations' },
  ],
};
