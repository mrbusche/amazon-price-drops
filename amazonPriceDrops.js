javascript: (function () {
  function removeItemsWithoutPriceDrops() {
    const lowPrice = 999999;
    const priceDropMin = 1;
    let anyRemoved = false;
    const listItems = document.getElementsByClassName('a-spacing-none g-item-sortable');

    for (var i = 0; i < listItems.length; i++) {
      let priceDropSpan = listItems[i].querySelectorAll('span.a-size-base.a-color-base');
      let priceDrop = priceDropSpan.length > 0 ? priceDropSpan[0].innerText.startsWith('Price dropped') : false;
      let price = priceDrop ? listItems[i].querySelectorAll('span.a-offscreen') : 0;
      let priceDropPercent = priceDropSpan.length > 0 ? priceDropSpan[0].innerText : '';
      priceDropPercent = priceDropPercent.replace('Price dropped', '').replace('% since added', '');
      if (!priceDrop || price > lowPrice || parseInt(priceDropPercent) < priceDropMin) {
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
