
let markovstates = {};
                   
let markovtables = {
  'drums':
     //bd   sd    hh
  [[  0,  .2,  .8],  // bd
   [ .3,   0,  .7],  // sd
   [ .9,  .1,   0]]  // hh

, 'chords':  
  [[  .2,  .2,  .4,  .2],  
   [ .5,   .3,  .2,  .1],
   [  0,   .2,   .7,  .1],
   [ .7,  .1,   .1,  .1]] 
 }

const markov = register('markov', (id, pat) => pat.withHap((hap)=> {   

     if(markovstates[id]===undefined) markovstates[id]=[0];
     const mystate = markovstates[id];
     const mytable = markovtables[id];
     //console.log(mytable)
  
     const p = hap.whole.begin.n;
     while(mystate.length<=p)
       {
         const prev = mystate[mystate.length-1];
         const t = mytable[prev];
         let next = prev;
         for(let i=0,j=t[i];i<t.length;i++,j+=t[i]) if(hap.value<j) { next = i; break; }
         mystate.push(next);
         //console.log(mystate);
       }
     return hap.withValue((v)=>mystate[p]);
}))

$: s(rand.segment(1).markov('drums').pick(["bd","sd","hh"])).fast(8)

$: chord(rand.late(.2).segment(1).markov('chords').pick(["C","Dm","F","A"])).fast(2).voicing().piano()
