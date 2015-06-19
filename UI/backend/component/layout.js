define([
    'react',
    'component/breadNav',
    'component/breadNavItem'
], function (React, BreadNav, NavItem) {
    return React.createClass({
        render: function () {
            return (
                <div>
                    <header>
                        <h1>White Label Admin</h1>
                        <ul>
                            <li>Tasks</li>
                            <li>Signup's</li>
                            <li>Messages</li>
                            <li>Logout</li>
                        </ul>
                    </header>
                    <div id="content">
                        <ul className="menu">
                            <li className="active">
                                <div className="menu-arrow"></div>
                                <a href="#">
                                    <div className="icon">
                                        <i className="fa fa-dashboard fa-3x"></i>
                                    </div>
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                        <div className="main">
                            <BreadNav>
                                <NavItem active={true} icon="home">Dashboard</NavItem>
                                <NavItem>Reports</NavItem>
                            </BreadNav>
                        </div>
                    </div>
                    <footer>
                        @ White Label Admin 2013
                    </footer>
                </div>
            );
        }
    });
});