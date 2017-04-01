import { NAVBAR_TRANSPARENT } from './action-types';

export function setNavBarBackground(isNavBarTransparent) {
    return {
        type: NAVBAR_TRANSPARENT,
        payload: isNavBarTransparent
    }
}