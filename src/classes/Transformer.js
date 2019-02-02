import { HtmlPrettyPrinter } from './HtmlPrettyPrinter';

class Transformer {
  constructor(config) {
    this.$inputControl = config.$inputControl;
    this.$outputControl = config.$outputControl;
  }

  initialise() {
    this.$inputControl.on('keyup', () => {
      const transformed = this.transform(this.$inputControl.val());
      this.$outputControl.val(transformed);
    });
  }

  transform(html) {
    const $h = $(`<div>${html}</div>`);

    const input = $h.children()[1];
    const id = $(input).attr('id');
    $(input).addClass('form-control');

    const label = $h.children()[0];
    $(label).attr('for', id);

    $h.children().wrapAll('<div class="form-group">');

    const transformed = $h.html();

    return this.prettify(transformed);
  }

  prettify(html) {
    return new HtmlPrettyPrinter(html).prettify();
  }
}

export { Transformer };
