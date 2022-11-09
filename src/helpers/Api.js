const CavaleiroContext = {
  cavaleiroEndpoint: () => `${Api.baseUrl}`,
  cavaleiroLista: () => `${CavaleiroContext.cavaleiroEndpoint()}/`,
  cavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  createCavaleiro: () => `${CavaleiroContext.cavaleiroEndpoint()}/POST`,
  updatCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
  deleteCavaleiroById: (id) => `${CavaleiroContext.cavaleiroEndpoint()}/${id}`,
};

const SacolaContext = {
  getSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/all-carrinho`,
  createSacola: () => `${CavaleiroContext.cavaleiroEndpoint()}/create-carrinho`,
  purchase: () => `${CavaleiroContext.cavaleiroEndpoint()}/finish-carrinho`,
}

export const Api = {
  baseUrl: " http://localhost:3000",
  ...CavaleiroContext,
  ...SacolaContext,
};

console.log(Api);
