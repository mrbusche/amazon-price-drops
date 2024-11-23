javascript: (function () {
  function removeItemsWithoutPriceDrops() {
    const lowPrice = 999999;
    const listItems = document.querySelectorAll('[data-itemid]');
    const listItemsArray = Array.from(listItems);

    for (const element of listItemsArray) {
      const item = element.querySelector('[id^="itemMain"]');

      if (item) {
        const hasPriceDrop = item.querySelector(".itemPriceDrop") !== null;
        const hasCoupon = item.querySelector('[id^="coupon-badge"]') !== null;
        const hasDealBadge = item.querySelector(".wl-deal-rich-badge") !== null;

        if (hasPriceDrop || hasCoupon || hasDealBadge) {
          const priceText = element.querySelector("span.a-offscreen").innerText;
          const price = parseFloat(priceText.replace("$", ""));
          if (price > lowPrice) {
            element.parentElement.removeChild(element);
          }
        } else {
          element.parentElement.removeChild(element);
        }
      }
    }
  }

  removeItemsWithoutPriceDrops();
})();
