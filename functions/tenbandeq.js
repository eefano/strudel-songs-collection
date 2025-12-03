
$: n("0 3 <4 2> [5 6]".add("<-7 0 7>")).scale("c2:major").s('supersaw').layer(

x=>x.lpf(31.25).hpf(31.25).gain(slider(0,0,1,.1)),
x=>x.lpf(62.5 ).hpf(62.5 ).gain(slider(0.7,0,1,.1)),
x=>x.lpf(125  ).hpf(125  ).gain(slider(1,0,1,.1)),
x=>x.lpf(250  ).hpf(250  ).gain(slider(0.5,0,1,.1)),
x=>x.lpf(500  ).hpf(500  ).gain(slider(0,0,1,.1)),
x=>x.lpf(1000 ).hpf(1000 ).gain(slider(0.7,1,.1)),
x=>x.lpf(2000 ).hpf(2000 ).gain(slider(0,0,1,.1)),
x=>x.lpf(4000 ).hpf(4000 ).gain(slider(1,0,1,.1)),
x=>x.lpf(8000 ).hpf(8000 ).gain(slider(0,0,1,.1)),
x=>x.lpf(16000).hpf(16000).gain(slider(0,0,1,.1))

).postgain(.5)._spectrum()