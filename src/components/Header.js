import React from 'react'

function Header(props) {
    const {countCartItems} = props;
  return (
    <header className="row block center">
        <div>
            <a href="/#">
                <h1>small-shopping-cart</h1>
            </a>
        </div>
        <div>
            <a href="#/cart">
                Cart{' '}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):('')}
            </a>{' '}<a href="#/signIn">Sign in</a>
        </div>
    </header>
  );
}

export default Header;