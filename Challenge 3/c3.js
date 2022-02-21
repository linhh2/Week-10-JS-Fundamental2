function reverseString(str) {
    const split_str = str.split("");               //split String's objects into an array 
    const reverse_array = split_str.reverse();     //reverse the aforementioned array
    const join_array = reverse_array.join("");     //join all elements of the array into a string

    return join_array;
}

const linh = reverseString("linh xinh");
console.log(linh);