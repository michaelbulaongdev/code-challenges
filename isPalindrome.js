function isPalindrome(int) {
    const newArray = Array.from(String(int), Number);
    const revArray = newArray.reverse();
    const revInt = Number(revArray.join(''));
    const result = int === revInt;
    console.log(result);
}
