import { NAVBAR_TRANSPARENT, HOME_PAGE } from './action-types';

export function setNavBarTransparent(isNavBarTransparent) {
    return {
        type: NAVBAR_TRANSPARENT,
        payload: isNavBarTransparent
    }
}

export function setHomePage(isHome) {
    return {
        type: HOME_PAGE,
        payload: isHome
    }
}