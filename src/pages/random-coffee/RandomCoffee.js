import { Component } from "react";
import Confetti from "react-confetti";
import Card from "../../components/card/Card";
import "./RandomCoffee.css";

class RandomCoffee extends Component {
  state = {
    allCoffee: [], // Полный массив кофе
    shownCoffee: null, // Текущая выбранная карточка
    usedIndexes: [], // Индексы использованных карточек
    showConfetti: false, // Флаг для отображения анимации
  };

  componentDidMount() {
    // Загружаем данные через CoffeApi
    this.props.coffeeApi.getAllCoffee().then((allCoffee) => {
      this.setState({ allCoffee });
    });
  }

  handleRandomCoffee = () => {
    const { allCoffee, usedIndexes } = this.state;

    // Если все кофе использованы, сбрасываем список
    if (usedIndexes.length === allCoffee.length) {
      this.setState({ usedIndexes: [], shownCoffee: null }, this.handleRandomCoffee);
      return;
    }

    // Находим случайный индекс, который ещё не использовался
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * allCoffee.length);
    } while (usedIndexes.includes(randomIndex));

    // Обновляем состояние с новым кофе и анимацией
    this.setState({
      shownCoffee: allCoffee[randomIndex],
      usedIndexes: [...usedIndexes, randomIndex],
      showConfetti: true,
    });

    // Плавно скрываем конфетти через 2-3 секунды
    setTimeout(() => this.setState({ showConfetti: false }), 5000); // Устанавливаем 3 секунды
  };

  render() {
    const { shownCoffee, showConfetti } = this.state;

    return (
      <section className="random-coffee">
        <div className="container">
          <h1 className="title">Не знаете, что выбрать?</h1>
          <button className="random-button" onClick={this.handleRandomCoffee}>
            Случайный кофе
          </button>

          {/* Показываем карточку, если кофе выбрано */}
          {shownCoffee && (
            <div className="random-card">
              <Card aboutCoffee={shownCoffee} />
            </div>
          )}

          {/* Анимация конфетти с плавным исчезновением */}
          {showConfetti && <Confetti className="confetti-animation" />}
        </div>
      </section>
    );
  }
}

export default RandomCoffee;