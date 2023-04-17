// first we need to create a stage
const stage = new Konva.Stage({
  container: 'life-of-flow',   // id of container <div>
  width: 700,
  height: 700
});

// then create layer
const layer = new Konva.Layer({
  x: 50,
  y: 50,
});

// Capture endpoints
const captureOne = new Konva.Circle({
  x: -20,
  y: 20,
  radius: 30,
  fill: 'black'
});

const captureOneText = new Konva.Text({
  x: captureOne.x() - captureOne.radius() / 2 - 9,
  y: captureOne.y() + captureOne.radius() / 2 - 23,
  text: 'SaaS',
  fontSize: 20,
  fill: 'white',
});

layer.add(captureOne);
layer.add(captureOneText);

const captureTwo = new Konva.Circle({
  x: -20,
  y: 130,
  radius: 30,
  fill: 'black'
});

const captureTwoText = new Konva.Text({
  x: captureTwo.x() - captureTwo.radius() / 2 - 7,
  y: captureTwo.y() + captureTwo.radius() / 2 - 23,
  text: 'CDC',
  fontSize: 20,
  fill: 'white',
});

layer.add(captureTwo);
layer.add(captureTwoText);

// Captured documents coming in
const captureDocumentsTop = [];
const captureDocumentsBottom = [];
const captureDocumentsTopStart = {
  x: 10,
  y: 20
}
const captureDocumentsBottomStart = {
  x: 10,
  y: 120
}
for (let i = 0; i < 4; i++) {
  const newDocTop = doc.clone({
    x: captureDocumentsTopStart.x,
    y: captureDocumentsTopStart.y,
    opacity: 0,
  })
  newDocTop.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  layer.add(newDocTop);
  captureDocumentsTop.push(newDocTop);

  const newDocBottom = doc.clone({
    x: captureDocumentsBottomStart.x,
    y: captureDocumentsBottomStart.y,
    opacity: 0,
  });
  newDocBottom.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  layer.add(newDocBottom);
  captureDocumentsBottom.push(newDocBottom);
}

// Flow Runtime
const runtime = new Konva.Rect({
  x: 130,
  y: 20,
  width: 300,
  height: 100,
  fill: '#6dd4d5',
  stroke: '#5072eb',
  strokeWidth: 2,
});

const runtimeText = new Konva.Text({
  x: runtime.x() + runtime.width() / 2 - 90,
  y: runtime.y() + runtime.height() / 2 - 15,
  text: 'Flow Runtime',
  fontSize: 30,
  fill: 'white',
});

layer.add(runtime);
layer.add(runtimeText);

const collectionDocumentsStart = {
  x: runtime.x() + runtime.width() / 4,
  y: runtime.y() + runtime.height() ,
}
const collectionDocuments = [];
// Documents stored in collections in bucket
for (let i = 0; i < 4; i++) {
  const newDoc = doc.clone({
    x: runtime.x() + runtime.width() / 4,
    y: runtime.y() + runtime.height(),
    opacity: 0,
  })
  newDoc.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  collectionDocuments.push(newDoc);
  layer.add(newDoc);
}

Konva.Image.fromURL('bucket.svg', bucket => {
  bucket.setAttrs({
    x: runtime.x() + runtime.width() / 4 - 20,
    y: runtime.y() + runtime.height() + 110,
    scaleX: 0.06,
    scaleY: 0.06,
  });
  layer.add(bucket);

  const bucketText = new Konva.Text({
    x: runtime.x() + runtime.width() / 4 - 140,
    y: runtime.y() + runtime.height() + 130,
    text: 'Collections in your bucket',
    fontSize: 10,
    fill: 'black',
  });

  layer.add(bucketText);
});


// Derivations
const derivation = new Konva.Rect({
  x: 320,
  y: 210,
  width: 200,
  height: 70,
  fill: '#6dd4d5',
  stroke: '#5072eb',
  strokeWidth: 2,
});

const derivationText = new Konva.Text({
  x: derivation.x() + derivation.width() / 2 - 60,
  y: derivation.y() + derivation.height() / 2 - 10,
  text: 'Derivations',
  fontSize: 20,
  fill: 'white',
});

layer.add(derivation);
layer.add(derivationText);

const derivationInDocuments = [];
const derivationInDocumentsStart = {
  x: runtime.x() + runtime.width() / 4 * 3,
  y: runtime.y() + runtime.height()
};
// Documents going to derivation
for (let i = 0; i < 3; i++) {
  const newDoc = doc.clone({
    x: derivationInDocumentsStart.x,
    y: derivationInDocumentsStart.y,
    opacity: 0,
  })
  newDoc.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  derivationInDocuments.push(newDoc);
  layer.add(newDoc);
}

