import "./AnimalCard.css";

const AnimalCard = ({ image, animal, cutenessLevel, index }) => {
  return (
    <div className={`animalcard ${index}`}>
      <img src={`${image}`} width="400" alt="" />
      <ul>
        <li>Type of animal: {animal}</li>
        <li>Cuteness level: {cutenessLevel}</li>
      </ul>
    </div>

    
  );
};

export default AnimalCard;


