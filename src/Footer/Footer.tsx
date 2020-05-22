import React from "react";
import s from './Footer.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import FindMeItem from "./Findme/FindMeItem";



const Footer = () => {
    return(
        <div className={s.footerBlock}>
            <div className={` ${sContainer.container}  ${s.footerContainer} `}>
                <h2 className={s.title}>Andrew Nyzhnyk</h2>
                <div className={s.findMe}>
                    <FindMeItem logo='https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png' />
                    <FindMeItem logo='https://c7.hotpng.com/preview/477/609/118/logo-computer-icons-clip-art-instagram-logo.jpg' />
                    <FindMeItem logo='https://avatanplus.com/files/resources/mid/5761ba6c7938615555c037d1.png' />
                    <FindMeItem logo='https://i.ya-webdesign.com/images/youtube-logo-png-7.png' />
                    <FindMeItem logo='https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png' />
                    <FindMeItem logo='https://p7.hiclipart.com/preview/647/947/623/viber-icon-skype-whatsapp-viber-logo-png.jpg' />
                    <FindMeItem logo='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                </div>
                <span>2020@ All rights reserved</span>
            </div>
        </div>
    )
}



export default Footer;