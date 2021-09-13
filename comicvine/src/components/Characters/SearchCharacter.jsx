import React, { useState } from "react";
import { connect } from "react-redux";
import { ActionsCreators as CharactersActions } from "../../store/characters";

const SearchCharacter = ({fetchCharacters}) => {
  const [form, setForm] = useState({name: ''});

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
      const parameterName = encodeURIComponent(`name:${form.name}`)
      await fetch(`http://localhost:3333/characters?limit=100&filter=${parameterName}`)
        .then((response) => response.json())
        .then((data) => fetchCharacters(data.results));
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onChange={formChange} value={form.name} placeholder="Pesquisar..."></input>
      <button className="btn"><i className="fa fa-search"></i></button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (data) => dispatch(CharactersActions.fetchCharacters(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacter);
