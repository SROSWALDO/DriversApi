import React from "react";
import useStore from "../../Stores/useStore";

const Pagination = () => {
  const { drivers, currentPage, driversPerPage, setCurrentPage } = useStore(
    (state) => ({
      drivers: state.drivers,
      currentPage: state.currentPage,
      driversPerPage: state.driversPerPage,
      setCurrentPage: state.setCurrentPage,
    })
  );

  // Calcula el número total de páginas redondeando hacia arriba para incluir todos los conductores.
  // Ejemplo: si hay 509 conductores y mostramos 10 por página, necesitamos 51 páginas (509 / 10 = 50.9 redondeado es 51).
  const totalPages = Math.ceil(drivers.length / driversPerPage); // 509 / 10 = 51

  // Define el número fijo de páginas que se mostrarán en la barra de paginación.
  const pageWindow = 5; // Número de páginas a mostrar en la paginación

  // Calcula la mitad del tamaño de la ventana de paginación, redondeando hacia abajo.
  // Esto determina cuántas páginas mostrar antes y después de la página actual.
  const halfWindow = Math.floor(pageWindow / 2); //5 / 2 = 2.5 , se redondea a 2

  // Calcula la página inicial del rango de paginación, asegurando que no sea menor que 1.
  // Math.max selecciona el valor máximo entre 1 y currentPage - halfWindow, evitando así números de página negativos o cero.
  let startPage = Math.max(1, currentPage - halfWindow);

  // Calcula la página final del rango de paginación, asegurando que no exceda el número total de páginas.
  // Math.min selecciona el valor mínimo entre el total de páginas y currentPage + halfWindow.
  let endPage = Math.min(totalPages, currentPage + halfWindow);

  // Ajuste para asegurar que siempre tengamos un rango completo de números
  if (currentPage <= halfWindow) {
    // Si estamos en las primeras páginas
    while (endPage - startPage + 1 < pageWindow && endPage < totalPages) {
      endPage++; // Incrementa endPage para asegurar la ventana completa
    }
  }
  if (currentPage > totalPages - halfWindow) {
    // Si estamos en las últimas páginas y no hay suficientes páginas posteriores para mostrar
    while (endPage - startPage + 1 < pageWindow && startPage > 1) {
      startPage--; // Decrementa startPage para asegurar la ventana completa
    }
  }

  // Construye un array con los números de página a mostrar en la paginación.
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex  mt-[40px] justify-center  ">
        <li className="page-item">
          <button
            className="p-[6px] bg-red-700 m-1 w-[35px] rounded-full hover:bg-red-500 text-white"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
        </li>

        <li className="page-item">
          <button
            className="p-[6px] bg-red-700 m-1 w-[35px] rounded-full hover:bg-red-500 text-white"
            onClick={() => setCurrentPage( currentPage - 1 )}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => setCurrentPage(number)} className="page-link">
            <button
              onClick={() => setCurrentPage(number)}
              className={`p-2 m-1 w-9 rounded-full text-white ${number === currentPage ? 'bg-red-500' : 'bg-red-700 hover:bg-red-500'}`}>
              {number}
            </button>
            </a>
          </li>
        ))}

        <li className="page-item">
          <button
            className="p-[6px] bg-red-700 m-1 w-[35px] rounded-full hover:bg-red-500 text-white"
            onClick={() => setCurrentPage( currentPage + 1 )}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </li>

        <li className="page-item">
          <button
            className="p-[6px] bg-red-700 m-1 w-[35px] rounded-full hover:bg-red-500 text-white"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5  "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
