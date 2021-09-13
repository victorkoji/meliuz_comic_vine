import { ActionsCreators as FavoritesActions}  from '../../store/favorites'

import {connect} from 'react-redux';

const ButtonFavoriteChar = ({props, favorites, addFavorite, removeFavorite}) => {

    const characterId = props.character.id;
    const charFavorited = favorites.includes(characterId)

    if(charFavorited){
        return <button className="btn btn-light" onClick={() => removeFavorite(characterId)}><i className="fa fa-heart color-heart" aria-label="Desfavoritar"></i></button> 
    }else{
        return <button className="btn btn-light" onClick={() => addFavorite(characterId)}><i className="fa fa-heart-o color-heart" aria-label="Favoritar"></i></button> 
    }
}

const mapStateToProps = (state, props) => ({
    props: props,
    favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
    addFavorite: (data) => dispatch(FavoritesActions.addFavorite(data)),
    removeFavorite: (data) => dispatch(FavoritesActions.removeFavorite(data))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(ButtonFavoriteChar);