import * as constants from './constants';

export const showSideShare = (booleanValue) => ({
    type: constants.SHOW_SIDE_SHARE,
    booleanValue: booleanValue
});