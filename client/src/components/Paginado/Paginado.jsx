import style from "./Paginado.module.css";

export default function Paginado({
  pokePerPage,
  pokeActuales,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(pokeActuales / pokePerPage);

  const pageNumber = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div className={style.container}>
      {pageNumber &&
        pageNumber.map((num) => (
          <button key={num} onClick={() => setCurrentPage(num)}>
            {num}
          </button>
        ))}
    </div>
  );
}
