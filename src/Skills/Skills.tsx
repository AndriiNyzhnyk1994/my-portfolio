import React from 'react';
import s from './Skills.module.css';
import sContainer from './../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";



const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={` ${sContainer.container}  ${s.skillsContainer} `}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title='HTML'
                           logo='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/47_1-512.png'
                           description='The standard markup language for documents designed to be displayed in a web browser.'/>
                    <Skill title='JS'
                           logo='https://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png'
                           description='It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.'/>
                    <Skill title='React'
                           logo='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
                           description='JavaScript library used for building reusable UI components.'
                            />
                </div>
            </div>
        </div>
    )
}

export default Skills;