import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalData from "../CuteAnimals.json";
import "./CuteAnimalsBox.css";

const CuteAnimalsBox = () => {
  return (
    <section className="CuteAnimalsBox">
      <h2>Cute animal box</h2>
      {AnimalData.map((animal, index) => {
        return (
          <AnimalCard
            image={animal.image}
            animal={animal.animal}
            cutenessLevel={animal.cutenessLevel}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default CuteAnimalsBox;
