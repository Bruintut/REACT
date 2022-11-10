import { ActionMode } from "constants/index";
import "./CavaleiroListaItem.css";

function CavaleiroListaItem({
  knight,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="CavaleiroListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`CavaleiroListaItem__tag ${
            mode === ActionMode.DELETAR && "CavaleiroListaItem__tag--deletar"
          }`}
        >
          {" "}
          {mode}{" "}
        </span>
      );
  };

  return (
    <div
      className={`
    CavaleiroListaItem
    ${mode !== ActionMode.NORMAL && "CavaleiroListaItem--disable"}
    ${mode === ActionMode.DELETAR && "CavaleiroListaItem--deletar"}
  `}
      onClick={() => clickItem(knight.id)}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="CavaleiroListaItem__name"> {knight.name} </div>

        <div className="CavaleiroListaItem__skill"> {knight.skill} </div>
        <div className="CavaleiroListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="CavaleiroListaItem__foto"
        src={cavaleiro.picture}
        alt={`Cavaleiro com habilidade de ${knight.skill}`}
      />
    </div>
  );
}

export default CavaleiroListaItem;
