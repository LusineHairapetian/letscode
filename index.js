function getFactorial() {
    let num = document.getElementById('num').value;
    
    if (num === '' || isNaN(num)) {
        alert("input must be integer");
        return;
    }

    if (num >= 1){
        let factorial = 1;
        for (let x = num; x >= 1; x = x -1) {
            factorial = x*factorial;
        }
    } else {
        factorial = 0;
    }
   
    document.getElementById('text').textContent = "factorial is " + factorial;
}