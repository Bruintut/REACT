import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformCavaleiro = (cavaleiro) => {
  const [skill] = cavaleiro.name.split(" com ");

  return {
    ...cavaleiro,
    id: cavaleiro._id,
    name: cavaleiro.name,
    skill: cavaleiro.skill,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((cavaleiros) =>
    cavaleiros.map(transformCavaleiro)
  );

const parseTransformItem = (response) =>
  parseResponse(response).then(transformCavaleiro);

export const CavaleiroService = {
  getLista: () =>
    fetch(Api.cavaleiroLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.cavaleiroById(id), { method: "GET" }).then(parseTransformItem),
  create: (cavaleiro) =>
    fetch(Api.createCavaleiro(), {
      method: "POST",
      body: JSON.stringify(cavaleiro),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseTransformItem),
  updtateById: (id, cavaleiro) =>
    fetch(Api.updateCavaleiroById(id), {
      method: "PUT",
      body: JSON.stringify(cavaleiro),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteCavaleiroById(id), { method: "DELETE" }).then(
      parseResponse
    ),
};
