import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box text-align="center" padding="20px 20px 20px 20px" background="--color-primary" lg-padding="20px 20px 19px 20px">
			<Text font="32px --fontFamily-googleRoboto" width="auto" color="--lightD1">
				Конституция Питукстана
			</Text>
		</Box>
		<List lg-font="22px --fontFamily-googleRoboto" lg-color="--light" lg-background="#3c28ae linear-gradient(180deg,--color-primary 1%,rgba(0,0,0,0) 55.7%) 0 0 no-repeat">
			<Text>
				Когда тебя кто-то обучает нельзя огрызаться
			</Text>
			<Text>
				15 минут в углу после обеда, если обед прошел то в ту же минуту
			</Text>
			<Text>
				"Можно д только раз в месяц"
			</Text>
			<Text>
				"Немедленный суд", "1 мороженое"
			</Text>
			{"  "}
			<Text>
				"Вероника должна мыть кальян в течение часа (трубка должна продуваться)"Лишение кальяна три дня"
			</Text>
			"{"\n  "}
			<Text>
				"Правки по закону осуществляется в воскресенье в 10:00"
			</Text>
			{"  "}
			<Text>
				"Чаепитие каждый будний день утром (любое блюдо для питукстанцев)
			</Text>
			{"  "}
			<Text>
				"Решение суда можно оспорить в течение 20 минут "
			</Text>
			{"  "}
			<Text>
				{" "}"Не будить питука и не трогать Веронику за голову когда будишь до 8:30" "20 минут зарядка"
			</Text>
			{"  "}
			<Text>
				"Не кричать на Веронику и не повышать голос на питука" "20 минут зарядка"
			</Text>
			{"  "}
			<Text>
				"С 21:00 до 8:00 режим без звука в телефоне" "Без телефона одни сутки"
			</Text>
			{"  "}
			<Text>
				"Не причинят телесные повреждения питукстанцу" "Покупка то что пожелает питукстанец"
			</Text>
			{"  "}
			<Text>
				"Не оскорблять честь и достоинство питукстанца и его матери""Питукстанец&gt; сам определяет наказание"
			</Text>
			{"  "}
			<Text>
				"Не приглашать в государство других людей не обговорив это с другими питукстанцами"
			</Text>
			{"  "}
			<Text>
				"Выполнять решение суда в установленные сроки" "Увеличение наказания"
			</Text>
			{"  "}
			<Text>
				{" "}"Питукстанцы должны чистить зубы с 9 до 11""Вер: на 15 минут раньше на некст день  Влад : один раз моет посуду в этот день"
			</Text>
			{"  "}
			<Text>
				"Запрещено обижаться более 1 раза в неделю"
			</Text>
			{"  "}
			<Text>
				"Нельзя портить имущества" "Возмещение убытков"
			</Text>
			{"  "}
			<Text>
				"Составлять меню на следующий день" "1 час по выбору для прог или анг"
			</Text>
			{"  "}
			<Text>
				"Влад готовит по пятницам!!!!!!!!!!!!!!!!!!" "Сводить в кофе"
			</Text>
			{"  "}
			<Text>
				"На выходных можно спать до 9" "3 раза не можешь отказать ;
			</Text>
			{"  "}
			<Text>
				"Выполнять решения суда" "Исключение из питукстана на сутки"
			</Text>
		</List>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
				<Override slot="link-index" />
				<Override slot="link-404">
					v1.0.2
				</Override>
			</Menu>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});