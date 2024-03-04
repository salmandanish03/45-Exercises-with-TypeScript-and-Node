import { Console } from "console";

let Guest_List :string[] = ['Fawwad Ali','Asad Hyder','Wajahat Hussain Malik'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest : string = 'Fawwad Ali';
let new_Guest :string = 'HamZa Siddique' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We found a Big Table so we are inviting three more guests.');

Guest_List.unshift('Sir. Zia Khan'); 

Guest_List.splice(2 , 0 , 'Sir Danyal Nagori');

Guest_List.push('Mezaab Salman');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

