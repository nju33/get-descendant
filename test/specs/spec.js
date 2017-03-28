import test from 'ava';
import Nightmare from 'nightmare';

const nightmare = new Nightmare({});

test('test', async t => {
  await nightmare
    .goto('http://localhost:3333')
    .inject('js', './dist/get-descendant.js');

  await nightmare
    .evaluate(() => {
      return getDescendant(
        document.getElementById('el'),
        document.getElementById('target')
      ).id;
    })
    .then(id => {
      t.is(id, 'expected');
    });

  await nightmare
    .evaluate(() => {
      return getDescendant(
        document.getElementById('el'),
        document.getElementById('foo')
      );
    })
    .then(result => {
      t.is(result, null);
    });
});
