/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import toPrecisedFloat from 'utils/toPrecisedFloat';
import { useStore } from 'hooks';
import CropPresetItem from './CropPresetItem';
import { StyledAccordion } from './Crop.styled';

const CropPresetGroup = ({
  groupTitleKey,
  items,
  onItemSelect,
  t,
  isExpanded,
  setExpandedGroup,
}) => {
  const {
    adjustments: {
      crop: { ratio: currentRatio, ratioGroupKey, ratioTitleKey },
    },
  } = useStore();

  const toggleExpand = () => {
    setExpandedGroup(isExpanded ? null : groupTitleKey);
  };

  const onItemSelectFromGroup = (e, newRatio, cropProps) => {
    onItemSelect(e, newRatio, {
      ...cropProps,
      ratioGroupKey: groupTitleKey,
    });
  };

  return (
    <StyledAccordion
      label={t(groupTitleKey)}
      onChange={toggleExpand}
      expanded={isExpanded}
    >
      {items.map(
        ({
          titleKey,
          ratio,
          width,
          height,
          descriptionKey,
          icon,
          disableManualResize,
        }) => {
          const newRatio = ratio ?? toPrecisedFloat(width / height);

          return (
            <CropPresetItem
              key={titleKey}
              titleKey={titleKey}
              t={t}
              description={t(descriptionKey)}
              size="sm"
              onClick={onItemSelectFromGroup}
              width={width}
              height={height}
              ratio={newRatio}
              Icon={icon}
              disableManualResize={disableManualResize}
              isActive={
                currentRatio === newRatio &&
                ratioTitleKey === titleKey &&
                ratioGroupKey === groupTitleKey
              }
            />
          );
        },
      )}
    </StyledAccordion>
  );
};

CropPresetGroup.propTypes = {
  groupTitleKey: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  onItemSelect: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setExpandedGroup: PropTypes.func.isRequired,
};

export default CropPresetGroup;
