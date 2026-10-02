function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function() {
        this.value += +prompt("value?")
    }
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений