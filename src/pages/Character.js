import getHash from "@utiles/getHash";
import getData from "@utiles/getData";

const Character = async () => {
    const id = getHash();
    const character = await getData(`character/${id}`);
    const view = `
    <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">   
            </article>
            <article class="Characters-card">
                <h2>${character.name}</h2>
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: <span>${character.location.name}</span></h3>
                <h3>Created: <span>${character.created}</span></h3>
            </article>
    </div>
    `;
    return view;
};

export default Character;