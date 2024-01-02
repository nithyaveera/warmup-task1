/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	if (firstName && lastName) {
		return firstName + " " + lastName
	} else {
		return firstName
	}
	
	
	///Your code Ends here
}
console.log(getFullName("GUVI", "GEEK"))
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/