import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, useContext } from "react";

//Favorites Context

export const FavoritesContext = createContext({
    favorites: [],
    toggleFavorite: () => { },
});

function useFavorites() {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

  //  Crea el array favorites agregando el 1er  elemento o agrega otro elemento al array. (el array favorites queda seteado en el array prev.)
    const addFavorite = (favId) => {
        setFavorites((prev) => [...prev, favId]);
    };

  // filtra en el array prev, y deja el array prev, sin el elemento fav que coincida ( fav === favId). Setea el array de favorites con el array prev filtrado.
    const removeFavorite = (favId) => {
        setFavorites((prev) => prev.filter((fav) => fav !== favId));
    };

  //  esta funcion 1° se fija si existe en el array favoritos un elemento fav que coincida con ese favId.
  // si isFavored ( osea si esta favoriteado), llama a la funcion removeFavorite, con el parametro favId.
  // si no, llama a la funcion addFavorite, con el parametro favId.
    const toggleFavorite = (favId) => {
        const isFavored = favorites.some((fav) => fav === favId);
        if(isFavored) {
            removeFavorite(favId);
        } else {
            addFavorite(favId);
        }
    };
    
    return { favorites, toggleFavorite};
}

export const useFavoritesContext = () => useContext(FavoritesContext);


// Favorites Context Provider
export const FavoritesProvider = ({ children }) => {
    return <FavoritesContext.Provider value={useFavorites()}>{children}</FavoritesContext.Provider>
}