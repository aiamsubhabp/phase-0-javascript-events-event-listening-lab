/*
function addingEventListener() {
    alert('I was clicked!')
}

input.addEventListener('click', addingEventListener); */

const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function() {
    return "clicked"
  });
}