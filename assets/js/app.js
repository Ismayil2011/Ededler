const container = document.querySelector(".container");
for (let i = 1; i < 10001; i++) {
    const cube = document.createElement("div"); 
    const span = document.createElement("span");
    span.innerText=i;
    cube.classList.add("cube");
    let isPrime = true;
    cube.appendChild(span);
    for (let t = 2; t < i; t++) {
        if (i % t ==0) {
           isPrime = false; 
           break 
        }
    }
    if (isPrime) {
        cube.classList.add("red");
    }
    else if ((i % 2 == 0)) {
        cube.classList.add("green");
    }
    else{
        cube.classList.add("yellow");
    }
    container.appendChild(cube);
    
    
}
