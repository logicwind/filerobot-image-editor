/** External Dependencies */
import styled from 'styled-components';
import Button from '@scaleflex/ui/core/button';
import IconButton from '@scaleflex/ui/core/icon-button';
import Label from '@scaleflex/ui/core/label';
import { CrossButton, InputGroup, SelectGroup } from '@scaleflex/ui/core';
import { Color as PC } from '@scaleflex/ui/utils/types/palette';
import { FontVariant as FV } from '@scaleflex/ui/utils/types/typography';

const StyledTopbar = styled.div`
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ theme: { palette } }) => palette[PC.BordersSecondary]};

  [data-phone='true'] & {
    padding: 6px 6px 4px 6px;
  }

  .FIE_topbar-history-buttons {
    order: 3;
  }

  .FIE_topbar-center-options {
    display: block;
    width: 100%;
    order: 4;
  }

  @media (min-width: 760px) {
    .FIE_tabs_toggle_btn {
      display: none;
    }

    .FIE_topbar-center-options {
      display: flex;
      width: fit-content;
    }

    .FIE_topbar-center-options {
      order: 2;
    }
  }
`;

const StyledHistoryButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  order: 1;
`;

const StyledHistoryButton = styled(IconButton)`
  margin: ${({ margin }) => margin ?? '0 4px'};

  svg {
    color: ${({ theme: { palette }, showBackButton }) =>
      showBackButton ? palette[PC.IconsPrimary] : palette[PC.IconsMuted]};
  }
`;

const StyledZoomingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const StyledDimensionsLabel = styled(Label)`
  flex-shrink: 0;
  color: ${({ theme: { palette } }) => palette[PC.TextPlaceholder]};
  ${({ theme: { typography } }) => typography.font[FV.LabelMedium]};
`;

const StyledSmallButton = styled(IconButton)`
  padding: 9px;

  svg {
    color: ${({ theme: { palette }, showBackButton }) =>
      showBackButton ? palette[PC.IconsPrimary] : palette[PC.IconsMuted]};
  }
`;

const StyledFlexCenterAlignedContainer = styled.div`
  width: ${({ showBackButton }) => (showBackButton ? '318px' : '384px')};
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  order: 2;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};
`;

const StyledZoomPercentageLabel = styled(Label)`
  cursor: pointer;
  color: ${({ theme: { palette } }) => palette[PC.TextPrimary]};
  ${({ theme: { typography } }) => typography.font[FV.InputMd]};
`;

const StyledBackButtonLabel = styled.span`
  ${({ theme: { typography } }) => typography.font[FV.ButtonMdEmphasis]};
`;

const StyledCloseButton = styled(CrossButton)`
  padding: 9px 0 9px 9px;
  z-index: 111;
`;

const StyledSaveButton = styled(Button)`
  padding: 4px 12px;
`;

const StyledFileNameInput = styled(InputGroup)``;

const StyledFileExtensionSelect = styled(SelectGroup)`
  margin-top: 16px;
`;

const StyledQualityWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const StyledResizeOnSave = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const StyledHistoryButtons = styled.div`
  display: flex;
  gap: 6px;
`;

const StyledZoomingButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButton,
  StyledZoomingWrapper,
  StyledSmallButton,
  StyledZoomPercentageLabel,
  StyledBackButtonLabel,
  StyledCloseButton,
  StyledSaveButton,
  StyledFileNameInput,
  StyledFileExtensionSelect,
  StyledQualityWrapper,
  StyledResizeOnSave,
  StyledDimensionsLabel,
  StyledHistoryButtonsWrapper,
  StyledHistoryButtons,
  StyledZoomingButtons,
};
