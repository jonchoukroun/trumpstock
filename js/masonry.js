$('.grid').imagesLoaded(function(){
  $('.grid').masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    gutter: 10,
    percentPosition: true
  });
});
