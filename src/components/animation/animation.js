import { useEffect } from "react";

function Animation() {
  useEffect(() => {
    const buttons = document.querySelectorAll('a[href^="#"]'); // Ссылки на якорные блоки

    const handleClick = (event) => {
      event.preventDefault(); // Отменяем стандартное поведение ссылки

      const btn = event.currentTarget; // Текущая ссылка
      const blockID = btn.getAttribute("href").substring(1); // ID блока
      const block = document.getElementById(blockID); // Найти блок по ID

      if (block) {
        const targetPosition = block.getBoundingClientRect().top + window.pageYOffset; // Позиция блока
        const startPosition = window.pageYOffset; // Текущая позиция прокрутки
        const distance = targetPosition - startPosition; // Расстояние до блока
        const duration = 1000; // Продолжительность анимации
        let startTime = null;

        // Функция плавности
        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        // Анимация прокрутки
        const scrollAnimation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
        };

        requestAnimationFrame(scrollAnimation);
      }
    };

    buttons.forEach((btn) => btn.addEventListener("click", handleClick));

    // Очистка событий при размонтировании
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
    };
  }, []);

  return null; // Компонент ничего не рендерит
}

export default Animation;