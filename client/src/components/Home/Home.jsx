import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Aside from "../Aside/Aside";
import CardsContainer from "../CardsContainer/CardsContainer";
import Footer from "../Footer/Footer";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Home.module.css";
import { getAllPokemons, getAllTypes } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes())
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SearchBar />
      <Paginado />
      <Aside />
      <CardsContainer />
      <Footer />
    </div>
  );
}
