import { connect } from "react-redux";
import { ActionsCreators as CharactersActions } from "../../store/characters";
import SearchCharacter from "./SearchCharacter";

import styles from '../../styles/FilterCharacter.module.scss';

const FilterCharacter = ({props, filterType, changeFilterType}) => {

  const countCharacters = props.countCharacters

  return (
    <div className={`flex-col-12 ${styles['characters-filters']}`}>
      <div className="flex-row flex-justify-content-space-between">
        <div className="flex">
          <span>{countCharacters} Personagens</span>
        </div>
        <div className="flex">
          <span>Filtros:</span>
          <button className={`btn ${filterType == 'all' ? styles.active : ''}`} onClick={() => changeFilterType("all")}>
            <i className="fa fa-th" aria-hidden="true"></i> Todos
          </button>
          <button className={`btn ${filterType == 'favorites' ? styles.active : ''}`} onClick={() => changeFilterType("favorites")}>
            <i className="fa fa-heart" aria-hidden="true"></i> Favoritos
          </button>

          <SearchCharacter></SearchCharacter>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  filterType: state.characters.filterType,
  props: props
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterType: (filter) => dispatch(CharactersActions.changeFilterType(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCharacter);
