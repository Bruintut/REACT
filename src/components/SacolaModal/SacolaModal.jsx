import "./SacolaModal.css";
import Modal from "components/Modal/Modal";
import { SacolaService } from "services/SacolaService";
import { useEffect, useState } from "react";
import { CavaleiroService } from "services/CavaleiroService";

function SacolaModal({ closeModal }) {
  const [lista, setLista] = useState([]);

  const purchase = async () => {
    await SacolaService.purchase();
    // ROTAS/NAVEGAÇÃO AQUI
  };

  const handleClose = async () => {
    await SacolaService.purchase();
    closeModal();
  };

  const getListas = async () => {
    const cavaleiroLista = await CavaleiroService.getLista();
    const sacolaLista = await SacolaService.getLista();

    const encontraNome = (id) => {
      const obj = cavaleiroLista.find((i) => i.id === id);
      return (obj && obj.titulo) ?? "";
    };

    if (Array.isArray(sacolaLista)) {
      const novaLista = sacolaLista.map(({ cavaleiroId, quantidade }) => ({
        nome: encontraNome(cavaleiroId),
        quantidade,
      }));

      setLista(novaLista);
    }
  };

  useEffect(() => {
    getListas();
  }, []);

  return (
    <Modal closeModal={handleClose}>
      <div className="SacolaModal">
        <h2>Cavaleiros & Quantidades</h2>

        <div>
          {lista.map((i, idx) => (
            <div key={idx}>
              {" "}
              {i.nome + " " + i.quantidade + "x"} <br />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button onClick={purchase} className="SacolaModal__confirmar">
            {" "}
            Fechar compra{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SacolaModal;