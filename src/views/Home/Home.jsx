import { useState } from "react";
import { ActionMode } from "constants/index";
import "./Home.css";
import CavaleiroLista from "components/CavaleiroLista/CavaleiroLista";
import Navbar from "components/Navbar/Navbar";
import AdicionaEditaCavaleiroModal from "components/AdicionaEditaCavaleiroModal/AdicionaEditaCavaleiroModal";
import Modal from "components/Modal/Modal";
import DeletaCavaleiroModal from "components/DeletaCavaleiroModal/DeletaCavaleiroModal";

function Home() {
  const [cavaleiroEditada, setCavaleiroEditada] = useState();
  const [canShowAdicionaCavaleiroModal, setCanShowAdicionaCavaleiroModal] =
    useState(false);
  const [cavaleiroParaAdicionar, setCavaleiroParaAdicionar] = useState();
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [cavaleiroRemovido, setCavaleiroRemovido] = useState();

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };
  const [cavaleiroParaEditar, setCavaleiroParaEditar] = useState();
  const [cavaleiroParaDeletar, setCavaleiroParaDeletar] = useState();
  const handleDeleteCavaleiro = (cavaleiroToDelete) => {
    setCavaleiroParaDeletar(cavaleiroToDelete);
  };

  const handleUpdateCavaleiro = (cavaleiroToUpdate) => {
    setCavaleiroParaEditar(cavaleiroToUpdate);
    setCanShowAdicionaCavaleiroModal(true);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaCavaleiroModal(false);
    setCavaleiroParaAdicionar();
    setCavaleiroParaDeletar();
    setCavaleiroParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createCavaleiro={() => setCanShowAdicionaCavaleiroModal(true)}
        deleteCavaleiro={() => handleActions(ActionMode.DELETAR)}
        updateCavaleiro={() => handleActions(ActionMode.ATUALIZAR)}
      />
      <div className="Home__container">
        <CavaleiroLista
          mode={modoAtual}
          cavaleiroCriado={cavaleiroParaAdicionar}
          cavaleiroEditada={cavaleiroEditada}
          cavaleiroRemovido={cavaleiroRemovido}
          deleteCavaleiro={handleDeleteCavaleiro}
          updateCavaleiro={handleUpdateCavaleiro}
        />
        {canShowAdicionaCavaleiroModal && (
          <AdicionaEditaCavaleiroModal
            mode={modoAtual}
            cavaleiroToUpdate={cavaleiroParaEditar}
            onUpdateCavaleiro={(cavaleiro) => setCavaleiroEditada(cavaleiro)}
            closeModal={() => setCanShowAdicionaCavaleiroModal(false)}
            onCreateCavaleiro={(cavaleiro) =>
              setCavaleiroParaAdicionar(cavaleiro)
            }
          />
        )}

        {cavaleiroParaDeletar && (
          <DeletaCavaleiroModal
            cavaleiroParaDeletar={cavaleiroParaDeletar}
            closeModal={handleCloseModal}
            onDeleteCavaleiro={(cavaleiro) => setCavaleiroRemovido(cavaleiro)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
