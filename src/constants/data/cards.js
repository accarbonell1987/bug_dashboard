const Cards = [
  {
    title: 'Bugs',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 0,
    value: '',
    png: 'bug',
    icon: 'bug',
    categories: [],
    series: [
      {
        name: 'Bugs',
        data: [],
      },
    ],
  },
  {
    title: 'Projects',
    color: {
      backGround: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
      boxShadow: '0px 10px 20px 0px #fdc0c7',
    },
    barValue: 80,
    value: '14,270',
    png: 'js',
    icon: 'js',
    categories: [],
    series: [
      {
        name: 'Projects',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Users',
    color: {
      backGround: 'linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #f9d59b',
    },
    barValue: 60,
    value: '4,270',
    png: 'user',
    icon: 'user',
    categories: [],
    series: [
      {
        name: 'Users',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
]

export { Cards }
