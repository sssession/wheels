define([
    'react'
], function (React) {
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
                            <nav>
                                <ul>
                                    <li className="active">
                                        <a href="#">
                                            <i className="fa fa-home"></i>
                                            Dashboard</a>
                                    </li>
                                    <li>Reports</li>
                                </ul>
                            </nav>
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