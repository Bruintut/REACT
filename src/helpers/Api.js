const CavaleiroContext = {
  cavaleiroEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}find-knights`,
  cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}find-knight/${id}`,
  createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}create`,
  updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}update/${id}`,
  deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}delete/${id}`,
};

const SacolaContext = {
  getSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/all-carrinho`,
  createSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/create-carrinho`,
  purchase: () => `${CavaleiroContext.cavaleiroEndpoint()}/finish-carrinho`,
}

export const Api = {
  baseUrl: "  https://cavaleiros-project.herokuapp.com/knights",
  ...CavaleiroContext,
  ...SacolaContext,
};

console.log(Api);
