function registerStudent(name, database) {
    // Ensure the first letter of the name is uppercase to standardize the input
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    // Get the first letter of the name to determine the key
    var firstLetter = name.charAt(0);
    
    // If the key for the first letter doesn't exist, create it
    if (!database[firstLetter]) {
        database[firstLetter] = [];
    }
    
    // Add the name to the appropriate key
    database[firstLetter].push(name);
    
    // Sort the names alphabetically
    database[firstLetter].sort();
    
    // Do not join the names here; keep them as an array
    return database;
}

// Update the display function to join the names when displaying
function updateDatabaseList() {
    for (var key in kingslandDatabase) {
        if (kingslandDatabase.hasOwnProperty(key)) {
            // Join the names into a string for display purposes
            document.getElementById(key).textContent = kingslandDatabase[key].join(', ');
        }
    }
}


