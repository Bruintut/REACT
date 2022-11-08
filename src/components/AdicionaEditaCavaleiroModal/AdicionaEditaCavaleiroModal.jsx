import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaEditaCavaleiroModal.css";
import { CavaleiroService } from "services/CavaleiroService";
import { ActionMode } from "constants/index";

function AdicionaEditaCavaleiroModal({
  closeModal,
  onCreateCavaleiro,
  mode,
  cavaleiroToUpdate,
  onUpdateCavaleiro,
}) {
  const form = {
    name: cavaleiroToUpdate?.name ?? "",
    skill: cavaleiroToUpdate?.skill ?? "",
    picture: cavaleiroToUpdate?.picture ?? "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.name.length && state.picture.length && state.skill.length
    );

    setCanDisable(response);
  };

  const handleChange = (e, nome) => {
    setState({ ...state, [nome]: e.target.value });
  };

  useEffect(() => {
    canDisableSendButton();
  });

  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { name, skill, picture } = state;

    const cavaleiro = {
      ...(cavaleiroToUpdate && { _id: cavaleiroToUpdate?.id }),
      name,
      skill,
      picture: `assets/images/${renomeiaCaminhoFoto(picture)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => CavaleiroService.create(cavaleiro),
      [ActionMode.ATUALIZAR]: () =>
        CavaleiroService.updtateById(cavaleiroToUpdate?.id, cavaleiro),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateCavaleiro(response),
      [ActionMode.ATUALIZAR]: () => onUpdateCavaleiro(response),
    };

    actionResponse[mode]();

    const reset = {
      name: "",
      skill: "",
      picture: "",
    };

    setState(reset);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaCavaleiroModal">
        <form autoComplete="off">
          <h2>
            {" "}
            {ActionMode.ATUALIZAR === mode ? "Atualizar" : "Adicionar ao"}{" "}
            Catálago{" "}
          </h2>
          <div>
            <label className="AdicionaCavaleiroModal__text" htmlFor="name">
              {" "}
              Name:{" "}
            </label>
            <input
              id="name"
              placeholder="name"
              type="text"
              value={state.name}
              onChange={(e) => handleChange(e, "name")}
              required
            />
          </div>

          <div>
            <label className="AdicionaCavaleiroModal__text" htmlFor="skill">
              {" "}
              Skill:{" "}
            </label>
            <input
              id="skill"
              placeholder="Habilidade do Cavaleiro"
              type="text"
              value={state.skill}
              onChange={(e) => handleChange(e, "skill")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaCavaleiroModal__text  AdicionaCavaleiroModal__picture-label"
              htmlFor="picture"
            >
              {!state.picture.length ? "Selecionar Imagem" : state.picture}
            </label>
            <input
              className=" AdicionaCavaleiroModal__picture"
              id="picture"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.picture}
              onChange={(e) => handleChange(e, "picture")}
              required
            />
          </div>

          <button
            className="AdicionaCavaleiroModal__enviar"
            type="button"
            disabled="{canDisable}"
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaCavaleiroModal;
