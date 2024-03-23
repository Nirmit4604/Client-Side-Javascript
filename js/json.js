/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const headerElement = document.querySelector('header');
const iceCreamFlavorsSection = document.getElementById('ice-cream-flavors');

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // STEP 4: Store the URL of a JSON file in a variable
    const jsonUrl = 'file:///C:/Users/User/Desktop/Semester%203/Client%20Side%20Javascript/lesson-10/js/your-json-file.json';

    // STEP 5: Use the new URL to create a new request object
    const response = await fetch(jsonUrl);

    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const jsonObj = await response.json();

    // STEP 8: Output the iScream JSON object to the console
    console.log(jsonObj);

    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader();

    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(jsonObj);
}

/* STEP 9b: Build out the populateHeader() function */
function populateHeader() {
    // Create the H1 element
    const h1Element = document.createElement('h1');

    // Grab the company name from the JSON object and use it for the text node
    const companyName = jsonObj.companyName;
    const companyNameTextNode = document.createTextNode(companyName);

    // Inject the complete H1 element into the DOM, inside the HEADER
    h1Element.appendChild(companyNameTextNode);
    headerElement.appendChild(h1Element);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    const topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        // STEP 10e: build HTML elements for the content
        const articleElement = document.createElement('article');
        const h2Element = document.createElement('h2');
        const pTypeElement = document.createElement('p'); // Paragraph for type
        const pCaloriesElement = document.createElement('p'); // Paragraph for calories
        const ulElement = document.createElement('ul');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2Element.textContent = topFlavors[i].name;
        pTypeElement.textContent = `Type: ${topFlavors[i].type}`; // Display type
        pCaloriesElement.textContent = `Calories: ${topFlavors[i].calories}`; // Display calories

        // Add CSS classes to style type and calories differently
        pTypeElement.classList.add('flavor-type');
        pCaloriesElement.classList.add('flavor-calories');

        // STEP 10g: Build a loop for the ingredients array in the JSON
        for (let j = 0; j < topFlavors[i].ingredients.length; j++) {
            const liElement = document.createElement('li');
            liElement.textContent = topFlavors[i].ingredients[j];
            ulElement.appendChild(liElement);
        }

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        articleElement.appendChild(h2Element);
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pCaloriesElement);
        articleElement.appendChild(ulElement);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        iceCreamFlavorsSection.appendChild(articleElement);
    }
}

// STEP 3b: Call the populate() function
populate();

