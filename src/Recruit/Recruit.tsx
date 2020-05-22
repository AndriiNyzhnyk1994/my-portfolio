import React from "react";
import s from './Recruit.module.css';
import sContainer from "../Common/Styles/Container.module.css";


const Recruit = () => {
    return(
        <div className={s.recruitBlock}>
            <div className={` ${sContainer.container}  ${s.recruitContainer} `}>
                <span className={s.recruitSpan}>I am considering remote work</span>
                <button className={s.recuitButton}>Recruit me</button>
            </div>
        </div>
    )
}


export default Recruit;


