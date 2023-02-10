import React from 'react';
import  "./transition-references.scss";
import {ReactSVG} from 'react-svg';

export const TransitionReferences = ()=>{

  return (
    <section className={"switching-arrow"}>
      <a href="/"><span className={"go-out"}>Главная</span></a>
      <ReactSVG className={"slash-between"}  src={"/icons/contest-icons/slash.svg"}/>
      <a href="/"><span className={"go-out"}>Конкурс</span></a>
      <ReactSVG className={"slash-between"}  src={"/icons/contest-icons/slash.svg"}/>
      <span><span className={"current"}>Условия</span></span>
    </section>
  )
}
