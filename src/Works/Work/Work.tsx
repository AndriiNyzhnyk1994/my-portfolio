import React from "react";
import s from './Work.module.css';

type PropsType = {
    title: string
    description: string
    logo: string
}

const Work = (props: PropsType) => {
    return(
        <div className={s.work}>
            <div className={s.icon}>
                <img src={props.logo} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}




export default Work;