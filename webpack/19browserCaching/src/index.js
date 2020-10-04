import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['not', 'wanwan', ' ']));
$('body').append(dom);
