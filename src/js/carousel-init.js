$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});

function changeColor(id) {
  console.log($("#item_"+id+" .color-selector__thumb--selected"));
  $("#item_"+id+" .color-selector__thumb--selected").removeClass("color-selector__thumb--selected");
  console.log($("#item_"+id+" .color-selector__thumb--selected"));
  console.log(this);
  $(this).addClass("color-selector__thumb--selected");
  console.log(this);
  document.querySelector("#item_" + id + " .catalog-item__thumb").style.backgroundImage=this.style.backgroundImage;
}