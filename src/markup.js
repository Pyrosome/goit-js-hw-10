export const refs = {
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

export function createInfo(data) {
  const markup = data
    .map(
      ({
        name: { official: name },
        population,
        capital,
        languages,
        flags: { svg: flags },
      }) =>
        `<h1 class="country-info__name">
     <img src="${flags}" class="country-info__flag" alt="${name} flag">${name}</h1>
      <h2 class="country-info__capital">Capital: ${capital}</h2>
      <h3 class="country-info__population">Population: ${population}</h3>
      <h4 class="country-info__languages">Languages: ${Object.values(
        languages
      )}</h4>`
    )
    .join('');

  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

export function createList(data) {
  const markup = data
    .map(
      ({
        name: { official: name },
        flags: { svg: flags },
      }) => `<li class="country-list__item">
    <img src="${flags}" class="country-list__flag" alt="${name} flag">
    ${name}
    </li>`
    )
    .join('');

  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

export function cleanMarkup() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}
