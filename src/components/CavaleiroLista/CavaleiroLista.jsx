import "./CavaleiroLista.css";
import { useState, useEffect, useCallback } from "react";
import CavaleiroListaItem from "components/CavaleiroListaItem/CavaleiroListaItem";
import { CavaleiroService } from "services/CavaleiroService";
import CavaleiroDetalhesModal from "components/CavaleiroDetalhesModal/CavaleiroDetalhesModal";
import { ActionMode } from "constants/index";

function CavaleiroLista({
  cavaleiroCriado,
  mode,
  updateCavaleiro,
  deleteCavaleiro,
  cavaleiroEditada,
  cavaleiroRemovido,
}) {
  const selecionados = JSON.parse(localStorage.getItem("selecionados")) ?? {};
  const [cavaleiros, setCavaleiros] = useState([]);

  const [cavaleiroSelecionado, setCavaleiroSelecionado] = useState({
    selecionados,
  });

  const [cavaleiroModal, setCavaleiroModal] = useState(false);

  const adicionarItem = (cavaleiroIndex) => {
    const cavaleiro = {
      [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) + 1,
    };
    setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro });
  };

  const setSelecionados = useCallback(() => {
    if (!cavaleiros.length) return;

    const entries = Object.entries(cavaleiroSelecionado);
    const sacola = entries.map((arr) => ({
      cavaleiroId: cavaleiros[arr[0]].id,
      quantidade: arr[1],
    }));

    localStorage.setItem("album", JSON.stringify(sacola));
    localStorage.setItem("selecionados", JSON.stringify(cavaleiroSelecionado));
  }, [cavaleiroSelecionado, cavaleiros]);

  const removerItem = (cavaleiroIndex) => {
    const cavaleiro = {
      [cavaleiroIndex]: Number(cavaleiroSelecionado[cavaleiroIndex] || 0) - 1,
    };
    setCavaleiroSelecionado({ ...cavaleiroSelecionado, ...cavaleiro });
  };

  const getCavaleiroById = async (cavaleiroId) => {
    const response = await CavaleiroService.getById(cavaleiroId);
    const mapper = {
      [ActionMode.NORMAL]: () => setCavaleiroModal(response),
      [ActionMode.ATUALIZAR]: () => updateCavaleiro(response),
      [ActionMode.DELETAR]: () => deleteCavaleiro(response),
    };

    mapper[mode]();
  };

  const adicionaCavaleiroNaLista = useCallback(
    (cavaleiro) => {
      const lista = [...cavaleiro, cavaleiro];
      setCavaleiros(lista);
    },
    [cavaleiros]
  );

  useEffect(() => {
    setSelecionados();
  }, [ setSelecionados, cavaleiroSelecionado ]);


  useEffect(() => {
    if (
      cavaleiroCriado &&
      !cavaleiros.map(({ id }) => id).includes(cavaleiroCriado.id)
    ) {
      adicionaCavaleiroNaLista(cavaleiroCriado);
    }
  }, [adicionaCavaleiroNaLista, cavaleiroCriado, cavaleiros]);
  const getLista = async () => {
    const response = await CavaleiroService.getLista();
    setCavaleiros(response);
  };
  useEffect(() => {
    getLista();
  }, [cavaleiroEditada, cavaleiroRemovido]);

  return (
    <div className="CavaleiroLista">
      {cavaleiros.map((cavaleiro, index) => (
        <CavaleiroListaItem
          mode={mode}
          key={`CavaleiroListaItem-${index}`}
          cavaleiro={cavaleiro}
          quantidadeSelecionada={cavaleiroSelecionado[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(cavaleiroId) => getCavaleiroById(cavaleiroId)}
        />
      ))}

      {cavaleiroModal && (
        <CavaleiroDetalhesModal
          cavaleiro={cavaleiroModal}
          closeModal={() => setCavaleiroModal(false)}
        />
      )}
    </div>
  );
}

export default CavaleiroLista;
