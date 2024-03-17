// "Swim And Sleep Like A Shark" (Work In Progress)
// song @by Unknown Mortal Orchestra
// script @by eefano
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
                                                  Fraction(v[1]).add(1).div(v[2])) ).outerJoin()}
function tablature(te,tB,tG,tD,tA,tE)
  { return stack(te.add(64),tB.add(59),tG.add(55),tD.add(50),tA.add(45),tE.add(40)); }

const parts = 
{theme: tablature(
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~ 11  ~",
"9 ~ 9 ~ 10 9 7 ~ 9 6 ~ 10 ~ 10 ~ 12 14 14  ~ 13",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ 6  ~ ~  ~ ~  ~  ~  ~  ~  ~",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~  ~  ~",
"7 7 ~ 7  ~ 7 5 5 ~ 4 ~  9 9  ~ 9  ~  ~ 11  ~ 11",
"~ ~ ~ ~  ~ ~ ~ ~ ~ ~ ~  ~ ~  ~ ~  ~  ~  ~  ~  ~",
).warp("t@2 t!4 t@2!2 t!2 t@2!3 t!4 t@2 t@3 t t@4").slow(16)
,arp1: tablature(
"~ ~ ~ 0 ~ ~ ~ 0 ~ ~ ~ 0",
"~ ~ ~ ~ ~ ~ ~ ~ ~ 0 ~ ~",
"~ 6 ~ ~ ~ 4 ~ ~ ~ ~ 2 ~",
"~ ~ 6 ~ ~ ~ 4 ~ ~ ~ ~ ~",
"4 ~ ~ ~ 2 ~ ~ ~ 0 ~ ~ ~",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~",).slow(6)
,chords: tablature(
"~ ~ ~",
"0 2 0",
"1 2 1",
"2 2 2",
"2 0 2",
"0 ~ 0",).warp("t@3 t t@4").slow(8)
,arp2: tablature(
"~ ~ ~ 4 ~ ~ ~ ~ ~ 4 ~ ~ ~",
"~ ~ 2 ~ 2 ~ ~ 4 ~ ~ 4 ~ ~",
"~ 3 ~ ~ ~ 3 ~ ~ 4 ~ ~ 4 ~",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 4",
"~ ~ ~ ~ ~ ~ 2 ~ ~ ~ ~ ~ ~",
"2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~",).warp("t!3 t@2 t t@2 t!6 t@2").slow(8)
,arp3: tablature(
"~ ~ ~ 0 ~ ~ ~ ~ ~ ~ 0 ~ ~ ~ ~",
"~ ~ ~ ~ ~ ~ ~ ~ 0 ~ ~ 0 ~ ~ ~",
"~ 4 ~ ~ 4 ~ ~ ~ ~ 2 ~ ~ 2 ~ ~",
"~ ~ 4 ~ ~ 4 ~ ~ ~ ~ ~ ~ ~ ~ ~",
"2 ~ ~ ~ ~ ~ 2 0 ~ ~ ~ ~ ~ 0 2",
"~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 0",).warp("t!3 t@2 t!11").slow(8)
,lick1: tablature(
" ~  ~  ~  ~ 17  ~",
"17  ~ 17  ~  ~ 17",
" ~  ~  ~  ~  ~  ~",
" ~  ~  ~  ~  ~  ~",
"16 16  ~ 16  ~  ~",
" ~  ~  ~  ~  ~  ~",).warp("t@2 t!4 t@2").slow(4)
,lick2: tablature(
" ~  ~  ~  ~ 16  ~",
"16  ~ 16  ~  ~ 16",
" ~  ~  ~  ~  ~  ~",
" ~  ~  ~  ~  ~  ~",
"14 14  ~ 14  ~  ~",
" ~  ~  ~  ~  ~  ~",).warp("t@2 t!4 t@2").slow(4)
,coda: tablature(
"~ ~ ~ ~  ~  ~  ~ ~",
"7 5 7 9 10 10 12 9",
"~ ~ ~ ~  ~  ~  ~ ~",
"~ ~ ~ ~  ~  ~  ~ ~",
"5 4 5 7  9  9 11 7",
"~ ~ ~ ~  ~  ~  ~ ~",).warp("t@3 t!3 t@2 t@3 t t@4").slow(8)
}; // end of parts

const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

stack(
  "<~@2 intro@16 verse@66 intro@16 verse@66 intro@16 solo@32 verse@66 intro@16 solo@32 ~@4>".pickRestart(
  {intro: "<theme@16>", 
   verse: "<arp1@6 chords@8 arp2@8 arp1@6 chords@8 arp1@6 chords@8 arp3@8 chords@8>",
   solo: "<lick1 lick2 lick2:-2 lick1:-5 lick1:-7 lick2:-7 coda@2>/4"}).split([0,0],(x)=>x[0].pickRestart(parts).transpose(x[1]))
  .note().s("gm_electric_guitar_jazz:0").clip(1).release(0.4).gain(0.6).color('yellow'),

  "<~@2 ~@16 0@66 ~@16 0@66 ~@48 0@66 ~@48 ~@4>".pickRestart([
    `<7@2 9 7 6@2 8@2 5@2 7@2 7@2 6 5 4@2 2@6 ~@2 
    4@2 a#3@5 4 5 6 4@5 4 6@2 7@4 6@4 5@3 4 2@6 ~@8
    8@2 9@4 8@4 7@4 7@6 ~@7
    5@3 [4@4 5 4]@8 [3 4 5 7 5 3]@8 2@6 ~@10>*2`]).scale("e:major").transpose(12)
  .note().s("gm_ocarina").gain(0.6).color('green'),
  
  "<0@2 1@16 1@66 1@16 1@66 1@48 1@66 1@48 ~@4>".pickRestart([
    "<mt sd*4 sd lt>*2",
    "<bd ~ bd*2 bd*2>,sd,hh*2"])
  .s().bank("Linn9000").clip(1).gain(0.08).color('cyan')  
).cpm(123).room(0.3)