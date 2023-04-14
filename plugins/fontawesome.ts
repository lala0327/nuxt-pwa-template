// For Nuxt 3
import { library } from "@fortawesome/fontawesome-svg-core";

import { 
  faBookOpen, 
  faHouse, 
  faList, 
  faBell, 
  faGear, 
  faMagnifyingGlass, 
  faAngleRight, 
  faCircleCheck, 
  faInfoCircle, 
  faExclamationCircle, 
  faTimesCircle, 
  faCheck, 
  faTimes, 
  faArrowUpFromBracket, 
  faEye, 
  faEyeSlash, 
  faPlane, 
  faHotel, 
  faUtensils, 
  faBasketShopping, 
  faMountainSun 
} from "@fortawesome/free-solid-svg-icons";

import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import { faFacebook, faGoogle, faLine } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBookOpen, faHouse, faList, faBell, faGear, faMagnifyingGlass, faAngleRight, faCircleCheck, faInfoCircle, faExclamationCircle, faTimesCircle, faCheck, faTimes, faArrowUpFromBracket, faEye, faEyeSlash, faPlane, faHotel, faUtensils, faBasketShopping, faMountainSun, faSun, faMoon, faFacebook, faGoogle, faLine
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
