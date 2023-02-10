import React from 'react';
import "./text-link-constructor.scss";

const TextLinkConstructor = ({textLink, linkNumber=null,linkSale=null, isActive=false,iconBefore=false})=> {
  let profileItemLinkNumberClass  = "profile-item-link-number";
  let profileItemLinkSaleClass  = "profile-item-link-sale";
  let iconBeforeClass = "main-contest-my-works-personal-profile-aside-icon-exit";
  let liClass = "main-contest-my-works-personal-profile-aside__profile-item";
if (!linkNumber){
  profileItemLinkNumberClass += " hide-element";
}if (!linkSale){
  profileItemLinkSaleClass += " hide-element";
}if (!iconBefore){
  iconBeforeClass += " hide-element";
}
if (isActive){
    liClass += " main-contest-my-works-personal-profile-aside__profile-item--active";
}

  return (
    <li className={liClass}>
      <a href="#" className="main-contest-my-works-personal-profile-aside__profile-item-link">
        <svg className={iconBeforeClass} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.08203 6.07095V3.14258C1.08203 2.03801 1.97746 1.14258 3.08203 1.14258H16.3584C17.463 1.14258 18.3584 2.03801 18.3584 3.14258V16.4189C18.3584 17.5235 17.463 18.4189 16.3584 18.4189H3.08203C1.97746 18.4189 1.08203 17.5235 1.08203 16.4189V12.8685" stroke="#333333" strokeLinecap="round"></path>
          <path d="M1.28273 9.28076C1.00658 9.28076 0.782726 9.50462 0.782727 9.78076C0.782728 10.0569 1.00659 10.2808 1.28273 10.2808L1.28273 9.28076ZM12.75 10.1343C12.9453 9.939 12.9453 9.62242 12.75 9.42716L9.56804 6.24519C9.37278 6.04993 9.0562 6.04993 8.86094 6.2452C8.66567 6.44046 8.66568 6.75704 8.86094 6.9523L11.6894 9.78072L8.86096 12.6092C8.6657 12.8044 8.6657 13.121 8.86097 13.3163C9.05623 13.5115 9.37281 13.5115 9.56807 13.3163L12.75 10.1343ZM1.28273 10.2808L12.3965 10.2807L12.3965 9.28071L1.28273 9.28076L1.28273 10.2808Z" fill="#333333"></path>
        </svg>
        {textLink}
        <span className={profileItemLinkNumberClass}>{linkNumber}</span>
        <span className={profileItemLinkSaleClass}>{linkSale+"%"}</span>
      </a>
    </li>
  )
}
export default TextLinkConstructor;
