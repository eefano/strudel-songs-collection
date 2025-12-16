// improved @by damu 

// Global toggle state
const keystatus = {};

// Toggle on Ctrl+number keydown
window.addEventListener('keydown', (e) => {
  if (e.repeat) return;

  if (e.ctrlKey && e.key >= '1' && e.key <= '9') {
    // No '+' and no backticks in the string itself
    const id = 'Ctrl' + e.key;
    keystatus[id] = !(keystatus[id] ?? false);
  }
});

// Pattern combinator: 1 when unmuted, 0 when muted
register('mykeys', (key, pat) =>
  pat.withValue(() => (keystatus[key] ? 0 : 1))
);


$: s("bd:2(4,8)").mask("1".mykeys("Ctrl1"))

$: s("[~ hh]*4").mask("1".mykeys("Ctrl2"))

$: s("[~ cp:12]*2").mask("1".mykeys("Ctrl3"))