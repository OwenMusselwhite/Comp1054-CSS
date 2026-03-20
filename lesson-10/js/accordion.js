// STEP 6: Nab all the SUMMARY elements
const details = document.querySelectorAll("details");

// STEP 7: Loop through the element array to add an event listener, and reference a function called closeOpenDetails
details.forEach((detail) => {
	console.log(detail);
	detail.addEventListener("click", closeOpenDetails);


// STEP 8a: Create the closeOpenDetails() function
	function closeOpenDetails(event) {
		console.log("A summary was clicked");
	// STEP 8b: Loop through the summaries array again
		details.forEach((detail) => {
		// STEP 8d: If the current DETAILS element in the loop is not the one that was clicked, then close it by removing the "open" attribute
			if (detail !== event.currentTarget) {
				detail.removeAttribute("open");
			}
		}
		// STEp 8c: Check to make sure the DETAILS element is not the parent of the SUMMARY that was clicked 
		if (detail === event.currentTarget) {
			return;
		}
	});
	

// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step

});