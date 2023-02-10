import React from 'react';
import './linkBack.scss';

const LinkBack = () => {
  return (
    <div className={'link-back'}>
      <a href="/profile/works">
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.10248 5.53217C0.809589 5.82506 0.809589 6.29994 1.10248 6.59283L5.87545 11.3658C6.16835 11.6587 6.64322 11.6587 6.93611 11.3658C7.22901 11.0729 7.22901 10.598 6.93611 10.3051L2.69347 6.0625L6.93611 1.81986C7.22901 1.52697 7.22901 1.05209 6.93611 0.759199C6.64322 0.466306 6.16835 0.466306 5.87545 0.759199L1.10248 5.53217ZM14.1901 5.3125H1.63281V6.8125H14.1901V5.3125Z" fill="#3F7EC9"></path>
        </svg>
        <span className="main-training-contest-work-left-side__link-text">Вернуться к конкурсным работам</span>
      </a>
    </div>
  );
};
export default LinkBack;
