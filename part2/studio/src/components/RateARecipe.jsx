let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  if (props.rating > 5 && props.rating < 1)
  
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }
  
  return GiveRating(stars);
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
