export default (name) =>
{
  const authors =[
    {
      imgSrc: '/src/assets/images/avatar.png',
      name: 'John Smith',
      authorDate: {
        dateTime: '2022-03-15',
        label: '15 March 2022',
      },
    },
  ]
  return authors.find(a => a.name === name);
}