const rowData = [
  {
    name: 'able history',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    dob: 22051992,
    gender: 'Female',
    id: 'RH-9',
    draft: false
  },
  {
    name: 'absolute way',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    dob: 22052001,
    gender: 'Female',
    id: 'RH-10',
    draft: false
  },
  {
    name: 'adorable art',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    dob: 22052011,
    gender: 'Female',
    id: 'RH-11',
    draft: false
  },
  {
    name: 'adventurous world',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    dob: 22051988,
    gender: 'Male',
    id: 'RH-12',
    draft: false
  },
  {
    name: 'academic information',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    dob: 22051989,
    gender: 'Female',
    id: 'RH-13',
    draft: false
  },
  {
    name: 'agitated control',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    dob: 22051998,
    gender: 'Male',
    id: 'RH-14',
    draft: false
  },
  {
    name: 'agonizing knowledge',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    dob: 22051989,
    gender: 'Female',
    id: 'RH-15',
    draft: false
  },
  {
    name: 'agreeable power',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    dob: 22052001,
    gender: 'Male',
    id: 'RH-16',
    draft: true
  },
  {
    name: 'ajar ability',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    dob: 22052010,
    gender: 'Female',
    id: 'RH-17',
    draft: false
  },
  {
    name: 'alarmed economics',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    dob: 22051977,
    gender: 'Female',
    id: 'RH-18',
    draft: false
  },
  {
    name: 'alarming love',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    dob: 22051999,
    gender: 'Male',
    id: 'RH-19',
    draft: true
  },
  {
    name: 'alert internet',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    dob: 22051989,
    gender: 'Female',
    id: 'RH-20',
    draft: false
  },
  {
    name: 'alienated television',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    dob: 11092001,
    gender: 'Male',
    id: 'RH-21',
    draft: false
  },
  {
    name: 'alive science',
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
    dob: 22051999,
    gender: 'Male',
    id: 'RH-22',
    draft: true
  },
  {
    name: 'all library',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    dob: 22052001,
    gender: 'Female',
    id: 'RH-23',
    draft: false
  },
  {
    name: 'altruistic nature',
    avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-24',
    draft: false
  },
  {
    name: 'amazing fact',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-25',
    draft: false
  },
  {
    name: 'ambitious product',
    avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-26',
    draft: false
  },
  {
    name: 'amused temperature',
    avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-27',
    draft: false
  },
  {
    name: 'amusing investment',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-28',
    draft: false
  },
  {
    name: 'anchored area',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-29',
    draft: false
  },
  {
    name: 'ancient society',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-30',
    draft: false
  },
  {
    name: 'angelic activity',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-31',
    draft: false
  },
  {
    name: 'angry story',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-32',
    draft: false
  },
  {
    name: 'anguished industry',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    dob: 22051989,
    gender: 'Male',
    id: 'RH-33',
    draft: false
  }
];

const data = rowData.reduce((r, s) => (r[s.id] = s, r), {});
export default data;
