import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import defaultProfile from '../../images/defaultProfile.jpg';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.defaultProps = {
  avatar: defaultProfile,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
