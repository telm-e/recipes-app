import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function ShareButton({ path }) {
  const [copyMessage, setCopyMessage] = useState(false);

  return (
    <div>
      <button
        onClick={ () => {
          setCopyMessage('Link copied!');
          navigator.clipboard.writeText(`http://localhost:3000${path}`);
          const MESSAGE_DURATION = 1500;
          setTimeout(() => {
            setCopyMessage();
          }, MESSAGE_DURATION);
        } }
        type="button"
        data-testid="share-btn"
      >
        { copyMessage }
        {
          !copyMessage && <img src={ shareIcon } alt="share button" />
        }
      </button>

    </div>
  );
}

ShareButton.propTypes = {
  path: PropTypes.string.isRequired,
};
