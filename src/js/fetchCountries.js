export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  const fields = 'fields=official, capital, population, flags, languages';

  return fetch(`${BASE_URL}/name/${name}? ${fields}`).then(resp => {
    console.log(resp);

    if (!resp.ok) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
    return resp.json();
  });
}
