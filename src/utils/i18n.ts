import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import English translation files
import enProductHighlights1 from "../locales/en/products/1/5gH.json"
import enProductHighlights2 from "../locales/en/products/2/Charging-Stations1H.json"
import enProductHighlights3 from "../locales/en/products/3/Charging-Stations2H.json"
import enProductHighlights4 from "../locales/en/products/4/Charging-Stations3H.json"
import enProductHighlights6 from "../locales/en/products/6/FuelCellsH.json"
import enProductHighlights7 from "../locales/en/products/7/MPX-ContainerH.json"
import enProductHighlights8 from "../locales/en/products/8/mpx110H.json"
import enProductHighlights9 from "../locales/en/products/9/mpx200H.json"
import enProductHighlights10 from "../locales/en/products/10/mpx1000H.json"
import enProductHighlights11 from "../locales/en/products/11/SolarPH.json"
import enProductHighlights12 from "../locales/en/products/12/SolarParkH.json"

import enChargingStations1 from '../locales/en/products/2/Charging-Stations1.json';
import enChargingStations2 from '../locales/en/products/3/Charging-Stations2.json';
import enChargingStations3 from '../locales/en/products/4/Charging-Stations3.json';
import en5g from '../locales/en/products/1/5G.json';

import enProductMpxC from '../locales/en/products/7/MPX-Container.json';
import enProductMpx1000X from '../locales/en/products/10/MPX1000.json';
import enProductMpx200 from '../locales/en/products/9/MPX200.json';
import enProductMpx110 from '../locales/en/products/8/MPX110.json';
import enProductFuelCells from '../locales/en/products/6/FuelCells.json';

import enHomePage from '../locales/en/pages/HomePage.json';
import enAboutUsPage from '../locales/en/pages/AboutUsPage.json';
import enContactUsForm from '../locales/en/pages/ContactUsPage.json';
import enSolution from '../locales/en/components/solution.json';
import enTurnKeyService from '../locales/en/components/turnkey.json';
import enCarousel from '../locales/en/components/carousel.json';
import enFooter from '../locales/en/components/footer.json';
import enNavBar from '../locales/en/components/navbar.json';
import enAboutUsAcc from '../locales/en/components/aboutUsAcc.json';
import enCard from '../locales/en/components/card.json';
import enImpressumModal from '../locales/en/components/impressumModal.json';
import enPrivacyPolicyModal from '../locales/en/components/privacyPolicyModal.json';


// Import Arabic translation files
import arProductHighlights1 from "../locales/ar/products/1/5gH.json"
import arProductHighlights2 from "../locales/ar/products/2/Charging-Stations1H.json"
import arProductHighlights3 from "../locales/ar/products/3/Charging-Stations2H.json"
import arProductHighlights4 from "../locales/ar/products/4/Charging-Stations3H.json"
import arProductHighlights6 from "../locales/ar/products/6/FuelCellsH.json"
import arProductHighlights7 from "../locales/ar/products/7/MPX-ContainerH.json"
import arProductHighlights8 from "../locales/ar/products/8/mpx110H.json"
import arProductHighlights9 from "../locales/ar/products/9/mpx200H.json"
import arProductHighlights10 from "../locales/ar/products/10/mpx1000H.json"
import arProductHighlights11 from "../locales/ar/products/11/SolarPH.json"
import arProductHighlights12 from "../locales/ar/products/12/SolarParkH.json"

import arChargingStations1 from '../locales/ar/products/2/Charging-Stations1.json';
import arChargingStations2 from '../locales/ar/products/3/Charging-Stations2.json';
import arChargingStations3 from '../locales/ar/products/4/Charging-Stations3.json';
import ar5g from '../locales/ar/products/1/5G.json';
import arProductMpxC from '../locales/ar/products/7/MPX-Container.json';
import arProductMpx1000X from '../locales/ar/products/10/MPX1000.json';
import arProductMpx200 from '../locales/ar/products/9/MPX200.json';
import arProductMpx110 from '../locales/ar/products/8/MPX110.json';
import arProductFuelCells from '../locales/ar/products/6/FuelCells.json';

import arHomePage from '../locales/ar/pages/HomePage.json';
import arAboutUsPage from '../locales/ar/pages/AboutUsPage.json';
import arContactUsForm from '../locales/ar/pages/ContactUsPage.json';
import arSolution from '../locales/ar/components/solution.json';
import arTurnKeyService from '../locales/ar/components/turnkey.json';
import arCarousel from '../locales/ar/components/carousel.json';
import arFooter from '../locales/ar/components/footer.json';
import arNavBar from '../locales/ar/components/navbar.json';
import arAboutUsAcc from '../locales/ar/components/aboutUsAcc.json';
import arCard from '../locales/ar/components/card.json';
import arImpressumModal from '../locales/ar/components/impressumModal.json';
import arPrivacyPolicyModal from '../locales/ar/components/privacyPolicyModal.json';


