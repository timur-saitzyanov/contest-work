import React from 'react';
import "./archive-link-mobile.scss";
import {ReactSVG} from 'react-svg';
import {useSelector} from 'react-redux';
export const ArchiveLinkMobile = ({countArchiveWork})=>{
  const archiveLink = useSelector(state=>state.data.resources.archive);
  return (
    <a href={archiveLink} className={"archive-link-mobile"}>
      <span className="archive-link-mobile-text">Архив конкурсных работ</span>
      <span className="count-of-archive-work">{countArchiveWork}</span>
      <ReactSVG src={"/icons/contest-icons/arrow-archive-ico.svg"}/>
    </a>
  )
}
