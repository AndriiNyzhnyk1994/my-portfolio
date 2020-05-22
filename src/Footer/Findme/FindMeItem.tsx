import React from "react";
import s from './FindMeItem.module.css';


type PropsType = {
    logo: string
}

const FindMeItem = (props: PropsType) => {
    return(
        <div className={s.logo}>
            <img src={props.logo} alt=""/>
        </div>
    )
}


export default FindMeItem;