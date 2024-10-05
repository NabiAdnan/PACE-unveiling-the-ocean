// Get the dropdown menu element
const dropdownMenu = document.getElementById('dropdown-menu');
const home= document.getElementById('home');

// Add event listener to the dropdown menu
dropdownMenu.addEventListener('change', (e) => {
  // Get the selected value
  const selectedValue = e.target.value;

  // Redirect to the selected website
  if (selectedValue === 'Plankton') {
    window.location.href = 'plankton.html';
  } else if (selectedValue === 'Aerosol') {
    window.location.href = 'aerosol.html';
  } else if (selectedValue === 'Cloud') {
    window.location.href = 'clouds.html';
  } else if (selectedValue === 'Ocean-Ecosystem') {
    window.location.href = 'ocean.html';
  }
});

// Add options to the dropdown menu
const options = [
  { value: 'Plankton', text: 'PLANKTON' },
  { value: 'Aerosol', text: 'AEROSOL' },
  { value: 'Cloud', text: 'CLOUD' },
  { value: 'Ocean-Ecosystem', text: 'OCEAN ECOSYSTEM' },
];

options.forEach((option) => {
  const optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.text = option.text;
  dropdownMenu.appendChild(optionElement);
});

home.addEventListener('click', () => {
  window.location.href="home.html";
});