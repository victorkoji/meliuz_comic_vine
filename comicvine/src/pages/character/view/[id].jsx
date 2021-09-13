import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import TopPage from "../../../components/Common/TopPage";

export default function Edit() {
  const router = useRouter();

  useEffect(() => {}, [router.query]);

  const character_id = router.query.id;
  const character = useSelector((state) => {
    return state.characters.characters.find((char) => char.id == character_id);
  });

  useEffect(async () => {
    const description = document.getElementById("descricao");
    const images = description.querySelectorAll("img");

    images.forEach((img) => {
      let url_img = img.getAttribute("data-src");
      if (url_img) {
        img.setAttribute("src", url_img);
      }
    });
  }, []);

  const linkEdit = {
    pathname: "/character/edit/[id]",
    query: { id: character?.id },
  };

  function getDescription() {
    return { __html: character?.description };
  }

  return (
    <section id="view-page">
      <TopPage title={character?.name}>
        <Link href="/">
          <button className="btn btn-secondary m-r-15">Voltar</button>
        </Link>
        <Link href={linkEdit}>
          <button className="btn btn-primary">Editar</button>
        </Link>
      </TopPage>

      <div className="flex">
        <div className="flex-col-12 flex-col-md-3">
          <img src={character?.image.small_url} alt={character?.name} />
        </div>
        <div className="flex-col-12 flex-col-md-9">
          <div id="character-info" className="flex">
            <div className="flex-col-12 flex-col-md-6">
              <h4>Nome</h4>
              <p>{character?.name}</p>
            </div>

            <div className="flex-col-12 flex-col-md-6">
              <h4>Nome Real</h4>
              <p>{character?.real_name || "Não possui"}</p>
            </div>

            <div className="flex-col-12 flex-col-md-6">
              <h4>Gênero</h4>
              <p>{character?.gender == 1 ? "Masculino" : "Feminino" || "Não Informado"}</p>
            </div>

            <div className="flex-col-12 flex-col-md-6">
              <h4>Data de Aniversário</h4>
              <p>{character?.birth || "Sem aniversário"}</p>
            </div>

            <div className="flex-col-12 flex-col-md-12">
              <h4>Apelido</h4>
              <p className="white-space-pre-wrap">{character?.aliases || "Não possui apelidos"}</p>
            </div>
          </div>
        </div>

        <div className="flex-col-12 flex-col-md-12">
          <article id="descricao" dangerouslySetInnerHTML={getDescription()} />
        </div>
      </div>
    </section>
  );
}
