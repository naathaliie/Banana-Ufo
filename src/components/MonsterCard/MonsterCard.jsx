import "./MonsterCard.css";

const MonsterCard = ({id, name, eyes, color}) => {
  
  return (
    <div className={`monsterCard ${id}`}>
      <h4 className="name">Namn: {name}</h4> 
      <h4 className="eyes">Antal ögon: {eyes}</h4>
      <h4 className="color">Färg: {color}</h4>
      
    </div>
  );
};

export default MonsterCard;
