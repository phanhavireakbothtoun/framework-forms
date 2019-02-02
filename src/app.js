import css from './stylesheet.css';
import { Transformer } from './classes';

const transformer = new Transformer();

$('#plainFormTextarea').on('keyup', () => {
  const input = $('#plainFormTextarea').val();
  const transformed = transformer.transform(input);
  $('#transformedFormTextarea').val(transformed);
});
