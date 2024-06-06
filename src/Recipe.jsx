export default function Recipe(props){
    return (
        <div>
        <h2>{props.recipe.name}</h2>
        <IngredientsList ingredients={props.recipe.ingredients} />
        </div>
    );
}

function IngredientsList(props) {
    return (
      <ul>
        {props.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    );
  }