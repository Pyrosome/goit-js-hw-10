import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { createInfo, createList, cleanMarkup } from './markup';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input');
input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  cleanMarkup();
  inputValue = input.value.trim();

  if (inputValue) {
    fetchCountries(inputValue)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length === 1) {
          createInfo(data);
        } else {
          createList(data);
        }
      })
      .catch(error => console.log(`${error}`))
      .finally(console.log('search is finished'));
  }
}
