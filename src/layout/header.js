import React from "react";


const Header = () => {
  const { Header } = Layout;
  return (
    <Affix>
      <Header className="header">
        <div className="header-content">
          <div className="header-welcome">
            Welcome {' '}
          </div>
          <div className="header-bell">
            <span className="header-user">{'ss'}</span>
          </div>
        </div>
      </Header>
    </Affix>
  )
}

export default Header;
