import classes from './arts-grid.module.css';
import ArtItem from './arts-item';

export default function ArtGrid({ meals }) {
    return (
    <ul className={classes.arts}>
        {meals.map((meal) => (
        <li key={meal.id}>
            <ArtItem {...meal}/>
        </li>
      ))}
    </ul>
  );
}