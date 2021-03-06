import { useState } from "react";
import ReviewItem from "./ReviewItem";


function App() {
    const [reviews] = useState([
        {id: 1, active: true, modifier: 'red', name: 'Алекс', city: 'Обнинск', date: '05.12.2021', text: 'Хорошие впечатления о работе ребят из компании Гринтурф. За месяц отлично облагородили участок - проект дизайна ландшафта сделали, дорожки, газон, систему орошения, все остальное. Полный фарш короче. Получилось не так дорого как сам того ожидал изначально. Сезон кончился ничего не развалилось и не поплыло, весной буду заказывать еще кое-что, есть в планах расшрить участок и беседку сделать. Только к ним, за такие то деньги и качество.'},
        {id: 2, active: true, name: 'Иван', city: '', date: '06.12.2021', text: 'Хорошие впечатления о работе ребят из компании Гринтурф. За месяц отлично облагородили участок - проект дизайна ландшафта сделали, дорожки, газон, систему орошения, все остальное. Полный фарш короче. Получилось не так дорого как сам того ожидал изначально. Сезон кончился ничего не развалилось и не поплыло, весной буду заказывать еще кое-что, есть в планах расшрить участок и беседку сделать. Только к ним, за такие то деньги и качество.'},
        {id: 3, active: true, name: '', city: 'Смоленск', date: '02.12.2021', text: 'Хорошие впечатления о работе ребят из компании Гринтурф. За месяц отлично облагородили участок - проект дизайна ландшафта сделали, дорожки, газон, систему орошения, все остальное. Полный фарш короче. Получилось не так дорого как сам того ожидал изначально. Сезон кончился ничего не развалилось и не поплыло, весной буду заказывать еще кое-что, есть в планах расшрить участок и беседку сделать. Только к ним, за такие то деньги и качество.'},
        {id: 4, active: false, name: 'Петр', city: 'Москва', date: '06.12.2021', text: 'Хорошие впечатления о работе ребят из компании Гринтурф. За месяц отлично облагородили участок - проект дизайна ландшафта сделали, дорожки, газон, систему орошения, все остальное. Полный фарш короче. Получилось не так дорого как сам того ожидал изначально. Сезон кончился ничего не развалилось и не поплыло, весной буду заказывать еще кое-что, есть в планах расшрить участок и беседку сделать. Только к ним, за такие то деньги и качество.'},
    ])
    return (
        <div className="b-reviews">
            <ul className="reviews__list">
                {reviews.filter(item => item.active).map(item => <ReviewItem reviewData={item} key={item.id} />)}
            </ul>
        </div>
    );
}

export default App;
