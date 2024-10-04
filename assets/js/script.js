/* общий скрипт */

'use strict';

const burgMenu = document.querySelector('.burger-menu');
const burgBtnOpen = document.querySelector('#burger-menu-open');
const burgBtnClose = document.querySelector('#burger-menu-close');

// открытие/закрытие бургер меню
if (burgBtnOpen)
{
  burgBtnOpen.addEventListener('click', function ()
  {
    if (burgMenu)
    {
      burgMenu.setAttribute('data-open', '');
      document.body.classList.add("scroll-lock");
    }
  });
}

if (burgBtnClose)
{
  burgBtnClose.addEventListener('click', function ()
  {
    if (burgMenu)
    {
      burgMenu.removeAttribute('data-open');
      document.body.classList.remove("scroll-lock");
    }
  });
}
