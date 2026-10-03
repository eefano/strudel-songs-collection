















setcpm(140 / 3)
const mm = "[2 ~ 1 2 0 ~]";

stack(n(mm),
  n(mm.add(2)),
  n(mm.add(-1).late(.33)),
  n(mm.add(-2).late(.66))
).scale("c4:minor").piano()
  .room(1)
  .pianoroll({ fold: false })
