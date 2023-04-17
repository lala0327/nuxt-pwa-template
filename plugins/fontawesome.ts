// For Nuxt 3
import { library } from "@fortawesome/fontawesome-svg-core";

import { 
  faCircleCheck, 
  faInfoCircle, 
  faExclamationCircle, 
  faTimesCircle, 
  faCheck, 
  faTimes, 
  faEye, 
  faEyeSlash, 
  faPlane, 
  faHotel, 
  faUtensils, 
  faBasketShopping, 
  faMountainSun,
  faAngleLeft,
  faClipboardList,
  faArrowUpFromBracket,
  faGift,
  faGear,
  faBullhorn,
  faCaretLeft,
  faCaretRight
} from "@fortawesome/free-solid-svg-icons";

// import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

// import { faFacebook, faGoogle, faLine } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircleCheck, 
  faInfoCircle, 
  faExclamationCircle, 
  faTimesCircle, 
  faCheck, 
  faTimes, 
  faEye, 
  faEyeSlash, 
  faPlane, 
  faHotel, 
  faUtensils, 
  faBasketShopping, 
  faMountainSun,
  faAngleLeft,
  faClipboardList,
  faArrowUpFromBracket,
  faGift,
  faGear,
  faBullhorn,
  faCaretLeft,
  faCaretRight
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
