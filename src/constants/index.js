export const isHTTPS = window.location.protocol === 'https:';

const httpUrl = 'http://dev1-sample.azurewebsites.net/properties.json';
const httpsUrl = 'https://dev1-sample.azurewebsites.net/properties.json';

export const reqUrl = isHTTPS ? httpsUrl : httpUrl;

export const RoofstockTheme = {
  grayPrimary: '#767676',
  grayPrimaryLight: '#DBDBDB',
  purplePrimary: '#7B72D6',
  orangePrimary: '#FF7B0F',
};
