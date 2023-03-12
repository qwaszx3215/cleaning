import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
 
      @font-face{font-family:montserrat;font-style:normal;font-weight:500;src:local('Montserrat'),url(https://fonts.cdnfonts.com/s/14883/Montserrat-Regular.woff) format('woff')}
      @font-face {
        font-family: 'Thatch';
        font-style: normal;
        font-weight: 400;
        src: local('Thatch'), url('https://fonts.cdnfonts.com/s/16124/Thatch.woff') format('woff');
    }
    
    
    
      @font-face {
        font-family: 'Rozha One';
        font-style: normal;
        font-weight: 100;
        src: local('Rozha One'), url('https://fonts.cdnfonts.com/s/15506/RozhaOne-Regular.woff') format('woff');
    }
    
      `}
  />
);

export default Fonts;
