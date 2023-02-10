import React from 'react';
import  "./transition-references.scss";
import {ReactSVG} from 'react-svg';
import {useSelector} from 'react-redux';

export const TransitionReferences = ()=>{
    const mainLink = useSelector(state=>state.data.breadcrumbs[0].link);
    const mainLinkTitle = useSelector(state=>state.data.breadcrumbs[0].title);
    const contestLinkTitle = useSelector(state=>state.data.breadcrumbs[1].title);
  return (
    <section className={"switching-arrow"}>
      <a href={mainLink}><span className={"go-out"}>{mainLinkTitle}</span></a>
      <ReactSVG className={"slash-between"}  src={"/icons/contest-icons/slash.svg"}/>
      <span><span className={"current"}>{contestLinkTitle}</span></span>
    </section>
  )
}
