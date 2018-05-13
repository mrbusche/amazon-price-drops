function removeItemsWithoutPriceDrops() {
  var lowPrice = 999999;
  var anyRemoved = false;
  var listItems = document.getElementsByClassName('a-spacing-none g-item-sortable');

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

removeItemsWithoutPriceDrops();
