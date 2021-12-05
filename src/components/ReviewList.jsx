

function App() {
    return (
        <div className="b-reviews">
            <ul className="reviews__list">
                <li className="reviews__item">
                    <div className="reviews__top">
                        <p className="reviews__author">
                            <span className="reviews__author-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="#449F00" />
                                </svg>
                            </span>
                            <span className="reviews__author-name">Алекс</span>
                        </p>
                        <p className="reviews__city">
                            <span className="reviews__city-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20.9L16.95 15.95C17.9289 14.971 18.5955 13.7237 18.8656 12.3659C19.1356 11.008 18.9969 9.60058 18.4671 8.32154C17.9373 7.0425 17.04 5.94929 15.8889 5.18015C14.7378 4.41101 13.3844 4.00049 12 4.00049C10.6156 4.00049 9.26222 4.41101 8.11109 5.18015C6.95996 5.94929 6.06275 7.0425 5.53292 8.32154C5.00308 9.60058 4.86442 11.008 5.13445 12.3659C5.40449 13.7237 6.07111 14.971 7.05 15.95L12 20.9ZM12 23.728L5.636 17.364C4.37734 16.1053 3.52019 14.5017 3.17293 12.7558C2.82567 11.01 3.00391 9.20041 3.6851 7.55588C4.36629 5.91136 5.51984 4.50575 6.99988 3.51683C8.47992 2.5279 10.22 2.00006 12 2.00006C13.78 2.00006 15.5201 2.5279 17.0001 3.51683C18.4802 4.50575 19.6337 5.91136 20.3149 7.55588C20.9961 9.20041 21.1743 11.01 20.8271 12.7558C20.4798 14.5017 19.6227 16.1053 18.364 17.364L12 23.728ZM12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96084 13.4142 9.58577C13.0391 9.2107 12.5304 8.99998 12 8.99998C11.4696 8.99998 10.9609 9.2107 10.5858 9.58577C10.2107 9.96084 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13ZM12 15C10.9391 15 9.92172 14.5786 9.17158 13.8284C8.42143 13.0783 8 12.0608 8 11C8 9.93912 8.42143 8.9217 9.17158 8.17156C9.92172 7.42141 10.9391 6.99998 12 6.99998C13.0609 6.99998 14.0783 7.42141 14.8284 8.17156C15.5786 8.9217 16 9.93912 16 11C16 12.0608 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15Z" fill="#449F00"/>
                                </svg>
                            </span>
                            <span className="reviews__city-name">
                                Обнинск
                            </span>
                        </p>
                        <time className="reviews__date">05.12.2021</time>
                    </div>
                    <p className="reviews__text">
                        Хорошие впечатления о работе ребят из компании Гринтурф. За месяц отлично облагородили участок - проект дизайна ландшафта сделали, дорожки, газон, систему орошения, все остальное. Полный фарш короче. Получилось не так дорого как сам того ожидал изначально. Сезон кончился ничего не развалилось и не поплыло, весной буду заказывать еще кое-что, есть в планах расшрить участок и беседку сделать. Только к ним, за такие то деньги и качество.
                    </p>
                </li>

                <li className="reviews__item">
                    <div className="reviews__top">
                        <p className="reviews__author">
                            <span className="reviews__author-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="#449F00" />
                                </svg>
                            </span>
                            <span className="reviews__author-name">Петр</span>
                        </p>
                        <time className="reviews__date">30.12.2021</time>
                    </div>
                    <p className="reviews__text">
                    Работники компании полностью оснастили наше футбольное поле газоном. Тут трава должна быть специальной чтобы нельзя было ее выдрать шипами. До этого имели дело с другими подрядчиками – они не смогли справиться с задачей. Гринтурф сразу показал существенно более профессиональный подход. Быстро цены рассчитали, рассказали что нужно для ухода. Сезон отлично пережила трава, теперь будем обращаться снова для того чтобы и другое поле тоже они оснастили, потому что качество работы нам полностью подходя.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default App;
