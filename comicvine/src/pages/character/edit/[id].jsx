import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ActionsCreators as CharactersActions } from "../../../store/characters";
import TopPage from "../../../components/Common/TopPage";

export default function Edit() {
  const router = useRouter();
  useEffect(() => {}, [router.query]);

  const [form, setForm] = useState({});
  const { editCharacter } = CharactersActions;
  const dispatch = useDispatch();
  const character_id = router.query.id;
  const character = useSelector((state) => {
    return state.characters.characters.find((char) => char.id == character_id);
  });

  useEffect(async () => {
    setForm(character);
  }, [character]);

  function formChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(editCharacter(form));
    router.push(`/character/view/${character_id}`);
  }

  return (
    <section>
      <TopPage title={`Editar`}></TopPage>
      <div className="container">
        <form className="flex" onSubmit={onSubmit}>
          <div className="flex-col-12 flex-col-md-3">
            <img src={character?.image?.small_url} alt={character?.name} />
          </div>
          <div className="flex flex-col-12 flex-col-md-9">
            <input
              type="hidden"
              name="id"
              readOnly={true}
              value={form?.id || ""}
            />
            <div className="form-group flex-col-12 flex-col-md-6">
              <label>Nome</label>
              <input
                onChange={formChange}
                type="text"
                name="name"
                className="form-control"
                placeholder="Nome..."
                value={form?.name || ""}
              />
            </div>

            <div className="form-group flex-col-12 flex-col-md-6">
              <label>Nome Real</label>
              <input
                onChange={formChange}
                type="text"
                name="real_name"
                className="form-control"
                placeholder="Nome Real"
                value={form?.real_name || ""}
              />
            </div>

            <div className="form-group flex-col-12 flex-col-md-6">
              <label>Gênero</label>
              <select name="gender" value={form?.gender} onChange={formChange}>
                <option value="">Não Informado</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
              </select>
            </div>

            <div className="form-group flex-col-12 flex-col-md-6">
              <label>Data de Aniversário</label>
              <input
                onChange={formChange}
                type="date"
                name="birth"
                className="form-control"
                value={form?.birth || ""}
              />
            </div>

            <div className="form-group flex-col-12 flex-col-md-12">
              <label>Apelido</label>
              <textarea
                onChange={formChange}
                type="text"
                name="aliases"
                rows="8"
                className="form-control"
                placeholder="Apelidos..."
                value={form?.aliases || ""}
              />
            </div>

            <div className="actions flex-end">
              <Link href={`/character/view/${character_id}`}>
                <button type="button" className="btn btn-danger">Cancelar</button>
              </Link>
              <button type="submit" className="btn btn-primary">
                Editar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
