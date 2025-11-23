
const rebaser = register('rebaser', (base, pat) =>
  pat.withValue(v => {
    if (typeof v !== 'string') return v;
    const i = v.indexOf('i');
    if (i < 0) return v;
    return Number(v.substring(0, i)) + base * (v.length - i)
  }));

$: n("<0 1 2 3 4 0i 1i 2i 3i 4i 4ii 4i>*4".rebaser(12)).scale("C:chromatic")
