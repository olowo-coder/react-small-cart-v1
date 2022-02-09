import React from 'react'

function Header(props) {
  return (
    <header className="row block center">
        <div>
            <a href="/#">
                <h1>small-shopping-cart</h1>
            </a>
        </div>
        <div>
            <a href="#/cart">Cart</a> <a href="#/signIn">Sign in</a>
        </div>
    </header>
  );
}

export default Header;