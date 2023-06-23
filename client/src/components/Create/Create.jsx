import axios from 'axios'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Create.module.css";
import { getAllTypes } from "../../redux/actions";

export default function Create() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);
  const types = useSelector((state) => state.allTypes);

  const [input, setinput] = useState({
    name: "",
    image: null,
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    created: true
  });

  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setinput({
      ...input,
      [property]: value,
    });
  };
  function handleSelect(e) {
    setinput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }
  function handleDelete(type, event) {
    event.preventDefault();
    setinput({
      ...input,
      types: input.types.filter((t) => t !== type),
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://www.localhost:3001/pokemons', input)
    alert("Personaje creado!");
    setinput({
      name: "",
      types: [],
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: null,
      created: true
    });
  }

  return (
    <div className={style.container}>
      <form onSubmit={ handleSubmit} >
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={input.name}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            id="image"
            type="text"
            name="image"
            value={input.image}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="hp">Hp: </label>
          <input
            id="hp"
            type="range"
            name="hp"
            min="0"
            max="100"
            value={input.hp}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="attack">Attack: </label>
          <input
            id="attack"
            type="range"
            name="attack"
            min="0"
            max="100"
            value={input.attack}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="defense">Defense: </label>
          <input
            id="defense"
            type="range"
            name="defense"
            min="0"
            max="100"
            value={input.defense}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="speed">Speed: </label>
          <input
            id="speed"
            type="range"
            name="speed"
            min="0"
            max="100"
            value={input.speed}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            id="height"
            type="number"
            name="height"
            value={input.height}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight: </label>
          <input
            id="weight"
            type="number"
            name="weight"
            value={input.weight}
            onChange={handlerChange}
          />
        </div>
        <div>
          <label htmlFor="types">Types: </label>
          <select
            name="types"
            id="types"
            value={input.types}
            onChange={handleSelect}
          >
            {types.map((type, index) => {
              return (
                <option key={index} value={type.name}>
                  {type.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {input.types.map((type, index) => (
            <div>
              <span>{type} </span>
              <button onClick={(event) => handleDelete(type, event)}>x</button>
            </div>
          ))}
        </div>
        <div>
          <button>Crear Pokemon</button>
        </div>
      </form>
    </div>
  );
}
