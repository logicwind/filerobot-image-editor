/** External Dependencies */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Undo from '@scaleflex/icons/undo';

/** Internal Dependencies */
import { UNDO } from 'actions';
import { useStore } from 'hooks';
import { StyledHistoryButton } from './Topbar.styled';

const UndoButton = ({ margin, showBackButton }) => {
  const { dispatch, hasUndo = false, t, feedback } = useStore();
  const isBlockerError = feedback.duration === 0;
  const dispatchUndo = useCallback(() => {
    dispatch({ type: UNDO });
  }, []);

  return (
    <StyledHistoryButton
      className="FIE_topbar-undo-button"
      color="basic"
      size="sm"
      onClick={hasUndo ? dispatchUndo : undefined}
      disabled={!hasUndo || isBlockerError}
      showBackButton={showBackButton}
      title={t('undoTitle')}
      margin={margin}
    >
      <Undo />
    </StyledHistoryButton>
  );
};

UndoButton.defaultProps = {
  margin: undefined,
  showBackButton: false,
};

UndoButton.propTypes = {
  margin: PropTypes.string,
  showBackButton: PropTypes.bool,
};

export default UndoButton;
