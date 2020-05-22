import React from "react";
import s from './Works.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";


const Works = () => {
    return(
        <div className={s.worksBlock}>
            <div className={` ${sContainer.container}  ${s.worksContainer} `}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title='Social Network'
                          description='Just a social network. Nothing special'
                          logo='https://www.2open.biz/wp-content/uploads/featured-image.png'/>
                    <Work title='Online liquor store'
                          description='Sponsor of my hard learning programming'
                          logo='https://i.pinimg.com/originals/53/28/42/5328423f8f549cc5a3468e0ae55600f6.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default Works;