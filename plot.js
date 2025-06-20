const map = document.getElementById('map');
const coord = document.getElementById('coordinates');
const points = [];

map.addEventListener('mousemove', function (e) {
  const rect = map.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);

  // Move label with cursor
  // label.style.left = `${x + 10}px`;
  // label.style.top = `${y + 10}px`;
  coord.textContent = `X: ${x}, Y: ${y}`;
});

map.addEventListener('click', function (e) {
  const rect = map.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);

  const point = document.createElement('div');
  point.classList.add('point');
  point.style.left = `${x}px`;
  point.style.top = `${y}px`;

  const label = document.createElement('div');
  label.classList.add('label'); // Use your CSS styling for .label
  label.textContent = `X:${x}, Y:${y}`;
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;

  map.appendChild(point);
  map.appendChild(label);

  points.push({ x, y });
  console.log(`Marked at: (${x}, ${y})`);
});

//clear button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', ()=>{
  const allPoint = document.querySelectorAll('.point');
  allPoint.forEach(point => point.remove());

  const allLabel = document.querySelectorAll('.label');
  allLabel.forEach(label => label.remove());

  point.length = 0;

  console.log("All points cleard");
})

