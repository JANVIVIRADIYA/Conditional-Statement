function calculator(value1, value2, operation) {
    switch (operation) {
        case 'add':
            return value1 + value2;
        case 'sub':
            return value1 - value2;
        case 'divide':
            return value1 / value2;
        case 'multi':
            return value1 * value2;
        case 'modulo':
            return value1 % value2;
        default:
            return 'Invalid operation';
    }
}


console.log(calculator(5, 3, 'add'));      
console.log(calculator(5, 3, 'sub'));      
console.log(calculator(5, 3, 'divide'));  
console.log(calculator(5, 3, 'multi'));  
console.log(calculator(5, 3, 'modulo'));   
console.log(calculator(5, 3, 'power'));   