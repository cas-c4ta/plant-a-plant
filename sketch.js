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
Gibt es Möglichkeiten, die Pflanzen zu steuern?  (z.B. Tastendruck)
*/