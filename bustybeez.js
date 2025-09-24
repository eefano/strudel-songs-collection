// "Busty Beez" (work in progress)
// song @by Cardiacs
// script @by eefano

setcps(182 / 60)

const split = register('split', (deflt, callback, pat) => callback(deflt.map((d, i) => pat.withValue((v) => {
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value) ? (i < value.length ? value[i] : d) : (i == 0 ? value : d);
  return (i == 0 && isobj) ? { ...v, value: result } : result;
}))));


$: `<
     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 
     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~
     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2 
     g4@6 g4@12 g#4 d#4 a#4 b4                

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 
     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~
     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2 
     g4@6 g4@12 g#4 d#4 a#4 b4                

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2

     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     c#4 c4@2 a#3@2 f#4@2 

     c#4 c4@2 a#3@2 

     g4@4 g4@4 g4@3 g4 g#4 d#4 a#4 b4

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2
     g4@6 g4@12 g#4 d#4 a#4 b4                

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2
     g4@6 g4@12 g#4 d#4 a#4 b4                

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2
     g4@6 g4@12 g#4 d#4 a#4 b4                

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2
     
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~
            
     c#4 c4@2 a#3@2 f#4@2 
     
     c#4 c4@2 a#3@2 

     g4@4 g4@4 g4@3 g4 g#4 d#4 a#4 b4
     

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     c#4 c4@2 a#3@2 f#4@2 
     e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~

     g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2

     g#4@2 g#4@4
     
     g4@4 g4@4 g4@3 g4 g#4 d#4 a#4 b4           

     b4@3 c5 g4@2 g4 f4 c#4 c#4@2 
     a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2
     c#5 c#4@2 
     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 

     d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 
     d#4 c#4 b3 g4@2 f4 d#4 c#4 
 
     >`.split([0, 0], s => note(s[0]).penv(s[1])).patt(.1).s("gm_overdriven_guitar:3")
  .ribbon(989 - 1, 500)

$: s("<hh>").gain(.3)


