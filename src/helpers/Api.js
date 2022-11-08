const CavaleiroContext = {
  cavaleiroEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/knights/find-knights`,
  cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/knights/find-knights/${id}`,
  createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/knights/create`,
  updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/knights/update/${id}`,
  deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/knights/delete/${id}`,
};

const SacolaContext = {
  getSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/all-carrinho`,
  createSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/create-carrinho`,
  purchase: () => `${CavaleiroContext.cavaleiroEndpoint()}/finish-carrinho`,
}

export const Api = {
  baseUrl: " https://cavaleiros-project.herokuapp.com/",
  ...CavaleiroContext,
  ...SacolaContext,
};

console.log(Api);
