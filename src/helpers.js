import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

function hideLoader() {
  refs.loaderEl.classList.add('is-hidden');
}

function showLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}

 function showSelect() {
  refs.selectEl.classList.remove('is-hidden');
}

function notifyError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
}

function appendMarkup(markup, parentEl) {
  parentEl.insertAdjacentHTML('beforeend', markup);
}


export { hideLoader, showLoader, showSelect, notifyError, appendMarkup}