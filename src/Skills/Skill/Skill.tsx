import React from "react";
import s from './Skill.module.css';


type PropsType = {
    title: string
    description: string
    logo: string
}

const Skill = (props: PropsType) => {
    return(
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.logo} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Skill;