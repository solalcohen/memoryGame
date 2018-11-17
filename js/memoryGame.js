var Memory = {};
Memory_images = [`url('./image/cristiano.jpg')`, `url('./image/messi.jpg')`, `url('./image/maradona.jpeg')`, `url('./image/pele.png')`, `url('./image/Ronaldo.png')`, `url('./image/Zidane.png')`, `url('./image/cristiano.jpg')`, `url('./image/messi.jpg')`, `url('./image/maradona.jpeg')`, `url('./image/pele.png')`, `url('./image/Ronaldo.png')`, `url('./image/Zidane.png')`];

Memory.start = function () {
  Memory.clickoff();
  Memory.dispatch()
  Memory.check();
};

Memory.dispatch = function () {
  for (i = Memory_images.length - 1; i >= 0; i--) {
    var random_url = Memory_images[Math.floor(Math.random() * Memory_images.length)];
    var card = "#card" + i;
    $(card).css('background-image', random_url);
    var index = Memory_images.indexOf(random_url);
    Memory_images.splice(index, 1);
    $(card).prepend('<img src ="./image/panini.PNG">');
    $('img').css("height", "185px");
    $('img').css("width", "135");
  }
};

Memory.clickoff = function () {
  $('.tableau').click(function () {
    if ($(this).attr("src") != "./image/panini.PNG") {
      $(this).addClass("click-disabled");
    }
  })
};

Memory.check = function () {
  var click = [];
  $('.tableau').click(function (event) {
    $(event.target).hide();
    click.push($(this));
    if (click.length === 2) {
      if (click[0].css('background-image') != click[1].css('background-image')) {
        first = click[0];
        second = click[1];
        $(".tableau").addClass("click-disabled");
        setTimeout(function () {
          first.prepend('<img src ="./image/panini.PNG">');
          second.prepend('<img src ="./image/panini.PNG">');
          $('img').css("height", "185px");
          $('img').css("width", "135");
          $(".tableau").removeClass("click-disabled");
        }, 1000);

      }
      click = [];
    }
  });

}
Memory.start();




