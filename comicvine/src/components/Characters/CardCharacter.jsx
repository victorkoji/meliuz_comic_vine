import Link from "next/link";
import styles from '../../styles/CardCharacter.module.scss';

import ButtonFavoriteChar from "../Favorites/ButtonFavoriteChar";

const CardCharacter = (props) => {
  const character = props.character;

  const linkView = {
    pathname: "/character/view/[id]",
    query: { id: character.id },
  };

  return (
    <div className="flex-col-sm-4 flex-col-lg-3">
      <div className={styles['card-character']}>
        <Link href={linkView}>
          <a>
            <img src={character.image?.screen_url} alt={character.name} />
          </a>
        </Link>
        <div className={styles.description}>
          <h5>{character.name}</h5>
          <p>{character.deck || "Sem Descrição"}</p>
        </div>
        <div className={`actions space-between ${styles.actions}`}>
          <ButtonFavoriteChar character={character}></ButtonFavoriteChar>
          <Link href={linkView}>
            <button className="btn btn-primary">Detalhes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;