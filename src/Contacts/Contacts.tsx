import React from "react";
import s from './Contacts.module.css';
import sContainer from "../Common/Styles/Container.module.css";


const Contacts = () => {
    return(
        <div className={s.contactsBlock}>
            <div className={` ${sContainer.container}  ${s.contactsContainer} `}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <span>Name:</span>
                    <input/>
                    <span>Phone:</span>
                    <input/>
                    <span>Your requirements:</span>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}














export default Contacts;