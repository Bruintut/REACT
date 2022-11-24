const DataContext = {
  dataEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${DataContext.dataEndpoint()}/posts`,
  cavaleiroById: (id) => `${DataContext.dataEndpoint()}/posts/${id}`,
  createCavaleiro: () => `${DataContext.dataEndpoint()}/posts`,
  updatCavaleiroById: (id) => `${DataContext.dataEndpoint()}/posts/${id}`,
  deleteCavaleiroById: (id) => `${DataContext.dataEndpoint()}/posts/${id}`,
};

export const Api = {
  baseUrl: "  https://jsonplaceholder.typicode.com",
  ...DataContext,
};


