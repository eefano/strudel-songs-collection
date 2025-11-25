var keystatus = {}

window.onkeydown = (e) => {
  keystatus[e.key] = !(keystatus[e.key] ?? false);
}
const mykeys = register('mykeys', (key, pat) => pat.withValue((v) => {
  return v ^ keystatus[key] ? 1 : 0;
}));

$: note("c d e f").mask("1".mykeys('z'))
$: note("c d e f").mask("1".mykeys('x'))
$: note("c d e f").mask("1".mykeys('c'))
