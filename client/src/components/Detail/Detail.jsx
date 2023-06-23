import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPokemon } from "../../redux/actions";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.pokemon);
  console.log(pokemon)

  return (
    <div key={id} className={style.container}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>HP: {pokemon.hp}</h3>
      <h3>Height: {pokemon.height}</h3>
      <h3>Weight: {pokemon.weight}</h3>
      <h3>Speed: {pokemon.speed}</h3>
      <h3>Attack: {pokemon.attack}</h3>
      <h3>Defense: {pokemon.defense}</h3>
      <h3>Types: {pokemon.types?.join(" - ")}</h3>
      {/* <h3>Type: {pokemon.types.join(",  ")}</h3> */}
    </div>
  );
}
