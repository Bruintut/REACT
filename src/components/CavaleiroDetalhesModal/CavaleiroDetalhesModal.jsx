import { useState } from "react";
import "./CavaleiroDetalhesModal.css";
import Modal from "components/Modal/Modal";

function CavaleiroDetalhesModal({ cavaleiro, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="CavaleiroDetalhesModal">
        <div>
          <div className="CavaleiroDetalhesModal__name"> {cavaleiro.name} </div>
          <div className="CavaleiroDetalhesModal__skill">
            {" "}
            <b>Skill:</b> {cavaleiro.skill}{" "}
          </div>

          <div className="CavaleiroDetalhesModal__skill">
            {" "}
            <b>Descrição:</b> {cavaleiro.skill}{" "}
          </div>
        </div>
        <img
          className="CavaleiroDetalhesModal__picture"
          src={cavaleiro.picture}
          alt={`cavaleiro com a habilidade de ${cavaleiro.skill}`}
        />
      </div>
    </Modal>
  );
}

export default CavaleiroDetalhesModal;
