
// List of current usernames
const current_users: string[] = ['Zulqarnain', 'SaTtar', 'TaHa', 'Asad', 'Jhon'];

// List of new usernames
const new_users: string[] = ['Ali', 'SaTtar', 'TaHa', 'Hyder', 'Hamza'];

// Loop through new_users to check if each username is available
// Check if the new username exists in the current_users list (case insensitive)
for (const new_username of new_users) {
    const usernameExists = current_users.some(user => user.toLowerCase() === new_username.toLowerCase());

    if (usernameExists) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
