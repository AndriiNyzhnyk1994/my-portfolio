import React from 'react';
import s from './Main.module.css';
import sContainer from './../Common/Styles/Container.module.css';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={` ${sContainer.container}  ${s.mainContainer} `}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <h1>I am Andrew Nyzhnyk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src="https://cdn7.dissolve.com/p/D929_41_195/D929_41_195_1200.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}


export default Main;