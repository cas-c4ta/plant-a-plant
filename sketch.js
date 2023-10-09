const plants = []

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)
  for (const plant of plants) {
    plant.show()
  }
}

function mousePressed() {
  plants.push(new Plant(mouseX, mouseY))
}

/* 
- Schreibe ein Programm, dass auf Mausklick eine Pflanze an eine Position x/y setzt.
- Alle Pflanzen haben die gleichen Eigenschaften, bei jeder einzelnen Pflanze sind sie aber etwas anders ausgeprägt.
- Die Pflanze entwickelt/verändert sich. Vielleicht über einen bestimmten Zeitraum, vielleicht durch einen bestimmten Reiz (Klick, Tastendruck)
- Finde selber passende Erweiterungen für deine Pflanze: Blüten, Früchte, Parasiten, etc.
*/