// Initialize i18next
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {

        'pages-ProductHighlights1': enProductHighlights1,
        'pages-ProductHighlights2': enProductHighlights2,
        'pages-ProductHighlights3': enProductHighlights3,
        'pages-ProductHighlights4': enProductHighlights4,
        'pages-ProductHighlights6': enProductHighlights6,
        'pages-ProductHighlights7': enProductHighlights7,
        'pages-ProductHighlights8': enProductHighlights8,
        'pages-ProductHighlights9': enProductHighlights9,
        'pages-ProductHighlights10': enProductHighlights10,
        'pages-ProductHighlights11': enProductHighlights11,
        'pages-ProductHighlights12': enProductHighlights12,
        'pages-ChargingStations1': enChargingStations1,
        'pages-ChargingStations2': enChargingStations2,
        'pages-ChargingStations3': enChargingStations3,
        'pages-5g': en5g,
        'pages-ProductMpxC': enProductMpxC,
        'pages-ProductMpx1000X': enProductMpx1000X,
        'pages-ProductMpx200': enProductMpx200,
        'pages-ProductMpx110': enProductMpx110,
        'pages-ProductFuelCells': enProductFuelCells,
        'pages-HomePage': enHomePage,
        'pages-AboutUsPage': enAboutUsPage,
        'pages-ContactUsForm': enContactUsForm,
        'pages-Solution': enSolution,
        'pages-TurnKeyService': enTurnKeyService,
        'pages-Carousel': enCarousel,
        'pages-Footer': enFooter,
        'pages-NavBar': enNavBar,
        'components-aboutUsAcc': enAboutUsAcc,
        'components-Card': enCard,
        'components-ImpressumModal': enImpressumModal,
        'components-PrivacyPolicyModal': enPrivacyPolicyModal

      },
      ar: {
        'pages-ProductHighlights1': arProductHighlights1,
        'pages-ProductHighlights2': arProductHighlights2,
        'pages-ProductHighlights3': arProductHighlights3,
        'pages-ProductHighlights4': arProductHighlights4,
        'pages-ProductHighlights6': arProductHighlights6,
        'pages-ProductHighlights7': arProductHighlights7,
        'pages-ProductHighlights8': arProductHighlights8,
        'pages-ProductHighlights9': arProductHighlights9,
        'pages-ProductHighlights10': arProductHighlights10,
        'pages-ProductHighlights11': arProductHighlights11,
        'pages-ProductHighlights12': arProductHighlights12,
        'pages-ChargingStations1': arChargingStations1,
        'pages-ChargingStations2': arChargingStations2,
        'pages-ChargingStations3': arChargingStations3,
        'pages-5g': ar5g,
        'pages-ProductMpxC': arProductMpxC,
        'pages-ProductMpx1000X': arProductMpx1000X,
        'pages-ProductMpx200': arProductMpx200,
        'pages-ProductMpx110': arProductMpx110,
        'pages-ProductFuelCells': arProductFuelCells,
        'pages-HomePage': arHomePage,
        'pages-AboutUsPage': arAboutUsPage,
        'pages-ContactUsForm': arContactUsForm,
        'pages-Solution': arSolution,
        'pages-TurnKeyService': arTurnKeyService,
        'pages-Carousel': arCarousel,
        'pages-Footer': arFooter,
        'pages-NavBar': arNavBar,
        'components-aboutUsAcc': arAboutUsAcc,
        'components-Card': arCard,
        'components-ImpressumModal': arImpressumModal,
        'components-PrivacyPolicyModal': arPrivacyPolicyModal


      },
      // Add more languages here if needed
    },
    fallbackLng: 'en', // Fallback to English if the selected language is not available
    debug: true, // Enable debug mode for development; set to false in production
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
    ns: [
      'pages-ProductHighlights1',
      'pages-ProductHighlights2',
      'pages-ProductHighlights3',
      'pages-ProductHighlights4',
      'pages-ProductHighlights6',
      'pages-ProductHighlights7',
      'pages-ProductHighlights8',
      'pages-ProductHighlights9',
      'pages-ProductHighlights10',
      'pages-ProductHighlights11',
      'pages-ProductHighlights12',
      'pages-ChargingStations1',
      'pages-ChargingStations2',
      'pages-ChargingStations3',
      'pages-5g',
      'pages-ProductMpx1000X',
      'pages-ProductMpx200',
      'pages-ProductMpx110',
      'pages-ProductFuelCells',
      'pages-HomePage',
      'pages-AboutUsPage',
      'pages-ContactUsForm',
      'pages-Solution',
      'pages-TurnKeyService',
      'pages-Carousel',
      'pages-Footer',
      'pages-NavBar',
      'components-aboutUsAcc',
      'components-Card',
      'components-ImpressumModal',
      'components-PrivacyPolicyModal'

    ],
    defaultNS: 'pages-HomePage', // Set a default namespace, if necessary
  });

export default i18n;
