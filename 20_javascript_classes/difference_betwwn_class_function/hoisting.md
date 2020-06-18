suppose you instanticate the class and create a object 
but you wrote the class after its instantiate
like 

var car = new Car();

class Car{

}

now its going to show error because you instantiate before it is declared

but this is not the case with function
you cna call a function and after that you can define it

that means when the app is running its already loaded
like it is written in the top of everything
so thats why called
function is hoisted at the top