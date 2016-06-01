$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1180: {
            items:3
        }
    }
});

function changeColor(id) {
  $("#item_"+id+" .color-selector__thumb--selected").removeClass("color-selector__thumb--selected");
  $(this).addClass("color-selector__thumb--selected");
  document.querySelector("#item_" + id + " .catalog-item__thumb").style.backgroundImage = this.style.backgroundImage;
}
function changeView() {
  $(this).siblings().removeClass("preview__thumb--selected");
  $(this).addClass("preview__thumb--selected");
  document.querySelector("#view").src = this.src;
}
function changeTab(id) {
  $(this).addClass("tabs__control--active");
  $(this).siblings().removeClass("tabs__control--active"); 
  $(".tabs__panel").hide(); 
  $("#" + id).fadeIn();
}
function dropDown() {
  if ($(this).hasClass("menu-catalog__item--selected")) {
    $(this).removeClass("menu-catalog__item--selected").find(".menu-catalog__dropdown-container").hide();
    return;
  }
  $(this).siblings().removeClass("menu-catalog__item--selected").find(".menu-catalog__dropdown-container").hide();
  $(this).addClass("menu-catalog__item--selected").find(".menu-catalog__dropdown-container").slideDown("fast");
}