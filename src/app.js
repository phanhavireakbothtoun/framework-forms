import css from './stylesheet.css';
import Hello from './Hello';

(new Hello({
  target: document.getElementsByTagName('main')[0],
})).run();
