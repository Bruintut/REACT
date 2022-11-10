import { Api } from "helpers/Api";

const parseResponse = then((response) => response.json());

const transformCavaleiro = (knight) => {

  return {
    ...knight,
    id: knight._id,
    name: knight.name,
    skill: knight.skill,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((knights) =>
  knights.map(transformCavaleiro)
  );

const parseTransformItem = (response) =>
  parseResponse(response).then(transformCavaleiro);

export const CavaleiroService = {
  getLista: () =>
    fetch(Api.cavaleiroLista(), { mode: 'no-cors', method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.cavaleiroById(id), { method: "GET" }).then(parseTransformItem),
  create: (cavaleiro) =>
    fetch(Api.createCavaleiro(), {
      method: "POST",
      body: JSON.stringify(knight),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseTransformItem),
  updtateById: (id, knight) =>
    fetch(Api.updateCavaleiroById(id), {
      method: "PUT",
      body: JSON.stringify(knight),
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
