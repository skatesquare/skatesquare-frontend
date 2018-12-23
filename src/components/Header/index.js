import React, {Component} from 'react';
import { Container, Notification, AccountDropdown } from 'tabler-react';
import { Link } from 'react-router-dom';

const accountDropdownProps = {
  avatarURL: "https://via.placeholder.com/50x50",
  name: "Goos van den Bekerom",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile", to: "/profile" },
    { icon: "settings", value: "Settings", to: "/settings" },
    "divider",
    "help",
    "logout",
  ],
}

class Header extends Component {
  state = {
    notifications: [
      {
        unread: true,
        avatarURL: "https://via.placeholder.com/50x50",
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: "10 minutes ago",
      },
      {
        unread: true,
        avatarURL: "https://via.placeholder.com/50x50",
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: "1 hour ago",
      },
      {
        unread: false,
        avatarURL: "https://via.placeholder.com/50x50",
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: "2 hours ago",
      },
    ],
  }

  render() {
    const notifications = this.state.notifications || [];
    const onMarkAllAsRead = () => this.setState(
      () => ({
        notifications: this.state.notifications.map(
          v => ({...v, unread: false})
        )
      })
    );
    const unreadCount = this.state.notifications.reduce(
      (a, v) => a || v.unread,
      false
    );

    return (
        <header className="header py-4">
            <Container>
              <div className="d-flex">
                
                <Link to="/" className="header-brand">
                  <img src="logo.png" className="header-brand-img" alt="Skatesquare" />
                </Link>

                <div className="d-flex order-lg-2 ml-auto">
                  <Notification.Tray
                    notificationsObjects={notifications}
                    markAllAsRead={onMarkAllAsRead}
                    unread={unreadCount}
                  ></Notification.Tray>
                  <AccountDropdown {...accountDropdownProps}></AccountDropdown>
                </div>
              </div>
            </Container>
        </header>
    );
  }
}

export default Header;