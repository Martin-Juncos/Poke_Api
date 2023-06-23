import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Loading from "../Loading/Loading"
import style from "./CardsContainer.module.css";
import { useEffect, useState } from "react";
import Paginado from "../Paginado/Paginado";

export default function CardsContainer() {
  const allPokemons = useSelector((state) => state.allPokemons);

  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading)
  useEffect(()=>{
    if(allPokemons.length)
    setIsLoading(false)
  },[allPokemons.length])
  
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
      
      {
        isLoading ?
        <Loading/> :
        pokeActuales.map((poke) => {
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
        })
      }

      {/* {pokeActuales.map((poke) => {
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
      })} */}

    </div>
  );
}
