init_pointer();

init_pointer({
    pointerColor: "#222"
  })

  init_pointer({
    pointerColor: "#222",
    ringSize: 15,
    ringClickSize: 10
  })

$(document).ready(function()
{
    $('.custom-cursor').hover(function()
    {
        $(this).css('cursor', 'url(https://example.com/custom-cursor.png), auto');
    }, function()
    {
        $(this).css('cursor', 'default');
    });
});