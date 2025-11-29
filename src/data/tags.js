export default (cookTime, prepTime, tag) => {
  return  {
    cookTime: {
      iconName: 'timer',
      label: `${cookTime} minutes`,
    },
    prepTime: {
      iconName: 'timer',
      label: `${prepTime} minutes`,
    },
    totalTime: {
      iconName: 'timer',
      label: `${cookTime + prepTime} minutes`,
    },
    dishName:{
      iconName: 'utensils',
      label: `${tag}`,
    },
  }
}