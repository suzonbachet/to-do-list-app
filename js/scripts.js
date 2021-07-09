function newItem(){

// Adding a new item to the list of items 
  let li = $('<li></li>');
  let list = $('#list');
  let inputValue = $('#input').val();
  li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     list.append(li);
   }

// Adding eventListener: cross out by double clik
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

// Adding X button to delete an item
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  li.append(crossOutButton);
  crossOutButton.append(document.createTextNode('X'));
  crossOutButton.on('click', function deleteListItem() {
  li.addClass('delete');
    });

//Reordering the items: 
   list.sortable();
}

// Add an item to the list when enter key is pressed
