function removeItemsWithoutPriceDrops() {
  var lowPrice = 999999;
  var anyRemoved = false;
  var listItems = document.getElementsByClassName('a-section g-item-sortable');

  for (var i = 0; i < listItems.length; i++) {
    var priceDrop = listItems[i].querySelectorAll('.itemPriceDrop');
    var price = listItems[i].querySelectorAll('span.a-offscreen');
    if (price.length) {
      price = price[0].innerHTML;
      price = price.replace('$', '');
    } else {
      price = 0;
    }
    if (priceDrop.length == 0 || price > lowPrice) {
      listItems[i].parentElement.removeChild(listItems[i]);
      anyRemoved = true;
    }
  }

  if (anyRemoved) {
    removeItemsWithoutPriceDrops();
  }
}

function loadAllAndRemoveItemsWithoutPriceDrops() {
  window.scroll(0, document.body.scrollHeight);

  if ((document.body.textContent || document.body.innerText).indexOf('End of List') > -1) {
    window.clearInterval(interval);
    removeItemsWithoutPriceDrops();
    document.getElementById('profile-list-name').innerHTML = 'Books - ' + document.getElementsByClassName('a-section g-item-sortable').length;
    window.scroll(0, 0);
  }
}

var interval = window.setInterval(loadAllAndRemoveItemsWithoutPriceDrops, 250);