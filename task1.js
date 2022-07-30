function digitToWord(n) {
    switch (n) {
        case 0:
            console.log("zero")
            case 1:
            console.log("one")
            case 2:
            console.log("two")
            case 3:
            console.log("three")
            case 4:
            console.log("four")
            case 5:
                console.log("five")
                case 6:
            console.log("six")
            case 7:
            console.log("seven")
            case 8:
            console.log("eight")
            case 9:
            console.log("nine")
        break;
        default:
           console.log(n+ " is not a digit");
    }
}
digitToWord(5);

digitToWord("a");
digitToWord(10);