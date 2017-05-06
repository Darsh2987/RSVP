
// Declaring variables.
const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');

// Function to create list item.
function createLi(text) { // Create function "createLi" with a  argument of the "text".
  const li = document.createElement('li'); // Create list item and store it in the variable "li".
  li.textContent = text; // Text content of list item("li") will be equal to the value of the input value stored within the variable "text".

  const label = document.createElement('label'); // Create label for the list item and store it in the variable "label".
  label.textContent = 'Confirmed'; // Text content of the label is equal to "confirmed".

  const checkbox = document.createElement('input'); // Create an input element and store it in the variable "checkbox".
  checkbox.type = 'checkbox'; // Setting the input element type to a checkbox type.

  const button = document.createElement('button'); // Create a button element and store it in the variable "button".
  button.textContent = 'remove'; // Text content of the button will be equal to "remove".

  label.appendChild(checkbox); // Append the checkbox element to the label element.
  li.appendChild(label); // Append the label element to the li element.
  li.appendChild(button); // Append the button element to the li element.
  return li; // Return the li element.
}

form.addEventListener('submit', (e) => { // Event listener for submit handler on the form.
  e.preventDefault(); // Prevent the browser's default behavior from occurring in response to a user action.
  const text = input.value; // variable "text" to store the input value.
  input.value = ''; // Clear the input once the form has been submitted.
  const li = createLi(text); // Calling the function "createLi" and storing it in the variable "li".
  ul.appendChild(li); // Append the variable "li" (which holds the return value of the "createLi" function) to the element "ul".

});

ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
  }
});
