// "The Rhythm Of The Night" (Corona) - Work In Progress
function arr(l,p) { return [l,p.slow(l)]; }
const v1a = arr(1, "~ [4@3 ~]!3 7:5 6 4 3");
const v1b = arr(4, "2:-1 0:-2 ~@4 6:1 4:-1 6 4:2 ~@4 [4:2 3]@3 ~@6 4 7:5 6 [4@2 ~] [3:-1 2@3]@2 0 ~@2");
const v2a = arr(1, "~@6 [6 ~]!2");
const v2b = arr(7, "6 5@0.5 [5 ~] [4 ~]!2 [3 ~] 3:2@1.5 ~@7 6@2 6:2 [5 ~ ]!2 4 3@2 4 2 0:-2 ~@7 [0 2]@3 3@2 4 6:4 4:-4 ~ 0 2 0 4 ~ 0 0:2@2 ~@7");
const sy1 = "<5 7 6 3!2> ~ 9 ~ 10 ~ ~ 12 ~ 11 ~ 10 ~ 11 9 ~";
const sy2 = "<6!3 5!3 7!2> ~ 9 ~ 10 ~ ~ 12 ~ 11 ~ 10 ~ 11 9 ~";
const ch1 = "Ab Cm Bb F@2".slow(5);
const ch2 = "Bb@3 Ab@3 Cm@2".slow(8);
const bs1 = "2 ~@2 2 ~@2 2 ~@3 2 ~@3 2 ~";
const bs2 = "[2 ~@2 2 ~@2 2 ~]!2";
const dr1 = stack(s("bd*4").gain(0.8),s("[~ oh]*4").gain(0.14),s("hh*16").gain(0.09),s("[~ cp]*2").gain(0.4));
const dr2 = s("[~ sd!3]!4 [sd*4]!4").slow(2).velocity(run(32).slow(2).mul(1/31).add(0.1)).gain(0.4);
const dr3 = s("cr").gain(0.2);

const voxpart = arrange(v1b,v1a,v1b,[8, "~"],v2a,v2b,v2a,v2b,v1a,v1b,v1a,v1b,v1a,v1b,v1a,v1b,v1a);
const crdpart = arrange([10,ch1],[24,ch2],         [20,ch1]);
const baspart = arrange([10,"~"],[23,bs2],[1, "~"],[19,bs1],[1,"~"]);
const synpart = arrange([10,"~"],[ 8,sy2],[16,"~"],[20,sy1]);
const drmpart = stack(arrange([10,"~"],[23,dr1],[1,s("bd")],[19,dr1],[1,s("bd")]),
                      arrange([16,"~"],[2,dr2],arr(6,dr3),[2,dr2],arr(7,dr3),arr(1,dr3),arr(8,dr3),[2,dr2],arr(10,dr3)) );

const as = register('as', (mapping, pat) => { mapping = Array.isArray(mapping) ? mapping : [mapping];
  return pat.fmap((v) => { v = Array.isArray(v) ? v : [v, 0];
    return Object.fromEntries(mapping.map((prop, i) => [prop, v[i]])); }); });
stack(
  chord(crdpart).anchor("F4").voicing().s("gm_synth_strings_1").color("blue").gain(0.4),
  synpart.scale("c3:minor").note().s("gm_lead_2_sawtooth").room(0.3).delay(0.3).dfb(0.5).dt(60/128*2).color("red").gain(0.6),
  voxpart.as("n:penv").scale("c4:minor").patt("0.07").s("gm_lead_1_square").room(0.4).delay(0.4).dfb(0.4).dt(60/128).gain(0.85),
  n(baspart).chord(crdpart).anchor(crdpart.rootNotes(2)).voicing().s("gm_synth_bass_1").lpf(1500).room(0.5).color("green").gain(0.9), 
  drmpart.bank("RolandTR909").room(0.2).color("yellow")
 ).cpm(128/4)