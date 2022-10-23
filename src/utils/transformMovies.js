export const transformMovies = (movies) => {
    return  movies.map(({ id, title, backdrop_path }) => ({ id, title, url: backdrop_path }));
}