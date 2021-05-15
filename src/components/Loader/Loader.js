import Spinner from 'react-spinners/BeatLoader';
import React from 'react';

import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.spinner}>
      <Spinner size={40} />
    </div>
  );
}
