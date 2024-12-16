import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../../../components/card/Card";
import "./Randomizer.css";

class Randomizer extends Component {
  state = {
    allCoffee: [], // Полный массив кофе
    shownCoffee: [], // Массив выбранных карточек
    isClickable: false, // Состояние для контроля кликабельности
  };

  componentDidMount() {
    // Загружаем данные через CoffeApi
    this.props.coffeeApi.getAllCoffee().then((allCoffee) => {
      this.setState({ allCoffee });
    });

    // Загружаем выбранные кофе и состояние кликабельности из localStorage
    const storedCoffee = JSON.parse(localStorage.getItem("randomCoffee"));
    const storedIsClickable = JSON.parse(localStorage.getItem("isClickable"));

    if (storedCoffee) {
      this.setState({ shownCoffee: storedCoffee });
    }
    if (storedIsClickable !== null) {
      this.setState({ isClickable: storedIsClickable });
    }
  }

  handleRandomCoffee = () => {
    const { allCoffee } = this.state;

    // Массив для хранения случайных кофе
    const newShownCoffee = [];

    // Выбираем 3 уникальных кофе
    while (newShownCoffee.length < 3) {
      const randomIndex = Math.floor(Math.random() * allCoffee.length);
      const coffee = allCoffee[randomIndex];

      // Проверяем, чтобы выбранное кофе не повторялось
      if (!newShownCoffee.includes(coffee)) {
        newShownCoffee.push(coffee);
      }
    }

    // Отключаем кликабельность карт на время анимации
    this.setState({
      shownCoffee: [], // Очищаем текущие карточки с анимацией
      isClickable: false, // Карты не кликабельны
    }, () => {
      // После того как текущие карточки исчезли, обновляем новые карточки
      setTimeout(() => {
        this.setState({
          shownCoffee: newShownCoffee,
        }, () => {
          localStorage.setItem("randomCoffee", JSON.stringify(newShownCoffee)); // Сохраняем выбранные карты
          localStorage.setItem("isClickable", JSON.stringify(false)); // Сохраняем состояние кликабельности
        });

        // Включаем кликабельность через 500ms (время анимации)
        setTimeout(() => {
          this.setState({ isClickable: true }, () => {
            localStorage.setItem("isClickable", JSON.stringify(true)); // Сохраняем состояние кликабельности
          });
        }, 500); // Учитываем время анимации
      }, 500); // Время, которое дается для завершения анимации исчезновения
    });
  };

  render() {
    const { shownCoffee, isClickable } = this.state;

    return (
      <section className="randomizer-coffee">
        <div className="container">
          <button className="randomizer-button" onClick={this.handleRandomCoffee}>
            Случайный кофе
          </button>

          {/* Используем TransitionGroup для обработки входа и выхода карточек */}
          <TransitionGroup className="randomizer-cards-container">
            {shownCoffee.map((coffee, index) => (
              <CSSTransition
                key={index}
                timeout={500} // Время анимации
                classNames="coffee-card" // Имя класса для анимации
              >
                <div
                  className={`randomizer-card ${isClickable ? "" : "non-clickable"}`}
                >
                  <Card aboutCoffee={coffee} />
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}

export default Randomizer;