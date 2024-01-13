javascript: (function () {
  function removeItemsWithoutPriceDrops() {
    const lowPrice = 999999;
    let anyRemoved = false;
    const listItems = document.getElementsByClassName('a-spacing-none g-item-sortable');

    for (const element of listItems) {
      let priceDrop = element.querySelectorAll('span div div div div div div div div div div div.a-row.itemPriceDrop').length;
      let coupon = element.querySelectorAll('span div div div div div div div div div div div i[id^="coupon-badge"]').length;
      let dealBadge = element.querySelectorAll('span div div div div div div div div div span.wl-deal-rich-badge').length;
      let price = priceDrop ? element.querySelectorAll('span.a-offscreen') : 0;
      if (!(priceDrop || coupon || dealBadge) || price > lowPrice) {
        element.parentElement.removeChild(element);
        anyRemoved = true;
      }
    }

    if (anyRemoved) {
      removeItemsWithoutPriceDrops();
    }
  }

  removeItemsWithoutPriceDrops();
})();
