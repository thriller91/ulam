var n2 = n * n,
    dx = w / (2 * n),
    dy = h / (2 * n),
    count = 0,
    a = 0, b = 0,
    data = [];

/*
  There are probably some errors, but the spiral is not
  sensitive to side effects ( because it remains second
  degres polynomes? )
*/

for (var m=1; m<n; m++){
  while (a<m){  // east
    count++;
    if (isPrime(count))
      data.push({a: a, b: b});
    a++;
  }
  while (b<m){  // north
    count++;
    if (isPrime(count))
      data.push({a: a, b: b});
    b++;
  }
  while (a>-m){  // west
    count++;
    if (isPrime(count))
      data.push({a: a, b: b});
    a--;
  }
  while (b>-m){  // south
    count++;
    if (isPrime(count))
      data.push({a: a, b: b});
    b--;
  }
}

var vis = d3.select("#vis").append("svg")
    .attr("width", w + 2 * p)
    .attr("height", h + 2 * p)
  .append("g")
    .attr("transform", "translate(" + (p + w / 2) + "," + (p + h / 2) + ")");


vis.selectAll("rect")
    .data(data)
  .enter().append("rect")
    .attr("x", function(d) { return (d.a - .5) * dx; })
    .attr("y", function(d) { return (d.b - .5) * dy; })
    .attr("width", dx)
    .attr("height", dy)

function isPrime(n) {
  if (2 > n) return false;
  if (0 === n % 2) return 2 === n;
  for (var index = 3; n / index >= index; index += 2)
    if (0 === n % index) return false;
  return true;
}
