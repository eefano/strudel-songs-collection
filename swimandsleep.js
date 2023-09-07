// "Swim And Sleep Like A Shark" (by Unknown Mortal Orchestra)
// WORK IN PROGRESS

Pattern.prototype.enumerate = function () {
  const pat = this.sortHapsByPart()
  return new Pattern(state => {
    const haps = pat.query(state.withSpan(span => span.begin.wholeCycle()))
    const chunks = haps.length
    return haps.map((hap, i) => new Hap(hap.whole, hap.part.intersection(state.span), [hap.value, i, chunks])
                  ).filter(hap => hap.part != undefined)
  }).splitQueries()
}
Pattern.prototype.warp = function (tpat) {
  const pat = this;
  return tpat.enumerate().withValue(v => pat.zoom(Fraction(v[1]).div(v[2]), 
                                                  Fraction(v[1]).add(1).div(v[2]))
                                  ).outerJoin()
}

function tablature(te,tB,tG,tD,tA,tE)
  { return stack(te.add(64),tB.add(59),tG.add(55),tD.add(50),tA.add(45),tE.add(40)); }

const theme= tablature(
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~ 11  ~",
"9 ~ 9 ~ 10 9 7 ~ 9 6 ~ 10 ~ 10 ~ 12 14 14  ~ 13",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ 6  ~ ~  ~ ~  ~  ~  ~  ~  ~",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~  ~  ~",
"7 7 ~ 7  ~ 7 5 5 ~ 4 ~  9 9  ~ 9  ~  ~ 11  ~ 11",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~  ~  ~",
).warp("t@2 t!4 t@2!2 t!2 t@2!3 t!4 t@2 t@3 t t@4").slow(16)

const arp1 = tablature(
"~ ~ ~ 0 ~ ~ ~ 0 ~ ~ ~ 0",
"~ ~ ~ ~ ~ ~ ~ ~ ~ 0 ~ ~",
"~ 6 ~ ~ ~ 4 ~ ~ ~ ~ 2 ~",
"~ ~ 6 ~ ~ ~ 4 ~ ~ ~ ~ ~",
"4 ~ ~ ~ 2 ~ ~ ~ 0 ~ ~ ~",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~",
).slow(6)

const chords = tablature(
"~ ~ ~",
"0 2 0",
"1 2 1",
"2 2 2",
"2 0 2",
"0 ~ 0",  
).warp("t@3 t t@4").slow(8)

const arp2 = tablature(
"~ ~ ~ 4 ~ ~ ~ ~ ~ 4 ~ ~ ~",
"~ ~ 2 ~ 2 ~ ~ 4 ~ ~ 4 ~ ~",
"~ 3 ~ ~ ~ 3 ~ ~ 4 ~ ~ 4 ~",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 4",
"~ ~ ~ ~ ~ ~ 2 ~ ~ ~ ~ ~ ~",
"2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~",
).warp("t!3 t@2 t t@2 t!6 t@2").slow(8)

const arp3 = tablature(
"~ ~ ~ 0 ~ ~ ~ ~ ~ ~ 0 ~ ~ ~ ~",
"~ ~ ~ ~ ~ ~ ~ ~ 0 ~ ~ 0 ~ ~ ~",
"~ 4 ~ ~ 4 ~ ~ ~ ~ 2 ~ ~ 2 ~ ~",
"~ ~ 4 ~ ~ 4 ~ ~ ~ ~ ~ ~ ~ ~ ~",
"2 ~ ~ ~ ~ ~ 2 0 ~ ~ ~ ~ ~ 0 2",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 0",
).warp("t!3 t@2 t!11").slow(8)

const lick1 = tablature(
" ~  ~  ~  ~ 17  ~",
"17  ~ 17  ~  ~ 17",
" ~  ~  ~  ~  ~  ~",
" ~  ~  ~  ~  ~  ~",
"16 16  ~ 16  ~  ~",
" ~  ~  ~  ~  ~  ~",
).warp("t@2 t!4 t@2").slow(4)

const lick2 = tablature(
" ~  ~  ~  ~ 16  ~",
"16  ~ 16  ~  ~ 16",
" ~  ~  ~  ~  ~  ~",
" ~  ~  ~  ~  ~  ~",
"14 14  ~ 14  ~  ~",
" ~  ~  ~  ~  ~  ~",
).warp("t@2 t!4 t@2").slow(4)

const coda = tablature(
"~ ~ ~ ~  ~  ~  ~ ~",
"7 5 7 9 10 10 12 9",
"~ ~ ~ ~  ~  ~  ~ ~",
"~ ~ ~ ~  ~  ~  ~ ~",
"5 4 5 7  9  9 11 7",
"~ ~ ~ ~  ~  ~  ~ ~",
).warp("t@3 t!3 t@2 t@3 t t@4").slow(8)

const guitar = arrange(
  /*intro*/  [2,silence],[16,theme],
  /*verse1*/ [6,arp1],[8,chords],  [8,arp2],[6,arp1],[8,chords],  [6,arp1],[8,chords],  [8,arp3],[8,chords],
  /*intro*/  [16,theme],
  /*verse2*/ [6,arp1],[8,chords],  [8,arp2],[6,arp1],[8,chords],  [6,arp1],[8,chords],  [8,arp3],[8,chords],
  /*interlude*/  [16,theme], [4,lick1],[4,lick2],[4,lick2.sub(2)],[4,lick1.sub(5)],[4,lick1.sub(7)],[4,lick2.sub(7)], [8,coda],
  /*verse3*/ [6,arp1],[8,chords],  [8,arp2],[6,arp1],[8,chords],  [6,arp1],[8,chords],  [8,arp3],[8,chords],
  /*interlude*/  [16,theme], [4,lick1],[4,lick2],[4,lick2.sub(2)],[4,lick1.sub(5)],[4,lick1.sub(7)],[4,lick2.sub(7)], [8,coda],
  [4,silence])

const verse = `7@2 9 7 6@2 8@2 5@2 7@2 7@2 6 5 4@2 2@6 ~@2 
               4@2 a#3@5 4 5 6 4@5 4 6@2 7@4 6@4 5@3 4 2@6 ~@8
               8@2 9@4 8@4 7@4 7@6 ~@7
               5@3 [4@4 5 4]@8 [3 4 5 7 5 3]@8 2@6 ~@10`.slow(66)

const vox = arrange(
  [2,silence],[16,silence],[66,verse],[16,silence],[66,verse],[48,silence],[66,verse],[48,silence],[4,silence])

const drumi = "[mt sd*4] [sd lt]".slow(2)
const drum1 = "<bd ~ bd*2 bd*2>,sd,hh*2"
const drumx = "<bd ~ bd*2 bd*2 bd ~ bd ~ bd*2 bd*2 bd ~ bd*2 bd*2>,sd,hh*2"

const drums = arrange(
  [2,drumi],[16,drum1],[66,drum1],[16,drum1],[66,drum1],[48,drum1],[66,drum1],[48,drum1],[4,silence]
)

stack(
  vox.scale("e:major").transpose(12).note().s("gm_ocarina").gain(0.5),
  guitar.note().s("gm_electric_guitar_jazz").clip(1).release(0.4).gain(0.5),
s(drums).clip(1).gain(0.08),
).cpm(123)