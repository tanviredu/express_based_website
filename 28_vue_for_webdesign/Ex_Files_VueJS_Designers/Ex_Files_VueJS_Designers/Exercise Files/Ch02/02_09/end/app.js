(function() {
  "use strict";

  var ProductCustomizer = new Vue({
    el: "#vue-root",
    data: {
      message: "Product customizer will go here",
      sizes: window.Inventory.allSizes,
      selectedSize: 9,
      colors: window.Inventory.allColors
    },
    methods: {
      updateColorsBySize: function(evt) {
        console.log('called updateColorsBySize', evt.target.value);

        this.colors = window.Inventory.bySize[evt.target.value];
      }
    }
  });
})();
