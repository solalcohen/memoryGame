var Memory = {};
Memory_images = [`url('./image/cristiano.jpg')`, `url('./image/messi.jpg')`, `url('./image/maradona.jpeg')`, `url('./image/pele.png')`, `url('./image/Ronaldo.png')`, `url('./image/Zidane.png')`, `url('./image/cristiano.jpg')`, `url('./image/messi.jpg')`, `url('./image/maradona.jpeg')`, `url('./image/pele.png')`, `url('./image/Ronaldo.png')`, `url('./image/Zidane.png')`];

//The function which contains all the other
Memory.start = function () {
  Memory.dispatch();
  Memory.check();
  Memory.clickoff();
  Memory.newGame();
};
// dispatch will random all the URL of the 'Memory_images' and add to all of them a background URL. It will also add the Back Image on them.
Memory.dispatch = function () {
  for (i = Memory_images.length - 1; i >= 0; i--) {
    var random_url = Memory_images[Math.floor(Math.random() * Memory_images.length)];
    var card = "#card" + i;
    $(card).css('background-image', random_url);
    var index = Memory_images.indexOf(random_url);
    Memory_images.splice(index, 1);
    $(card).prepend('<img src ="./image/panini.PNG">');
    $('img').css("height", "187px");
    $('img').css("width", "137");
  }
};
//Check will check if 2 cards have 2 same background image and if not will disable the click on other during 1 sec.
//it will add the modal if the user won.
Memory.check = function () {
  var click = [];
  var counter = 0;
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
          $('img').css("height", "187px");
          $('img').css("width", "137");
          $(".tableau").removeClass("click-disabled");
        }, 1000);

      }
      else {
        counter += 1;
        if (counter === 6) {
          $('.modal').css('display', 'block');

        }
      }
      click = [];
    }
  });

}
// clickoff disable the click on the card if the user find it.
Memory.clickoff = function () {
  $('.tableau').click(function () {
    if ($(this).attr("src") != "./image/panini.PNG") {
      $(this).addClass("click-disabled");
    }
  })
};
// will reload the page if the user click on the button.
Memory.newGame = function () {
  $('button').click(function () {
    location.reload();
  });
}


Memory.start();


