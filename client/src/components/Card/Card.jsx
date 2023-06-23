import style from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card({ id, name, image, types, attack }) {

  const typePoke = types.map((poke, index) => {
    const nameType = poke.name ? poke.name : poke;
    return <p key={index}>{nameType}</p>;

  });
  return (
    <div key={id} className={style.container}>
       <Link to= {`/detail/${id}`} >
      <h3>{name}</h3>
     </Link>
      <img src={image} alt="img not found" />
      {typePoke}
      {attack}
    </div>
  );
}
