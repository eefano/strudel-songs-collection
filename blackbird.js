// "Blackbird" (work in progress)
// song @by Paul McCartney (Beatles)
// script @by eefano
setcpm(93)
samples({'gE': {'e1': 'https://cdn.freesound.org/previews/182/182967_529852-lq.mp3'}
        ,'gA': {'a1': 'https://cdn.freesound.org/previews/182/182966_529852-lq.mp3'}
        ,'gD': {'d2': 'https://cdn.freesound.org/previews/182/182946_529852-lq.mp3'}
        ,'gG': {'g2': 'https://cdn.freesound.org/previews/182/182941_529852-lq.mp3'}
        ,'gB': {'b2': 'https://cdn.freesound.org/previews/183/183007_529852-lq.mp3'}
        ,'gee': {'e3': 'https://cdn.freesound.org/previews/183/183004_529852-lq.mp3'} })

const gString = register('gString', (n, pat) =>  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]).velocity(velocities[n]); } ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>(strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0).cut(1).s(stringsamp[0])
    ,fingers.pickOut(fingering).gString(1).cut(2).s(stringsamp[1])
    ,fingers.pickOut(fingering).gString(2).cut(3).s(stringsamp[2])
    ,fingers.pickOut(fingering).gString(3).cut(4).s(stringsamp[3]).speed(0.998)
    ,fingers.pickOut(fingering).gString(4).cut(5).s(stringsamp[4])
    ,fingers.pickOut(fingering).gString(5).cut(6).s(stringsamp[5])]));

const standardtuning = [40,45,50,55,59,64];
const velocities = [.4,.35,.4,.3,.4,.4]
const stringsamp = ["gE","gA","gD","gG","gB","gee"]
const fingering = 
{o:"x:x:x:x:x:x", g:"3:x:x:0:0:x", a:"x:0:x:0:1:x", A:"x:0:x:0:2:x", b:"x:2:x:0:3:x", G:"x:10:x:0:12:x", h:"x:x:0:0:1:x"
,c:"x:3:x:0:5:x", C:"x:4:x:0:x:3", d:"x:5:x:0:7:x", D:"x:6:x:0:x:5", e:"x:7:x:0:8:x", E:"x:6:x:0:8:x", B:"x:3:x:0:4:x"
,f:"x:8:x:0:10:x", m:"x:5:x:0:6:x", n:"x:1:x:0:3:x"};
const strumming = 
{o:"0,1,2,3,4,5", x:"[0,4],[~ 3]", y:"[1,4],[~ 3]", w:"1,[4 _ _ 4 _ 4 _ _]/2,[~ 3]",W:"2,[4 _ _ 4 _ 4 _ _]/2,[~ 3]"
,z:"[1,5],[~ 3]", v:"0,[4 _ _ 4 _ 4 _ _]/2,[~ 3]", Y:"[1,4,3]/7", X:"[0,4,3]/10"};

const song = "<0@4 1@7 1@37 1@29 2@16 3@2 1@29 2@16 3@2 1@7 4@14 1@3 5@3 3@2 1@29 6@8 6@6 7@10 >"

$: guitar(song.pickRestart(
["<o@4>","<x y y w@4 y z y z w _ _ _ y z w _ _ _ _ _ _ _ W _ v _ y y w _ W _ v _>","<y _ _ _ w _  _ _   >","<W _>","<w@4 y@3 Y@7>","<y@3>"   ,"<y y w _ W _ v _>","<X@10>"]),
song.pickRestart(
["<o@4>","<g a b G@4 c C d D e _ E _ d C c _ B _ b _ A _ h _ g _ c b A _ h _ g _>","<f e m c n _ <c A>@2>","<h _>","<G@14>"       ,"<c b A >","<c b A _ h _ g _>","<g@10>"]))
.transpose(-12).release(.2).room(.5).lpf(2800).gain(.3)

$: s("cajon:12").lpf(500).speed(.8).gain(.5)

//all(x=>x.ribbon(187,40))
//.pianoroll({ labels: false, fold: false, minMidi: 35, maxMidi: 95, cycles: 5 })
