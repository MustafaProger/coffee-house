import Header from "../../components/header/header";
import Logo from "../../components/logo-line/logo-line";
import "./main.css";

function Main() {
	return (
		<main className='main'>
			<div className='container'>
				<Header />
				<div className='content'>
					<h1 style={{ fontSize: 40, letterSpacing: 1, marginBottom: 20 }}>
          Все, что вы цените в кофе
					</h1>
					<Logo />
					<p
						style={{
							fontSize: 26,
							letterSpacing: 1,
							marginTop: 20,
							lineHeight: 1.5,
						}}>
						Мы наполняем ваш день энергией и вкусом. Готовы насладиться нашими лучшими зернами?
					</p>
					<a
						href='#more'
						className='btn'>
						Узнать больше
					</a>
				</div>
			</div>
		</main>
	);
}

export default Main;
