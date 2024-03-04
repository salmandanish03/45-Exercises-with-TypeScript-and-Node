let personname :string = '';

personname = prompt('What is your name?') || '';

let lowercase :string = personname.toLowerCase() ;
let uppercase :string = personname.toUpperCase() ;
let titlecase :string = personname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(personname !== null && personname !== ''){
    alert(`Hello ${personname}, Here are your name in: 
    LowerCase: ${lowercase}
    upperCase: ${uppercase}
    titlecase: ${titlecase}`)
}
else{
    alert('Please enter your name !')
}