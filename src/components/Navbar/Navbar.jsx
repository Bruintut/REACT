import "./Navbar.css";
import { ActionMode } from "constants/index";
import album from "assets/icons/album.svg";
import logo from "assets/logo.svg";
import cavaleiro from "assets/icons/plus.svg";
import edit from "assets/icons/edit.svg";
import deletar from "assets/icons/deletar.svg";

function Navbar({ createCavaleiro, updateCavaleiro, mode, deleteCavaleiro }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo Cavaleiros"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> Cavaleiros </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__cavaleiro Cavaleiro ${
              mode === ActionMode.ATUALIZAR && "Cavaleiro--ativa"
            }`}
            onClick={() => updateCavaleiro()}
          >
            <img
              src={edit}
              width="40px"
              className="Cavaleiro__icone"
              alt="Editar cavaleiro"
            />
          </button>
          <button
            type="button"
            className={`Opcoes__cavaleiro Cavaleiro ${
              mode === ActionMode.DELETAR && "Cavaleiro--deletar"
            }`}
            onClick={() => deleteCavaleiro()}
          >
            <img
              src={deletar}
              width="40px"
              className="Cavaleiro__icone"
              alt="Deletar cavaleiro"
            />
          </button>
          <button
            type="button"
            className="Opcoes__cavaleiro Cavaleiro"
            onClick={() => createCavaleiro()}
          >
            <img
              src={cavaleiro}
              width="40px"
              className="Cavaleiro__icone"
              alt="Adiconar cavaleiro"
            />
          </button>
          <div className="Opcoes__album Album">
            <img
              src={album}
              width="40px"
              className="Album__icone"
              alt="Album de coleções"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
