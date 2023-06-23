import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useState } from "react";
import Paginado from "../Paginado/Paginado";

export default function CardsContainer() {
  const allPokemons = useSelector((state) => state.allPokemons);
  
  const [currentPage, setCurrentPage] = useState(1)  //pagina actual  (1)
    const pokePerPage = 12
    
    const indexLastPoke = currentPage * pokePerPage  //(12)
    const indexFirstPoke = indexLastPoke - pokePerPage  //(0)
    const pokeActuales = allPokemons.slice(indexFirstPoke, indexLastPoke)

  return (
    <div className={style.container}>
      <Paginado pokePerPage={pokePerPage}
                pokeActuales={allPokemons.length}
                setCurrentPage={setCurrentPage}/>
      {pokeActuales.map((poke) => {
        return (    
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            image={poke.image}
            types={poke.types}
            attack={poke.attack}
          />
        );
      })}

    </div>
  );
}
