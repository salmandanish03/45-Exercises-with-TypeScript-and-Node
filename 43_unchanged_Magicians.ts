
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician :string[] = ['Zulqarnain', 'Sattar', 'Asad', 'Hyder'];
function copyArry(arr:string[]){
    return [...arr]
}

function make_great(magicianArry: string[]){

    for (let i=0; i<magicianArry.length; i++){
        magicianArry[i] = 'The Great ' + magicianArry[i]
    }
}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianArry = copyArry(magician);
make_great(copymagicianArry);

console.log('\n\n Original Arry');
show_magicians(magician);

console.log('\n\n Modified copy Arry');
show_magicians(copymagicianArry);
// console.log(copymagicianArry);

