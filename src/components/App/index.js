import React, { Component } from 'react';
import './App.css';
import AppRouter from '../AppRouter';
// import { withRouter, NavLink } from "react-router-dom";
import { Site } from 'tabler-react';

const accountDropdownProps = {
  avatarURL: "https://via.placeholder.com/50x50",
  name: "Goos van den Bekerom",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
}

class App extends Component {
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
    ]
  }

  render() {
    const notifications = this.state.notifications || [];
    const unreadCount = this.state.notifications.reduce(
      (a, v) => a || v.unread,
      false
    );
    return (
      <div>
        <Site.Header
          href="/spot"
          imageURL="logo.png"
          alt="Skatesquare"
          accountDropdown={accountDropdownProps}
          notificationsTray={{
            notificationsObjects: notifications,
            markAllAsRead: () => 
              this.setState(
                () => ({
                  notifications: this.state.notifications.map(
                    v => ({...v, unread: false})
                  )
                })
              ),
            unread: unreadCount
          }}
        />
        <AppRouter />
      </div>
    );
  }
}

export default App;
