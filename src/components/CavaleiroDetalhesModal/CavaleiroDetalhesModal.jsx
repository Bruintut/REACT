import { useState } from "react";
import "./CavaleiroDetalhesModal.css";
import Modal from "components/Modal/Modal";

function CavaleiroDetalhesModal({ cavaleiro, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="CavaleiroDetalhesModal">
        <div>
          <div className="CavaleiroDetalhesModal__name"> {knight.name} </div>
          <div className="CavaleiroDetalhesModal__skill">
            {" "}
            <b>Skill:</b> {knight.skill}{" "}
          </div>

          <div className="CavaleiroDetalhesModal__skill">
            {" "}
            <b>Descrição:</b> {knight.skill}{" "}
          </div>
        </div>
        <img
          className="CavaleiroDetalhesModal__picture"
          src={knight.picture}
          alt={`cavaleiro com a habilidade de ${knight.skill}`}
        />
      </div>
    </Modal>
  );
}

export default CavaleiroDetalhesModal;
