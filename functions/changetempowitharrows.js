let mytempo = 0
window.onkeydown = (e) => {
    if (e.key === 'ArrowLeft') { mytempo -= 1; console.log(mytempo); }
    if (e.key === 'ArrowRight') { mytempo += 1; console.log(mytempo); }
}
const addmytempo = register('addmytempo', (pat) => pat.withValue((v) => {
    if (v.cps !== undefined) return { ...v, cps: v.cps + (mytempo / 60) };
    else return v;
}));

note("c d e f").cps(100 / 60).addmytempo()
