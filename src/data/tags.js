export default (time, tag) => {
  return [
    {
      iconName: 'timer',
      label: `${time} minutes`,
    },
    {
      iconName: 'utensils',
      label: `${tag}`,
    },
  ]
}