class Plant {
  constructor(x, y) {
    this.pos = { x, y }
    this.length = random(30)
  }
  show() {
    push()
    translate(this.pos.x, this.pos.y)
    ellipse(0, 0, 5)
    line(0, 0, 0, -this.length)
    // Ersetze die Ellipse und die Linie mit
    // etwas Interessanterem.
    pop()
  }
  // Formuliere einige der folgenden
  // Methoden aus oder erfinde deine Eigenen.
  grow() {}
  flourish() {}
  move() {}
}