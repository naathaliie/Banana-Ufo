import "./MonsterBox.css";
import MonsterCard from "../MonsterCard/MonsterCard";
/* Below we import the JSON-file containing all the 
monsters we have created,and asigns it to a new variable theMonsters */
import theMonsters from "./MonsterData.json";

const MonsterBox = () => {

  return (
    <section className="monsterBoxSection">
        <h2>Monster Box</h2>
      {/* Here we are using the map() method to iterate over the array "theMonsters" 
        and create a new array of components of every monster. You can set a arrow 
        function or any other function that you want to use as its parameter.
        And for every monster in the array we want to return a Monster (the component) */}
      {theMonsters.map((monster) => {
        return (
          <MonsterCard
            key={monster.id}
            id={monster.id}
            name={monster.name}
            eyes={monster.eyes}
            color={monster.color}
          />
        );
      })}
    </section>
  );
};

export default MonsterBox;
