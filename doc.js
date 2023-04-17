const doc = new Konva.Group();

doc.colors = ['#a7ffcb', '#f9ffa9', '#a6dfff', '#e7adff', '#ff9ecd'];
// create our shape
const head = new Konva.Circle({
  name: 'head',
  radius: 15,
  fill: doc.colors[0],
  stroke: 'white',
  strokeWidth: 1
});

const eye = new Konva.Circle({
  name: 'eye',
  x: 5,
  y: -2,
  radius: 3,
  fill: 'black'
});

doc.add(head);
/*doc.add(eye.clone({ radius: 5, fill: 'white' }));
doc.add(eye);
doc.add(eye.clone({ x: -5, radius: 5, fill: 'white' }));
doc.add(eye.clone({ x: -5 }));*/

