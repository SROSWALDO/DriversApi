import create from 'zustand';

const useStore = create((set) => ({
    drivers: [],  //509 drivers
    currentPage: 1, //en que pagina estoy, en este caso inicia en la 1
    driversPerPage: 10,
    showFilters: false,
    ageSortOrder: '',
    search: '',
    setShowFilters: (showFilters) => set({ showFilters }),
    setDrivers: (drivers) => set({ drivers }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setSearch: (value) => set({search: value}),
    setAgeSortOrder: (order) => set({ ageSortOrder: order })
  }));

export default useStore;
