let Guest_List :string[] = ['Fawwad Ali','Asad Hyder','Wajahat Hussain Malik'];

for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
let absent_Guest : string = 'Fawwad Ali';
let new_Guest :string = 'HamZa Siddique' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dr. Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`)