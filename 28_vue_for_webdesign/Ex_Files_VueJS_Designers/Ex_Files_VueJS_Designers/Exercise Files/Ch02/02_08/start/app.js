(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      message: "Product customizer will go here",
      sizes: window.Inventory.allSizes,
      selectedSize: 9
    },
    computed: {
      sizeClass: function() {
        return "product-size--" + this.selectedSize.toString().replace(".", "_");
      }
    },
  });
})();
