import React from 'react';

function Header(props) {
  return (
    <header>
        <h1>{ props.title } - { props.children }</h1>
    </header>
  );
}

export default Header;
