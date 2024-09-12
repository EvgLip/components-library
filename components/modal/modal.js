'use strict';

const modalOpener = document.querySelector('.modalOpener'); //кнопка открытия модалки
const modal = document.querySelector('.modal');

modalOpener.addEventListener("click", openModalAndLockScroll);
modal.addEventListener('click', onclickOnBackDrop);
modal.addEventListener("close", returnScroll);

//закрытие по щелчку на подложке BackDrop
function onclickOnBackDrop ({ currentTarget, target })
{
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;

  if (isClickedOnBackDrop)
  {
    dialogElement.close();
  }
}

function openModalAndLockScroll ()
{
  modal.showModal();
  document.body.classList.add("scroll-lock");
}

function returnScroll ()
{
  document.body.classList.remove("scroll-lock");
}