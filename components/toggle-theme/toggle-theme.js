'use strict';

const themeToggles = document.querySelectorAll('.theme-toggle__input');
let isDarkTheme = false;
//передача данных из др окна сайта
if (window.name) isDarkTheme = JSON.parse(window.name).isDarkTheme;

document.addEventListener('DOMContentLoaded', readTheme);

function readTheme ()
{
  changeToggle();
  changeTheme(isDarkTheme);
}

function themeOnClick (e)
{
  if (this.checked) isDarkTheme = true;
  else isDarkTheme = false;

  changeTheme(isDarkTheme);
  changeToggle();
  //для передачи данных в др окно сайта
  betweenPages.isDarkTheme = isDarkTheme;
  window.name = JSON.stringify(betweenPages);
}

function changeTheme (isDark = false)
{
  const html = document.getElementsByTagName('html')[0];

  if (isDark) html.classList.add('dark-theme');
  else html.classList.remove('dark-theme');
}

function changeToggle ()
{
  if (themeToggles)
  {
    themeToggles.forEach(element =>
    {
      element.addEventListener('click', themeOnClick);
      if (element.checked !== isDarkTheme) element.checked = isDarkTheme;
    });
  }
}