
let markovstates = [0];
                   //bd   sd    hh
let markovtable = [[  0,  .2,  .8],  // bd
                   [ .3,   0,  .7],  // sd
                   [ .9,  .1,   0]]; // hh

const markov = register('markov', (pat) => pat.withHap((hap)=> {   
     
     const p = hap.whole.begin.n;
     //console.log(p, markovstates.length)
     while(markovstates.length<=p)
       {
         const prev = markovstates[markovstates.length-1];
         const t = markovtable[prev];
         let next = prev;
         for(let i=0,j=t[i];i<t.length;i++,j+=t[i]) if(hap.value<j) { next = i; break; }
         markovstates.push(next);
         //console.log(markovstates);
       }
     return hap.withValue((v)=>markovstates[p]);
}))

s(rand.segment(1).markov().pick(["bd","sd","hh"])).fast(8)

