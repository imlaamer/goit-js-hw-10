import { CatApi } from './cat-api';
import { refs } from './refs';
import {
  hideLoader,
  showLoader,
  showSelect,
  notifyError,
  appendMarkup,
} from './helpers';

const catApi = new CatApi();

function fetchAndRenderOptions() {
  catApi
    .fetchBreeds()
    .then(data => {
      showSelect();
      const optsMarkup = renderOptionsMarkup(data);
      appendMarkup(optsMarkup, refs.selectEl);
    })
    .catch(error => {
      notifyError();
      console.error(error);
    })
    .finally(() => hideLoader());
}
fetchAndRenderOptions();

function onSearch({ divInfoEl, selectEl }) {
  divInfoEl.innerHTML = '';
  showLoader();
  const catId = selectEl.value;
  console.log(catId);
  catApi
    .fetchCatByBreed(catId)
    .then(data => {
      const infoMarkup = renderCatMarkup(data);
      appendMarkup(infoMarkup, divInfoEl);
    })
    .catch(error => {
      notifyError();
      console.error(error);
    })
    .finally(() => hideLoader());
}
refs.selectEl.addEventListener('change', () => onSearch(refs));

function renderOptionsMarkup(dataArray) {
  const optionsMarkup = dataArray
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  return optionsMarkup;
}

function renderCatMarkup([
  {
    breeds: [{ name, temperament, description }],
    url,
  },
]) {
  return `
<img src="${url}" alt="${name}" width="500" />
<div class="info-box">
  <h2>${name}</h2>
  <p>${description}</p>
  <p><b>Temperament: </b> ${temperament}</p>
</div>
`;
}
