import React from 'react';
import "./archive-link.scss";
import {useSelector} from 'react-redux';

export const ArchiveLink = ()=>{
    const archiveLink = useSelector(state=>state.data.resources.archive);
  return (
    <a className={"archive-link"} href={archiveLink}><span className={"archive-link-text"}>Архив работ</span></a>
  )
}