const derivationOutDocuments = [];
const derivationOutDocumentsStart = {
  x: derivation.x() - 10,
  y: derivation.y() + derivation.height() / 2
};
// Documents from derivation to bucket
for (let i = 0; i < 3; i++) {
  const newDoc = doc.clone({
    x: derivationOutDocumentsStart.x,
    y: derivationOutDocumentsStart.y,
    opacity: 0,
  })
  newDoc.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  derivationOutDocuments.push(newDoc);
  layer.add(newDoc);
}

const materializationTopDocumentsStart = {
  x: runtime.x() + runtime.width(),
  y: runtime.y() + runtime.height() / 8 * 3,
};
const materializationTopDocuments = [];
const materializationBottomDocumentsStart = {
  x: runtime.x() + runtime.width(),
  y: runtime.y() + runtime.height() / 8 * 5,
};
const materializationBottomDocuments = [];
// Documents going to materialization
for (let i = 0; i < 4; i++) {
  const newDocTop = doc.clone({
    x: materializationTopDocumentsStart.x,
    y: materializationTopDocumentsStart.y,
    opacity: 0,
  })
  newDocTop.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  materializationTopDocuments.push(newDocTop);
  layer.add(newDocTop);

  const newDocBottom = doc.clone({
    x: materializationBottomDocumentsStart.x,
    y: materializationBottomDocumentsStart.y,
    opacity: 0,
  });
  newDocBottom.getChildren(child => child.name() == 'head').forEach(head => head.fill(doc.colors[i]))
  materializationBottomDocuments.push(newDocBottom);
  layer.add(newDocBottom);
}

// Materialization endpoints
const materializationOne = new Konva.Circle({
  x: 560,
  y: 20,
  radius: 30,
  fill: 'black'
});

const materializationOneText = new Konva.Text({
  x: materializationOne.x() - materializationOne.radius() / 2 - 6,
  y: materializationOne.y() + materializationOne.radius() / 2 - 25,
  text: 'Lake',
  fontSize: 20,
  fill: 'white',
});

layer.add(materializationOne);
layer.add(materializationOneText);

const materializationTwo = new Konva.Circle({
  x: 560,
  y: 130,
  radius: 30,
  fill: 'black'
});

const materializationTwoText = new Konva.Text({
  x: materializationTwo.x() - materializationTwo.radius() / 2 + 1,
  y: materializationTwo.y() + materializationTwo.radius() / 2 - 23,
  text: 'DB',
  fontSize: 20,
  fill: 'white',
});

layer.add(materializationTwo);
layer.add(materializationTwoText);

// add the layer to the stage
stage.add(layer);

captureDocumentsTop.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      x: captureDocumentsTopStart.x + 90,
      y: captureDocumentsTopStart.y + 40,
      easing: 'linear',
      loop: true,
      duration: 1500,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 750
    });
  }, i * 350);
});

captureDocumentsBottom.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      x: captureDocumentsBottomStart.x + 90,
      y: captureDocumentsBottomStart.y - 40,
      easing: 'linear',
      loop: true,
      duration: 1500,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 750
    });
  }, i * 350);
});

collectionDocuments.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      y: collectionDocumentsStart.y + 100,
      easing: 'linear',
      loop: true,
      duration: 1500,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 750
    });
  }, i * 350);
});

derivationInDocuments.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      y: derivationInDocumentsStart.y + 80,
      easing: 'linear',
      loop: true,
      duration: 1200,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 600
    });
  }, i * 350);
});

derivationOutDocuments.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      x: derivationOutDocumentsStart.x - 50,
      easing: 'linear',
      loop: true,
      duration: 750,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 375
    });
  }, i * 300);
});

materializationTopDocuments.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      x: materializationTopDocumentsStart.x + 90,
      y: materializationTopDocumentsStart.y - 30,
      easing: 'linear',
      loop: true,
      duration: 1500,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 750
    });
  }, i * 350);
});

materializationBottomDocuments.reverse().forEach((item, i) => {
  setTimeout(() => {
    anime({
      targets: item.attrs,
      x: materializationBottomDocumentsStart.x + 90,
      y: materializationBottomDocumentsStart.y + 30,
      easing: 'linear',
      loop: true,
      duration: 1500,
    });

    anime({
      targets: item.attrs,
      opacity: 1,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutExpo',
      duration: 750
    });
  }, i * 350);
});

const anim = new Konva.Animation(function(frame) {
  const time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

  captureDocumentsTop.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('x');
    item.clearCache('y');
  });
  captureDocumentsBottom.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('x');
    item.clearCache('y');
  });
  collectionDocuments.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('y');
  });
  derivationInDocuments.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('y');
  });
  derivationOutDocuments.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('x');
  });
  materializationTopDocuments.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('x');
    item.clearCache('y');
  });
  materializationBottomDocuments.forEach((item, i) => {
    item.clearCache('opacity');
    item.clearCache('x');
    item.clearCache('y');
  });
}, layer);


anim.start();

// draw the image
//layer.draw();
