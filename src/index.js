import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input');
input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  fetchCountries(input.value.trim())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(console.log('search is finished'));
}

function createMarkup({ name: { official: name } }) {
  const markup = name;
}
