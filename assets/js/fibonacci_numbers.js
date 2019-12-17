var fibonacci_numbers = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_numbers(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_numbers(20));
console.log(fibonacci_numbers(10));
console.log(fibonacci_numbers(1));
console.log(fibonacci_numbers(0));