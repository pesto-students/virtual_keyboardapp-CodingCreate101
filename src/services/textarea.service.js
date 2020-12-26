import { getElementById } from '../utilities.js';

getElementById('mainTextArea').addEventListener('keypress', function (event) {
  event.preventDefault();
});
