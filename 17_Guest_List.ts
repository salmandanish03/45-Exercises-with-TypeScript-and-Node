import { Console } from "console";

let Guest_List :string[] = ['Fawwad Ali','Asad Hyder','Wajahat Hussain Malik'];

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest : string = 'Fawwad Ali';
let new_Guest :string = 'HamZa Siddique' ;

Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);

// Here is add 3 guests
console.log('Good News! We found a Big Table so we are inviting three more guests.');
Guest_List.unshift('Sir. Zia Khan'); 
Guest_List.splice(2 , 0 , 'Sir Danyal Nagori');
Guest_List.push('Mezaab Salman');

// Here is print 6 guests.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// Sorry for not inviting to guest.
console.log('Sorry We can not arrang a big table, only two people will be invited.');

// Also remove the guests here.
while(Guest_List.length >2){
   let remove_Guest_List = Guest_List.pop();
   console.log(`Sorry Mr. ${remove_Guest_List}, You are not invited for the Dinner.`);
}

// Here is remaining two guests.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nYou are sill invited.\n\nThank You!\n\n')
}
// I have removed the all guests list for dinner purpose.
Guest_List.splice(0, 2);
console.log(Guest_List);
