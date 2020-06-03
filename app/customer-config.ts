import config from './config.json';
​
const COMPANY = config.THEME;
 
let PDF_THEME;
switch (COMPANY) {
  case 'nitro':
    PDF_THEME = 'NITRO_SIBIR';
    break;
  case 'hydra':
    PDF_THEME = 'HYDRA';
    break;
  case 'axxis':
    PDF_THEME = 'AXXIS';
    break;
  case 'bickford':
    PDF_THEME = 'BICKFORD';
    break;
}


let templateItemDe;
switch (COMPANY) {
  case 'nitro':
    templateItemDe = 'tem_de_001';
    break;
  case 'hydra':
    templateItemDe = 'tem_de_001';
    break;
  case 'axxis':
    templateItemDe = 'tem_de_002';
    break;
    case 'bickford':
    templateItemDe = 'tem_de_001';
}

let templateItemOv;
switch (COMPANY) {
  case 'nitro':
    templateItemOv = 'tem_ov_001';
    break;
  case 'hydra':
    templateItemOv = 'tem_ov_001';
    break;
  case 'axxis':
    templateItemOv = 'tem_ov_002';
    break;
    case 'bickford':
      templateItemOv = 'tem_ov_001';
}

const nitroColorsSet = {
  primaryColor: '#ae9962',
  secondaryColor: '#c8c6c6',
  primaryText: '#fff',
  secondaryText: '#000',
  disabled: '#65666a',
  backgroundMain: '#282c2f',
  backgroundContrast: '#3d4144',
  error: '#f44336',
  lightBorders: '#808080',
};
​
const hydraColorsSet = {
  primaryColor: '#ac2296',
  secondaryColor: '#c8c6c6',
  primaryText: '#fff',
  secondaryText: '#000',
  disabled: '#65666a',
  backgroundMain: '#282c2f',
  backgroundContrast: '#3d4144',
  error: '#f44336',
  lightBorders: '#808080',
};
​
const axxisColorsSet = {
  primaryColor: '#fccf0b',
  secondaryColor: '#c8c6c6',
  primaryText: '#fff',
  secondaryText: '#000',
  disabled: '#65666a',
  backgroundMain: '#282c2f',
  backgroundContrast: '#3d4144',
  error: '#f44336',
  lightBorders: '#808080',
};

const bickfordColorsSet = {
  primaryColor: '#da291c',
  secondaryColor: '#c8c6c6',
  primaryText: '#fff',
  secondaryText: '#000',
  disabled: '#65666a',
  backgroundMain: '#282c2f',
  backgroundContrast: '#3d4144',
  error: '#f44336',
  lightBorders: '#808080',
};
​

let colorsSet;
switch (COMPANY) {
  case 'nitro':
    colorsSet = nitroColorsSet;
    break;
  case 'hydra':
    colorsSet = hydraColorsSet;
    break;
  case 'axxis':
    colorsSet = axxisColorsSet;
    break;
  case 'bickford':
    colorsSet = bickfordColorsSet;
    break;
}
​

​
let controlUnit;
switch (COMPANY) {
  case 'nitro':
    controlUnit = 'NSC';
    break;
  case 'hydra':
    controlUnit = 'HCC';
    break;
  case 'axxis':
    controlUnit = 'CBB';
    break;
  case 'bickford':
    controlUnit = 'HCC';
    break;
}

let blasterUnit;
switch (COMPANY) {
  case 'nitro':
    blasterUnit = 'NSB';
    break;
  case 'hydra':
    blasterUnit = 'HCB-1';
    break;
  case 'axxis':
    blasterUnit = 'CBB';
    break;
  case 'bickford':
    blasterUnit = 'HCB';
    break;
}

​
const namings = { controlUnit, blasterUnit };
​
export { colorsSet, namings, PDF_THEME, templateItemDe, templateItemOv};