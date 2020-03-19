javascript: (function() {
  function removeItemsWithoutPriceDrops() {
    const lowPrice = 999999;
    let anyRemoved = false;
    const listItems = document.getElementsByClassName('a-spacing-none g-item-sortable');

    for (var i = 0; i < listItems.length; i++) {
      let priceDrop = listItems[i].querySelectorAll('span.a-size-small.a-color-tertiary')[1].innerText.startsWith('Price dropped');
      let price = priceDrop ? listItems[i].querySelectorAll('span.a-offscreen') : 0;
      if (!priceDrop || price > lowPrice) {
        listItems[i].parentElement.removeChild(listItems[i]);
        anyRemoved = true;
      }
    }

    if (anyRemoved) {
      removeItemsWithoutPriceDrops();
    }
  }

  removeItemsWithoutPriceDrops();
})();
