// 'Buds And Spawn' by Cardiacs (work in progress)
const i_chords = x => x.note().s("recorder_tenor_sus").clip(1).decay(1.2).sustain(0).release(0.5)
const i_sax    = x => x.note().s("sax").gain(0.3).clip(1).release(0)
const i_bass   = x => x.note().s("triangle").clip(1).release(0.1)
const i_drums  = x => x.bank("YamahaRY30").clip(1).gain(0.08)
const i_piano  = x => x.piano().gain(0.2)

const I_chord = "[0,2,4]"
const p_up = "[-5@0.5 -4 -3 [-2 -1] 0 1 2@0.5]".legato(0.7)
const p_dw = p_up.rev()

function stackme(sc, chordpart, saxpart, drumpart) {
  return stack(chordpart.scale(sc).apply(i_chords), saxpart.scale(sc).apply(i_sax), s(drumpart).apply(i_drums))
}

const s1=stackme("f#:major"    ,I_chord,p_up,"cr,bd")
const s2=stackme("a#:major"    ,I_chord,p_up,"[bd sd bd*2 sd bd*2 sd]")
const s3=stackme("b:whole:tone",I_chord,p_dw,"[sd@0.5 sd sd [ht ht] lt lt bd@0.5]")
const s4=stackme("f#:major"    ,I_chord,p_up,"[bd sd [~ bd] sd bd sd],hh*6")

arrange([3,s1],[1/1.2,s2.fast(1.2)],[1/1.3,s3.fast(1.3)],[4,s4]).cpm(165/4)
  //.pianoroll()