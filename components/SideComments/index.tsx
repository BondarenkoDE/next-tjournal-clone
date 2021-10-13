import React, { useState } from 'react';
import { CommentItem } from './CommentItem';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import data from '../../../data';

import styles from './SideComments.module.scss';
import clsx from 'clsx';

export const SideComments = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div onClick={toggleVisible} className={clsx(styles.root, !visible && styles.rotated)}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
