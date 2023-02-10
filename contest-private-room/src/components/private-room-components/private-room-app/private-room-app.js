import React from 'react';
import "./private-room.scss";
import UserAvatar from "../user-avatar/user-avatar";
import UserName from '../user-name/user-name';
import ChangeProfileLink from '../change-profile-link/change-profile-link';
import WrapperTextLinkConstructor from '../wrapper-text-link-constructor/wrapper-text-link-constructor';
import TextLinkConstructor from '../text-link-constructor/text-link-constructor';

const PrivateRoomApp = ()=>{
  return (
    <aside className="main-contest-my-works-personal-profile-aside">
      <UserAvatar />
      <UserName firstName={"Апполинария"} lastName={"Сергеева"}/>
      <ChangeProfileLink text={"Изменить профиль"}/>
      <WrapperTextLinkConstructor>
        <TextLinkConstructor textLink={"Главная"}/>
        <TextLinkConstructor textLink={"История заказов"}/>
        <TextLinkConstructor textLink={"Отслеживание заказов"} linkNumber={9}/>
        <TextLinkConstructor textLink={"Скидка"} linkSale={4}/>
        <TextLinkConstructor textLink={"Бонусные баллы"}/>
        <TextLinkConstructor textLink={"Мои конкурсные работы"} isActive="true"/>
        <TextLinkConstructor textLink={"Партнерская программа"}/>
      </WrapperTextLinkConstructor>
      <TextLinkConstructor textLink={"Выйти"} iconBefore="true"/>
    </aside>
  )
}
export default PrivateRoomApp;
