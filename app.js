
// Declaring variables.
const form = document.querySelector('#registrar');
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.querySelector('#invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);

filterCheckBox.addEventListener('change', (e) => {
  const isChecked = e.target.checked;
  const lis = ul.children;
  if(isChecked) {
    for (let i = 0; i < lis.length; i += 1) {
      let li = lis[i];
      if (li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < lis.length; i += 1) {
      let li = lis[i];
      li.style.display = '';
    }
  }
});

// Function to create list item.
function createLi(text) { // Create function "createLi" with a  argument of the "text".
  const li = document.createElement('li'); // Create list item and store it in the variable "li".

  const span = document.createElement('span'); // Create an input element and store it in the variable "checkbox".
  span.textContent = text; // Text content of list item("li") will be equal to the value of the input value stored within the variable "text".

  const label = document.createElement('label'); // Create label for the list item and store it in the variable "label".
  label.textContent = 'Confirmed'; // Text content of the label is equal to "confirmed".

  const checkbox = document.createElement('input'); // Create an input element and store it in the variable "checkbox".
  checkbox.type = 'checkbox'; // Setting the input element type to a checkbox type.

  const editButton = document.createElement('button'); // Create a "edit" button element and store it in the variable "button".
  editButton.textContent = 'edit'; // Text content of the button will be equal to "edit".

  const removeButton = document.createElement('button'); // Create a "remove" button element and store it in the variable "button".
  removeButton.textContent = 'remove'; // Text content of the button will be equal to "remove".

  li.appendChild(span);
  label.appendChild(checkbox); // Append the checkbox element to the label element.
  li.appendChild(label); // Append the label element to the li element.
  li.appendChild(editButton); // Append the edit button element to the li element.
  li.appendChild(removeButton); // Append the remove button element to the li element.
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
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});
