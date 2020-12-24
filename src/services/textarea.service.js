import { getElementById } from '../utilities';

getElementById('mainTextArea').addEventListener('keypress', function (event) {
  event.preventDefault();
});
