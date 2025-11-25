// WARNING WARNING WARNING
// - This actually CRASHES Firefox on Linux! BEWARE. Chrome is fine.
// - Everytime strudel is refreshed, midi event are registered again causing leaks at a certain point.

var keystatus = {}

navigator.requestMIDIAccess().then((midiAccess)=>{
    for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(input.name);  // CHECK CONSOLE FOR AVAILABLE MIDI DEVICES
    if(input.name=='Midi Through Port-0') {  // <-- INSERT THE MIDI DEVICE NAME HERE
        input.onmidimessage = (ev)=>{
          if(ev.data.length==3 && ev.data[0]==0x90) {     // <-- 0x90 IS CHANNEL 1, 0x91 CHANNEL 2, etc.
            const n = ev.data[1]; console.log('Note ' + n);   // CHECK CONSOLE WHEN NOTE DETECTED 
            keystatus[n] = !(keystatus[n] ?? false)
          }}}}});

const mykeys = register('mykeys', (key, pat) => pat.withValue((v) => {
    return v ^ keystatus[key] ? 1 : 0;
}));

$: note("c d e f").mask("0".mykeys(60))
$: note("c d e f").mask("0".mykeys(62))
$: note("c d e f").mask("0".mykeys(64))
