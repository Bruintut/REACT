import "./DeletaCavaleiroModal.css";
import Modal from "components/Modal/Modal";
import { CavaleiroService } from "services/CavaleiroService";

function DeletaCavaleiroModal({
  closeModal,
  cavaleiroParaDeletar,
  onDeleteCavaleiro,
}) {
  const handleDelete = async (knight) => {
    await CavaleiroService.deleteById(knight.id);
    onDeleteCavaleiro(knight);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaCavaleiroModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{cavaleiroParaDeletar.name}</b> do
          catálago?
        </p>

        <img
          className="DeletaCavaleiroModal__foto"
          src={cavaleiroParaDeletar.picture}
          alt={cavaleiroParaDeletar.name}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(cavaleiroParaDeletar)}
            className="DeletaCavaleiroModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaCavaleiroModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaCavaleiroModal;
