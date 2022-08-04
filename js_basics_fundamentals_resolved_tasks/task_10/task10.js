const deviders = (number) =>{
    if(number<0){
        number*=-1;
    }
    for (let i =0;i<=number;i++){
        if ( number % i == 0 )
        {
            console.log(i); // вывод делителя
        }
    }
}
deviders(10);
deviders(-5);
deviders(15);
deviders(-15);
