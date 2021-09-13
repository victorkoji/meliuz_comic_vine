import CardCharacter from "./CardCharacter";
import { useEffect } from "react";

import { connect } from "react-redux";
import { ActionsCreators as CharactersActions } from "../../store/characters";
import FilterCharacter from "./FilterCharacter";

import styles from '../../styles/SectionCharacter.module.scss';

const SectionCharacters = ({ characters, filterType, favorites, fetchCharacters }) => {
  let listaCharacters;

  useEffect(async () => {
    fetch("http://localhost:3333/characters?limit=100")
      .then((response) => response.json())
      .then((data) => fetchCharacters(data.results));
  }, []);

  if (filterType == "favorites") {
    listaCharacters = characters
      .filter((char) => favorites.includes(char.id))
      .map((char, index) => {
        return <CardCharacter key={index} character={char}></CardCharacter>;
      });
  } else {
    listaCharacters = characters.map((char, index) => {
      return <CardCharacter key={index} character={char}></CardCharacter>;
    });
  }

  return (
    <section className={styles['section-characters']}>
      <FilterCharacter countCharacters={listaCharacters.length}></FilterCharacter>
      {listaCharacters}
    </section>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
  filterType: state.characters.filterType,
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (data) => dispatch(CharactersActions.fetchCharacters(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionCharacters);
