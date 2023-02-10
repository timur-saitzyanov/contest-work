import React from 'react';
import "./archive-link-mobile.scss";
import {ReactSVG} from 'react-svg';
export const ArchiveLinkMobile = ({countArchiveWork})=>{
  return (
    <a href={""} className={"archive-link-mobile"}>
      <span className="archive-link-mobile-text">Архив конкурсных работ</span>
      <span className="count-of-archive-work">{countArchiveWork}</span>
      <ReactSVG src={"/icons/contest-icons/arrow-archive-ico.svg"}/>
    </a>
  )
}
