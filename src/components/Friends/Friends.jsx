import PropTypes from 'prop-types';
import React from 'react';
import s from './Friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id} className={s.item}>
          <span
            className={
              isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
            }
          ></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

React.PropTypes = {
  fiends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
