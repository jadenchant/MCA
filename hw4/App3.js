node_modules/
.expo/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/

# macOS
.DS_Store
import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let image_style = {
      width: 193, 
      height: 110
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", 
                     alignItems: "center" }}>
        <Text>My picture!!</Text>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={image_style}/>
      </View>
    );
  }
}{
  "expo": {
    "name": "WS11C",
    "slug": "WS11C",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
{
  "name": "WS11C",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "dependencies": {
        "expo": "~42.0.1",
        "expo-status-bar": "~1.0.4",
        "react": "16.13.1",
        "react-dom": "16.13.1",
        "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
        "react-native-web": "~0.13.12"
      },
      "devDependencies": {
        "@babel/core": "^7.9.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.15.8.tgz",
      "integrity": "sha512-2IAnmn8zbvC/jKYhq5Ki9I+DwjlrtMPUCH/CpHvqI4dNnlwHwsxoIhlc8WcYY5LSYknXQtAlFYuHfqAFCvQ4Wg==",
      "dependencies": {
        "@babel/highlight": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.15.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.15.0.tgz",
      "integrity": "sha512-0NqAC1IJE0S0+lL1SWFMxMkz1pKCNCjI4tr2Zx4LJSXxCLAdr6KyArnY+sno5m3yH9g737ygOyPABDsnXkpxiA==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.15.8.tgz",
      "integrity": "sha512-3UG9dsxvYBMYwRv+gS41WKHno4K60/9GPy1CJaH6xy3Elq8CTtvtjT5R5jmNhXfCYLX2mTw+7/aq5ak/gOE0og==",
      "dependencies": {
        "@babel/code-frame": "^7.15.8",
        "@babel/generator": "^7.15.8",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-module-transforms": "^7.15.8",
        "@babel/helpers": "^7.15.4",
        "@babel/parser": "^7.15.8",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.6",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.15.8.tgz",
      "integrity": "sha512-ECmAKstXbp1cvpTTZciZCgfOt6iN64lR0d+euv3UZisU5awfRawOvg07Utn/qBGuH4bRIEZKrA/4LzZyXhZr8g==",
      "dependencies": {
        "@babel/types": "^7.15.6",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-annotate-as-pure": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.15.4.tgz",
      "integrity": "sha512-QwrtdNvUNsPCj2lfNQacsGSQvGX8ee1ttrBrcozUP2Sv/jylewBP/8QFe6ZkBsC8T/GYWonNAWJV4aRR9AL2DA==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.15.4.tgz",
      "integrity": "sha512-P8o7JP2Mzi0SdC6eWr1zF+AEYvrsZa7GSY1lTayjF5XJhVH0kjLYUZPvTMflP7tBgZoe9gIhTa60QwFpqh/E0Q==",
      "dependencies": {
        "@babel/helper-explode-assignable-expression": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.15.4.tgz",
      "integrity": "sha512-rMWPCirulnPSe4d+gwdWXLfAXTTBj8M3guAf5xFQJ0nvFY7tfNAFnWdqaHegHlgDZOCT4qvhF3BYlSJag8yhqQ==",
      "dependencies": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-validator-option": "^7.14.5",
        "browserslist": "^4.16.6",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-class-features-plugin": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.15.4.tgz",
      "integrity": "sha512-7ZmzFi+DwJx6A7mHRwbuucEYpyBwmh2Ca0RvI6z2+WLZYCqV0JOaLb+u0zbtmDicebgKBZgqbYfLaKNqSgv5Pw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-member-expression-to-functions": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-create-regexp-features-plugin": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.5.tgz",
      "integrity": "sha512-TLawwqpOErY2HhWbGJ2nZT5wSkR192QpN+nBg1THfBfftrlvOh+WbhrxXCH4q4xJ9Gl16BGPR/48JA+Ryiho/A==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.14.5",
        "regexpu-core": "^4.7.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-define-polyfill-provider": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.3.tgz",
      "integrity": "sha512-RH3QDAfRMzj7+0Nqu5oqgO5q9mFtQEVvCRsi8qCEfzLR9p2BHfn5FzhSB2oj1fF7I2+DcTORkYaQ6aTR9Cofew==",
      "dependencies": {
        "@babel/helper-compilation-targets": "^7.13.0",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/traverse": "^7.13.0",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2",
        "semver": "^6.1.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.4.0-0"
      }
    },
    "node_modules/@babel/helper-explode-assignable-expression": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.15.4.tgz",
      "integrity": "sha512-J14f/vq8+hdC2KoWLIQSsGrC9EFBKE4NFts8pfMpymfApds+fPqR30AOUWc4tyr56h9l/GA1Sxv2q3dLZWbQ/g==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-function-name": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.15.4.tgz",
      "integrity": "sha512-Z91cOMM4DseLIGOnog+Z8OI6YseR9bua+HpvLAQ2XayUGU+neTtX+97caALaLdyu53I/fjhbeCnWnRH1O3jFOw==",
      "dependencies": {
        "@babel/helper-get-function-arity": "^7.15.4",
        "@babel/template": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-get-function-arity": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.15.4.tgz",
      "integrity": "sha512-1/AlxSF92CmGZzHnC515hm4SirTxtpDnLEJ0UyEMgTMZN+6bxXKg04dKhiRx5Enel+SUA1G1t5Ed/yQia0efrA==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-hoist-variables": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.15.4.tgz",
      "integrity": "sha512-VTy085egb3jUGVK9ycIxQiPbquesq0HUQ+tPO0uv5mPEBZipk+5FkRKiWq5apuyTE9FUrjENB0rCf8y+n+UuhA==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-member-expression-to-functions": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.15.4.tgz",
      "integrity": "sha512-cokOMkxC/BTyNP1AlY25HuBWM32iCEsLPI4BHDpJCHHm1FU2E7dKWWIXJgQgSFiu4lp8q3bL1BIKwqkSUviqtA==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.15.4.tgz",
      "integrity": "sha512-jeAHZbzUwdW/xHgHQ3QmWR4Jg6j15q4w/gCfwZvtqOxoo5DKtLHk8Bsf4c5RZRC7NmLEs+ohkdq8jFefuvIxAA==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.15.8.tgz",
      "integrity": "sha512-DfAfA6PfpG8t4S6npwzLvTUpp0sS7JrcuaMiy1Y5645laRJIp/LiLGIBbQKaXSInK8tiGNI7FL7L8UvB8gdUZg==",
      "dependencies": {
        "@babel/helper-module-imports": "^7.15.4",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-simple-access": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "@babel/helper-validator-identifier": "^7.15.7",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-optimise-call-expression": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.15.4.tgz",
      "integrity": "sha512-E/z9rfbAOt1vDW1DR7k4SzhzotVV5+qMciWV6LaG1g4jeFrkDlJedjtV4h0i4Q/ITnUu+Pk08M7fczsB9GXBDw==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.14.5.tgz",
      "integrity": "sha512-/37qQCE3K0vvZKwoK4XU/irIJQdIfCJuhU5eKnNxpFDsOkgFaUAwbv+RYw6eYgsC0E4hS7r5KqGULUogqui0fQ==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-remap-async-to-generator": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.15.4.tgz",
      "integrity": "sha512-v53MxgvMK/HCwckJ1bZrq6dNKlmwlyRNYM6ypaRTdXWGOE2c1/SCa6dL/HimhPulGhZKw9W0QhREM583F/t0vQ==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-wrap-function": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-replace-supers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.15.4.tgz",
      "integrity": "sha512-/ztT6khaXF37MS47fufrKvIsiQkx1LBRvSJNzRqmbyeZnTwU9qBxXYLaaT/6KaxfKhjs2Wy8kG8ZdsFUuWBjzw==",
      "dependencies": {
        "@babel/helper-member-expression-to-functions": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-simple-access": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.15.4.tgz",
      "integrity": "sha512-UzazrDoIVOZZcTeHHEPYrr1MvTR/K+wgLg6MY6e1CJyaRhbibftF6fR2KU2sFRtI/nERUZR9fBd6aKgBlIBaPg==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.15.4.tgz",
      "integrity": "sha512-BMRLsdh+D1/aap19TycS4eD1qELGrCBJwzaY9IE8LrpJtJb+H7rQkPIdsfgnMtLBA6DJls7X9z93Z4U8h7xw0A==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-split-export-declaration": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.15.4.tgz",
      "integrity": "sha512-HsFqhLDZ08DxCpBdEVtKmywj6PQbwnF6HHybur0MAnkAKnlS6uHkwnmRIkElB2Owpfb4xL4NwDmDLFubueDXsw==",
      "dependencies": {
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.15.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.15.7.tgz",
      "integrity": "sha512-K4JvCtQqad9OY2+yTU8w+E82ywk/fe+ELNlt1G8z3bVGlZfn/hOcQQsUhGhW/N+tb3fxK800wLtKOE/aM0m72w==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.14.5.tgz",
      "integrity": "sha512-OX8D5eeX4XwcroVW45NMvoYaIuFI+GQpA2a8Gi+X/U/cDUIRsV37qQfF905F0htTRCREQIB4KqPeaveRJUl3Ow==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-wrap-function": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.15.4.tgz",
      "integrity": "sha512-Y2o+H/hRV5W8QhIfTpRIBwl57y8PrZt6JM3V8FOo5qarjshHItyH5lXlpMfBfmBefOqSCpKZs/6Dxqp0E/U+uw==",
      "dependencies": {
        "@babel/helper-function-name": "^7.15.4",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.15.4.tgz",
      "integrity": "sha512-V45u6dqEJ3w2rlryYYXf6i9rQ5YMNu4FLS6ngs8ikblhu2VdR1AqAd6aJjBzmf2Qzh6KOLqKHxEN9+TFbAkAVQ==",
      "dependencies": {
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/highlight": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.5.tgz",
      "integrity": "sha512-qf9u2WFWVV0MppaL877j2dBtQIDgmidgjGk5VIMw3OadXvYaXn66U1BFlH2t4+t3i+8PhedppRv+i40ABzd+gg==",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.14.5",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.15.8.tgz",
      "integrity": "sha512-BRYa3wcQnjS/nqI8Ac94pYYpJfojHVvVXJ97+IDCImX4Jc8W8Xv1+47enbruk+q1etOpsQNwnfFcNGw+gtPGxA==",
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.15.4.tgz",
      "integrity": "sha512-eBnpsl9tlhPhpI10kU06JHnrYXwg3+V6CaP2idsCXNef0aeslpqyITXQ74Vfk5uHgY7IG7XP0yIH8b42KSzHog==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.15.4",
        "@babel/plugin-proposal-optional-chaining": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.13.0"
      }
    },
    "node_modules/@babel/plugin-external-helpers": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-external-helpers/-/plugin-external-helpers-7.14.5.tgz",
      "integrity": "sha512-q/B/hLX+nDGk73Xn529d7Ar4ih17J8pNBbsXafq8oXij0XfFEA/bks+u+6q5q04zO5o/qivjzui6BqzPfYShEg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-async-generator-functions": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.15.8.tgz",
      "integrity": "sha512-2Z5F2R2ibINTc63mY7FLqGfEbmofrHU9FitJW1Q7aPaKFhiPvSq6QEt/BoWN5oME3GVyjcRuNNSRbb9LC0CSWA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-remap-async-to-generator": "^7.15.4",
        "@babel/plugin-syntax-async-generators": "^7.8.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-class-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.14.5.tgz",
      "integrity": "sha512-q/PLpv5Ko4dVc1LYMpCY7RVAAO4uk55qPwrIuJ5QJ8c6cVuAmhu7I/49JOppXL6gXf7ZHzpRVEUZdYoPLM04Gg==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-class-static-block": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.15.4.tgz",
      "integrity": "sha512-M682XWrrLNk3chXCjoPUQWOyYsB93B9z3mRyjtqqYJWDf2mfCdIYgDrA11cgNVhAQieaq6F2fn2f3wI0U4aTjA==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-class-static-block": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.12.0"
      }
    },
    "node_modules/@babel/plugin-proposal-decorators": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.15.8.tgz",
      "integrity": "sha512-5n8+xGK7YDrXF+WAORg3P7LlCCdiaAyKLZi22eP2BwTy4kJ0kFUMMDCj4nQ8YrKyNZgjhU/9eRVqONnjB3us8g==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-decorators": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-dynamic-import": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.14.5.tgz",
      "integrity": "sha512-ExjiNYc3HDN5PXJx+bwC50GIx/KKanX2HiggnIUAYedbARdImiCU4RhhHfdf0Kd7JNXGpsBBBCOm+bBVy3Gb0g==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-export-default-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-default-from/-/plugin-proposal-export-default-from-7.14.5.tgz",
      "integrity": "sha512-T8KZ5abXvKMjF6JcoXjgac3ElmXf0AWzJwi2O/42Jk+HmCky3D9+i1B7NPP1FblyceqTevKeV/9szeikFoaMDg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-export-default-from": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-export-namespace-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.14.5.tgz",
      "integrity": "sha512-g5POA32bXPMmSBu5Dx/iZGLGnKmKPc5AiY7qfZgurzrCYgIztDlHFbznSNCoQuv57YQLnQfaDi7dxCtLDIdXdA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-json-strings": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.14.5.tgz",
      "integrity": "sha512-NSq2fczJYKVRIsUJyNxrVUMhB27zb7N7pOFGQOhBKJrChbGcgEAqyZrmZswkPk18VMurEeJAaICbfm57vUeTbQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-json-strings": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.14.5.tgz",
      "integrity": "sha512-YGn2AvZAo9TwyhlLvCCWxD90Xq8xJ4aSgaX3G5D/8DW94L8aaT+dS5cSP+Z06+rCJERGSr9GxMBZ601xoc2taw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.14.5.tgz",
      "integrity": "sha512-gun/SOnMqjSb98Nkaq2rTKMwervfdAoz6NphdY0vTfuzMfryj+tDGb2n6UkDKwez+Y8PZDhE3D143v6Gepp4Hg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-numeric-separator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.14.5.tgz",
      "integrity": "sha512-yiclALKe0vyZRZE0pS6RXgjUOt87GWv6FYa5zqj15PvhOGFO69R5DusPlgK/1K5dVnCtegTiWu9UaBSrLLJJBg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-object-rest-spread": {
      "version": "7.15.6",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.15.6.tgz",
      "integrity": "sha512-qtOHo7A1Vt+O23qEAX+GdBpqaIuD3i9VRrWgCJeq7WO6H2d14EK3q11urj5Te2MAeK97nMiIdRpwd/ST4JFbNg==",
      "dependencies": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-transform-parameters": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.14.5.tgz",
      "integrity": "sha512-3Oyiixm0ur7bzO5ybNcZFlmVsygSIQgdOa7cTfOYCMY+wEPAYhZAJxi3mixKFCTCKUhQXuCTtQ1MzrpL3WT8ZQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-optional-chaining": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.14.5.tgz",
      "integrity": "sha512-ycz+VOzo2UbWNI1rQXxIuMOzrDdHGrI23fRiz/Si2R4kv2XZQ1BK8ccdHwehMKBlcH/joGW/tzrUmo67gbJHlQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.14.5",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-methods": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.14.5.tgz",
      "integrity": "sha512-838DkdUA1u+QTCplatfq4B7+1lnDa/+QMI89x5WZHBcnNv+47N8QEj2k9I2MUU9xIv8XJ4XvPCviM/Dj7Uwt9g==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-private-property-in-object": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.15.4.tgz",
      "integrity": "sha512-X0UTixkLf0PCCffxgu5/1RQyGGbgZuKoI+vXP4iSbJSYwPb7hu06omsFGBvQ9lJEvwgrxHdS8B5nbfcd8GyUNA==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.14.5.tgz",
      "integrity": "sha512-6axIeOU5LnY471KenAB9vI8I5j7NQ2d652hIYwVyRfgaZT5UpiqFKCuVXCDMSrU+3VFafnu2c5m3lrWIlr6A5Q==",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-class-static-block": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
      "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-decorators": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.14.5.tgz",
      "integrity": "sha512-c4sZMRWL4GSvP1EXy0woIP7m4jkVcEuG8R1TOZxPBPtp4FSM/kiPZub9UIs/Jrb5ZAOzvTUSGYrWsrSu1JvoPw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-export-default-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-default-from/-/plugin-syntax-export-default-from-7.14.5.tgz",
      "integrity": "sha512-snWDxjuaPEobRBnhpqEfZ8RMxDbHt8+87fiEioGuE+Uc0xAKgSD8QiuL3lF93hPVQfZFAcYwrrf+H5qUhike3Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.3"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-flow": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.14.5.tgz",
      "integrity": "sha512-9WK5ZwKCdWHxVuU13XNT6X73FGmutAXeor5lGFq6qhOFtMFUF4jkbijuyUdZZlpYq6E2hZeZf/u3959X9wsv0Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-jsx": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.14.5.tgz",
      "integrity": "sha512-ohuFIsOMXJnbOMRfX7/w7LocdR6R7whhuRD4ax8IipLcLPlZGJKkBxgHp++U4N/vKyU16/YDQr2f5seajD3jIw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.10.4"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.8.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
      "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-top-level-await": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
      "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-syntax-typescript": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.14.5.tgz",
      "integrity": "sha512-u6OXzDaIXjEstBRRoBCQ/uKQKlbuaeE5in0RvWdA4pN6AhqxTIwUsnHPU1CFZA/amYObMsuWhYfRl3Ch90HD0Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-arrow-functions": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.14.5.tgz",
      "integrity": "sha512-KOnO0l4+tD5IfOdi4x8C1XmEIRWUjNRV8wc6K2vz/3e8yAOoZZvsRXRRIF/yo/MAOFb4QjtAw9xSxMXbSMRy8A==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-async-to-generator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.14.5.tgz",
      "integrity": "sha512-szkbzQ0mNk0rpu76fzDdqSyPu0MuvpXgC+6rz5rpMb5OIRxdmHfQxrktL8CYolL2d8luMCZTR0DpIMIdL27IjA==",
      "dependencies": {
        "@babel/helper-module-imports": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-remap-async-to-generator": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoped-functions": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.14.5.tgz",
      "integrity": "sha512-dtqWqdWZ5NqBX3KzsVCWfQI3A53Ft5pWFCT2eCVUftWZgjc5DpDponbIF1+c+7cSGk2wN0YK7HGL/ezfRbpKBQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-block-scoping": {
      "version": "7.15.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.15.3.tgz",
      "integrity": "sha512-nBAzfZwZb4DkaGtOes1Up1nOAp9TDRRFw4XBzBBSG9QK7KVFmYzgj9o9sbPv7TX5ofL4Auq4wZnxCoPnI/lz2Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-classes": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.15.4.tgz",
      "integrity": "sha512-Yjvhex8GzBmmPQUvpXRPWQ9WnxXgAFuZSrqOK/eJlOGIXwvv8H3UEdUigl1gb/bnjTrln+e8bkZUYCBt/xYlBg==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "globals": "^11.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-computed-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.14.5.tgz",
      "integrity": "sha512-pWM+E4283UxaVzLb8UBXv4EIxMovU4zxT1OPnpHJcmnvyY9QbPPTKZfEj31EUvG3/EQRbYAGaYEUZ4yWOBC2xg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-destructuring": {
      "version": "7.14.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.14.7.tgz",
      "integrity": "sha512-0mDE99nK+kVh3xlc5vKwB6wnP9ecuSj+zQCa/n0voENtP/zymdT4HH6QEb65wjjcbqr1Jb/7z9Qp7TF5FtwYGw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-dotall-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.14.5.tgz",
      "integrity": "sha512-loGlnBdj02MDsFaHhAIJzh7euK89lBrGIdM9EAtHFo6xKygCUGuuWe07o1oZVk287amtW1n0808sQM99aZt3gw==",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-duplicate-keys": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.14.5.tgz",
      "integrity": "sha512-iJjbI53huKbPDAsJ8EmVmvCKeeq21bAze4fu9GBQtSLqfvzj2oRuHVx4ZkDwEhg1htQ+5OBZh/Ab0XDf5iBZ7A==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-exponentiation-operator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.14.5.tgz",
      "integrity": "sha512-jFazJhMBc9D27o9jDnIE5ZErI0R0m7PbKXVq77FFvqFbzvTMuv8jaAwLZ5PviOLSFttqKIW0/wxNSDbjLk0tYA==",
      "dependencies": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-flow-strip-types": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.14.5.tgz",
      "integrity": "sha512-KhcolBKfXbvjwI3TV7r7TkYm8oNXHNBqGOy6JDVwtecFaRoKYsUUqJdS10q0YDKW1c6aZQgO+Ys3LfGkox8pXA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-flow": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-for-of": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.15.4.tgz",
      "integrity": "sha512-DRTY9fA751AFBDh2oxydvVm4SYevs5ILTWLs6xKXps4Re/KG5nfUkr+TdHCrRWB8C69TlzVgA9b3RmGWmgN9LA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-function-name": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.14.5.tgz",
      "integrity": "sha512-vbO6kv0fIzZ1GpmGQuvbwwm+O4Cbm2NrPzwlup9+/3fdkuzo1YqOZcXw26+YUJB84Ja7j9yURWposEHLYwxUfQ==",
      "dependencies": {
        "@babel/helper-function-name": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.14.5.tgz",
      "integrity": "sha512-ql33+epql2F49bi8aHXxvLURHkxJbSmMKl9J5yHqg4PLtdE6Uc48CH1GS6TQvZ86eoB/ApZXwm7jlA+B3kra7A==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-member-expression-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.14.5.tgz",
      "integrity": "sha512-WkNXxH1VXVTKarWFqmso83xl+2V3Eo28YY5utIkbsmXoItO8Q3aZxN4BTS2k0hz9dGUloHK26mJMyQEYfkn/+Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-amd": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.14.5.tgz",
      "integrity": "sha512-3lpOU8Vxmp3roC4vzFpSdEpGUWSMsHFreTWOMMLzel2gNGfHE5UWIh/LN6ghHs2xurUp4jRFYMUIZhuFbody1g==",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-commonjs": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.15.4.tgz",
      "integrity": "sha512-qg4DPhwG8hKp4BbVDvX1s8cohM8a6Bvptu4l6Iingq5rW+yRUAhe/YRup/YcW2zCOlrysEWVhftIcKzrEZv3sA==",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-simple-access": "^7.15.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-systemjs": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.15.4.tgz",
      "integrity": "sha512-fJUnlQrl/mezMneR72CKCgtOoahqGJNVKpompKwzv3BrEXdlPspTcyxrZ1XmDTIr9PpULrgEQo3qNKp6dW7ssw==",
      "dependencies": {
        "@babel/helper-hoist-variables": "^7.15.4",
        "@babel/helper-module-transforms": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-validator-identifier": "^7.14.9",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-modules-umd": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.14.5.tgz",
      "integrity": "sha512-RfPGoagSngC06LsGUYyM9QWSXZ8MysEjDJTAea1lqRjNECE3y0qIJF/qbvJxc4oA4s99HumIMdXOrd+TdKaAAA==",
      "dependencies": {
        "@babel/helper-module-transforms": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.14.9.tgz",
      "integrity": "sha512-l666wCVYO75mlAtGFfyFwnWmIXQm3kSH0C3IRnJqWcZbWkoihyAdDhFm2ZWaxWTqvBvhVFfJjMRQ0ez4oN1yYA==",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-new-target": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.14.5.tgz",
      "integrity": "sha512-Nx054zovz6IIRWEB49RDRuXGI4Gy0GMgqG0cII9L3MxqgXz/+rgII+RU58qpo4g7tNEx1jG7rRVH4ihZoP4esQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-assign": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-assign/-/plugin-transform-object-assign-7.14.5.tgz",
      "integrity": "sha512-lvhjk4UN9xJJYB1mI5KC0/o1D5EcJXdbhVe+4fSk08D6ZN+iuAIs7LJC+71h8av9Ew4+uRq9452v9R93SFmQlQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-object-super": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.14.5.tgz",
      "integrity": "sha512-MKfOBWzK0pZIrav9z/hkRqIk/2bTv9qvxHzPQc12RcVkMOzpIKnFCNYJip00ssKWYkd8Sf5g0Wr7pqJ+cmtuFg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-replace-supers": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-parameters": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.15.4.tgz",
      "integrity": "sha512-9WB/GUTO6lvJU3XQsSr6J/WKvBC2hcs4Pew8YxZagi6GkTdniyqp8On5kqdK8MN0LMeu0mGbhPN+O049NV/9FQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-property-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.14.5.tgz",
      "integrity": "sha512-r1uilDthkgXW8Z1vJz2dKYLV1tuw2xsbrp3MrZmD99Wh9vsfKoob+JTgri5VUb/JqyKRXotlOtwgu4stIYCmnw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-display-name": {
      "version": "7.15.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.15.1.tgz",
      "integrity": "sha512-yQZ/i/pUCJAHI/LbtZr413S3VT26qNrEm0M5RRxQJA947/YNYwbZbBaXGDrq6CG5QsZycI1VIP6d7pQaBfP+8Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.14.9.tgz",
      "integrity": "sha512-30PeETvS+AeD1f58i1OVyoDlVYQhap/K20ZrMjLmmzmC2AYR/G43D4sdJAaDAqCD3MYpSWbmrz3kES158QSLjw==",
      "dependencies": {
        "@babel/helper-annotate-as-pure": "^7.14.5",
        "@babel/helper-module-imports": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-jsx": "^7.14.5",
        "@babel/types": "^7.14.9"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.14.9.tgz",
      "integrity": "sha512-Fqqu0f8zv9W+RyOnx29BX/RlEsBRANbOf5xs5oxb2aHP4FKbLXxIaVPUiCti56LAR1IixMH4EyaixhUsKqoBHw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.14.5.tgz",
      "integrity": "sha512-1TpSDnD9XR/rQ2tzunBVPThF5poaYT9GqP+of8fAtguYuI/dm2RkrMBDemsxtY0XBzvW7nXjYM0hRyKX9QYj7Q==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-regenerator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.14.5.tgz",
      "integrity": "sha512-NVIY1W3ITDP5xQl50NgTKlZ0GrotKtLna08/uGY6ErQt6VEQZXla86x/CTddm5gZdcr+5GSsvMeTmWA5Ii6pkg==",
      "dependencies": {
        "regenerator-transform": "^0.14.2"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-reserved-words": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.14.5.tgz",
      "integrity": "sha512-cv4F2rv1nD4qdexOGsRQXJrOcyb5CrgjUH9PKrrtyhSDBNWGxd0UIitjyJiWagS+EbUGjG++22mGH1Pub8D6Vg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-runtime": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.15.8.tgz",
      "integrity": "sha512-+6zsde91jMzzvkzuEA3k63zCw+tm/GvuuabkpisgbDMTPQsIMHllE3XczJFFtEHLjjhKQFZmGQVRdELetlWpVw==",
      "dependencies": {
        "@babel/helper-module-imports": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "babel-plugin-polyfill-corejs2": "^0.2.2",
        "babel-plugin-polyfill-corejs3": "^0.2.5",
        "babel-plugin-polyfill-regenerator": "^0.2.2",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-shorthand-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.14.5.tgz",
      "integrity": "sha512-xLucks6T1VmGsTB+GWK5Pl9Jl5+nRXD1uoFdA5TSO6xtiNjtXTjKkmPdFXVLGlK5A2/or/wQMKfmQ2Y0XJfn5g==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-spread": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.15.8.tgz",
      "integrity": "sha512-/daZ8s2tNaRekl9YJa9X4bzjpeRZLt122cpgFnQPLGUe61PH8zMEBmYqKkW5xF5JUEh5buEGXJoQpqBmIbpmEQ==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-sticky-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.14.5.tgz",
      "integrity": "sha512-Z7F7GyvEMzIIbwnziAZmnSNpdijdr4dWt+FJNBnBLz5mwDFkqIXU9wmBcWWad3QeJF5hMTkRe4dAq2sUZiG+8A==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-template-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.14.5.tgz",
      "integrity": "sha512-22btZeURqiepOfuy/VkFr+zStqlujWaarpMErvay7goJS6BWwdd6BY9zQyDLDa4x2S3VugxFb162IZ4m/S/+Gg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typeof-symbol": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.14.5.tgz",
      "integrity": "sha512-lXzLD30ffCWseTbMQzrvDWqljvZlHkXU+CnseMhkMNqU1sASnCsz3tSzAaH3vCUXb9PHeUb90ZT1BdFTm1xxJw==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-typescript": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.15.8.tgz",
      "integrity": "sha512-ZXIkJpbaf6/EsmjeTbiJN/yMxWPFWvlr7sEG1P95Xb4S4IBcrf2n7s/fItIhsAmOf8oSh3VJPDppO6ExfAfKRQ==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-typescript": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-escapes": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.14.5.tgz",
      "integrity": "sha512-crTo4jATEOjxj7bt9lbYXcBAM3LZaUrbP2uUdxb6WIorLmjNKSpHfIybgY4B8SRpbf8tEVIWH3Vtm7ayCrKocA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-unicode-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.14.5.tgz",
      "integrity": "sha512-UygduJpC5kHeCiRw/xDVzC+wj8VaYSoKl5JNVmbP7MadpNinAm3SvZCxZ42H37KZBKztz46YC73i9yV34d0Tzw==",
      "dependencies": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-env": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.15.8.tgz",
      "integrity": "sha512-rCC0wH8husJgY4FPbHsiYyiLxSY8oMDJH7Rl6RQMknbN9oDDHhM9RDFvnGM2MgkbUJzSQB4gtuwygY5mCqGSsA==",
      "dependencies": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-validator-option": "^7.14.5",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.15.4",
        "@babel/plugin-proposal-async-generator-functions": "^7.15.8",
        "@babel/plugin-proposal-class-properties": "^7.14.5",
        "@babel/plugin-proposal-class-static-block": "^7.15.4",
        "@babel/plugin-proposal-dynamic-import": "^7.14.5",
        "@babel/plugin-proposal-export-namespace-from": "^7.14.5",
        "@babel/plugin-proposal-json-strings": "^7.14.5",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.14.5",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.14.5",
        "@babel/plugin-proposal-numeric-separator": "^7.14.5",
        "@babel/plugin-proposal-object-rest-spread": "^7.15.6",
        "@babel/plugin-proposal-optional-catch-binding": "^7.14.5",
        "@babel/plugin-proposal-optional-chaining": "^7.14.5",
        "@babel/plugin-proposal-private-methods": "^7.14.5",
        "@babel/plugin-proposal-private-property-in-object": "^7.15.4",
        "@babel/plugin-proposal-unicode-property-regex": "^7.14.5",
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.14.5",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
        "@babel/plugin-syntax-top-level-await": "^7.14.5",
        "@babel/plugin-transform-arrow-functions": "^7.14.5",
        "@babel/plugin-transform-async-to-generator": "^7.14.5",
        "@babel/plugin-transform-block-scoped-functions": "^7.14.5",
        "@babel/plugin-transform-block-scoping": "^7.15.3",
        "@babel/plugin-transform-classes": "^7.15.4",
        "@babel/plugin-transform-computed-properties": "^7.14.5",
        "@babel/plugin-transform-destructuring": "^7.14.7",
        "@babel/plugin-transform-dotall-regex": "^7.14.5",
        "@babel/plugin-transform-duplicate-keys": "^7.14.5",
        "@babel/plugin-transform-exponentiation-operator": "^7.14.5",
        "@babel/plugin-transform-for-of": "^7.15.4",
        "@babel/plugin-transform-function-name": "^7.14.5",
        "@babel/plugin-transform-literals": "^7.14.5",
        "@babel/plugin-transform-member-expression-literals": "^7.14.5",
        "@babel/plugin-transform-modules-amd": "^7.14.5",
        "@babel/plugin-transform-modules-commonjs": "^7.15.4",
        "@babel/plugin-transform-modules-systemjs": "^7.15.4",
        "@babel/plugin-transform-modules-umd": "^7.14.5",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.14.9",
        "@babel/plugin-transform-new-target": "^7.14.5",
        "@babel/plugin-transform-object-super": "^7.14.5",
        "@babel/plugin-transform-parameters": "^7.15.4",
        "@babel/plugin-transform-property-literals": "^7.14.5",
        "@babel/plugin-transform-regenerator": "^7.14.5",
        "@babel/plugin-transform-reserved-words": "^7.14.5",
        "@babel/plugin-transform-shorthand-properties": "^7.14.5",
        "@babel/plugin-transform-spread": "^7.15.8",
        "@babel/plugin-transform-sticky-regex": "^7.14.5",
        "@babel/plugin-transform-template-literals": "^7.14.5",
        "@babel/plugin-transform-typeof-symbol": "^7.14.5",
        "@babel/plugin-transform-unicode-escapes": "^7.14.5",
        "@babel/plugin-transform-unicode-regex": "^7.14.5",
        "@babel/preset-modules": "^0.1.4",
        "@babel/types": "^7.15.6",
        "babel-plugin-polyfill-corejs2": "^0.2.2",
        "babel-plugin-polyfill-corejs3": "^0.2.5",
        "babel-plugin-polyfill-regenerator": "^0.2.2",
        "core-js-compat": "^3.16.0",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/preset-typescript": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.12.17.tgz",
      "integrity": "sha512-T513uT4VSThRcmWeqcLkITKJ1oGQho9wfWuhQm10paClQkp1qyd0Wf8mvC8Se7UYssMyRSj4tZYpVTkCmAK/mA==",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.12.13",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-transform-typescript": "^7.12.17"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/register": {
      "version": "7.15.3",
      "resolved": "https://registry.npmjs.org/@babel/register/-/register-7.15.3.tgz",
      "integrity": "sha512-mj4IY1ZJkorClxKTImccn4T81+UKTo4Ux0+OFSV9hME1ooqS9UV+pJ6BjD0qXPK4T3XW/KNa79XByjeEMZz+fw==",
      "dependencies": {
        "clone-deep": "^4.0.1",
        "find-cache-dir": "^2.0.0",
        "make-dir": "^2.1.0",
        "pirates": "^4.0.0",
        "source-map-support": "^0.5.16"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.15.4.tgz",
      "integrity": "sha512-99catp6bHCaxr4sJ/DbTGgHS4+Rs2RVd2g7iOap6SLGPDknRK9ztKNsE/Fg6QhSeh1FGE5f6gHGQmvvn3I3xhw==",
      "dependencies": {
        "regenerator-runtime": "^0.13.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.15.4.tgz",
      "integrity": "sha512-UgBAfEa1oGuYgDIPM2G+aHa4Nlo9Lh6mGD2bDBGMTbYnc38vulXPuC1MGjYILIEmlwl6Rd+BPR9ee3gm20CBtg==",
      "dependencies": {
        "@babel/code-frame": "^7.14.5",
        "@babel/parser": "^7.15.4",
        "@babel/types": "^7.15.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.15.4.tgz",
      "integrity": "sha512-W6lQD8l4rUbQR/vYgSuCAE75ADyyQvOpFVsvPPdkhf6lATXAsQIG9YdtOcu8BB1dZ0LKu+Zo3c1wEcbKeuhdlA==",
      "dependencies": {
        "@babel/code-frame": "^7.14.5",
        "@babel/generator": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-hoist-variables": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "@babel/parser": "^7.15.4",
        "@babel/types": "^7.15.4",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.15.6",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.15.6.tgz",
      "integrity": "sha512-BPU+7QhqNjmWyDO0/vitH/CuhpV8ZmK1wpKva8nuyNF5MJfuRNWMc+hc14+u9xT93kvykMdncrJT19h74uB1Ig==",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.14.9",
        "to-fast-properties": "^2.0.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@cnakazawa/watch": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.4.tgz",
      "integrity": "sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==",
      "dependencies": {
        "exec-sh": "^0.3.2",
        "minimist": "^1.2.0"
      },
      "bin": {
        "watch": "cli.js"
      },
      "engines": {
        "node": ">=0.1.95"
      }
    },
    "node_modules/@expo/config": {
      "version": "5.0.9",
      "resolved": "https://registry.npmjs.org/@expo/config/-/config-5.0.9.tgz",
      "integrity": "sha512-eZj+cf03wkQQdHSpYvrmiqAsn2dJV10uhHIwXyeFBaFvhds0NgThOldJZfOppQ4QUaGobB/vaJ7UqUa3B0PCMw==",
      "dependencies": {
        "@babel/code-frame": "~7.10.4",
        "@expo/config-plugins": "3.1.0",
        "@expo/config-types": "^42.0.0",
        "@expo/json-file": "8.2.33",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "require-from-string": "^2.0.2",
        "resolve-from": "^5.0.0",
        "semver": "7.3.2",
        "slugify": "^1.3.4",
        "sucrase": "^3.20.0"
      }
    },
    "node_modules/@expo/config-plugins": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@expo/config-plugins/-/config-plugins-3.1.0.tgz",
      "integrity": "sha512-V5qxaxCAExBM0TXmbU1QKiZcAGP3ecu7KXede8vByT15cro5PkcWu2sSdJCYbHQ/gw6Vf/i8sr8gKlN8V8TSLg==",
      "dependencies": {
        "@expo/config-types": "^42.0.0",
        "@expo/json-file": "8.2.33",
        "@expo/plist": "0.0.14",
        "chalk": "^4.1.2",
        "debug": "^4.3.1",
        "find-up": "~5.0.0",
        "fs-extra": "9.0.0",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "resolve-from": "^5.0.0",
        "semver": "^7.3.5",
        "slash": "^3.0.0",
        "xcode": "^3.0.1",
        "xml2js": "^0.4.23"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@expo/config-plugins/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@expo/config-plugins/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@expo/config-types": {
      "version": "42.0.0",
      "resolved": "https://registry.npmjs.org/@expo/config-types/-/config-types-42.0.0.tgz",
      "integrity": "sha512-Rj02OMZke2MrGa/1Y/EScmR7VuWbDEHPJyvfFyyLbadUt+Yv6isCdeFzDt71I7gJlPR9T4fzixeYLrtXXOTq0w=="
    },
    "node_modules/@expo/config/node_modules/@babel/code-frame": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
      "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/@expo/config/node_modules/semver": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@expo/json-file": {
      "version": "8.2.33",
      "resolved": "https://registry.npmjs.org/@expo/json-file/-/json-file-8.2.33.tgz",
      "integrity": "sha512-CDnhjdirUs6OdN5hOSTJ2y3i9EiJMk7Z5iDljC5xyCHCrUex7oyI8vbRsZEojAahxZccgL/PrO+CjakiFFWurg==",
      "dependencies": {
        "@babel/code-frame": "~7.10.4",
        "json5": "^1.0.1",
        "write-file-atomic": "^2.3.0"
      }
    },
    "node_modules/@expo/json-file/node_modules/@babel/code-frame": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
      "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/@expo/json-file/node_modules/json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/@expo/metro-config": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@expo/metro-config/-/metro-config-0.1.84.tgz",
      "integrity": "sha512-xWSfM0+AxcKw0H8mc1RuKs4Yy4JT4SJfn4yDnGLAlKkHlEC+D2seZvb/Tdd173e/LANmcarNd+OcDYu03AmVWA==",
      "dependencies": {
        "@expo/config": "5.0.9",
        "chalk": "^4.1.0",
        "getenv": "^1.0.0",
        "metro-react-native-babel-transformer": "^0.59.0"
      }
    },
    "node_modules/@expo/metro-config/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@expo/metro-config/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@expo/metro-config/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@expo/metro-config/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@expo/metro-config/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@expo/metro-config/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@expo/plist": {
      "version": "0.0.14",
      "resolved": "https://registry.npmjs.org/@expo/plist/-/plist-0.0.14.tgz",
      "integrity": "sha512-bb4Ua1M/OdNgS8KiGdSDUjZ/bbPfv3xdPY/lz8Ctp/adlj/QgB8xA7tVPeqSSfJPZqFRwU0qLCnRhpUOnP51VQ==",
      "dependencies": {
        "@xmldom/xmldom": "~0.7.0",
        "base64-js": "^1.2.3",
        "xmlbuilder": "^14.0.0"
      }
    },
    "node_modules/@expo/vector-icons": {
      "version": "12.0.5",
      "resolved": "https://registry.npmjs.org/@expo/vector-icons/-/vector-icons-12.0.5.tgz",
      "integrity": "sha512-zWvHBmkpbi1KrPma6Y+r/bsGI6MjbM1MBSe6W9A4uYMLhNI5NR4JtTnqxhf7g1XdpaDtBdv5aOWKEx4d5rxnhg==",
      "dependencies": {
        "lodash.frompairs": "^4.0.1",
        "lodash.isequal": "^4.5.0",
        "lodash.isstring": "^4.0.1",
        "lodash.omit": "^4.5.0",
        "lodash.pick": "^4.4.0",
        "lodash.template": "^4.5.0"
      }
    },
    "node_modules/@hapi/address": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.4.tgz",
      "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ==",
      "deprecated": "Moved to 'npm install @sideway/address'"
    },
    "node_modules/@hapi/bourne": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@hapi/bourne/-/bourne-1.3.2.tgz",
      "integrity": "sha512-1dVNHT76Uu5N3eJNTYcvxee+jzX4Z9lfciqRRHCU27ihbUcYi+iSc2iml5Ke1LXe1SyJCLA0+14Jh4tXJgOppA==",
      "deprecated": "This version has been deprecated and is no longer supported or maintained"
    },
    "node_modules/@hapi/hoek": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.5.1.tgz",
      "integrity": "sha512-yN7kbciD87WzLGc5539Tn0sApjyiGHAJgKvG9W8C7O+6c7qmoQMfVs0W4bX17eqz6C78QJqqFrtgdK5EWf6Qow==",
      "deprecated": "This version has been deprecated and is no longer supported or maintained"
    },
    "node_modules/@hapi/joi": {
      "version": "15.1.1",
      "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.1.1.tgz",
      "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",
      "deprecated": "Switch to 'npm install joi'",
      "dependencies": {
        "@hapi/address": "2.x.x",
        "@hapi/bourne": "1.x.x",
        "@hapi/hoek": "8.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "node_modules/@hapi/topo": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.6.tgz",
      "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
      "deprecated": "This version has been deprecated and is no longer supported or maintained",
      "dependencies": {
        "@hapi/hoek": "^8.3.0"
      }
    },
    "node_modules/@jest/console": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
      "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
      "dependencies": {
        "@jest/source-map": "^24.9.0",
        "chalk": "^2.0.1",
        "slash": "^2.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/console/node_modules/slash": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@jest/fake-timers": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
      "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
      "dependencies": {
        "@jest/types": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-mock": "^24.9.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/fake-timers/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/fake-timers/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@jest/fake-timers/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/@jest/source-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
      "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
      "dependencies": {
        "callsites": "^3.0.0",
        "graceful-fs": "^4.1.15",
        "source-map": "^0.6.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/source-map/node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@jest/source-map/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/@jest/test-result": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
      "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
      "dependencies": {
        "@jest/console": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/istanbul-lib-coverage": "^2.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/test-result/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@jest/test-result/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@jest/test-result/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/@jest/types": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-26.6.2.tgz",
      "integrity": "sha512-fC6QCp7Sc5sX6g8Tvbmj4XUTbyrik0akgRy03yjXbQaBWWNWGE7SGtJk98m0N8nzegD/7SggrUlivxo5ax4KWQ==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^3.0.0",
        "@types/node": "*",
        "@types/yargs": "^15.0.0",
        "chalk": "^4.0.0"
      },
      "engines": {
        "node": ">= 10.14.2"
      }
    },
    "node_modules/@jest/types/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@jest/types/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@jest/types/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@jest/types/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@jest/types/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@jest/types/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@react-native-community/cli-debugger-ui": {
      "version": "4.13.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-debugger-ui/-/cli-debugger-ui-4.13.1.tgz",
      "integrity": "sha512-UFnkg5RTq3s2X15fSkrWY9+5BKOFjihNSnJjTV2H5PtTUFbd55qnxxPw8CxSfK0bXb1IrSvCESprk2LEpqr5cg==",
      "dependencies": {
        "serve-static": "^1.13.1"
      }
    },
    "node_modules/@react-native-community/cli-hermes": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-hermes/-/cli-hermes-4.13.0.tgz",
      "integrity": "sha512-oG+w0Uby6rSGsUkJGLvMQctZ5eVRLLfhf84lLyz942OEDxFRa9U19YJxOe9FmgCKtotbYiM3P/XhK+SVCuerPQ==",
      "dependencies": {
        "@react-native-community/cli-platform-android": "^4.13.0",
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "hermes-profile-transformer": "^0.0.6",
        "ip": "^1.1.5"
      }
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-hermes/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-android": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-android/-/cli-platform-android-4.13.0.tgz",
      "integrity": "sha512-3i8sX8GklEytUZwPnojuoFbCjIRzMugCdzDIdZ9UNmi/OhD4/8mLGO0dgXfT4sMWjZwu3qjy45sFfk2zOAgHbA==",
      "dependencies": {
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "execa": "^1.0.0",
        "fs-extra": "^8.1.0",
        "glob": "^7.1.3",
        "jetifier": "^1.6.2",
        "lodash": "^4.17.15",
        "logkitty": "^0.7.1",
        "slash": "^3.0.0",
        "xmldoc": "^1.1.2"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/fs-extra": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-android/node_modules/universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-ios/-/cli-platform-ios-4.13.0.tgz",
      "integrity": "sha512-6THlTu8zp62efkzimfGr3VIuQJ2514o+vScZERJCV1xgEi8XtV7mb/ZKt9o6Y9WGxKKkc0E0b/aVAtgy+L27CA==",
      "dependencies": {
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "glob": "^7.1.3",
        "js-yaml": "^3.13.1",
        "lodash": "^4.17.15",
        "plist": "^3.0.1",
        "xcode": "^2.0.0"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-platform-ios/node_modules/xcode": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/xcode/-/xcode-2.1.0.tgz",
      "integrity": "sha512-uCrmPITrqTEzhn0TtT57fJaNaw8YJs1aCzs+P/QqxsDbvPZSv7XMPPwXrKvHtD6pLjBM/NaVwraWJm8q83Y4iQ==",
      "dependencies": {
        "simple-plist": "^1.0.0",
        "uuid": "^3.3.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@react-native-community/cli-server-api": {
      "version": "4.13.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-server-api/-/cli-server-api-4.13.1.tgz",
      "integrity": "sha512-vQzsFKD9CjHthA2ehTQX8c7uIzlI9A7ejaIow1I9RlEnLraPH2QqVDmzIdbdh5Od47UPbRzamCgAP8Bnqv3qwQ==",
      "dependencies": {
        "@react-native-community/cli-debugger-ui": "^4.13.1",
        "@react-native-community/cli-tools": "^4.13.0",
        "compression": "^1.7.1",
        "connect": "^3.6.5",
        "errorhandler": "^1.5.0",
        "nocache": "^2.1.0",
        "pretty-format": "^25.1.0",
        "serve-static": "^1.13.1",
        "ws": "^1.1.0"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/@jest/types": {
      "version": "25.5.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.5.0.tgz",
      "integrity": "sha512-OXD0RgQ86Tu3MazKo8bnrkDRaDXXMGUqd+kTtLtK1Zb7CRzQcaSRPPPV37SvYTdevXEBVxe0HXylEjs8ibkmCw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^15.0.0",
        "chalk": "^3.0.0"
      },
      "engines": {
        "node": ">= 8.3"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/pretty-format": {
      "version": "25.5.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.5.0.tgz",
      "integrity": "sha512-kbo/kq2LQ/A/is0PQwsEHM7Ca6//bGPPvU6UnsdDRSKTWxT/ru/xb88v4BJf6a69H+uTytOEsTusT9ksd/1iWQ==",
      "dependencies": {
        "@jest/types": "^25.5.0",
        "ansi-regex": "^5.0.0",
        "ansi-styles": "^4.0.0",
        "react-is": "^16.12.0"
      },
      "engines": {
        "node": ">= 8.3"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-server-api/node_modules/ws": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
      "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
      "dependencies": {
        "options": ">=0.0.5",
        "ultron": "1.0.x"
      }
    },
    "node_modules/@react-native-community/cli-tools": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-tools/-/cli-tools-4.13.0.tgz",
      "integrity": "sha512-s4f489h5+EJksn4CfheLgv5PGOM0CDmK1UEBLw2t/ncWs3cW2VI7vXzndcd/WJHTv3GntJhXDcJMuL+Z2IAOgg==",
      "dependencies": {
        "chalk": "^3.0.0",
        "lodash": "^4.17.15",
        "mime": "^2.4.1",
        "node-fetch": "^2.6.0",
        "open": "^6.2.0",
        "shell-quote": "1.6.1"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/@react-native-community/cli-tools/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/node-fetch": {
      "version": "2.6.5",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.5.tgz",
      "integrity": "sha512-mmlIVHJEu5rnIxgEgez6b9GgWXbkZj5YZ7fx+2r94a2E+Uirsp6HsPTPlomfdHtpt/B0cdKviwkoaM6pyvUOpQ==",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      }
    },
    "node_modules/@react-native-community/cli-tools/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/@react-native-community/cli-types": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-types/-/cli-types-4.10.1.tgz",
      "integrity": "sha512-ael2f1onoPF3vF7YqHGWy7NnafzGu+yp88BbFbP0ydoCP2xGSUzmZVw0zakPTC040Id+JQ9WeFczujMkDy6jYQ=="
    },
    "node_modules/@types/istanbul-lib-coverage": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.3.tgz",
      "integrity": "sha512-sz7iLqvVUg1gIedBOvlkxPlc8/uVzyS5OwGz1cKjXzkl3FpL3al0crU8YGU1WoHkxn0Wxbw5tyi6hvzJKNzFsw=="
    },
    "node_modules/@types/istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "node_modules/@types/istanbul-reports": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz",
      "integrity": "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==",
      "dependencies": {
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "16.10.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-16.10.3.tgz",
      "integrity": "sha512-ho3Ruq+fFnBrZhUYI46n/bV2GjwzSkwuT4dTf0GkuNFmnb8nq4ny2z9JEVemFi6bdEJanHLlYfy9c6FN9B9McQ=="
    },
    "node_modules/@types/stack-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-1.0.1.tgz",
      "integrity": "sha512-l42BggppR6zLmpfU6fq9HEa2oGPEI8yrSPL3GITjfRInppYFahObbIQOQK3UGxEnyQpltZLaPe75046NOZQikw=="
    },
    "node_modules/@types/yargs": {
      "version": "15.0.14",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.14.tgz",
      "integrity": "sha512-yEJzHoxf6SyQGhBhIYGXQDSCkJjB6HohDShto7m8vaKg9Yp0Yn8+71J9eakh2bnPg6BfsH9PRMhiRTZnd4eXGQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/@types/yargs-parser": {
      "version": "20.2.1",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-20.2.1.tgz",
      "integrity": "sha512-7tFImggNeNBVMsn0vLrpn1H1uPrUBdnARPTpZoitY37ZrdJREzf7I16tMrlK3hen349gr1NYh8CmZQa7CTG6Aw=="
    },
    "node_modules/@unimodules/core": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/@unimodules/core/-/core-7.1.2.tgz",
      "integrity": "sha512-lY+e2TAFuebD3vshHMIRqru3X4+k7Xkba4Wa7QsDBd+ex4c4N2dHAO61E2SrGD9+TRBD8w/o7mzK6ljbqRnbyg==",
      "dependencies": {
        "compare-versions": "^3.4.0"
      }
    },
    "node_modules/@unimodules/react-native-adapter": {
      "version": "6.3.9",
      "resolved": "https://registry.npmjs.org/@unimodules/react-native-adapter/-/react-native-adapter-6.3.9.tgz",
      "integrity": "sha512-i9/9Si4AQ8awls+YGAKkByFbeAsOPgUNeLoYeh2SQ3ddjxJ5ZJDtq/I74clDnpDcn8zS9pYlcDJ9fgVJa39Glw==",
      "dependencies": {
        "expo-modules-autolinking": "^0.0.3",
        "invariant": "^2.2.4"
      }
    },
    "node_modules/@xmldom/xmldom": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.7.5.tgz",
      "integrity": "sha512-V3BIhmY36fXZ1OtVcI9W+FxQqxVLsPKcNjWigIaa81dLC9IolJl5Mt4Cvhmr0flUnjSpTdrbMTSbXqYqV5dT6A==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/abort-controller": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
      "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
      "dependencies": {
        "event-target-shim": "^5.0.0"
      },
      "engines": {
        "node": ">=6.5"
      }
    },
    "node_modules/absolute-path": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/absolute-path/-/absolute-path-0.0.0.tgz",
      "integrity": "sha1-p4di+9rftSl76ZsV01p4Wy8JW/c="
    },
    "node_modules/accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dependencies": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/anser": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/anser/-/anser-1.4.10.tgz",
      "integrity": "sha512-hCv9AqTQ8ycjpSd3upOJd7vFwW1JaoYQ7tpham03GJ1ca8/65rqn0RpaWpItOAd6ylW9wAw6luXYPJIyPFVOww=="
    },
    "node_modules/ansi-colors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",
      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",
      "dependencies": {
        "ansi-wrap": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ansi-cyan": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-cyan/-/ansi-cyan-0.1.1.tgz",
      "integrity": "sha1-U4rlKK+JgvKK4w2G8vF0VtJgmHM=",
      "dependencies": {
        "ansi-wrap": "0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-fragments": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/ansi-fragments/-/ansi-fragments-0.2.1.tgz",
      "integrity": "sha512-DykbNHxuXQwUDRv5ibc2b0x7uw7wmwOGLBUd5RmaQ5z8Lhx19vwvKV+FAsM5rEA6dEcHxX+/Ad5s9eF2k2bB+w==",
      "dependencies": {
        "colorette": "^1.0.7",
        "slice-ansi": "^2.0.0",
        "strip-ansi": "^5.0.0"
      }
    },
    "node_modules/ansi-gray": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",
      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",
      "dependencies": {
        "ansi-wrap": "0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ansi-red": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-red/-/ansi-red-0.1.1.tgz",
      "integrity": "sha1-jGOPnRCAgAo1PJwoyKgcpHBdlGw=",
      "dependencies": {
        "ansi-wrap": "0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-wrap": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",
      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha1-q8av7tzqUugJzcA3au0845Y10X8="
    },
    "node_modules/anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dependencies": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      }
    },
    "node_modules/anymatch/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/braces/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/fill-range/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/anymatch/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/arr-diff": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-1.1.0.tgz",
      "integrity": "sha1-aHwydYFjWI/vfeezb6vklesaOZo=",
      "dependencies": {
        "arr-flatten": "^1.0.1",
        "array-slice": "^0.2.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-2.1.0.tgz",
      "integrity": "sha1-IPnqtexw9cfSFbEHexw5Fh0pLH0=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-filter": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/array-filter/-/array-filter-0.0.1.tgz",
      "integrity": "sha1-fajPLiZijtcygDWB/SH2fKzS7uw="
    },
    "node_modules/array-find-index": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
      "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-map": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-map/-/array-map-0.0.0.tgz",
      "integrity": "sha1-iKK6tz0c97zVwbEYoAP2b2ZfpmI="
    },
    "node_modules/array-reduce": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-reduce/-/array-reduce-0.0.0.tgz",
      "integrity": "sha1-FziZ0//Rx9k4PkR5Ul2+J4yrXys="
    },
    "node_modules/array-slice": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-0.2.3.tgz",
      "integrity": "sha1-3Tz7gO15c6dRF82sabC5nshhhvU=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
    },
    "node_modules/assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/async": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "dependencies": {
        "lodash": "^4.17.14"
      }
    },
    "node_modules/at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "dependencies": {
        "object.assign": "^4.1.0"
      }
    },
    "node_modules/babel-plugin-module-resolver": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-module-resolver/-/babel-plugin-module-resolver-3.2.0.tgz",
      "integrity": "sha512-tjR0GvSndzPew/Iayf4uICWZqjBwnlMWjSx6brryfQ81F9rxBVqwDJtFCV8oOs0+vJeefK9TmdZtkIFdFe1UnA==",
      "dependencies": {
        "find-babel-config": "^1.1.0",
        "glob": "^7.1.2",
        "pkg-up": "^2.0.0",
        "reselect": "^3.0.1",
        "resolve": "^1.4.0"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs2": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.2.2.tgz",
      "integrity": "sha512-kISrENsJ0z5dNPq5eRvcctITNHYXWOA4DUZRFYCz3jYCcvTb/A546LIddmoGNMVYg2U38OyFeNosQwI9ENTqIQ==",
      "dependencies": {
        "@babel/compat-data": "^7.13.11",
        "@babel/helper-define-polyfill-provider": "^0.2.2",
        "semver": "^6.1.1"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/babel-plugin-polyfill-corejs3": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.2.5.tgz",
      "integrity": "sha512-ninF5MQNwAX9Z7c9ED+H2pGt1mXdP4TqzlHKyPIYmJIYz0N+++uwdM7RnJukklhzJ54Q84vA4ZJkgs7lu5vqcw==",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.2.2",
        "core-js-compat": "^3.16.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/babel-plugin-polyfill-regenerator": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.2.2.tgz",
      "integrity": "sha512-Goy5ghsc21HgPDFtzRkSirpZVW35meGoTmTOb2bxqdl60ghub4xOidgNTHaZfQ2FaxQsKmwvXtOAkcIS4SMBWg==",
      "dependencies": {
        "@babel/helper-define-polyfill-provider": "^0.2.2"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/babel-plugin-react-native-web": {
      "version": "0.13.18",
      "resolved": "https://registry.npmjs.org/babel-plugin-react-native-web/-/babel-plugin-react-native-web-0.13.18.tgz",
      "integrity": "sha512-f8pAxyKqXBNRIh8l4Sqju055BNec+DQlItdtutByYxULU0iJ1F7evIYE3skPKAkTB/xJH17l+n3Z8dVabGIIGg=="
    },
    "node_modules/babel-plugin-syntax-trailing-function-commas": {
      "version": "7.0.0-beta.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-trailing-function-commas/-/babel-plugin-syntax-trailing-function-commas-7.0.0-beta.0.tgz",
      "integrity": "sha512-Xj9XuRuz3nTSbaTXWv3itLOcxyF4oPD8douBBmj7U9BBC6nEBYfyOJYQMf/8PJAFotC62UY5dFfIGEPr7WswzQ=="
    },
    "node_modules/babel-preset-expo": {
      "version": "8.4.1",
      "resolved": "https://registry.npmjs.org/babel-preset-expo/-/babel-preset-expo-8.4.1.tgz",
      "integrity": "sha512-bfNX+GWhBCC8SzOzuF5VI5rKftv+E+Leyq83R9h3S+nTzDEtGSnMsRoPCqGHXDbleJApBVKXGZpxWXR5B91HlQ==",
      "dependencies": {
        "@babel/plugin-proposal-decorators": "^7.6.0",
        "@babel/preset-env": "^7.6.3",
        "babel-plugin-module-resolver": "^3.2.0",
        "babel-plugin-react-native-web": "~0.13.6",
        "metro-react-native-babel-preset": "~0.59.0"
      }
    },
    "node_modules/babel-preset-fbjs": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/babel-preset-fbjs/-/babel-preset-fbjs-3.4.0.tgz",
      "integrity": "sha512-9ywCsCvo1ojrw0b+XYk7aFvTH6D9064t0RIL1rtMf3nsa02Xw41MS7sZw216Im35xj/UY0PDBQsa1brUDDF1Ow==",
      "dependencies": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-syntax-class-properties": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-member-expression-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-super": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-property-literals": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "babel-plugin-syntax-trailing-function-commas": "^7.0.0-beta.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "node_modules/base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dependencies": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/big-integer": {
      "version": "1.6.49",
      "resolved": "https://registry.npmjs.org/big-integer/-/big-integer-1.6.49.tgz",
      "integrity": "sha512-KJ7VhqH+f/BOt9a3yMwJNmcZjG53ijWMTjSAGMveQWyLwqIiwkjNP5PFgDob3Snnx86SjDj6I89fIbv0dkQeNw==",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "optional": true,
      "dependencies": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "node_modules/blueimp-md5": {
      "version": "2.19.0",
      "resolved": "https://registry.npmjs.org/blueimp-md5/-/blueimp-md5-2.19.0.tgz",
      "integrity": "sha512-DRQrD6gJyy8FbiE4s+bDoXS9hiW3Vbx5uCdwvcCf3zLHL+Iv7LtGHLpr+GZV8rHG8tK766FGYBwRbu8pELTt+w=="
    },
    "node_modules/bplist-creator": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/bplist-creator/-/bplist-creator-0.0.8.tgz",
      "integrity": "sha512-Za9JKzD6fjLC16oX2wsXfc+qBEhJBJB1YPInoAQpMLhDuj5aVOv1baGeIQSq1Fr3OCqzvsoQcSBSwGId/Ja2PA==",
      "dependencies": {
        "stream-buffers": "~2.2.0"
      }
    },
    "node_modules/bplist-parser": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/bplist-parser/-/bplist-parser-0.2.0.tgz",
      "integrity": "sha512-z0M+byMThzQmD9NILRniCUXYsYpjwnlO8N5uCFaCqIOpqRsJCrQL9NK3JsD67CN5a08nF5oIL2bD6loTdHOuKw==",
      "dependencies": {
        "big-integer": "^1.6.44"
      },
      "engines": {
        "node": ">= 5.10.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.17.3",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.17.3.tgz",
      "integrity": "sha512-59IqHJV5VGdcJZ+GZ2hU5n4Kv3YiASzW6Xk5g9tf5a/MAzGeFwgGWU39fVzNIOVcgB3+Gp+kiQu0HEfTVU/3VQ==",
      "dependencies": {
        "caniuse-lite": "^1.0.30001264",
        "electron-to-chromium": "^1.3.857",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.77",
        "picocolors": "^0.2.1"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dependencies": {
        "node-int64": "^0.4.0"
      }
    },
    "node_modules/buffer-alloc": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
      "integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
      "dependencies": {
        "buffer-alloc-unsafe": "^1.1.0",
        "buffer-fill": "^1.0.0"
      }
    },
    "node_modules/buffer-alloc-unsafe": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
      "integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg=="
    },
    "node_modules/buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/buffer-fill": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
      "integrity": "sha1-+PeLdniYiO858gXNY39o5wISKyw="
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
    },
    "node_modules/bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dependencies": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/caller-callsite": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "dependencies": {
        "callsites": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/caller-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
      "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
      "dependencies": {
        "caller-callsite": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001265",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001265.tgz",
      "integrity": "sha512-YzBnspggWV5hep1m9Z6sZVLOt7vrju8xWooFAgN6BA5qvy98qPAPb7vNUzypFaoh2pb3vlfzbDO8tB57UPGbtw==",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/browserslist"
      }
    },
    "node_modules/capture-exit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
      "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
      "dependencies": {
        "rsvp": "^4.8.4"
      },
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/chardet": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz",
      "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I="
    },
    "node_modules/ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "node_modules/class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dependencies": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dependencies": {
        "restore-cursor": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.1.tgz",
      "integrity": "sha512-x/5fWmGMnbKQAaNwN+UZlV79qBLM9JFnJuJ03gIi5whrob0xV0ofNVHy9DhwGdsMJQc2OKv0oGmLzvaqvAVv+g==",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-width": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
      "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw=="
    },
    "node_modules/cliui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
      "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^6.2.0"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/clone-deep": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
      "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
      "dependencies": {
        "is-plain-object": "^2.0.4",
        "kind-of": "^6.0.2",
        "shallow-clone": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dependencies": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "node_modules/color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
      "bin": {
        "color-support": "bin.js"
      }
    },
    "node_modules/colorette": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.4.0.tgz",
      "integrity": "sha512-Y2oEozpomLn7Q3HFP7dpww7AtMJplbM9lGZP6RDfHqmbeRjiwRg4n6VM6j4KLmRke85uWEI7JqF17f3pqdRA0g=="
    },
    "node_modules/command-exists": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
      "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w=="
    },
    "node_modules/commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==",
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
    },
    "node_modules/compare-versions": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/compare-versions/-/compare-versions-3.6.0.tgz",
      "integrity": "sha512-W6Af2Iw1z4CB7q4uU4hv646dW9GQuBM+YpC0UvUCWSD8w90SJjp+ujJuXaEMtAXBtSqGfMPuFOVn4/+FlaqfBA=="
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "node_modules/compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "dependencies": {
        "mime-db": ">= 1.43.0 < 2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "dependencies": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/compression/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/compression/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "node_modules/concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "engines": [
        "node >= 0.8"
      ],
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/connect": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/connect/-/connect-3.7.0.tgz",
      "integrity": "sha512-ZqRXc+tZukToSNmh5C2iWMSoV3X1YUcPbqEM4DkEG5tNQXrQUZCNVGGv3IuicnkMtPfGf3Xtp8WCXs295iQ1pQ==",
      "dependencies": {
        "debug": "2.6.9",
        "finalhandler": "1.1.2",
        "parseurl": "~1.3.3",
        "utils-merge": "1.0.1"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/connect/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/connect/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/convert-source-map": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",
      "dependencies": {
        "safe-buffer": "~5.1.1"
      }
    },
    "node_modules/copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/core-js": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-1.2.7.tgz",
      "integrity": "sha1-ZSKUwUZR2yj6k70tX/KYOk8IxjY=",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js."
    },
    "node_modules/core-js-compat": {
      "version": "3.18.2",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.18.2.tgz",
      "integrity": "sha512-25VJYCJtGjZwLguj7d66oiHfmnVw3TMOZ0zV8DyMJp/aeQ3OjR519iOOeck08HMyVVRAqXxafc2Hl+5QstJrsQ==",
      "dependencies": {
        "browserslist": "^4.17.3",
        "semver": "7.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/core-js-compat/node_modules/semver": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
      "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
    "node_modules/cosmiconfig": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "dependencies": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/create-react-class": {
      "version": "15.7.0",
      "resolved": "https://registry.npmjs.org/create-react-class/-/create-react-class-15.7.0.tgz",
      "integrity": "sha512-QZv4sFWG9S5RUvkTYWbflxeZX+JG7Cz0Tn33rQBJ+WFQTqTfUTjMjiv9tnfXazjsO5r0KhPs+AqCjyrQX6h2ng==",
      "dependencies": {
        "loose-envify": "^1.3.1",
        "object-assign": "^4.1.1"
      }
    },
    "node_modules/cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dependencies": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "engines": {
        "node": ">=4.8"
      }
    },
    "node_modules/cross-spawn/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/css-in-js-utils": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/css-in-js-utils/-/css-in-js-utils-2.0.1.tgz",
      "integrity": "sha512-PJF0SpJT+WdbVVt0AOYp9C8GnuruRlL/UFW7932nLWmFLQTaWEzTBQEx7/hn4BuV+WON75iAViSUJLiU3PKbpA==",
      "dependencies": {
        "hyphenate-style-name": "^1.0.2",
        "isobject": "^3.0.1"
      }
    },
    "node_modules/dayjs": {
      "version": "1.10.7",
      "resolved": "https://registry.npmjs.org/dayjs/-/dayjs-1.10.7.tgz",
      "integrity": "sha512-P6twpd70BcPK34K26uJ1KT3wlhpuOAPoMwJzpsIWUxHZ7wpmbdZL/hQqBDfz7hGurYSa5PhzdhDHtt319hL3ig=="
    },
    "node_modules/debug": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
      "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/deep-assign": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/deep-assign/-/deep-assign-3.0.0.tgz",
      "integrity": "sha512-YX2i9XjJ7h5q/aQ/IM9PEwEnDqETAIYbggmdDB3HLTlSgo1CxPsj6pvhPG68rq6SVE0+p+6Ywsm5fTYNrYtBWw==",
      "deprecated": "Check out `lodash.merge` or `merge-options` instead.",
      "dependencies": {
        "is-obj": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/deepmerge": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-3.3.0.tgz",
      "integrity": "sha512-GRQOafGHwMHpjPx9iCvTgpu9NojZ49q794EEL94JVEw6VaeA8XTUyBKvAkOOjBX9oJNiV6G3P+T+tihFjo2TqA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dependencies": {
        "clone": "^1.0.2"
      }
    },
    "node_modules/define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dependencies": {
        "object-keys": "^1.0.12"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dependencies": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/denodeify": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/denodeify/-/denodeify-1.2.1.tgz",
      "integrity": "sha1-OjYof1A05pnnV3kBBSwubJQlFjE="
    },
    "node_modules/depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "node_modules/electron-to-chromium": {
      "version": "1.3.864",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.864.tgz",
      "integrity": "sha512-v4rbad8GO6/yVI92WOeU9Wgxc4NA0n4f6P1FvZTY+jyY7JHEhw3bduYu60v3Q1h81Cg6eo4ApZrFPuycwd5hGw=="
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/encoding": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
      "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
      "dependencies": {
        "iconv-lite": "^0.6.2"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/envinfo": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
      "integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==",
      "bin": {
        "envinfo": "dist/cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/error-stack-parser": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/error-stack-parser/-/error-stack-parser-2.0.6.tgz",
      "integrity": "sha512-d51brTeqC+BHlwF0BhPtcYgF5nlzf9ZZ0ZIUQNZpc9ZB9qw5IJ2diTrBY9jlCJkTLITYPjmiX6OWCwH+fuyNgQ==",
      "dependencies": {
        "stackframe": "^1.1.1"
      }
    },
    "node_modules/errorhandler": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/errorhandler/-/errorhandler-1.5.1.tgz",
      "integrity": "sha512-rcOwbfvP1WTViVoUjcfZicVzjhjTuhSMntHh6mW3IrEiyE6mJyXvsToJUJGlGlw/2xU9P5whlWNGlIDVeCiT4A==",
      "dependencies": {
        "accepts": "~1.3.7",
        "escape-html": "~1.0.3"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/event-target-shim": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
      "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/eventemitter3": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz",
      "integrity": "sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q=="
    },
    "node_modules/exec-sh": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.6.tgz",
      "integrity": "sha512-nQn+hI3yp+oD0huYhKwvYI32+JFeq+XkNcD1GAo3Y/MjxsfVGmrrzrnzjWiNY6f+pUCP440fThsFh5gZrRAU/w=="
    },
    "node_modules/execa": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
      "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
      "dependencies": {
        "cross-spawn": "^6.0.0",
        "get-stream": "^4.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dependencies": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/expand-brackets/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-brackets/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/expo": {
      "version": "42.0.4",
      "resolved": "https://registry.npmjs.org/expo/-/expo-42.0.4.tgz",
      "integrity": "sha512-i1QvMb3cIXdsx7OQh0/N0KJHkPwFlBGEGsXRr/IF2DJFHMWd/J4DR8IaAnTAhx0ifborWHmENgXj5hgWJgirog==",
      "dependencies": {
        "@babel/runtime": "^7.1.2",
        "@expo/metro-config": "^0.1.70",
        "@expo/vector-icons": "^12.0.4",
        "@unimodules/core": "~7.1.2",
        "@unimodules/react-native-adapter": "~6.3.7",
        "babel-preset-expo": "~8.4.1",
        "cross-spawn": "^6.0.5",
        "expo-application": "~3.2.0",
        "expo-asset": "~8.3.3",
        "expo-constants": "~11.0.2",
        "expo-error-recovery": "~2.2.0",
        "expo-file-system": "~11.1.3",
        "expo-font": "~9.2.1",
        "expo-keep-awake": "~9.2.0",
        "fbemitter": "^2.1.1",
        "invariant": "^2.2.2",
        "md5-file": "^3.2.3",
        "pretty-format": "^26.4.0",
        "react-native-safe-area-context": "3.2.0",
        "serialize-error": "^2.1.0",
        "uuid": "^3.4.0"
      },
      "bin": {
        "expo": "bin/cli.js"
      }
    },
    "node_modules/expo-application": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/expo-application/-/expo-application-3.2.0.tgz",
      "integrity": "sha512-NDPQAtB05Jeiw771bDYsecbLrLA39X33Jk8uP1VUVdHMy6cCfJrL8PSDssgMLElAzR94K8toeqdGsGx9mVv8zw=="
    },
    "node_modules/expo-asset": {
      "version": "8.3.3",
      "resolved": "https://registry.npmjs.org/expo-asset/-/expo-asset-8.3.3.tgz",
      "integrity": "sha512-qCm5d14tzswY8DcmRJ+0WkY9tc3OiVikBAiw2hCMC+bFpK/bEdqy4Zwfd69MFIAJ0taJpHWhdUoBRO0byQLlfg==",
      "dependencies": {
        "blueimp-md5": "^2.10.0",
        "invariant": "^2.2.4",
        "md5-file": "^3.2.3",
        "path-browserify": "^1.0.0",
        "url-parse": "^1.4.4"
      }
    },
    "node_modules/expo-constants": {
      "version": "11.0.2",
      "resolved": "https://registry.npmjs.org/expo-constants/-/expo-constants-11.0.2.tgz",
      "integrity": "sha512-CVjM+FbOMe/nFOSly5lnj0seMAYsjjc6+q3X8nIXG+gtw9iNBLwMX3Fz308rxiaPRJw+TBdd5/mcGJdNfoS+ew==",
      "dependencies": {
        "@expo/config": "^4.0.0",
        "expo-modules-core": "~0.2.0",
        "uuid": "^3.3.2"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/code-frame": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
      "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
      "dependencies": {
        "@babel/highlight": "^7.10.4"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/core": {
      "version": "7.9.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.9.0.tgz",
      "integrity": "sha512-kWc7L0fw1xwvI0zi8OKVBuxRVefwGOrKSQMvrQ3dW+bIIavBY3/NpXmpjMy7bQnLgwgzWQZ8TlM57YHpHNHz4w==",
      "dependencies": {
        "@babel/code-frame": "^7.8.3",
        "@babel/generator": "^7.9.0",
        "@babel/helper-module-transforms": "^7.9.0",
        "@babel/helpers": "^7.9.0",
        "@babel/parser": "^7.9.0",
        "@babel/template": "^7.8.6",
        "@babel/traverse": "^7.9.0",
        "@babel/types": "^7.9.0",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.1",
        "json5": "^2.1.2",
        "lodash": "^4.17.13",
        "resolve": "^1.3.2",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/core/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/plugin-proposal-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.12.13.tgz",
      "integrity": "sha512-8SCJ0Ddrpwv4T7Gwb33EmW1V9PY5lggTO+A8WjyIwxrSHDUyBw4MtF96ifn1n8H806YlxbVCoKXbbmzD6RD+cA==",
      "dependencies": {
        "@babel/helper-create-class-features-plugin": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/preset-env": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.12.17.tgz",
      "integrity": "sha512-9PMijx8zFbCwTHrd2P4PJR5nWGH3zWebx2OcpTjqQrHhCiL2ssSR2Sc9ko2BsI2VmVBfoaQmPrlMTCui4LmXQg==",
      "dependencies": {
        "@babel/compat-data": "^7.12.13",
        "@babel/helper-compilation-targets": "^7.12.17",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.12.13",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-proposal-async-generator-functions": "^7.12.13",
        "@babel/plugin-proposal-class-properties": "^7.12.13",
        "@babel/plugin-proposal-dynamic-import": "^7.12.17",
        "@babel/plugin-proposal-export-namespace-from": "^7.12.13",
        "@babel/plugin-proposal-json-strings": "^7.12.13",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.12.13",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.13",
        "@babel/plugin-proposal-numeric-separator": "^7.12.13",
        "@babel/plugin-proposal-object-rest-spread": "^7.12.13",
        "@babel/plugin-proposal-optional-catch-binding": "^7.12.13",
        "@babel/plugin-proposal-optional-chaining": "^7.12.17",
        "@babel/plugin-proposal-private-methods": "^7.12.13",
        "@babel/plugin-proposal-unicode-property-regex": "^7.12.13",
        "@babel/plugin-syntax-async-generators": "^7.8.0",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-dynamic-import": "^7.8.0",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.0",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
        "@babel/plugin-syntax-optional-chaining": "^7.8.0",
        "@babel/plugin-syntax-top-level-await": "^7.12.13",
        "@babel/plugin-transform-arrow-functions": "^7.12.13",
        "@babel/plugin-transform-async-to-generator": "^7.12.13",
        "@babel/plugin-transform-block-scoped-functions": "^7.12.13",
        "@babel/plugin-transform-block-scoping": "^7.12.13",
        "@babel/plugin-transform-classes": "^7.12.13",
        "@babel/plugin-transform-computed-properties": "^7.12.13",
        "@babel/plugin-transform-destructuring": "^7.12.13",
        "@babel/plugin-transform-dotall-regex": "^7.12.13",
        "@babel/plugin-transform-duplicate-keys": "^7.12.13",
        "@babel/plugin-transform-exponentiation-operator": "^7.12.13",
        "@babel/plugin-transform-for-of": "^7.12.13",
        "@babel/plugin-transform-function-name": "^7.12.13",
        "@babel/plugin-transform-literals": "^7.12.13",
        "@babel/plugin-transform-member-expression-literals": "^7.12.13",
        "@babel/plugin-transform-modules-amd": "^7.12.13",
        "@babel/plugin-transform-modules-commonjs": "^7.12.13",
        "@babel/plugin-transform-modules-systemjs": "^7.12.13",
        "@babel/plugin-transform-modules-umd": "^7.12.13",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.13",
        "@babel/plugin-transform-new-target": "^7.12.13",
        "@babel/plugin-transform-object-super": "^7.12.13",
        "@babel/plugin-transform-parameters": "^7.12.13",
        "@babel/plugin-transform-property-literals": "^7.12.13",
        "@babel/plugin-transform-regenerator": "^7.12.13",
        "@babel/plugin-transform-reserved-words": "^7.12.13",
        "@babel/plugin-transform-shorthand-properties": "^7.12.13",
        "@babel/plugin-transform-spread": "^7.12.13",
        "@babel/plugin-transform-sticky-regex": "^7.12.13",
        "@babel/plugin-transform-template-literals": "^7.12.13",
        "@babel/plugin-transform-typeof-symbol": "^7.12.13",
        "@babel/plugin-transform-unicode-escapes": "^7.12.13",
        "@babel/plugin-transform-unicode-regex": "^7.12.13",
        "@babel/preset-modules": "^0.1.3",
        "@babel/types": "^7.12.17",
        "core-js-compat": "^3.8.0",
        "semver": "^5.5.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/expo-constants/node_modules/@babel/preset-env/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/expo-constants/node_modules/@expo/config": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/@expo/config/-/config-4.0.4.tgz",
      "integrity": "sha512-O3xRlwMCidOgk1WHIy6eOjh2yp0h/kgBDRNKqPe21+YDiOufyTGGNvbWgHwoax8goa1iMg443WQO7GhvaH286g==",
      "dependencies": {
        "@babel/core": "7.9.0",
        "@babel/plugin-proposal-class-properties": "~7.12.13",
        "@babel/preset-env": "~7.12.13",
        "@babel/preset-typescript": "~7.12.13",
        "@expo/config-plugins": "2.0.4",
        "@expo/config-types": "^41.0.0",
        "@expo/json-file": "8.2.30",
        "fs-extra": "9.0.0",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "require-from-string": "^2.0.2",
        "resolve-from": "^5.0.0",
        "semver": "7.3.2",
        "slugify": "^1.3.4"
      }
    },
    "node_modules/expo-constants/node_modules/@expo/config-plugins": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@expo/config-plugins/-/config-plugins-2.0.4.tgz",
      "integrity": "sha512-JGt/X2tFr7H8KBQrKfbGo9hmCubQraMxq5sj3bqDdKmDOLcE1a/EDCP9g0U4GHsa425J8VDIkQUHYz3h3ndEXQ==",
      "dependencies": {
        "@expo/config-types": "^41.0.0",
        "@expo/json-file": "8.2.30",
        "@expo/plist": "0.0.13",
        "debug": "^4.3.1",
        "find-up": "~5.0.0",
        "fs-extra": "9.0.0",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "resolve-from": "^5.0.0",
        "slash": "^3.0.0",
        "xcode": "^3.0.1",
        "xml2js": "^0.4.23"
      }
    },
    "node_modules/expo-constants/node_modules/@expo/config-types": {
      "version": "41.0.0",
      "resolved": "https://registry.npmjs.org/@expo/config-types/-/config-types-41.0.0.tgz",
      "integrity": "sha512-Ax0pHuY5OQaSrzplOkT9DdpdmNzaVDnq9VySb4Ujq7UJ4U4jriLy8u93W98zunOXpcu0iiKubPsqD6lCiq0pig=="
    },
    "node_modules/expo-constants/node_modules/@expo/json-file": {
      "version": "8.2.30",
      "resolved": "https://registry.npmjs.org/@expo/json-file/-/json-file-8.2.30.tgz",
      "integrity": "sha512-vrgGyPEXBoFI5NY70IegusCSoSVIFV3T3ry4tjJg1MFQKTUlR7E0r+8g8XR6qC705rc2PawaZQjqXMAVtV6s2A==",
      "dependencies": {
        "@babel/code-frame": "~7.10.4",
        "fs-extra": "9.0.0",
        "json5": "^1.0.1",
        "write-file-atomic": "^2.3.0"
      }
    },
    "node_modules/expo-constants/node_modules/@expo/json-file/node_modules/json5": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
      "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/expo-constants/node_modules/@expo/plist": {
      "version": "0.0.13",
      "resolved": "https://registry.npmjs.org/@expo/plist/-/plist-0.0.13.tgz",
      "integrity": "sha512-zGPSq9OrCn7lWvwLLHLpHUUq2E40KptUFXn53xyZXPViI0k9lbApcR9KlonQZ95C+ELsf0BQ3gRficwK92Ivcw==",
      "dependencies": {
        "base64-js": "^1.2.3",
        "xmlbuilder": "^14.0.0",
        "xmldom": "~0.5.0"
      }
    },
    "node_modules/expo-constants/node_modules/semver": {
      "version": "7.3.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
      "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ==",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/expo-error-recovery": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/expo-error-recovery/-/expo-error-recovery-2.2.0.tgz",
      "integrity": "sha512-HKbu6VHAlfhoP7y+HaGJwJizoUTY2eBTBHAi1RE7l/r4sc+cAegTmwwqf/3AOR8C7VntDvuQKtW7NZIyA+62KQ=="
    },
    "node_modules/expo-file-system": {
      "version": "11.1.3",
      "resolved": "https://registry.npmjs.org/expo-file-system/-/expo-file-system-11.1.3.tgz",
      "integrity": "sha512-FBRcD6ojrkrZiTZ8O7Fbo833HhZtkhKtLDj4RNZIMpF1i+ZBD2bmeMcfLMeRHNYcBeJno9C4AVXoNQFqDCGQDg==",
      "dependencies": {
        "@expo/config-plugins": "^3.0.0",
        "expo-modules-core": "~0.2.0",
        "uuid": "^3.4.0"
      }
    },
    "node_modules/expo-font": {
      "version": "9.2.1",
      "resolved": "https://registry.npmjs.org/expo-font/-/expo-font-9.2.1.tgz",
      "integrity": "sha512-sT9nm2Dt1nTLz+Ir1fSpyzqH40eJX324Wu5sPyvT2Ivnmu2rw2rxt3gNa8Kvdb8BPRz4qrRvHR/E+YKMqa6ZgQ==",
      "dependencies": {
        "expo-modules-core": "~0.2.0",
        "fontfaceobserver": "^2.1.0"
      }
    },
    "node_modules/expo-keep-awake": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/expo-keep-awake/-/expo-keep-awake-9.2.0.tgz",
      "integrity": "sha512-R5jAx5j3MqrhKFB307FBpaHtYSYeVIFX/rVforBF5inKonYjXRWVhjGoBjolF4geAryNamC3NKhMfxyaaB0W6Q=="
    },
    "node_modules/expo-modules-autolinking": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/expo-modules-autolinking/-/expo-modules-autolinking-0.0.3.tgz",
      "integrity": "sha512-azkCRYj/DxbK4udDuDxA9beYzQTwpJ5a9QA0bBgha2jHtWdFGF4ZZWSY+zNA5mtU3KqzYt8jWHfoqgSvKyu1Aw==",
      "dependencies": {
        "chalk": "^4.1.0",
        "commander": "^7.2.0",
        "fast-glob": "^3.2.5",
        "find-up": "~5.0.0",
        "fs-extra": "^9.1.0"
      },
      "bin": {
        "expo-modules-autolinking": "bin/expo-modules-autolinking.js"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/expo-modules-autolinking/node_modules/fs-extra": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
      "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/expo-modules-autolinking/node_modules/universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/expo-modules-core": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/expo-modules-core/-/expo-modules-core-0.2.0.tgz",
      "integrity": "sha512-inpfZ5X/BaTtbj2wG9PA9AC0MN8VyId6KSRlVuEg7+ziurHBy/kKDFxpOddUokhwiln2uhoYPSStJjR/tKypdw=="
    },
    "node_modules/expo-status-bar": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/expo-status-bar/-/expo-status-bar-1.0.4.tgz",
      "integrity": "sha512-s7nc496D/Zn1NGiMJ5wu6HyIdXxbgGtmZZtbHm7rpbcmLdf28GmMSNHDx7M0t00BMhky7VAurTCUo+BJs8ugsw=="
    },
    "node_modules/expo/node_modules/react-native-safe-area-context": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/react-native-safe-area-context/-/react-native-safe-area-context-3.2.0.tgz",
      "integrity": "sha512-k2Nty4PwSnrg9HwrYeeE+EYqViYJoOFwEy9LxL5RIRfoqxAq/uQXNGwpUg2/u4gnKpBbEPa9eRh15KKMe/VHkA==",
      "peerDependencies": {
        "react": "*",
        "react-native": "*"
      }
    },
    "node_modules/extend-shallow": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-1.1.4.tgz",
      "integrity": "sha1-Gda/lN/AnXa6cR85uHLSH/TdkHE=",
      "dependencies": {
        "kind-of": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/kind-of": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-1.1.0.tgz",
      "integrity": "sha1-FAo9LUGjbS78+pN3tiwk+ElaXEQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/external-editor": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-2.2.0.tgz",
      "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
      "dependencies": {
        "chardet": "^0.4.0",
        "iconv-lite": "^0.4.17",
        "tmp": "^0.0.33"
      },
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/external-editor/node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dependencies": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fancy-log": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",
      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",
      "dependencies": {
        "ansi-gray": "^0.1.1",
        "color-support": "^1.1.3",
        "parse-node-version": "^1.0.0",
        "time-stamp": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/fast-glob": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.7.tgz",
      "integrity": "sha512-rYGMRwip6lUMvYD3BTScMwT1HtAs2d71SMv66Vrxs0IekGZEjhM0pcMfjQPnknBt2zeCwQMEupiN02ZP4DiT1Q==",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fastq": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
      "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fb-watchman": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "dependencies": {
        "bser": "2.1.1"
      }
    },
    "node_modules/fbemitter": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/fbemitter/-/fbemitter-2.1.1.tgz",
      "integrity": "sha1-Uj4U/a9SSIBbsC9i78M75wP1GGU=",
      "dependencies": {
        "fbjs": "^0.8.4"
      }
    },
    "node_modules/fbjs": {
      "version": "0.8.17",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-0.8.17.tgz",
      "integrity": "sha1-xNWY6taUkRJlPWWIsBpc3Nn5D90=",
      "dependencies": {
        "core-js": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "node_modules/fbjs-css-vars": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/fbjs-css-vars/-/fbjs-css-vars-1.0.2.tgz",
      "integrity": "sha512-b2XGFAFdWZWg0phtAWLHCk836A1Xann+I+Dgd3Gk64MHKZO44FfoD1KxyvbSh0qZsIoXQGGlVztIY+oitJPpRQ=="
    },
    "node_modules/fbjs-scripts": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fbjs-scripts/-/fbjs-scripts-1.2.0.tgz",
      "integrity": "sha512-5krZ8T0Bf8uky0abPoCLrfa7Orxd8UH4Qq8hRUF2RZYNMu+FmEOrBc7Ib3YVONmxTXTlLAvyrrdrVmksDb2OqQ==",
      "dependencies": {
        "@babel/core": "^7.0.0",
        "ansi-colors": "^1.0.1",
        "babel-preset-fbjs": "^3.2.0",
        "core-js": "^2.4.1",
        "cross-spawn": "^5.1.0",
        "fancy-log": "^1.3.2",
        "object-assign": "^4.0.1",
        "plugin-error": "^0.1.2",
        "semver": "^5.1.0",
        "through2": "^2.0.0"
      }
    },
    "node_modules/fbjs-scripts/node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "hasInstallScript": true
    },
    "node_modules/fbjs-scripts/node_modules/cross-spawn": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
      "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
      "dependencies": {
        "lru-cache": "^4.0.1",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "node_modules/fbjs-scripts/node_modules/lru-cache": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
      "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
      "dependencies": {
        "pseudomap": "^1.0.2",
        "yallist": "^2.1.2"
      }
    },
    "node_modules/fbjs-scripts/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/fbjs-scripts/node_modules/yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
    },
    "node_modules/figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "dependencies": {
        "escape-string-regexp": "^1.0.5"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "optional": true
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/finalhandler/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/finalhandler/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/find-babel-config": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/find-babel-config/-/find-babel-config-1.2.0.tgz",
      "integrity": "sha512-jB2CHJeqy6a820ssiqwrKMeyC6nNdmrcgkKWJWmpoxpE8RKciYJXCcXRq1h2AzCo5I5BJeN2tkGEO3hLTuePRA==",
      "dependencies": {
        "json5": "^0.5.1",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/find-babel-config/node_modules/json5": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
      "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/find-cache-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "dependencies": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/find-up/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fontfaceobserver": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fontfaceobserver/-/fontfaceobserver-2.1.0.tgz",
      "integrity": "sha512-ReOsO2F66jUa0jmv2nlM/s1MiutJx/srhAe2+TE8dJCMi02ZZOcCTxTCQFr3Yet+uODUtnr4Mewg+tNQ+4V1Ng=="
    },
    "node_modules/for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dependencies": {
        "map-cache": "^0.2.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fs-extra": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.0.0.tgz",
      "integrity": "sha512-pmEYSk3vYsG/bF651KPUXZ+hvjpgWYw/Gc7W9NFUe3ZVLczKKWIij3IKpOrQcdw4TILtibFslZ0UmR8Vvzig4g==",
      "dependencies": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^1.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "node_modules/fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "deprecated": "fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.",
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "dependencies": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      },
      "engines": {
        "node": ">= 4.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/getenv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/getenv/-/getenv-1.0.0.tgz",
      "integrity": "sha512-7yetJWqbS9sbn0vIfliPsFgoXMKn/YMF+Wuiog97x+urnSRRRZ7xB+uVkwGKzRgq9CDFfMQnE9ruL5DHv9c6Xg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.8.tgz",
      "integrity": "sha512-qkIilPUYcNhJpd33n0GBXTB1MMPp14TxEsEs0pTrsSVucApsYzW5V+Q8Qxhik6KU3evy+qkAAowTByymK0avdg=="
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dependencies": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dependencies": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/kind-of": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/hermes-engine": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/hermes-engine/-/hermes-engine-0.5.1.tgz",
      "integrity": "sha512-hLwqh8dejHayjlpvZY40e1aDCDvyP98cWx/L5DhAjSJLH8g4z9Tp08D7y4+3vErDsncPOdf1bxm+zUWpx0/Fxg=="
    },
    "node_modules/hermes-profile-transformer": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/hermes-profile-transformer/-/hermes-profile-transformer-0.0.6.tgz",
      "integrity": "sha512-cnN7bQUm65UWOy6cbGcCcZ3rpwW8Q/j4OP5aWRhEry4Z2t2aR1cjrbp0BS+KiBN0smvP1caBgAuxutvyvJILzQ==",
      "dependencies": {
        "source-map": "^0.7.3"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/hermes-profile-transformer/node_modules/source-map": {
      "version": "0.7.3",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
      "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/http-errors": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
      "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
      "dependencies": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/hyphenate-style-name": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/hyphenate-style-name/-/hyphenate-style-name-1.0.4.tgz",
      "integrity": "sha512-ygGZLjmXfPHj+ZWh6LwbC37l43MhfztxetbFCoYTM2VjkIUpeHgSNn7QIyVFj7YQ1Wl9Cbw5sholVJPzWvC2MQ=="
    },
    "node_modules/iconv-lite": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/image-size": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/image-size/-/image-size-0.6.3.tgz",
      "integrity": "sha512-47xSUiQioGaB96nqtp5/q55m0aBQSQdyIloMOc/x+QVTDZLNmXE892IIDrJ0hM1A5vcNUDD5tDffkSP5lCaIIA==",
      "bin": {
        "image-size": "bin/image-size.js"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/import-fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "dependencies": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/import-fresh/node_modules/resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "node_modules/inline-style-prefixer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/inline-style-prefixer/-/inline-style-prefixer-5.1.2.tgz",
      "integrity": "sha512-PYUF+94gDfhy+LsQxM0g3d6Hge4l1pAqOSOiZuHWzMvQEGsbRQ/ck2WioLqrY2ZkHyPgVUXxn+hrkF7D6QUGbA==",
      "dependencies": {
        "css-in-js-utils": "^2.0.0"
      }
    },
    "node_modules/inquirer": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-3.3.0.tgz",
      "integrity": "sha512-h+xtnyk4EwKvFWHrUYsWErEVR+igKtLdchu+o0Z1RL7VU/jVMFbYir2bp6bAj8efFNxWqHX0dIss6fJQ+/+qeQ==",
      "dependencies": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.0",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^2.0.4",
        "figures": "^2.0.0",
        "lodash": "^4.3.0",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rx-lite": "^4.0.8",
        "rx-lite-aggregates": "^4.0.8",
        "string-width": "^2.1.0",
        "strip-ansi": "^4.0.0",
        "through": "^2.3.6"
      }
    },
    "node_modules/inquirer/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/inquirer/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
    "node_modules/ip": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
      "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
    },
    "node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "node_modules/is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "dependencies": {
        "ci-info": "^2.0.0"
      },
      "bin": {
        "is-ci": "bin.js"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.7.0.tgz",
      "integrity": "sha512-ByY+tjCciCr+9nLryBYcSD50EOGWt95c7tIsKTG1J2ixKKXPvF7Ej3AVd+UfDydAJom3biBGDBALaO79ktwgEQ==",
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-directory": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
      "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isomorphic-fetch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-2.2.1.tgz",
      "integrity": "sha1-YRrhrPFPXoH3KVB0coGf6XM1WKk=",
      "dependencies": {
        "node-fetch": "^1.0.1",
        "whatwg-fetch": ">=0.10.0"
      }
    },
    "node_modules/jest-get-type": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
      "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-haste-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
      "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
      "dependencies": {
        "@jest/types": "^24.9.0",
        "anymatch": "^2.0.0",
        "fb-watchman": "^2.0.0",
        "graceful-fs": "^4.1.15",
        "invariant": "^2.2.4",
        "jest-serializer": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-worker": "^24.9.0",
        "micromatch": "^3.1.10",
        "sane": "^4.0.3",
        "walker": "^1.0.7"
      },
      "engines": {
        "node": ">= 6"
      },
      "optionalDependencies": {
        "fsevents": "^1.2.7"
      }
    },
    "node_modules/jest-haste-map/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-haste-map/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/jest-haste-map/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/jest-haste-map/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/braces/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/fill-range/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-haste-map/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
      "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/stack-utils": "^1.0.1",
        "chalk": "^2.0.1",
        "micromatch": "^3.1.10",
        "slash": "^2.0.0",
        "stack-utils": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-message-util/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-message-util/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/jest-message-util/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/jest-message-util/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/braces/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/fill-range/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-message-util/node_modules/slash": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jest-message-util/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-mock": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
      "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
      "dependencies": {
        "@jest/types": "^24.9.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-mock/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-mock/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/jest-mock/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/jest-serializer": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
      "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
      "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
      "dependencies": {
        "@jest/console": "^24.9.0",
        "@jest/fake-timers": "^24.9.0",
        "@jest/source-map": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "callsites": "^3.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.15",
        "is-ci": "^2.0.0",
        "mkdirp": "^0.5.1",
        "slash": "^2.0.0",
        "source-map": "^0.6.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-util/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-util/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/jest-util/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/jest-util/node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jest-util/node_modules/slash": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jest-util/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-validate": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
      "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
      "dependencies": {
        "@jest/types": "^24.9.0",
        "camelcase": "^5.3.1",
        "chalk": "^2.0.1",
        "jest-get-type": "^24.9.0",
        "leven": "^3.1.0",
        "pretty-format": "^24.9.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-validate/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-validate/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/jest-validate/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/jest-validate/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jest-validate/node_modules/pretty-format": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
      "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
      "dependencies": {
        "@jest/types": "^24.9.0",
        "ansi-regex": "^4.0.0",
        "ansi-styles": "^3.2.0",
        "react-is": "^16.8.4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-validate/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/jest-worker": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
      "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
      "dependencies": {
        "merge-stream": "^2.0.0",
        "supports-color": "^6.1.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-worker/node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
    },
    "node_modules/jest-worker/node_modules/supports-color": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
      "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jetifier": {
      "version": "1.6.8",
      "resolved": "https://registry.npmjs.org/jetifier/-/jetifier-1.6.8.tgz",
      "integrity": "sha512-3Zi16h6L5tXDRQJTb221cnRoVG9/9OvreLdLU2/ZjRv/GILL+2Cemt0IKvkowwkDpvouAU1DQPOJ7qaiHeIdrw==",
      "bin": {
        "jetifier": "bin/jetify",
        "jetifier-standalone": "bin/jetifier-standalone",
        "jetify": "bin/jetify"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsc-android": {
      "version": "245459.0.0",
      "resolved": "https://registry.npmjs.org/jsc-android/-/jsc-android-245459.0.0.tgz",
      "integrity": "sha512-wkjURqwaB1daNkDi2OYYbsLnIdC/lUM2nPXQKRs5pqEU9chDg435bjvo+LSaHotDENygHQDHe+ntUkkw2gwMtg=="
    },
    "node_modules/jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
    },
    "node_modules/json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "dependencies": {
        "jsonify": "~0.0.0"
      }
    },
    "node_modules/json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jsonfile/node_modules/universalify": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
      "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM=",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/klaw": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/klaw/-/klaw-1.3.1.tgz",
      "integrity": "sha1-QIhDO0azsbolnXh4XY6W9zugJDk=",
      "optionalDependencies": {
        "graceful-fs": "^4.1.9"
      }
    },
    "node_modules/leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
      "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA="
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "node_modules/lodash._reinterpolate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
      "integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0="
    },
    "node_modules/lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168="
    },
    "node_modules/lodash.frompairs": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.frompairs/-/lodash.frompairs-4.0.1.tgz",
      "integrity": "sha1-vE5SB/onV8E25XNhTpZkUGsrG9I="
    },
    "node_modules/lodash.isequal": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz",
      "integrity": "sha1-QVxEePK8wwEgwizhDtMib30+GOA="
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "node_modules/lodash.omit": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.omit/-/lodash.omit-4.5.0.tgz",
      "integrity": "sha1-brGa5aHuHdnfC5aeZs4Lf6MLXmA="
    },
    "node_modules/lodash.pick": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz",
      "integrity": "sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM="
    },
    "node_modules/lodash.template": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
      "integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
      "dependencies": {
        "lodash._reinterpolate": "^3.0.0",
        "lodash.templatesettings": "^4.0.0"
      }
    },
    "node_modules/lodash.templatesettings": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
      "integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
      "dependencies": {
        "lodash._reinterpolate": "^3.0.0"
      }
    },
    "node_modules/lodash.throttle": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
      "integrity": "sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ="
    },
    "node_modules/log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "dependencies": {
        "chalk": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/logkitty": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/logkitty/-/logkitty-0.7.1.tgz",
      "integrity": "sha512-/3ER20CTTbahrCrpYfPn7Xavv9diBROZpoXGVZDWMw4b/X4uuUwAC0ki85tgsdMRONURyIJbcOvS94QsUBYPbQ==",
      "dependencies": {
        "ansi-fragments": "^0.2.1",
        "dayjs": "^1.8.15",
        "yargs": "^15.1.0"
      },
      "bin": {
        "logkitty": "bin/logkitty.js"
      }
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dependencies": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "dependencies": {
        "tmpl": "1.0.x"
      }
    },
    "node_modules/map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dependencies": {
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/md5-file": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/md5-file/-/md5-file-3.2.3.tgz",
      "integrity": "sha512-3Tkp1piAHaworfcCgH0jKbTvj1jWWFgbvh2cXaNCgHwyTCBxxvD1Y04rmfpvdPm1P4oXMOpm6+2H7sr7v9v8Fw==",
      "dependencies": {
        "buffer-alloc": "^1.1.0"
      },
      "bin": {
        "md5-file": "cli.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/merge-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "dependencies": {
        "readable-stream": "^2.0.1"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/metro": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro/-/metro-0.59.0.tgz",
      "integrity": "sha512-OpVgYXyuTvouusFZQJ/UYKEbwfLmialrSCUUTGTFaBor6UMUHZgXPYtK86LzesgMqRc8aiuTQVO78iKW2Iz3wg==",
      "dependencies": {
        "@babel/code-frame": "^7.0.0",
        "@babel/core": "^7.0.0",
        "@babel/generator": "^7.5.0",
        "@babel/parser": "^7.0.0",
        "@babel/plugin-external-helpers": "^7.0.0",
        "@babel/template": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "absolute-path": "^0.0.0",
        "async": "^2.4.0",
        "babel-preset-fbjs": "^3.3.0",
        "buffer-crc32": "^0.2.13",
        "chalk": "^2.4.1",
        "ci-info": "^2.0.0",
        "concat-stream": "^1.6.0",
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "denodeify": "^1.2.1",
        "error-stack-parser": "^2.0.6",
        "eventemitter3": "^3.0.0",
        "fbjs": "^1.0.0",
        "fs-extra": "^1.0.0",
        "graceful-fs": "^4.1.3",
        "image-size": "^0.6.0",
        "invariant": "^2.2.4",
        "jest-haste-map": "^24.9.0",
        "jest-worker": "^24.9.0",
        "json-stable-stringify": "^1.0.1",
        "lodash.throttle": "^4.1.1",
        "merge-stream": "^1.0.1",
        "metro-babel-register": "0.59.0",
        "metro-babel-transformer": "0.59.0",
        "metro-cache": "0.59.0",
        "metro-config": "0.59.0",
        "metro-core": "0.59.0",
        "metro-inspector-proxy": "0.59.0",
        "metro-minify-uglify": "0.59.0",
        "metro-react-native-babel-preset": "0.59.0",
        "metro-resolver": "0.59.0",
        "metro-source-map": "0.59.0",
        "metro-symbolicate": "0.59.0",
        "mime-types": "2.1.11",
        "mkdirp": "^0.5.1",
        "node-fetch": "^2.2.0",
        "nullthrows": "^1.1.1",
        "resolve": "^1.5.0",
        "rimraf": "^2.5.4",
        "serialize-error": "^2.1.0",
        "source-map": "^0.5.6",
        "strip-ansi": "^4.0.0",
        "temp": "0.8.3",
        "throat": "^4.1.0",
        "wordwrap": "^1.0.0",
        "ws": "^1.1.5",
        "xpipe": "^1.0.5",
        "yargs": "^14.2.0"
      },
      "bin": {
        "metro": "src/cli.js"
      }
    },
    "node_modules/metro-babel-register": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-babel-register/-/metro-babel-register-0.59.0.tgz",
      "integrity": "sha512-JtWc29erdsXO/V3loenXKw+aHUXgj7lt0QPaZKPpctLLy8kcEpI/8pfXXgVK9weXICCpCnYtYncIosAyzh0xjg==",
      "dependencies": {
        "@babel/core": "^7.0.0",
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/register": "^7.0.0",
        "escape-string-regexp": "^1.0.5"
      }
    },
    "node_modules/metro-babel-transformer": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-babel-transformer/-/metro-babel-transformer-0.59.0.tgz",
      "integrity": "sha512-fdZJl8rs54GVFXokxRdD7ZrQ1TJjxWzOi/xSP25VR3E8tbm3nBZqS+/ylu643qSr/IueABR+jrlqAyACwGEf6w==",
      "dependencies": {
        "@babel/core": "^7.0.0",
        "metro-source-map": "0.59.0"
      }
    },
    "node_modules/metro-cache": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-cache/-/metro-cache-0.59.0.tgz",
      "integrity": "sha512-ryWNkSnpyADfRpHGb8BRhQ3+k8bdT/bsxMH2O0ntlZYZ188d8nnYWmxbRvFmEzToJxe/ol4uDw0tJFAaQsN8KA==",
      "dependencies": {
        "jest-serializer": "^24.9.0",
        "metro-core": "0.59.0",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.5.4"
      }
    },
    "node_modules/metro-config": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-config/-/metro-config-0.59.0.tgz",
      "integrity": "sha512-MDsknFG9vZ4Nb5VR6OUDmGHaWz6oZg/FtE3up1zVBKPVRTXE1Z+k7zypnPtMXjMh3WHs/Sy4+wU1xnceE/zdnA==",
      "dependencies": {
        "cosmiconfig": "^5.0.5",
        "jest-validate": "^24.9.0",
        "metro": "0.59.0",
        "metro-cache": "0.59.0",
        "metro-core": "0.59.0"
      }
    },
    "node_modules/metro-core": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-core/-/metro-core-0.59.0.tgz",
      "integrity": "sha512-kb5LKvV5r2pqMEzGyTid8ai2mIjW13NMduQ8oBmfha7/EPTATcTQ//s+bkhAs1toQD8vqVvjAb0cPNjWQEmcmQ==",
      "dependencies": {
        "jest-haste-map": "^24.9.0",
        "lodash.throttle": "^4.1.1",
        "metro-resolver": "0.59.0",
        "wordwrap": "^1.0.0"
      }
    },
    "node_modules/metro-inspector-proxy": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-inspector-proxy/-/metro-inspector-proxy-0.59.0.tgz",
      "integrity": "sha512-hPeAuQcofTOH0F+2GEZqWkvkVY1/skezSSlMocDQDaqds+Kw6JgdA7FlZXxnKmQ/jYrWUzff/pl8SUCDwuYthQ==",
      "dependencies": {
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "ws": "^1.1.5",
        "yargs": "^14.2.0"
      },
      "bin": {
        "metro-inspector-proxy": "src/cli.js"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/cliui": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
      "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
      "dependencies": {
        "string-width": "^3.1.0",
        "strip-ansi": "^5.2.0",
        "wrap-ansi": "^5.1.0"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
    },
    "node_modules/metro-inspector-proxy/node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/metro-inspector-proxy/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/string-width": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
      "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
      "dependencies": {
        "emoji-regex": "^7.0.1",
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^5.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/wrap-ansi": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
      "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
      "dependencies": {
        "ansi-styles": "^3.2.0",
        "string-width": "^3.0.0",
        "strip-ansi": "^5.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/ws": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
      "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
      "dependencies": {
        "options": ">=0.0.5",
        "ultron": "1.0.x"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/yargs": {
      "version": "14.2.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz",
      "integrity": "sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==",
      "dependencies": {
        "cliui": "^5.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^3.0.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^3.0.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^15.0.1"
      }
    },
    "node_modules/metro-inspector-proxy/node_modules/yargs-parser": {
      "version": "15.0.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.3.tgz",
      "integrity": "sha512-/MVEVjTXy/cGAjdtQf8dW3V9b97bPN7rNn8ETj6BmAQL7ibC7O1Q9SPJbGjgh3SlwoBNXMzj/ZGIj8mBgl12YA==",
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      }
    },
    "node_modules/metro-minify-uglify": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-minify-uglify/-/metro-minify-uglify-0.59.0.tgz",
      "integrity": "sha512-7IzVgCVWZMymgZ/quieg/9v5EQ8QmZWAgDc86Zp9j0Vy6tQTjUn6jlU+YAKW3mfMEjMr6iIUzCD8YklX78tFAw==",
      "dependencies": {
        "uglify-es": "^3.1.9"
      }
    },
    "node_modules/metro-react-native-babel-preset": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-preset/-/metro-react-native-babel-preset-0.59.0.tgz",
      "integrity": "sha512-BoO6ncPfceIDReIH8pQ5tQptcGo5yRWQXJGVXfANbiKLq4tfgdZB1C1e2rMUJ6iypmeJU9dzl+EhPmIFKtgREg==",
      "dependencies": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-export-default-from": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-syntax-dynamic-import": "^7.0.0",
        "@babel/plugin-syntax-export-default-from": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.2.0",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-syntax-optional-chaining": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-assign": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-react-jsx-self": "^7.0.0",
        "@babel/plugin-transform-react-jsx-source": "^7.0.0",
        "@babel/plugin-transform-regenerator": "^7.0.0",
        "@babel/plugin-transform-runtime": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-sticky-regex": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "@babel/plugin-transform-typescript": "^7.5.0",
        "@babel/plugin-transform-unicode-regex": "^7.0.0",
        "@babel/template": "^7.0.0",
        "react-refresh": "^0.4.0"
      },
      "peerDependencies": {
        "@babel/core": "*"
      }
    },
    "node_modules/metro-react-native-babel-transformer": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-transformer/-/metro-react-native-babel-transformer-0.59.0.tgz",
      "integrity": "sha512-1O3wrnMq4NcPQ1asEcl9lRDn/t+F1Oef6S9WaYVIKEhg9m/EQRGVrrTVP+R6B5Eeaj3+zNKbzM8Dx/NWy1hUbQ==",
      "dependencies": {
        "@babel/core": "^7.0.0",
        "babel-preset-fbjs": "^3.3.0",
        "metro-babel-transformer": "0.59.0",
        "metro-react-native-babel-preset": "0.59.0",
        "metro-source-map": "0.59.0"
      },
      "peerDependencies": {
        "@babel/core": "*"
      }
    },
    "node_modules/metro-resolver": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-resolver/-/metro-resolver-0.59.0.tgz",
      "integrity": "sha512-lbgiumnwoVosffEI96z0FGuq1ejTorHAj3QYUPmp5dFMfitRxLP7Wm/WP9l4ZZjIptxTExsJwuEff1SLRCPD9w==",
      "dependencies": {
        "absolute-path": "^0.0.0"
      }
    },
    "node_modules/metro-source-map": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-source-map/-/metro-source-map-0.59.0.tgz",
      "integrity": "sha512-0w5CmCM+ybSqXIjqU4RiK40t4bvANL6lafabQ2GP2XD3vSwkLY+StWzCtsb4mPuyi9R/SgoLBel+ZOXHXAH0eQ==",
      "dependencies": {
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "invariant": "^2.2.4",
        "metro-symbolicate": "0.59.0",
        "ob1": "0.59.0",
        "source-map": "^0.5.6",
        "vlq": "^1.0.0"
      }
    },
    "node_modules/metro-symbolicate": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-symbolicate/-/metro-symbolicate-0.59.0.tgz",
      "integrity": "sha512-asLaF2A7rndrToGFIknL13aiohwPJ95RKHf0NM3hP/nipiLDoMzXT6ZnQvBqDxkUKyP+51AI75DMtb+Wcyw4Bw==",
      "dependencies": {
        "invariant": "^2.2.4",
        "metro-source-map": "0.59.0",
        "source-map": "^0.5.6",
        "through2": "^2.0.1",
        "vlq": "^1.0.0"
      },
      "bin": {
        "metro-symbolicate": "src/symbolicate.js"
      },
      "engines": {
        "node": ">=8.3"
      }
    },
    "node_modules/metro/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/metro/node_modules/cliui": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
      "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
      "dependencies": {
        "string-width": "^3.1.0",
        "strip-ansi": "^5.2.0",
        "wrap-ansi": "^5.1.0"
      }
    },
    "node_modules/metro/node_modules/cliui/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/cliui/node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "hasInstallScript": true
    },
    "node_modules/metro/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/metro/node_modules/emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
    },
    "node_modules/metro/node_modules/fbjs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
      "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
      "dependencies": {
        "core-js": "^2.4.1",
        "fbjs-css-vars": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "node_modules/metro/node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/fs-extra": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-1.0.0.tgz",
      "integrity": "sha1-zTzl9+fLYUWIP8rjGR6Yd/hYeVA=",
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "jsonfile": "^2.1.0",
        "klaw": "^1.0.0"
      }
    },
    "node_modules/metro/node_modules/jsonfile": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-2.4.0.tgz",
      "integrity": "sha1-NzaitCi4e72gzIO1P6PWM6NcKug=",
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/metro/node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/mime-db": {
      "version": "1.23.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.23.0.tgz",
      "integrity": "sha1-oxtAcK2uon1zLqMzdApk0OyaZlk=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/metro/node_modules/mime-types": {
      "version": "2.1.11",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.11.tgz",
      "integrity": "sha1-wlnEcb2oCKhdbNGTtDCl+uRHOzw=",
      "dependencies": {
        "mime-db": "~1.23.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/metro/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/metro/node_modules/node-fetch": {
      "version": "2.6.5",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.5.tgz",
      "integrity": "sha512-mmlIVHJEu5rnIxgEgez6b9GgWXbkZj5YZ7fx+2r94a2E+Uirsp6HsPTPlomfdHtpt/B0cdKviwkoaM6pyvUOpQ==",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      }
    },
    "node_modules/metro/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/metro/node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/string-width": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
      "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
      "dependencies": {
        "emoji-regex": "^7.0.1",
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^5.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/string-width/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/string-width/node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/metro/node_modules/wrap-ansi": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
      "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
      "dependencies": {
        "ansi-styles": "^3.2.0",
        "string-width": "^3.0.0",
        "strip-ansi": "^5.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/metro/node_modules/ws": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
      "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
      "dependencies": {
        "options": ">=0.0.5",
        "ultron": "1.0.x"
      }
    },
    "node_modules/metro/node_modules/yargs": {
      "version": "14.2.3",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz",
      "integrity": "sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==",
      "dependencies": {
        "cliui": "^5.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^3.0.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^3.0.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^15.0.1"
      }
    },
    "node_modules/metro/node_modules/yargs-parser": {
      "version": "15.0.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.3.tgz",
      "integrity": "sha512-/MVEVjTXy/cGAjdtQf8dW3V9b97bPN7rNn8ETj6BmAQL7ibC7O1Q9SPJbGjgh3SlwoBNXMzj/ZGIj8mBgl12YA==",
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
      "dependencies": {
        "braces": "^3.0.1",
        "picomatch": "^2.2.3"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/mime/-/mime-2.5.2.tgz",
      "integrity": "sha512-tqkh47FzKeCPD2PUiPB6pkbMzsCasjxAfC62/Wap5qrUWcb+sFasXUC5I3gYM5iBM8v/Qpn4UK0x+j0iHyFPDg==",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mime-db": {
      "version": "1.50.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.50.0.tgz",
      "integrity": "sha512-9tMZCDlYHqeERXEHO9f/hKfNXhre5dK2eE/krIvUjZbS2KPcqGDfNShIWS1uW9XOTKQKqK6qbeOci18rbfW77A==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.33",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.33.tgz",
      "integrity": "sha512-plLElXp7pRDd0bNZHw+nMd52vRYjLwQjygaNg7ddJ2uJtTlmnTCjWuPKxVu6//AdaRuME84SvLW91sIkBqGT0g==",
      "dependencies": {
        "mime-db": "1.50.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "node_modules/mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dependencies": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s="
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nan": {
      "version": "2.15.0",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.15.0.tgz",
      "integrity": "sha512-8ZtvEnA2c5aYCZYd1cvgdnU6cqwixRoYg70xPLWUws5ORTa/lnw+u4amixRS/Ac5U5mQVgp9pnlSUnbNWFaWZQ==",
      "optional": true
    },
    "node_modules/nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nanomatch/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nanomatch/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
    },
    "node_modules/nocache": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/nocache/-/nocache-2.1.0.tgz",
      "integrity": "sha512-0L9FvHG3nfnnmaEQPjT9xhfN4ISk0A8/2j4M37Np4mcDesJjHgEUfgPhdCyZuFI954tjokaIj/A3NdpFNdEh4Q==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/node-fetch": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-1.7.3.tgz",
      "integrity": "sha512-NhZ4CsKx7cYm2vSrBAr2PvFOe6sWDf0UYLRqA6svUYg7+/TSfVAu49jYC4BvQ4Sms9SZgdqGBgroqfDhJdTyKQ==",
      "dependencies": {
        "encoding": "^0.1.11",
        "is-stream": "^1.0.1"
      }
    },
    "node_modules/node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
    },
    "node_modules/node-modules-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/node-releases": {
      "version": "1.1.77",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.77.tgz",
      "integrity": "sha512-rB1DUFUNAN4Gn9keO2K1efO35IDK7yKHCdCaIMvFO7yUYmmZYeDjnGKle26G4rwj+LKRQpjyUUvMkPglwGCYNQ=="
    },
    "node_modules/node-stream-zip": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/node-stream-zip/-/node-stream-zip-1.15.0.tgz",
      "integrity": "sha512-LN4fydt9TqhZhThkZIVQnF9cwjU3qmUH9h78Mx/K7d3VvfRqqwthLwJEUOEL0QPZ0XQmNN7be5Ggit5+4dq3Bw==",
      "engines": {
        "node": ">=0.12.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/antelle"
      }
    },
    "node_modules/normalize-css-color": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/normalize-css-color/-/normalize-css-color-1.0.2.tgz",
      "integrity": "sha1-Apkel8zOxmI/5XOvu/Deah8+n40="
    },
    "node_modules/normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dependencies": {
        "remove-trailing-separator": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "dependencies": {
        "path-key": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/nullthrows": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/nullthrows/-/nullthrows-1.1.1.tgz",
      "integrity": "sha512-2vPPEi+Z7WqML2jZYddDIfy5Dqb0r2fze2zTxNNknZaFpVHU3mFB3R+DWeJWGVx0ecvttSGlJTI+WG+8Z4cDWw=="
    },
    "node_modules/ob1": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/ob1/-/ob1-0.59.0.tgz",
      "integrity": "sha512-opXMTxyWJ9m68ZglCxwo0OPRESIC/iGmKFPXEXzMZqsVIrgoRXOHmoMDkQzz4y3irVjbyPJRAh5pI9fd0MJTFQ=="
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dependencies": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/is-descriptor/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dependencies": {
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dependencies": {
        "mimic-fn": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/open": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/open/-/open-6.4.0.tgz",
      "integrity": "sha512-IFenVPgF70fSm1keSd2iDBIDIBZkroLeuffXq+wKTzTJlBpesFWojV9lb8mzOfaAzM1sr7HQHuO0vtV0zYekGg==",
      "dependencies": {
        "is-wsl": "^1.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/options": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/options/-/options-0.0.6.tgz",
      "integrity": "sha1-7CLTEoBrtT5zF3Pnza788cZDEo8=",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ora": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-3.4.0.tgz",
      "integrity": "sha512-eNwHudNbO1folBP3JsZ19v9azXWtQZjICdr3Q0TDPIaeBQ3mXLrh54wM+er0+hSp+dWKf+Z8KM58CYzEyIYxYg==",
      "dependencies": {
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^2.0.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^5.2.0",
        "wcwidth": "^1.0.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "dependencies": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/parse-node-version": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA==",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g=="
    },
    "node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "node_modules/picocolors": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA=="
    },
    "node_modules/picomatch": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz",
      "integrity": "sha512-lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw==",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
      "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
      "dependencies": {
        "node-modules-regexp": "^1.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/pkg-dir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "dependencies": {
        "find-up": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-dir/node_modules/find-up": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
      "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
      "dependencies": {
        "locate-path": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-dir/node_modules/locate-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
      "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
      "dependencies": {
        "p-locate": "^3.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-dir/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pkg-dir/node_modules/p-locate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
      "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
      "dependencies": {
        "p-limit": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-2.0.0.tgz",
      "integrity": "sha1-yBmscoBZpGHKscOImivjxJoATX8=",
      "dependencies": {
        "find-up": "^2.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-up/node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-up/node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-up/node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-up/node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pkg-up/node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/plist": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/plist/-/plist-3.0.4.tgz",
      "integrity": "sha512-ksrr8y9+nXOxQB2osVNqrgvX/XQPOXaU4BQMKjYq8PvaY1U18mo+fKgBSwzK+luSyinOuPae956lSVcBwxlAMg==",
      "dependencies": {
        "base64-js": "^1.5.1",
        "xmlbuilder": "^9.0.7"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/plist/node_modules/xmlbuilder": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.7.tgz",
      "integrity": "sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0=",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/plugin-error": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/plugin-error/-/plugin-error-0.1.2.tgz",
      "integrity": "sha1-O5uzM1zPAPQl4HQ34ZJ2ln2kes4=",
      "dependencies": {
        "ansi-cyan": "^0.1.1",
        "ansi-red": "^0.1.1",
        "arr-diff": "^1.0.1",
        "arr-union": "^2.0.1",
        "extend-shallow": "^1.1.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pretty-format": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-26.6.2.tgz",
      "integrity": "sha512-7AeGuCYNGmycyQbCqd/3PWH4eOoX/OiCa0uphp57NVTeAGdJGaAliecxwBDHYQCIvrW7aDBZCYeNTP/WX69mkg==",
      "dependencies": {
        "@jest/types": "^26.6.2",
        "ansi-regex": "^5.0.0",
        "ansi-styles": "^4.0.0",
        "react-is": "^17.0.1"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/pretty-format/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/pretty-format/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "node_modules/promise": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
      "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
      "dependencies": {
        "asap": "~2.0.3"
      }
    },
    "node_modules/prop-types": {
      "version": "15.7.2",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
      "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.8.1"
      }
    },
    "node_modules/prop-types/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
    },
    "node_modules/pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/querystringify": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
      "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ=="
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/react": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react/-/react-16.13.1.tgz",
      "integrity": "sha512-YMZQQq32xHLX0bz5Mnibv1/LHb3Sqzngu7xstSM+vrkE5Kzr9xE0yMByK5kMoTK30YVJE61WfbxIFFvfeDKT1w==",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-devtools-core": {
      "version": "4.19.2",
      "resolved": "https://registry.npmjs.org/react-devtools-core/-/react-devtools-core-4.19.2.tgz",
      "integrity": "sha512-Z9K+h9gjEwimZtZB1NsWm5hQsxAcElW0GI2KXLQDpk2o1YIZQ+lOSesUr0npUyLeb37k2hTtyxp8wumeRJpG5Q==",
      "dependencies": {
        "shell-quote": "^1.6.1",
        "ws": "^7"
      }
    },
    "node_modules/react-dom": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-16.13.1.tgz",
      "integrity": "sha512-81PIMmVLnCNLO/fFOQxdQkvEq/+Hfpv24XNJfpyZhTRfO0QcmQIF/PgCa1zCOj2w1hrn12MFLyaJ/G0+Mxtfag==",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2",
        "scheduler": "^0.19.1"
      },
      "peerDependencies": {
        "react": "^16.13.1"
      }
    },
    "node_modules/react-is": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
      "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
    },
    "node_modules/react-native": {
      "version": "0.63.2",
      "resolved": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
      "integrity": "sha512-qWR6pcG4yDu/Rthm+DvAS017rL38LbZFnJv/k4HL4ZUH/WhKuqC+stD7TlpaOBb3N2bkydm9s+GCa14T41MLEg==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.0.0",
        "@react-native-community/cli": "^4.14.0",
        "@react-native-community/cli-platform-android": "^4.13.0",
        "@react-native-community/cli-platform-ios": "^4.13.0",
        "abort-controller": "^3.0.0",
        "anser": "^1.4.9",
        "base64-js": "^1.1.2",
        "event-target-shim": "^5.0.1",
        "fbjs": "^1.0.0",
        "fbjs-scripts": "^1.1.0",
        "hermes-engine": "~0.5.0",
        "invariant": "^2.2.4",
        "jsc-android": "^245459.0.0",
        "metro-babel-register": "0.59.0",
        "metro-react-native-babel-transformer": "0.59.0",
        "metro-source-map": "0.59.0",
        "nullthrows": "^1.1.1",
        "pretty-format": "^24.9.0",
        "promise": "^8.0.3",
        "prop-types": "^15.7.2",
        "react-devtools-core": "^4.6.0",
        "react-refresh": "^0.4.0",
        "regenerator-runtime": "^0.13.2",
        "scheduler": "0.19.1",
        "stacktrace-parser": "^0.1.3",
        "use-subscription": "^1.0.0",
        "whatwg-fetch": "^3.0.0"
      },
      "bin": {
        "react-native": "cli.js"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": "16.13.1"
      }
    },
    "node_modules/react-native-web": {
      "version": "0.13.18",
      "resolved": "https://registry.npmjs.org/react-native-web/-/react-native-web-0.13.18.tgz",
      "integrity": "sha512-WR/0ECAmwLQ2+2cL2Ur+0/swXFAtcSM0URoADJmG6D4MnY+wGc91JO8LoOTlgY0USBOY+qG/beRrjFa+RAuOiA==",
      "dependencies": {
        "array-find-index": "^1.0.2",
        "create-react-class": "^15.6.2",
        "deep-assign": "^3.0.0",
        "fbjs": "^1.0.0",
        "hyphenate-style-name": "^1.0.3",
        "inline-style-prefixer": "^5.1.0",
        "normalize-css-color": "^1.0.2",
        "prop-types": "^15.6.0",
        "react-timer-mixin": "^0.13.4"
      },
      "peerDependencies": {
        "react": ">=16.5.1",
        "react-dom": ">=16.5.1"
      }
    },
    "node_modules/react-native-web/node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "hasInstallScript": true
    },
    "node_modules/react-native-web/node_modules/fbjs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
      "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
      "dependencies": {
        "core-js": "^2.4.1",
        "fbjs-css-vars": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "node_modules/react-native/node_modules/@jest/types": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
      "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^13.0.0"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/react-native/node_modules/@react-native-community/cli": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli/-/cli-4.14.0.tgz",
      "integrity": "sha512-EYJKBuxFxAu/iwNUfwDq41FjORpvSh1wvQ3qsHjzcR5uaGlWEOJrd3uNJDuKBAS0TVvbEesLF9NEXipjyRVr4Q==",
      "dependencies": {
        "@hapi/joi": "^15.0.3",
        "@react-native-community/cli-debugger-ui": "^4.13.1",
        "@react-native-community/cli-hermes": "^4.13.0",
        "@react-native-community/cli-server-api": "^4.13.1",
        "@react-native-community/cli-tools": "^4.13.0",
        "@react-native-community/cli-types": "^4.10.1",
        "chalk": "^3.0.0",
        "command-exists": "^1.2.8",
        "commander": "^2.19.0",
        "cosmiconfig": "^5.1.0",
        "deepmerge": "^3.2.0",
        "envinfo": "^7.7.2",
        "execa": "^1.0.0",
        "find-up": "^4.1.0",
        "fs-extra": "^8.1.0",
        "glob": "^7.1.3",
        "graceful-fs": "^4.1.3",
        "inquirer": "^3.0.6",
        "leven": "^3.1.0",
        "lodash": "^4.17.15",
        "metro": "^0.59.0",
        "metro-config": "^0.59.0",
        "metro-core": "^0.59.0",
        "metro-react-native-babel-transformer": "^0.59.0",
        "metro-resolver": "^0.59.0",
        "minimist": "^1.2.0",
        "mkdirp": "^0.5.1",
        "node-stream-zip": "^1.9.1",
        "ora": "^3.4.0",
        "pretty-format": "^25.2.0",
        "semver": "^6.3.0",
        "serve-static": "^1.13.1",
        "strip-ansi": "^5.2.0",
        "sudo-prompt": "^9.0.0",
        "wcwidth": "^1.0.1"
      },
      "bin": {
        "react-native": "build/bin.js"
      },
      "engines": {
        "node": ">=8.3"
      },
      "peerDependencies": {
        "react-native": ">=0.62.0-rc.0 <0.64.0"
      }
    },
    "node_modules/react-native/node_modules/@react-native-community/cli/node_modules/@jest/types": {
      "version": "25.5.0",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.5.0.tgz",
      "integrity": "sha512-OXD0RgQ86Tu3MazKo8bnrkDRaDXXMGUqd+kTtLtK1Zb7CRzQcaSRPPPV37SvYTdevXEBVxe0HXylEjs8ibkmCw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^1.1.1",
        "@types/yargs": "^15.0.0",
        "chalk": "^3.0.0"
      },
      "engines": {
        "node": ">= 8.3"
      }
    },
    "node_modules/react-native/node_modules/@react-native-community/cli/node_modules/@types/yargs": {
      "version": "15.0.14",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.14.tgz",
      "integrity": "sha512-yEJzHoxf6SyQGhBhIYGXQDSCkJjB6HohDShto7m8vaKg9Yp0Yn8+71J9eakh2bnPg6BfsH9PRMhiRTZnd4eXGQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/react-native/node_modules/@react-native-community/cli/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/react-native/node_modules/@react-native-community/cli/node_modules/pretty-format": {
      "version": "25.5.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.5.0.tgz",
      "integrity": "sha512-kbo/kq2LQ/A/is0PQwsEHM7Ca6//bGPPvU6UnsdDRSKTWxT/ru/xb88v4BJf6a69H+uTytOEsTusT9ksd/1iWQ==",
      "dependencies": {
        "@jest/types": "^25.5.0",
        "ansi-regex": "^5.0.0",
        "ansi-styles": "^4.0.0",
        "react-is": "^16.12.0"
      },
      "engines": {
        "node": ">= 8.3"
      }
    },
    "node_modules/react-native/node_modules/@types/istanbul-reports": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
      "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
      "dependencies": {
        "@types/istanbul-lib-coverage": "*",
        "@types/istanbul-lib-report": "*"
      }
    },
    "node_modules/react-native/node_modules/@types/yargs": {
      "version": "13.0.12",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
      "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
      "dependencies": {
        "@types/yargs-parser": "*"
      }
    },
    "node_modules/react-native/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/chalk/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/react-native/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/react-native/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/react-native/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
    },
    "node_modules/react-native/node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "hasInstallScript": true
    },
    "node_modules/react-native/node_modules/fbjs": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
      "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
      "dependencies": {
        "core-js": "^2.4.1",
        "fbjs-css-vars": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "node_modules/react-native/node_modules/fbjs/node_modules/promise": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
      "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
      "dependencies": {
        "asap": "~2.0.3"
      }
    },
    "node_modules/react-native/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/fs-extra": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
      "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      },
      "engines": {
        "node": ">=6 <7 || >=8"
      }
    },
    "node_modules/react-native/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/jsonfile": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/react-native/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/react-native/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/pretty-format": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
      "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
      "dependencies": {
        "@jest/types": "^24.9.0",
        "ansi-regex": "^4.0.0",
        "ansi-styles": "^3.2.0",
        "react-is": "^16.8.4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/react-native/node_modules/pretty-format/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react-native/node_modules/promise": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/promise/-/promise-8.1.0.tgz",
      "integrity": "sha512-W04AqnILOL/sPRXziNicCjSNRruLAuIHEOVBazepu0545DDNGYHz7ar9ZgZ1fMU8/MA4mVxp5rkBWRi6OXIy3Q==",
      "dependencies": {
        "asap": "~2.0.6"
      }
    },
    "node_modules/react-native/node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
    },
    "node_modules/react-native/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/react-native/node_modules/universalify": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.4.3.tgz",
      "integrity": "sha512-Hwln1VNuGl/6bVwnd0Xdn1e84gT/8T9aYNL+HAKDArLCS7LWjwr7StE30IEYbIkx0Vi3vs+coQxe+SQDbGbbpA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-timer-mixin": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/react-timer-mixin/-/react-timer-mixin-0.13.4.tgz",
      "integrity": "sha512-4+ow23tp/Tv7hBM5Az5/Be/eKKF7DIvJ09voz5LyHGQaqqz9WV8YMs31eFvcYQs7d451LSg7kDJV70XYN/Ug/Q=="
    },
    "node_modules/readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A=="
    },
    "node_modules/regenerate-unicode-properties": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-9.0.0.tgz",
      "integrity": "sha512-3E12UeNSPfjrgwjkR81m5J7Aw/T55Tu7nUyZVQYCKEOs+2dkxEY+DpPtZzO4YruuiPb7NkYLVcyJC4+zCbk5pA==",
      "dependencies": {
        "regenerate": "^1.4.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.13.9",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz",
      "integrity": "sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA=="
    },
    "node_modules/regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "dependencies": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "node_modules/regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dependencies": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regex-not/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regexpu-core": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.8.0.tgz",
      "integrity": "sha512-1F6bYsoYiz6is+oz70NWur2Vlh9KWtswuRuzJOfeYUrfPX2o8n74AnUVaOGDbUqVGO9fNHu48/pjJO4sNVwsOg==",
      "dependencies": {
        "regenerate": "^1.4.2",
        "regenerate-unicode-properties": "^9.0.0",
        "regjsgen": "^0.5.2",
        "regjsparser": "^0.7.0",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A=="
    },
    "node_modules/regjsparser": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.7.0.tgz",
      "integrity": "sha512-A4pcaORqmNMDVwUjWoTzuhwMGpP+NykpfqAsEgI1FSH/EzC7lrN5TMd+kN8YCovX+jMpu8eaqXgXPCa0g8FQNQ==",
      "dependencies": {
        "jsesc": "~0.5.0"
      },
      "bin": {
        "regjsparser": "bin/parser"
      }
    },
    "node_modules/regjsparser/node_modules/jsesc": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
      "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
      "bin": {
        "jsesc": "bin/jsesc"
      }
    },
    "node_modules/remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
    },
    "node_modules/repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
    },
    "node_modules/requires-port": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8="
    },
    "node_modules/reselect": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-3.0.1.tgz",
      "integrity": "sha1-79qpjqdFEyTQkrKyFjpqHXqaIUc="
    },
    "node_modules/resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dependencies": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "deprecated": "https://github.com/lydell/resolve-url#deprecated"
    },
    "node_modules/restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dependencies": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/rsvp": {
      "version": "4.8.5",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
      "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA==",
      "engines": {
        "node": "6.* || >= 7.*"
      }
    },
    "node_modules/run-async": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
      "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rx-lite": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite/-/rx-lite-4.0.8.tgz",
      "integrity": "sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ="
    },
    "node_modules/rx-lite-aggregates": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz",
      "integrity": "sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=",
      "dependencies": {
        "rx-lite": "*"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "node_modules/safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dependencies": {
        "ret": "~0.1.10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "node_modules/sane": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
      "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
      "deprecated": "some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added",
      "dependencies": {
        "@cnakazawa/watch": "^1.0.3",
        "anymatch": "^2.0.0",
        "capture-exit": "^2.0.0",
        "exec-sh": "^0.3.2",
        "execa": "^1.0.0",
        "fb-watchman": "^2.0.0",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5"
      },
      "bin": {
        "sane": "src/cli.js"
      },
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/sane/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/braces/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fill-range/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "node_modules/scheduler": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.19.1.tgz",
      "integrity": "sha512-n/zwRWRYSUj0/3g/otKDRPMh6qv2SYMWNq85IEa8iZyAv8od9zDYpGSnpBEjNgcMNq6Scbu5KfIPxNF72R/2EA==",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    },
    "node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/send/node_modules/debug/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/send/node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
    },
    "node_modules/serialize-error": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-2.1.0.tgz",
      "integrity": "sha1-ULZ51WNc34Rme9yOWa9OW4HV9go=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dependencies": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "node_modules/set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
    },
    "node_modules/setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "node_modules/shallow-clone": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
      "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
      "dependencies": {
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.6.1.tgz",
      "integrity": "sha1-9HgZSczkAmlxJ0MOo7PFR29IF2c=",
      "dependencies": {
        "array-filter": "~0.0.0",
        "array-map": "~0.0.0",
        "array-reduce": "~0.0.0",
        "jsonify": "~0.0.0"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.5.tgz",
      "integrity": "sha512-KWcOiKeQj6ZyXx7zq4YxSMgHRlod4czeBQZrPb8OKcohcqAXShm7E20kEMle9WBt26hFcAf0qLOcp5zmY7kOqQ=="
    },
    "node_modules/simple-plist": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/simple-plist/-/simple-plist-1.1.1.tgz",
      "integrity": "sha512-pKMCVKvZbZTsqYR6RKgLfBHkh2cV89GXcA/0CVPje3sOiNOnXA8+rp/ciAMZ7JRaUdLzlEM6JFfUn+fS6Nt3hg==",
      "dependencies": {
        "bplist-creator": "0.0.8",
        "bplist-parser": "0.2.0",
        "plist": "^3.0.1"
      }
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/slice-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
      "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
      "dependencies": {
        "ansi-styles": "^3.2.0",
        "astral-regex": "^1.0.0",
        "is-fullwidth-code-point": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/slugify": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/slugify/-/slugify-1.6.1.tgz",
      "integrity": "sha512-5ofqMTbetNhxlzjYYLBaZFQd6oiTuSkQlyfPEFIMwgUABlZQ0hbk5xIV9Ydd5jghWeRoO7GkiJliUvTpLOjNRA==",
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dependencies": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dependencies": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dependencies": {
        "kind-of": "^3.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/snapdragon/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dependencies": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.20",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.20.tgz",
      "integrity": "sha512-n1lZZ8Ve4ksRqizaBQgxXDgKwttHDhyfQjA6YZZn8+AroHbsIz+JjwxQDxbp+7y5OYCI8t1Yk7etjD9CRd2hIw==",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw=="
    },
    "node_modules/split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dependencies": {
        "extend-shallow": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/split-string/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
    },
    "node_modules/stack-utils": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.5.tgz",
      "integrity": "sha512-KZiTzuV3CnSnSvgMRrARVCj+Ht7rMbauGDK0LdVFRGyenwdylpajAp4Q0i6SX8rEmbTpMMf6ryq2gb8pPq2WgQ==",
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stack-utils/node_modules/escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stackframe": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/stackframe/-/stackframe-1.2.0.tgz",
      "integrity": "sha512-GrdeshiRmS1YLMYgzF16olf2jJ/IzxXY9lhKOskuVziubpTYcYqyOwYeJKzQkwy7uN0fYSsbsC4RQaXf9LCrYA=="
    },
    "node_modules/stacktrace-parser": {
      "version": "0.1.10",
      "resolved": "https://registry.npmjs.org/stacktrace-parser/-/stacktrace-parser-0.1.10.tgz",
      "integrity": "sha512-KJP1OCML99+8fhOHxwwzyWrlUuVX5GQ0ZpJTd1DFXhdkrvg1szxfHhawXUZ3g9TkXORQd4/WG68jMlQZ2p8wlg==",
      "dependencies": {
        "type-fest": "^0.7.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dependencies": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/stream-buffers": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/stream-buffers/-/stream-buffers-2.2.0.tgz",
      "integrity": "sha1-kdX1Ew0c75bc+n9yaUUYh0HQnuQ=",
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-ansi/node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sucrase": {
      "version": "3.20.2",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.20.2.tgz",
      "integrity": "sha512-EdJ5M6VEvToIZwIWiZ71cxe4CklDRG8PdSjUSst+BZCUGlaEhnrdQo/LOXsuq3MjWRbfepg1XTffClK0Tmo0HQ==",
      "dependencies": {
        "commander": "^4.0.0",
        "glob": "7.1.6",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/sucrase/node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/sudo-prompt": {
      "version": "9.2.1",
      "resolved": "https://registry.npmjs.org/sudo-prompt/-/sudo-prompt-9.2.1.tgz",
      "integrity": "sha512-Mu7R0g4ig9TUuGSxJavny5Rv0egCEtpZRNMrZaYS1vxkiIxGiGUwoezU3LazIQ+KE04hTrTfNPgxU5gzi7F5Pw=="
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/temp": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/temp/-/temp-0.8.3.tgz",
      "integrity": "sha1-4Ma8TSa5AxJEEOT+2BEDAU38H1k=",
      "engines": [
        "node >=0.8.0"
      ],
      "dependencies": {
        "os-tmpdir": "^1.0.0",
        "rimraf": "~2.2.6"
      }
    },
    "node_modules/temp/node_modules/rimraf": {
      "version": "2.2.8",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.2.8.tgz",
      "integrity": "sha1-5Dm+Kq7jJzIZUnMPmaiSnk/FBYI=",
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha1-GhkY1ALY/D+Y+/I02wvMjMEOlyY=",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo="
    },
    "node_modules/through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
    },
    "node_modules/through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "dependencies": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "node_modules/time-stamp": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",
      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dependencies": {
        "os-tmpdir": "~1.0.2"
      },
      "engines": {
        "node": ">=0.6.0"
      }
    },
    "node_modules/tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="
    },
    "node_modules/to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-object-path/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dependencies": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/to-regex/node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o="
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA=="
    },
    "node_modules/type-fest": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.7.1.tgz",
      "integrity": "sha512-Ne2YiiGN8bmrmJJEuTWTLJR32nh/JdL1+PSicowtNb0WFpn59GK8/lfD61bVtzguz7b3PBt74nxpv/Pw5po5Rg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "node_modules/ua-parser-js": {
      "version": "0.7.28",
      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.28.tgz",
      "integrity": "sha512-6Gurc1n//gjp9eQNXjD9O3M/sMwVtN5S8Lv9bvOYBfKfDNiIIhqiyi01vMBO45u4zkDE420w/e0se7Vs+sIg+g==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/ua-parser-js"
        },
        {
          "type": "paypal",
          "url": "https://paypal.me/faisalman"
        }
      ],
      "engines": {
        "node": "*"
      }
    },
    "node_modules/uglify-es": {
      "version": "3.3.9",
      "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.3.9.tgz",
      "integrity": "sha512-r+MU0rfv4L/0eeW3xZrd16t4NZfK8Ld4SWVglYBb7ez5uXFWHuVRs6xCTrf1yirs9a4j4Y27nn7SRfO6v67XsQ==",
      "deprecated": "support for ECMAScript is superseded by `uglify-js` as of v3.13.0",
      "dependencies": {
        "commander": "~2.13.0",
        "source-map": "~0.6.1"
      },
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/uglify-es/node_modules/commander": {
      "version": "2.13.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.13.0.tgz",
      "integrity": "sha512-MVuS359B+YzaWqjCL/c+22gfryv+mCBPHAv3zyVI2GN8EY6IRP8VwtasXn8jyyhvvq84R4ImN1OKRtcbIasjYA=="
    },
    "node_modules/uglify-es/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ultron": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.0.2.tgz",
      "integrity": "sha1-rOEWq1V80Zc4ak6I9GhTeMiy5Po="
    },
    "node_modules/unicode-canonical-property-names-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
      "integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
      "dependencies": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-match-property-value-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz",
      "integrity": "sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/unicode-property-aliases-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dependencies": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/union-value/node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/union-value/node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/universalify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-1.0.0.tgz",
      "integrity": "sha512-rb6X1W158d7pRQBg5gkR8uPaSfiids68LTJQYOtEUhoJUWBdaQHsuT/EUduxXYxcrt4r5PJ4fuHW1MHT6p0qug==",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dependencies": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
      "dependencies": {
        "get-value": "^2.0.3",
        "has-values": "^0.1.4",
        "isobject": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-values": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "deprecated": "Please see https://github.com/lydell/urix#deprecated"
    },
    "node_modules/url-parse": {
      "version": "1.5.3",
      "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.5.3.tgz",
      "integrity": "sha512-IIORyIQD9rvj0A4CLWsHkBBJuNqWpFQe224b6j9t/ABmquIS0qDU2pY6kl6AuOrL5OkCXHMCFNe1jBcuAggjvQ==",
      "dependencies": {
        "querystringify": "^2.1.1",
        "requires-port": "^1.0.0"
      }
    },
    "node_modules/use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/use-subscription": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/use-subscription/-/use-subscription-1.5.1.tgz",
      "integrity": "sha512-Xv2a1P/yReAjAbhylMfFplFKj9GssgTwN7RlcTxBujFQcloStWNDQdc4g4NRWH9xS4i/FDk04vQBptAXoF3VcA==",
      "dependencies": {
        "object-assign": "^4.1.1"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vlq": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-1.0.1.tgz",
      "integrity": "sha512-gQpnTgkubC6hQgdIcRdYGDSDc+SaujOdyesZQMv6JlfQee/9Mp0Qhnys6WxDWvQnL5WZdT7o2Ul187aSt0Rq+w=="
    },
    "node_modules/walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "dependencies": {
        "makeerror": "1.0.x"
      }
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE="
    },
    "node_modules/whatwg-fetch": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.2.tgz",
      "integrity": "sha512-bJlen0FcuU/0EMLrdbJ7zOnW6ITZLrZMIarMUVmdKtsGvZna8vxKYaexICWPfZ8qwf9fzNq+UEIZrnSaApt6RA=="
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus="
    },
    "node_modules/wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "node_modules/write-file-atomic": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
      "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
      "dependencies": {
        "graceful-fs": "^4.1.11",
        "imurmurhash": "^0.1.4",
        "signal-exit": "^3.0.2"
      }
    },
    "node_modules/ws": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.5.tgz",
      "integrity": "sha512-BAkMFcAzl8as1G/hArkxOxq3G7pjUqQ3gzYbLL0/5zNkph70e+lCoxBGnm6AW1+/aiNeV4fnKqZ8m4GZewmH2w==",
      "engines": {
        "node": ">=8.3.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": "^5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xcode": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/xcode/-/xcode-3.0.1.tgz",
      "integrity": "sha512-kCz5k7J7XbJtjABOvkc5lJmkiDh8VhjVCGNiqdKCscmVpdVUpEAyXv1xmCLkQJ5dsHqx3IPO4XW+NTDhU/fatA==",
      "dependencies": {
        "simple-plist": "^1.1.0",
        "uuid": "^7.0.3"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/xcode/node_modules/uuid": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-7.0.3.tgz",
      "integrity": "sha512-DPSke0pXhTZgoF/d+WSt2QaKMCFSfx7QegxEWT+JOuHF5aWrKEn0G+ztjuJg/gG8/ItK+rbPCD/yNv8yyih6Cg==",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/xml2js": {
      "version": "0.4.23",
      "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.23.tgz",
      "integrity": "sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==",
      "dependencies": {
        "sax": ">=0.6.0",
        "xmlbuilder": "~11.0.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/xml2js/node_modules/xmlbuilder": {
      "version": "11.0.1",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
      "integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/xmlbuilder": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-14.0.0.tgz",
      "integrity": "sha512-ts+B2rSe4fIckR6iquDjsKbQFK2NlUk6iG5nf14mDEyldgoc2nEKZ3jZWMPTxGQwVgToSjt6VGIho1H8/fNFTg==",
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/xmldoc": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/xmldoc/-/xmldoc-1.1.2.tgz",
      "integrity": "sha512-ruPC/fyPNck2BD1dpz0AZZyrEwMOrWTO5lDdIXS91rs3wtm4j+T8Rp2o+zoOYkkAxJTZRPOSnOGei1egoRmKMQ==",
      "dependencies": {
        "sax": "^1.2.1"
      }
    },
    "node_modules/xmldom": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/xmldom/-/xmldom-0.5.0.tgz",
      "integrity": "sha512-Foaj5FXVzgn7xFzsKeNIde9g6aFBxTPi37iwsno8QvApmtg7KYrr+OPyRHcJF7dud2a5nGRBXK3n0dL62Gf7PA==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/xpipe": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/xpipe/-/xpipe-1.0.5.tgz",
      "integrity": "sha1-jdi/Rfw/f1Xw4FS4ePQ6YmFNr98="
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/y18n": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
      "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ=="
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    },
    "node_modules/yargs": {
      "version": "15.4.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
      "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
      "dependencies": {
        "cliui": "^6.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^4.1.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^4.2.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^18.1.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "dependencies": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yargs/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/yargs/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yargs/node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  },
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.15.8.tgz",
      "integrity": "sha512-2IAnmn8zbvC/jKYhq5Ki9I+DwjlrtMPUCH/CpHvqI4dNnlwHwsxoIhlc8WcYY5LSYknXQtAlFYuHfqAFCvQ4Wg==",
      "requires": {
        "@babel/highlight": "^7.14.5"
      }
    },
    "@babel/compat-data": {
      "version": "7.15.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.15.0.tgz",
      "integrity": "sha512-0NqAC1IJE0S0+lL1SWFMxMkz1pKCNCjI4tr2Zx4LJSXxCLAdr6KyArnY+sno5m3yH9g737ygOyPABDsnXkpxiA=="
    },
    "@babel/core": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.15.8.tgz",
      "integrity": "sha512-3UG9dsxvYBMYwRv+gS41WKHno4K60/9GPy1CJaH6xy3Elq8CTtvtjT5R5jmNhXfCYLX2mTw+7/aq5ak/gOE0og==",
      "requires": {
        "@babel/code-frame": "^7.15.8",
        "@babel/generator": "^7.15.8",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-module-transforms": "^7.15.8",
        "@babel/helpers": "^7.15.4",
        "@babel/parser": "^7.15.8",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.6",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.1.2",
        "semver": "^6.3.0",
        "source-map": "^0.5.0"
      }
    },
    "@babel/generator": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.15.8.tgz",
      "integrity": "sha512-ECmAKstXbp1cvpTTZciZCgfOt6iN64lR0d+euv3UZisU5awfRawOvg07Utn/qBGuH4bRIEZKrA/4LzZyXhZr8g==",
      "requires": {
        "@babel/types": "^7.15.6",
        "jsesc": "^2.5.1",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.15.4.tgz",
      "integrity": "sha512-QwrtdNvUNsPCj2lfNQacsGSQvGX8ee1ttrBrcozUP2Sv/jylewBP/8QFe6ZkBsC8T/GYWonNAWJV4aRR9AL2DA==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.15.4.tgz",
      "integrity": "sha512-P8o7JP2Mzi0SdC6eWr1zF+AEYvrsZa7GSY1lTayjF5XJhVH0kjLYUZPvTMflP7tBgZoe9gIhTa60QwFpqh/E0Q==",
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-compilation-targets": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.15.4.tgz",
      "integrity": "sha512-rMWPCirulnPSe4d+gwdWXLfAXTTBj8M3guAf5xFQJ0nvFY7tfNAFnWdqaHegHlgDZOCT4qvhF3BYlSJag8yhqQ==",
      "requires": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-validator-option": "^7.14.5",
        "browserslist": "^4.16.6",
        "semver": "^6.3.0"
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.15.4.tgz",
      "integrity": "sha512-7ZmzFi+DwJx6A7mHRwbuucEYpyBwmh2Ca0RvI6z2+WLZYCqV0JOaLb+u0zbtmDicebgKBZgqbYfLaKNqSgv5Pw==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-member-expression-to-functions": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4"
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.14.5.tgz",
      "integrity": "sha512-TLawwqpOErY2HhWbGJ2nZT5wSkR192QpN+nBg1THfBfftrlvOh+WbhrxXCH4q4xJ9Gl16BGPR/48JA+Ryiho/A==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.14.5",
        "regexpu-core": "^4.7.1"
      }
    },
    "@babel/helper-define-polyfill-provider": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.3.tgz",
      "integrity": "sha512-RH3QDAfRMzj7+0Nqu5oqgO5q9mFtQEVvCRsi8qCEfzLR9p2BHfn5FzhSB2oj1fF7I2+DcTORkYaQ6aTR9Cofew==",
      "requires": {
        "@babel/helper-compilation-targets": "^7.13.0",
        "@babel/helper-module-imports": "^7.12.13",
        "@babel/helper-plugin-utils": "^7.13.0",
        "@babel/traverse": "^7.13.0",
        "debug": "^4.1.1",
        "lodash.debounce": "^4.0.8",
        "resolve": "^1.14.2",
        "semver": "^6.1.2"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.15.4.tgz",
      "integrity": "sha512-J14f/vq8+hdC2KoWLIQSsGrC9EFBKE4NFts8pfMpymfApds+fPqR30AOUWc4tyr56h9l/GA1Sxv2q3dLZWbQ/g==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.15.4.tgz",
      "integrity": "sha512-Z91cOMM4DseLIGOnog+Z8OI6YseR9bua+HpvLAQ2XayUGU+neTtX+97caALaLdyu53I/fjhbeCnWnRH1O3jFOw==",
      "requires": {
        "@babel/helper-get-function-arity": "^7.15.4",
        "@babel/template": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.15.4.tgz",
      "integrity": "sha512-1/AlxSF92CmGZzHnC515hm4SirTxtpDnLEJ0UyEMgTMZN+6bxXKg04dKhiRx5Enel+SUA1G1t5Ed/yQia0efrA==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.15.4.tgz",
      "integrity": "sha512-VTy085egb3jUGVK9ycIxQiPbquesq0HUQ+tPO0uv5mPEBZipk+5FkRKiWq5apuyTE9FUrjENB0rCf8y+n+UuhA==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.15.4.tgz",
      "integrity": "sha512-cokOMkxC/BTyNP1AlY25HuBWM32iCEsLPI4BHDpJCHHm1FU2E7dKWWIXJgQgSFiu4lp8q3bL1BIKwqkSUviqtA==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.15.4.tgz",
      "integrity": "sha512-jeAHZbzUwdW/xHgHQ3QmWR4Jg6j15q4w/gCfwZvtqOxoo5DKtLHk8Bsf4c5RZRC7NmLEs+ohkdq8jFefuvIxAA==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.15.8.tgz",
      "integrity": "sha512-DfAfA6PfpG8t4S6npwzLvTUpp0sS7JrcuaMiy1Y5645laRJIp/LiLGIBbQKaXSInK8tiGNI7FL7L8UvB8gdUZg==",
      "requires": {
        "@babel/helper-module-imports": "^7.15.4",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-simple-access": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "@babel/helper-validator-identifier": "^7.15.7",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.6"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.15.4.tgz",
      "integrity": "sha512-E/z9rfbAOt1vDW1DR7k4SzhzotVV5+qMciWV6LaG1g4jeFrkDlJedjtV4h0i4Q/ITnUu+Pk08M7fczsB9GXBDw==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.14.5.tgz",
      "integrity": "sha512-/37qQCE3K0vvZKwoK4XU/irIJQdIfCJuhU5eKnNxpFDsOkgFaUAwbv+RYw6eYgsC0E4hS7r5KqGULUogqui0fQ=="
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.15.4.tgz",
      "integrity": "sha512-v53MxgvMK/HCwckJ1bZrq6dNKlmwlyRNYM6ypaRTdXWGOE2c1/SCa6dL/HimhPulGhZKw9W0QhREM583F/t0vQ==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-wrap-function": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.15.4.tgz",
      "integrity": "sha512-/ztT6khaXF37MS47fufrKvIsiQkx1LBRvSJNzRqmbyeZnTwU9qBxXYLaaT/6KaxfKhjs2Wy8kG8ZdsFUuWBjzw==",
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.15.4.tgz",
      "integrity": "sha512-UzazrDoIVOZZcTeHHEPYrr1MvTR/K+wgLg6MY6e1CJyaRhbibftF6fR2KU2sFRtI/nERUZR9fBd6aKgBlIBaPg==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-skip-transparent-expression-wrappers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-skip-transparent-expression-wrappers/-/helper-skip-transparent-expression-wrappers-7.15.4.tgz",
      "integrity": "sha512-BMRLsdh+D1/aap19TycS4eD1qELGrCBJwzaY9IE8LrpJtJb+H7rQkPIdsfgnMtLBA6DJls7X9z93Z4U8h7xw0A==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.15.4.tgz",
      "integrity": "sha512-HsFqhLDZ08DxCpBdEVtKmywj6PQbwnF6HHybur0MAnkAKnlS6uHkwnmRIkElB2Owpfb4xL4NwDmDLFubueDXsw==",
      "requires": {
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.15.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.15.7.tgz",
      "integrity": "sha512-K4JvCtQqad9OY2+yTU8w+E82ywk/fe+ELNlt1G8z3bVGlZfn/hOcQQsUhGhW/N+tb3fxK800wLtKOE/aM0m72w=="
    },
    "@babel/helper-validator-option": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.14.5.tgz",
      "integrity": "sha512-OX8D5eeX4XwcroVW45NMvoYaIuFI+GQpA2a8Gi+X/U/cDUIRsV37qQfF905F0htTRCREQIB4KqPeaveRJUl3Ow=="
    },
    "@babel/helper-wrap-function": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helper-wrap-function/-/helper-wrap-function-7.15.4.tgz",
      "integrity": "sha512-Y2o+H/hRV5W8QhIfTpRIBwl57y8PrZt6JM3V8FOo5qarjshHItyH5lXlpMfBfmBefOqSCpKZs/6Dxqp0E/U+uw==",
      "requires": {
        "@babel/helper-function-name": "^7.15.4",
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/helpers": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.15.4.tgz",
      "integrity": "sha512-V45u6dqEJ3w2rlryYYXf6i9rQ5YMNu4FLS6ngs8ikblhu2VdR1AqAd6aJjBzmf2Qzh6KOLqKHxEN9+TFbAkAVQ==",
      "requires": {
        "@babel/template": "^7.15.4",
        "@babel/traverse": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/highlight": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.5.tgz",
      "integrity": "sha512-qf9u2WFWVV0MppaL877j2dBtQIDgmidgjGk5VIMw3OadXvYaXn66U1BFlH2t4+t3i+8PhedppRv+i40ABzd+gg==",
      "requires": {
        "@babel/helper-validator-identifier": "^7.14.5",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.15.8.tgz",
      "integrity": "sha512-BRYa3wcQnjS/nqI8Ac94pYYpJfojHVvVXJ97+IDCImX4Jc8W8Xv1+47enbruk+q1etOpsQNwnfFcNGw+gtPGxA=="
    },
    "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/-/plugin-bugfix-v8-spread-parameters-in-optional-chaining-7.15.4.tgz",
      "integrity": "sha512-eBnpsl9tlhPhpI10kU06JHnrYXwg3+V6CaP2idsCXNef0aeslpqyITXQ74Vfk5uHgY7IG7XP0yIH8b42KSzHog==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.15.4",
        "@babel/plugin-proposal-optional-chaining": "^7.14.5"
      }
    },
    "@babel/plugin-external-helpers": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-external-helpers/-/plugin-external-helpers-7.14.5.tgz",
      "integrity": "sha512-q/B/hLX+nDGk73Xn529d7Ar4ih17J8pNBbsXafq8oXij0XfFEA/bks+u+6q5q04zO5o/qivjzui6BqzPfYShEg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.15.8.tgz",
      "integrity": "sha512-2Z5F2R2ibINTc63mY7FLqGfEbmofrHU9FitJW1Q7aPaKFhiPvSq6QEt/BoWN5oME3GVyjcRuNNSRbb9LC0CSWA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-remap-async-to-generator": "^7.15.4",
        "@babel/plugin-syntax-async-generators": "^7.8.4"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.14.5.tgz",
      "integrity": "sha512-q/PLpv5Ko4dVc1LYMpCY7RVAAO4uk55qPwrIuJ5QJ8c6cVuAmhu7I/49JOppXL6gXf7ZHzpRVEUZdYoPLM04Gg==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-class-static-block": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-static-block/-/plugin-proposal-class-static-block-7.15.4.tgz",
      "integrity": "sha512-M682XWrrLNk3chXCjoPUQWOyYsB93B9z3mRyjtqqYJWDf2mfCdIYgDrA11cgNVhAQieaq6F2fn2f3wI0U4aTjA==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-class-static-block": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-decorators": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.15.8.tgz",
      "integrity": "sha512-5n8+xGK7YDrXF+WAORg3P7LlCCdiaAyKLZi22eP2BwTy4kJ0kFUMMDCj4nQ8YrKyNZgjhU/9eRVqONnjB3us8g==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-decorators": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-dynamic-import": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.14.5.tgz",
      "integrity": "sha512-ExjiNYc3HDN5PXJx+bwC50GIx/KKanX2HiggnIUAYedbARdImiCU4RhhHfdf0Kd7JNXGpsBBBCOm+bBVy3Gb0g==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-export-default-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-default-from/-/plugin-proposal-export-default-from-7.14.5.tgz",
      "integrity": "sha512-T8KZ5abXvKMjF6JcoXjgac3ElmXf0AWzJwi2O/42Jk+HmCky3D9+i1B7NPP1FblyceqTevKeV/9szeikFoaMDg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-export-default-from": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-export-namespace-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-export-namespace-from/-/plugin-proposal-export-namespace-from-7.14.5.tgz",
      "integrity": "sha512-g5POA32bXPMmSBu5Dx/iZGLGnKmKPc5AiY7qfZgurzrCYgIztDlHFbznSNCoQuv57YQLnQfaDi7dxCtLDIdXdA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.14.5.tgz",
      "integrity": "sha512-NSq2fczJYKVRIsUJyNxrVUMhB27zb7N7pOFGQOhBKJrChbGcgEAqyZrmZswkPk18VMurEeJAaICbfm57vUeTbQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-json-strings": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-logical-assignment-operators": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-logical-assignment-operators/-/plugin-proposal-logical-assignment-operators-7.14.5.tgz",
      "integrity": "sha512-YGn2AvZAo9TwyhlLvCCWxD90Xq8xJ4aSgaX3G5D/8DW94L8aaT+dS5cSP+Z06+rCJERGSr9GxMBZ601xoc2taw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-nullish-coalescing-operator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.14.5.tgz",
      "integrity": "sha512-gun/SOnMqjSb98Nkaq2rTKMwervfdAoz6NphdY0vTfuzMfryj+tDGb2n6UkDKwez+Y8PZDhE3D143v6Gepp4Hg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-numeric-separator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.14.5.tgz",
      "integrity": "sha512-yiclALKe0vyZRZE0pS6RXgjUOt87GWv6FYa5zqj15PvhOGFO69R5DusPlgK/1K5dVnCtegTiWu9UaBSrLLJJBg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.15.6",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.15.6.tgz",
      "integrity": "sha512-qtOHo7A1Vt+O23qEAX+GdBpqaIuD3i9VRrWgCJeq7WO6H2d14EK3q11urj5Te2MAeK97nMiIdRpwd/ST4JFbNg==",
      "requires": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-transform-parameters": "^7.15.4"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.14.5.tgz",
      "integrity": "sha512-3Oyiixm0ur7bzO5ybNcZFlmVsygSIQgdOa7cTfOYCMY+wEPAYhZAJxi3mixKFCTCKUhQXuCTtQ1MzrpL3WT8ZQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-optional-chaining": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.14.5.tgz",
      "integrity": "sha512-ycz+VOzo2UbWNI1rQXxIuMOzrDdHGrI23fRiz/Si2R4kv2XZQ1BK8ccdHwehMKBlcH/joGW/tzrUmo67gbJHlQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.14.5",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3"
      }
    },
    "@babel/plugin-proposal-private-methods": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-methods/-/plugin-proposal-private-methods-7.14.5.tgz",
      "integrity": "sha512-838DkdUA1u+QTCplatfq4B7+1lnDa/+QMI89x5WZHBcnNv+47N8QEj2k9I2MUU9xIv8XJ4XvPCviM/Dj7Uwt9g==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-private-property-in-object": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-private-property-in-object/-/plugin-proposal-private-property-in-object-7.15.4.tgz",
      "integrity": "sha512-X0UTixkLf0PCCffxgu5/1RQyGGbgZuKoI+vXP4iSbJSYwPb7hu06omsFGBvQ9lJEvwgrxHdS8B5nbfcd8GyUNA==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.14.5.tgz",
      "integrity": "sha512-6axIeOU5LnY471KenAB9vI8I5j7NQ2d652hIYwVyRfgaZT5UpiqFKCuVXCDMSrU+3VFafnu2c5m3lrWIlr6A5Q==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.8.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
      "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
      "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13"
      }
    },
    "@babel/plugin-syntax-class-static-block": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-static-block/-/plugin-syntax-class-static-block-7.14.5.tgz",
      "integrity": "sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-decorators": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.14.5.tgz",
      "integrity": "sha512-c4sZMRWL4GSvP1EXy0woIP7m4jkVcEuG8R1TOZxPBPtp4FSM/kiPZub9UIs/Jrb5ZAOzvTUSGYrWsrSu1JvoPw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz",
      "integrity": "sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-export-default-from": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-default-from/-/plugin-syntax-export-default-from-7.14.5.tgz",
      "integrity": "sha512-snWDxjuaPEobRBnhpqEfZ8RMxDbHt8+87fiEioGuE+Uc0xAKgSD8QiuL3lF93hPVQfZFAcYwrrf+H5qUhike3Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-export-namespace-from": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-export-namespace-from/-/plugin-syntax-export-namespace-from-7.8.3.tgz",
      "integrity": "sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.3"
      }
    },
    "@babel/plugin-syntax-flow": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.14.5.tgz",
      "integrity": "sha512-9WK5ZwKCdWHxVuU13XNT6X73FGmutAXeor5lGFq6qhOFtMFUF4jkbijuyUdZZlpYq6E2hZeZf/u3959X9wsv0Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
      "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.14.5.tgz",
      "integrity": "sha512-ohuFIsOMXJnbOMRfX7/w7LocdR6R7whhuRD4ax8IipLcLPlZGJKkBxgHp++U4N/vKyU16/YDQr2f5seajD3jIw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-logical-assignment-operators": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
      "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-nullish-coalescing-operator": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
      "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-numeric-separator": {
      "version": "7.10.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
      "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.10.4"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
      "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
      "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-optional-chaining": {
      "version": "7.8.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
      "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.8.0"
      }
    },
    "@babel/plugin-syntax-private-property-in-object": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-private-property-in-object/-/plugin-syntax-private-property-in-object-7.14.5.tgz",
      "integrity": "sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-top-level-await": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
      "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-syntax-typescript": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.14.5.tgz",
      "integrity": "sha512-u6OXzDaIXjEstBRRoBCQ/uKQKlbuaeE5in0RvWdA4pN6AhqxTIwUsnHPU1CFZA/amYObMsuWhYfRl3Ch90HD0Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.14.5.tgz",
      "integrity": "sha512-KOnO0l4+tD5IfOdi4x8C1XmEIRWUjNRV8wc6K2vz/3e8yAOoZZvsRXRRIF/yo/MAOFb4QjtAw9xSxMXbSMRy8A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.14.5.tgz",
      "integrity": "sha512-szkbzQ0mNk0rpu76fzDdqSyPu0MuvpXgC+6rz5rpMb5OIRxdmHfQxrktL8CYolL2d8luMCZTR0DpIMIdL27IjA==",
      "requires": {
        "@babel/helper-module-imports": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-remap-async-to-generator": "^7.14.5"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.14.5.tgz",
      "integrity": "sha512-dtqWqdWZ5NqBX3KzsVCWfQI3A53Ft5pWFCT2eCVUftWZgjc5DpDponbIF1+c+7cSGk2wN0YK7HGL/ezfRbpKBQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.15.3",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.15.3.tgz",
      "integrity": "sha512-nBAzfZwZb4DkaGtOes1Up1nOAp9TDRRFw4XBzBBSG9QK7KVFmYzgj9o9sbPv7TX5ofL4Auq4wZnxCoPnI/lz2Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-classes/-/plugin-transform-classes-7.15.4.tgz",
      "integrity": "sha512-Yjvhex8GzBmmPQUvpXRPWQ9WnxXgAFuZSrqOK/eJlOGIXwvv8H3UEdUigl1gb/bnjTrln+e8bkZUYCBt/xYlBg==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-optimise-call-expression": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-replace-supers": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.14.5.tgz",
      "integrity": "sha512-pWM+E4283UxaVzLb8UBXv4EIxMovU4zxT1OPnpHJcmnvyY9QbPPTKZfEj31EUvG3/EQRbYAGaYEUZ4yWOBC2xg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.14.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.14.7.tgz",
      "integrity": "sha512-0mDE99nK+kVh3xlc5vKwB6wnP9ecuSj+zQCa/n0voENtP/zymdT4HH6QEb65wjjcbqr1Jb/7z9Qp7TF5FtwYGw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.14.5.tgz",
      "integrity": "sha512-loGlnBdj02MDsFaHhAIJzh7euK89lBrGIdM9EAtHFo6xKygCUGuuWe07o1oZVk287amtW1n0808sQM99aZt3gw==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.14.5.tgz",
      "integrity": "sha512-iJjbI53huKbPDAsJ8EmVmvCKeeq21bAze4fu9GBQtSLqfvzj2oRuHVx4ZkDwEhg1htQ+5OBZh/Ab0XDf5iBZ7A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.14.5.tgz",
      "integrity": "sha512-jFazJhMBc9D27o9jDnIE5ZErI0R0m7PbKXVq77FFvqFbzvTMuv8jaAwLZ5PviOLSFttqKIW0/wxNSDbjLk0tYA==",
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-flow-strip-types": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.14.5.tgz",
      "integrity": "sha512-KhcolBKfXbvjwI3TV7r7TkYm8oNXHNBqGOy6JDVwtecFaRoKYsUUqJdS10q0YDKW1c6aZQgO+Ys3LfGkox8pXA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-flow": "^7.14.5"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.15.4.tgz",
      "integrity": "sha512-DRTY9fA751AFBDh2oxydvVm4SYevs5ILTWLs6xKXps4Re/KG5nfUkr+TdHCrRWB8C69TlzVgA9b3RmGWmgN9LA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.14.5.tgz",
      "integrity": "sha512-vbO6kv0fIzZ1GpmGQuvbwwm+O4Cbm2NrPzwlup9+/3fdkuzo1YqOZcXw26+YUJB84Ja7j9yURWposEHLYwxUfQ==",
      "requires": {
        "@babel/helper-function-name": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-literals/-/plugin-transform-literals-7.14.5.tgz",
      "integrity": "sha512-ql33+epql2F49bi8aHXxvLURHkxJbSmMKl9J5yHqg4PLtdE6Uc48CH1GS6TQvZ86eoB/ApZXwm7jlA+B3kra7A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.14.5.tgz",
      "integrity": "sha512-WkNXxH1VXVTKarWFqmso83xl+2V3Eo28YY5utIkbsmXoItO8Q3aZxN4BTS2k0hz9dGUloHK26mJMyQEYfkn/+Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.14.5.tgz",
      "integrity": "sha512-3lpOU8Vxmp3roC4vzFpSdEpGUWSMsHFreTWOMMLzel2gNGfHE5UWIh/LN6ghHs2xurUp4jRFYMUIZhuFbody1g==",
      "requires": {
        "@babel/helper-module-transforms": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.15.4.tgz",
      "integrity": "sha512-qg4DPhwG8hKp4BbVDvX1s8cohM8a6Bvptu4l6Iingq5rW+yRUAhe/YRup/YcW2zCOlrysEWVhftIcKzrEZv3sA==",
      "requires": {
        "@babel/helper-module-transforms": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-simple-access": "^7.15.4",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.15.4.tgz",
      "integrity": "sha512-fJUnlQrl/mezMneR72CKCgtOoahqGJNVKpompKwzv3BrEXdlPspTcyxrZ1XmDTIr9PpULrgEQo3qNKp6dW7ssw==",
      "requires": {
        "@babel/helper-hoist-variables": "^7.15.4",
        "@babel/helper-module-transforms": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-validator-identifier": "^7.14.9",
        "babel-plugin-dynamic-import-node": "^2.3.3"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.14.5.tgz",
      "integrity": "sha512-RfPGoagSngC06LsGUYyM9QWSXZ8MysEjDJTAea1lqRjNECE3y0qIJF/qbvJxc4oA4s99HumIMdXOrd+TdKaAAA==",
      "requires": {
        "@babel/helper-module-transforms": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.14.9.tgz",
      "integrity": "sha512-l666wCVYO75mlAtGFfyFwnWmIXQm3kSH0C3IRnJqWcZbWkoihyAdDhFm2ZWaxWTqvBvhVFfJjMRQ0ez4oN1yYA==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.14.5.tgz",
      "integrity": "sha512-Nx054zovz6IIRWEB49RDRuXGI4Gy0GMgqG0cII9L3MxqgXz/+rgII+RU58qpo4g7tNEx1jG7rRVH4ihZoP4esQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-object-assign": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-assign/-/plugin-transform-object-assign-7.14.5.tgz",
      "integrity": "sha512-lvhjk4UN9xJJYB1mI5KC0/o1D5EcJXdbhVe+4fSk08D6ZN+iuAIs7LJC+71h8av9Ew4+uRq9452v9R93SFmQlQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.14.5.tgz",
      "integrity": "sha512-MKfOBWzK0pZIrav9z/hkRqIk/2bTv9qvxHzPQc12RcVkMOzpIKnFCNYJip00ssKWYkd8Sf5g0Wr7pqJ+cmtuFg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-replace-supers": "^7.14.5"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.15.4.tgz",
      "integrity": "sha512-9WB/GUTO6lvJU3XQsSr6J/WKvBC2hcs4Pew8YxZagi6GkTdniyqp8On5kqdK8MN0LMeu0mGbhPN+O049NV/9FQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.14.5.tgz",
      "integrity": "sha512-r1uilDthkgXW8Z1vJz2dKYLV1tuw2xsbrp3MrZmD99Wh9vsfKoob+JTgri5VUb/JqyKRXotlOtwgu4stIYCmnw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-react-display-name": {
      "version": "7.15.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.15.1.tgz",
      "integrity": "sha512-yQZ/i/pUCJAHI/LbtZr413S3VT26qNrEm0M5RRxQJA947/YNYwbZbBaXGDrq6CG5QsZycI1VIP6d7pQaBfP+8Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.14.9.tgz",
      "integrity": "sha512-30PeETvS+AeD1f58i1OVyoDlVYQhap/K20ZrMjLmmzmC2AYR/G43D4sdJAaDAqCD3MYpSWbmrz3kES158QSLjw==",
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.14.5",
        "@babel/helper-module-imports": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-jsx": "^7.14.5",
        "@babel/types": "^7.14.9"
      }
    },
    "@babel/plugin-transform-react-jsx-self": {
      "version": "7.14.9",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.14.9.tgz",
      "integrity": "sha512-Fqqu0f8zv9W+RyOnx29BX/RlEsBRANbOf5xs5oxb2aHP4FKbLXxIaVPUiCti56LAR1IixMH4EyaixhUsKqoBHw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-react-jsx-source": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.14.5.tgz",
      "integrity": "sha512-1TpSDnD9XR/rQ2tzunBVPThF5poaYT9GqP+of8fAtguYuI/dm2RkrMBDemsxtY0XBzvW7nXjYM0hRyKX9QYj7Q==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.14.5.tgz",
      "integrity": "sha512-NVIY1W3ITDP5xQl50NgTKlZ0GrotKtLna08/uGY6ErQt6VEQZXla86x/CTddm5gZdcr+5GSsvMeTmWA5Ii6pkg==",
      "requires": {
        "regenerator-transform": "^0.14.2"
      }
    },
    "@babel/plugin-transform-reserved-words": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.14.5.tgz",
      "integrity": "sha512-cv4F2rv1nD4qdexOGsRQXJrOcyb5CrgjUH9PKrrtyhSDBNWGxd0UIitjyJiWagS+EbUGjG++22mGH1Pub8D6Vg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-runtime": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.15.8.tgz",
      "integrity": "sha512-+6zsde91jMzzvkzuEA3k63zCw+tm/GvuuabkpisgbDMTPQsIMHllE3XczJFFtEHLjjhKQFZmGQVRdELetlWpVw==",
      "requires": {
        "@babel/helper-module-imports": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "babel-plugin-polyfill-corejs2": "^0.2.2",
        "babel-plugin-polyfill-corejs3": "^0.2.5",
        "babel-plugin-polyfill-regenerator": "^0.2.2",
        "semver": "^6.3.0"
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.14.5.tgz",
      "integrity": "sha512-xLucks6T1VmGsTB+GWK5Pl9Jl5+nRXD1uoFdA5TSO6xtiNjtXTjKkmPdFXVLGlK5A2/or/wQMKfmQ2Y0XJfn5g==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-spread/-/plugin-transform-spread-7.15.8.tgz",
      "integrity": "sha512-/daZ8s2tNaRekl9YJa9X4bzjpeRZLt122cpgFnQPLGUe61PH8zMEBmYqKkW5xF5JUEh5buEGXJoQpqBmIbpmEQ==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-skip-transparent-expression-wrappers": "^7.15.4"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.14.5.tgz",
      "integrity": "sha512-Z7F7GyvEMzIIbwnziAZmnSNpdijdr4dWt+FJNBnBLz5mwDFkqIXU9wmBcWWad3QeJF5hMTkRe4dAq2sUZiG+8A==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.14.5.tgz",
      "integrity": "sha512-22btZeURqiepOfuy/VkFr+zStqlujWaarpMErvay7goJS6BWwdd6BY9zQyDLDa4x2S3VugxFb162IZ4m/S/+Gg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.14.5.tgz",
      "integrity": "sha512-lXzLD30ffCWseTbMQzrvDWqljvZlHkXU+CnseMhkMNqU1sASnCsz3tSzAaH3vCUXb9PHeUb90ZT1BdFTm1xxJw==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-typescript": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.15.8.tgz",
      "integrity": "sha512-ZXIkJpbaf6/EsmjeTbiJN/yMxWPFWvlr7sEG1P95Xb4S4IBcrf2n7s/fItIhsAmOf8oSh3VJPDppO6ExfAfKRQ==",
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/plugin-syntax-typescript": "^7.14.5"
      }
    },
    "@babel/plugin-transform-unicode-escapes": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-escapes/-/plugin-transform-unicode-escapes-7.14.5.tgz",
      "integrity": "sha512-crTo4jATEOjxj7bt9lbYXcBAM3LZaUrbP2uUdxb6WIorLmjNKSpHfIybgY4B8SRpbf8tEVIWH3Vtm7ayCrKocA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.14.5",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.14.5.tgz",
      "integrity": "sha512-UygduJpC5kHeCiRw/xDVzC+wj8VaYSoKl5JNVmbP7MadpNinAm3SvZCxZ42H37KZBKztz46YC73i9yV34d0Tzw==",
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.14.5",
        "@babel/helper-plugin-utils": "^7.14.5"
      }
    },
    "@babel/preset-env": {
      "version": "7.15.8",
      "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.15.8.tgz",
      "integrity": "sha512-rCC0wH8husJgY4FPbHsiYyiLxSY8oMDJH7Rl6RQMknbN9oDDHhM9RDFvnGM2MgkbUJzSQB4gtuwygY5mCqGSsA==",
      "requires": {
        "@babel/compat-data": "^7.15.0",
        "@babel/helper-compilation-targets": "^7.15.4",
        "@babel/helper-plugin-utils": "^7.14.5",
        "@babel/helper-validator-option": "^7.14.5",
        "@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining": "^7.15.4",
        "@babel/plugin-proposal-async-generator-functions": "^7.15.8",
        "@babel/plugin-proposal-class-properties": "^7.14.5",
        "@babel/plugin-proposal-class-static-block": "^7.15.4",
        "@babel/plugin-proposal-dynamic-import": "^7.14.5",
        "@babel/plugin-proposal-export-namespace-from": "^7.14.5",
        "@babel/plugin-proposal-json-strings": "^7.14.5",
        "@babel/plugin-proposal-logical-assignment-operators": "^7.14.5",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.14.5",
        "@babel/plugin-proposal-numeric-separator": "^7.14.5",
        "@babel/plugin-proposal-object-rest-spread": "^7.15.6",
        "@babel/plugin-proposal-optional-catch-binding": "^7.14.5",
        "@babel/plugin-proposal-optional-chaining": "^7.14.5",
        "@babel/plugin-proposal-private-methods": "^7.14.5",
        "@babel/plugin-proposal-private-property-in-object": "^7.15.4",
        "@babel/plugin-proposal-unicode-property-regex": "^7.14.5",
        "@babel/plugin-syntax-async-generators": "^7.8.4",
        "@babel/plugin-syntax-class-properties": "^7.12.13",
        "@babel/plugin-syntax-class-static-block": "^7.14.5",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",
        "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
        "@babel/plugin-syntax-json-strings": "^7.8.3",
        "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
        "@babel/plugin-syntax-numeric-separator": "^7.10.4",
        "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
        "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
        "@babel/plugin-syntax-optional-chaining": "^7.8.3",
        "@babel/plugin-syntax-private-property-in-object": "^7.14.5",
        "@babel/plugin-syntax-top-level-await": "^7.14.5",
        "@babel/plugin-transform-arrow-functions": "^7.14.5",
        "@babel/plugin-transform-async-to-generator": "^7.14.5",
        "@babel/plugin-transform-block-scoped-functions": "^7.14.5",
        "@babel/plugin-transform-block-scoping": "^7.15.3",
        "@babel/plugin-transform-classes": "^7.15.4",
        "@babel/plugin-transform-computed-properties": "^7.14.5",
        "@babel/plugin-transform-destructuring": "^7.14.7",
        "@babel/plugin-transform-dotall-regex": "^7.14.5",
        "@babel/plugin-transform-duplicate-keys": "^7.14.5",
        "@babel/plugin-transform-exponentiation-operator": "^7.14.5",
        "@babel/plugin-transform-for-of": "^7.15.4",
        "@babel/plugin-transform-function-name": "^7.14.5",
        "@babel/plugin-transform-literals": "^7.14.5",
        "@babel/plugin-transform-member-expression-literals": "^7.14.5",
        "@babel/plugin-transform-modules-amd": "^7.14.5",
        "@babel/plugin-transform-modules-commonjs": "^7.15.4",
        "@babel/plugin-transform-modules-systemjs": "^7.15.4",
        "@babel/plugin-transform-modules-umd": "^7.14.5",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.14.9",
        "@babel/plugin-transform-new-target": "^7.14.5",
        "@babel/plugin-transform-object-super": "^7.14.5",
        "@babel/plugin-transform-parameters": "^7.15.4",
        "@babel/plugin-transform-property-literals": "^7.14.5",
        "@babel/plugin-transform-regenerator": "^7.14.5",
        "@babel/plugin-transform-reserved-words": "^7.14.5",
        "@babel/plugin-transform-shorthand-properties": "^7.14.5",
        "@babel/plugin-transform-spread": "^7.15.8",
        "@babel/plugin-transform-sticky-regex": "^7.14.5",
        "@babel/plugin-transform-template-literals": "^7.14.5",
        "@babel/plugin-transform-typeof-symbol": "^7.14.5",
        "@babel/plugin-transform-unicode-escapes": "^7.14.5",
        "@babel/plugin-transform-unicode-regex": "^7.14.5",
        "@babel/preset-modules": "^0.1.4",
        "@babel/types": "^7.15.6",
        "babel-plugin-polyfill-corejs2": "^0.2.2",
        "babel-plugin-polyfill-corejs3": "^0.2.5",
        "babel-plugin-polyfill-regenerator": "^0.2.2",
        "core-js-compat": "^3.16.0",
        "semver": "^6.3.0"
      }
    },
    "@babel/preset-modules": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/@babel/preset-modules/-/preset-modules-0.1.4.tgz",
      "integrity": "sha512-J36NhwnfdzpmH41M1DrnkkgAqhZaqr/NBdPfQ677mLzlaXo+oDiv1deyCDtgAhz8p328otdob0Du7+xgHGZbKg==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.4.4",
        "@babel/plugin-transform-dotall-regex": "^7.4.4",
        "@babel/types": "^7.4.4",
        "esutils": "^2.0.2"
      }
    },
    "@babel/preset-typescript": {
      "version": "7.12.17",
      "resolved": "https://registry.npmjs.org/@babel/preset-typescript/-/preset-typescript-7.12.17.tgz",
      "integrity": "sha512-T513uT4VSThRcmWeqcLkITKJ1oGQho9wfWuhQm10paClQkp1qyd0Wf8mvC8Se7UYssMyRSj4tZYpVTkCmAK/mA==",
      "requires": {
        "@babel/helper-plugin-utils": "^7.12.13",
        "@babel/helper-validator-option": "^7.12.17",
        "@babel/plugin-transform-typescript": "^7.12.17"
      }
    },
    "@babel/register": {
      "version": "7.15.3",
      "resolved": "https://registry.npmjs.org/@babel/register/-/register-7.15.3.tgz",
      "integrity": "sha512-mj4IY1ZJkorClxKTImccn4T81+UKTo4Ux0+OFSV9hME1ooqS9UV+pJ6BjD0qXPK4T3XW/KNa79XByjeEMZz+fw==",
      "requires": {
        "clone-deep": "^4.0.1",
        "find-cache-dir": "^2.0.0",
        "make-dir": "^2.1.0",
        "pirates": "^4.0.0",
        "source-map-support": "^0.5.16"
      }
    },
    "@babel/runtime": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.15.4.tgz",
      "integrity": "sha512-99catp6bHCaxr4sJ/DbTGgHS4+Rs2RVd2g7iOap6SLGPDknRK9ztKNsE/Fg6QhSeh1FGE5f6gHGQmvvn3I3xhw==",
      "requires": {
        "regenerator-runtime": "^0.13.4"
      }
    },
    "@babel/template": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.15.4.tgz",
      "integrity": "sha512-UgBAfEa1oGuYgDIPM2G+aHa4Nlo9Lh6mGD2bDBGMTbYnc38vulXPuC1MGjYILIEmlwl6Rd+BPR9ee3gm20CBtg==",
      "requires": {
        "@babel/code-frame": "^7.14.5",
        "@babel/parser": "^7.15.4",
        "@babel/types": "^7.15.4"
      }
    },
    "@babel/traverse": {
      "version": "7.15.4",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.15.4.tgz",
      "integrity": "sha512-W6lQD8l4rUbQR/vYgSuCAE75ADyyQvOpFVsvPPdkhf6lATXAsQIG9YdtOcu8BB1dZ0LKu+Zo3c1wEcbKeuhdlA==",
      "requires": {
        "@babel/code-frame": "^7.14.5",
        "@babel/generator": "^7.15.4",
        "@babel/helper-function-name": "^7.15.4",
        "@babel/helper-hoist-variables": "^7.15.4",
        "@babel/helper-split-export-declaration": "^7.15.4",
        "@babel/parser": "^7.15.4",
        "@babel/types": "^7.15.4",
        "debug": "^4.1.0",
        "globals": "^11.1.0"
      }
    },
    "@babel/types": {
      "version": "7.15.6",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.15.6.tgz",
      "integrity": "sha512-BPU+7QhqNjmWyDO0/vitH/CuhpV8ZmK1wpKva8nuyNF5MJfuRNWMc+hc14+u9xT93kvykMdncrJT19h74uB1Ig==",
      "requires": {
        "@babel/helper-validator-identifier": "^7.14.9",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@cnakazawa/watch": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.4.tgz",
      "integrity": "sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==",
      "requires": {
        "exec-sh": "^0.3.2",
        "minimist": "^1.2.0"
      }
    },
    "@expo/config": {
      "version": "5.0.9",
      "resolved": "https://registry.npmjs.org/@expo/config/-/config-5.0.9.tgz",
      "integrity": "sha512-eZj+cf03wkQQdHSpYvrmiqAsn2dJV10uhHIwXyeFBaFvhds0NgThOldJZfOppQ4QUaGobB/vaJ7UqUa3B0PCMw==",
      "requires": {
        "@babel/code-frame": "~7.10.4",
        "@expo/config-plugins": "3.1.0",
        "@expo/config-types": "^42.0.0",
        "@expo/json-file": "8.2.33",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "require-from-string": "^2.0.2",
        "resolve-from": "^5.0.0",
        "semver": "7.3.2",
        "slugify": "^1.3.4",
        "sucrase": "^3.20.0"
      },
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.10.4",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
          "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
          "requires": {
            "@babel/highlight": "^7.10.4"
          }
        },
        "semver": {
          "version": "7.3.2",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
          "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ=="
        }
      }
    },
    "@expo/config-plugins": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@expo/config-plugins/-/config-plugins-3.1.0.tgz",
      "integrity": "sha512-V5qxaxCAExBM0TXmbU1QKiZcAGP3ecu7KXede8vByT15cro5PkcWu2sSdJCYbHQ/gw6Vf/i8sr8gKlN8V8TSLg==",
      "requires": {
        "@expo/config-types": "^42.0.0",
        "@expo/json-file": "8.2.33",
        "@expo/plist": "0.0.14",
        "chalk": "^4.1.2",
        "debug": "^4.3.1",
        "find-up": "~5.0.0",
        "fs-extra": "9.0.0",
        "getenv": "^1.0.0",
        "glob": "7.1.6",
        "resolve-from": "^5.0.0",
        "semver": "^7.3.5",
        "slash": "^3.0.0",
        "xcode": "^3.0.1",
        "xml2js": "^0.4.23"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "requires": {
            "lru-cache": "^6.0.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@expo/config-types": {
      "version": "42.0.0",
      "resolved": "https://registry.npmjs.org/@expo/config-types/-/config-types-42.0.0.tgz",
      "integrity": "sha512-Rj02OMZke2MrGa/1Y/EScmR7VuWbDEHPJyvfFyyLbadUt+Yv6isCdeFzDt71I7gJlPR9T4fzixeYLrtXXOTq0w=="
    },
    "@expo/json-file": {
      "version": "8.2.33",
      "resolved": "https://registry.npmjs.org/@expo/json-file/-/json-file-8.2.33.tgz",
      "integrity": "sha512-CDnhjdirUs6OdN5hOSTJ2y3i9EiJMk7Z5iDljC5xyCHCrUex7oyI8vbRsZEojAahxZccgL/PrO+CjakiFFWurg==",
      "requires": {
        "@babel/code-frame": "~7.10.4",
        "json5": "^1.0.1",
        "write-file-atomic": "^2.3.0"
      },
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.10.4",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
          "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
          "requires": {
            "@babel/highlight": "^7.10.4"
          }
        },
        "json5": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "requires": {
            "minimist": "^1.2.0"
          }
        }
      }
    },
    "@expo/metro-config": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@expo/metro-config/-/metro-config-0.1.84.tgz",
      "integrity": "sha512-xWSfM0+AxcKw0H8mc1RuKs4Yy4JT4SJfn4yDnGLAlKkHlEC+D2seZvb/Tdd173e/LANmcarNd+OcDYu03AmVWA==",
      "requires": {
        "@expo/config": "5.0.9",
        "chalk": "^4.1.0",
        "getenv": "^1.0.0",
        "metro-react-native-babel-transformer": "^0.59.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@expo/plist": {
      "version": "0.0.14",
      "resolved": "https://registry.npmjs.org/@expo/plist/-/plist-0.0.14.tgz",
      "integrity": "sha512-bb4Ua1M/OdNgS8KiGdSDUjZ/bbPfv3xdPY/lz8Ctp/adlj/QgB8xA7tVPeqSSfJPZqFRwU0qLCnRhpUOnP51VQ==",
      "requires": {
        "@xmldom/xmldom": "~0.7.0",
        "base64-js": "^1.2.3",
        "xmlbuilder": "^14.0.0"
      }
    },
    "@expo/vector-icons": {
      "version": "12.0.5",
      "resolved": "https://registry.npmjs.org/@expo/vector-icons/-/vector-icons-12.0.5.tgz",
      "integrity": "sha512-zWvHBmkpbi1KrPma6Y+r/bsGI6MjbM1MBSe6W9A4uYMLhNI5NR4JtTnqxhf7g1XdpaDtBdv5aOWKEx4d5rxnhg==",
      "requires": {
        "lodash.frompairs": "^4.0.1",
        "lodash.isequal": "^4.5.0",
        "lodash.isstring": "^4.0.1",
        "lodash.omit": "^4.5.0",
        "lodash.pick": "^4.4.0",
        "lodash.template": "^4.5.0"
      }
    },
    "@hapi/address": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.4.tgz",
      "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ=="
    },
    "@hapi/bourne": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/@hapi/bourne/-/bourne-1.3.2.tgz",
      "integrity": "sha512-1dVNHT76Uu5N3eJNTYcvxee+jzX4Z9lfciqRRHCU27ihbUcYi+iSc2iml5Ke1LXe1SyJCLA0+14Jh4tXJgOppA=="
    },
    "@hapi/hoek": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.5.1.tgz",
      "integrity": "sha512-yN7kbciD87WzLGc5539Tn0sApjyiGHAJgKvG9W8C7O+6c7qmoQMfVs0W4bX17eqz6C78QJqqFrtgdK5EWf6Qow=="
    },
    "@hapi/joi": {
      "version": "15.1.1",
      "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.1.1.tgz",
      "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",
      "requires": {
        "@hapi/address": "2.x.x",
        "@hapi/bourne": "1.x.x",
        "@hapi/hoek": "8.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "@hapi/topo": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.6.tgz",
      "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
      "requires": {
        "@hapi/hoek": "^8.3.0"
      }
    },
    "@jest/console": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/console/-/console-24.9.0.tgz",
      "integrity": "sha512-Zuj6b8TnKXi3q4ymac8EQfc3ea/uhLeCGThFqXeC8H9/raaH8ARPUTdId+XyGd03Z4In0/VjD2OYFcBF09fNLQ==",
      "requires": {
        "@jest/source-map": "^24.9.0",
        "chalk": "^2.0.1",
        "slash": "^2.0.0"
      },
      "dependencies": {
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        }
      }
    },
    "@jest/fake-timers": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-24.9.0.tgz",
      "integrity": "sha512-eWQcNa2YSwzXWIMC5KufBh3oWRIijrQFROsIqt6v/NS9Io/gknw1jsAC9c+ih/RQX4A3O7SeWAhQeN0goKhT9A==",
      "requires": {
        "@jest/types": "^24.9.0",
        "jest-message-util": "^24.9.0",
        "jest-mock": "^24.9.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        }
      }
    },
    "@jest/source-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-24.9.0.tgz",
      "integrity": "sha512-/Xw7xGlsZb4MJzNDgB7PW5crou5JqWiBQaz6xyPd3ArOg2nfn/PunV8+olXbbEZzNl591o5rWKE9BRDaFAuIBg==",
      "requires": {
        "callsites": "^3.0.0",
        "graceful-fs": "^4.1.15",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "callsites": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "@jest/test-result": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-24.9.0.tgz",
      "integrity": "sha512-XEFrHbBonBJ8dGp2JmF8kP/nQI/ImPpygKHwQ/SY+es59Z3L5PI4Qb9TQQMAEeYsThG1xF0k6tmG0tIKATNiiA==",
      "requires": {
        "@jest/console": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/istanbul-lib-coverage": "^2.0.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        }
      }
    },
    "@jest/types": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/@jest/types/-/types-26.6.2.tgz",
      "integrity": "sha512-fC6QCp7Sc5sX6g8Tvbmj4XUTbyrik0akgRy03yjXbQaBWWNWGE7SGtJk98m0N8nzegD/7SggrUlivxo5ax4KWQ==",
      "requires": {
        "@types/istanbul-lib-coverage": "^2.0.0",
        "@types/istanbul-reports": "^3.0.0",
        "@types/node": "*",
        "@types/yargs": "^15.0.0",
        "chalk": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "requires": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      }
    },
    "@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A=="
    },
    "@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "requires": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      }
    },
    "@react-native-community/cli-debugger-ui": {
      "version": "4.13.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-debugger-ui/-/cli-debugger-ui-4.13.1.tgz",
      "integrity": "sha512-UFnkg5RTq3s2X15fSkrWY9+5BKOFjihNSnJjTV2H5PtTUFbd55qnxxPw8CxSfK0bXb1IrSvCESprk2LEpqr5cg==",
      "requires": {
        "serve-static": "^1.13.1"
      }
    },
    "@react-native-community/cli-hermes": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-hermes/-/cli-hermes-4.13.0.tgz",
      "integrity": "sha512-oG+w0Uby6rSGsUkJGLvMQctZ5eVRLLfhf84lLyz942OEDxFRa9U19YJxOe9FmgCKtotbYiM3P/XhK+SVCuerPQ==",
      "requires": {
        "@react-native-community/cli-platform-android": "^4.13.0",
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "hermes-profile-transformer": "^0.0.6",
        "ip": "^1.1.5"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@react-native-community/cli-platform-android": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-android/-/cli-platform-android-4.13.0.tgz",
      "integrity": "sha512-3i8sX8GklEytUZwPnojuoFbCjIRzMugCdzDIdZ9UNmi/OhD4/8mLGO0dgXfT4sMWjZwu3qjy45sFfk2zOAgHbA==",
      "requires": {
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "execa": "^1.0.0",
        "fs-extra": "^8.1.0",
        "glob": "^7.1.3",
        "jetifier": "^1.6.2",
        "lodash": "^4.17.15",
        "logkitty": "^0.7.1",
        "slash": "^3.0.0",
        "xmldoc": "^1.1.2"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "fs-extra": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
          "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
          "requires": {
            "graceful-fs": "^4.2.0",
            "jsonfile": "^4.0.0",
            "universalify": "^0.1.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jsonfile": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
          "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        }
      }
    },
    "@react-native-community/cli-platform-ios": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-platform-ios/-/cli-platform-ios-4.13.0.tgz",
      "integrity": "sha512-6THlTu8zp62efkzimfGr3VIuQJ2514o+vScZERJCV1xgEi8XtV7mb/ZKt9o6Y9WGxKKkc0E0b/aVAtgy+L27CA==",
      "requires": {
        "@react-native-community/cli-tools": "^4.13.0",
        "chalk": "^3.0.0",
        "glob": "^7.1.3",
        "js-yaml": "^3.13.1",
        "lodash": "^4.17.15",
        "plist": "^3.0.1",
        "xcode": "^2.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "xcode": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/xcode/-/xcode-2.1.0.tgz",
          "integrity": "sha512-uCrmPITrqTEzhn0TtT57fJaNaw8YJs1aCzs+P/QqxsDbvPZSv7XMPPwXrKvHtD6pLjBM/NaVwraWJm8q83Y4iQ==",
          "requires": {
            "simple-plist": "^1.0.0",
            "uuid": "^3.3.2"
          }
        }
      }
    },
    "@react-native-community/cli-server-api": {
      "version": "4.13.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-server-api/-/cli-server-api-4.13.1.tgz",
      "integrity": "sha512-vQzsFKD9CjHthA2ehTQX8c7uIzlI9A7ejaIow1I9RlEnLraPH2QqVDmzIdbdh5Od47UPbRzamCgAP8Bnqv3qwQ==",
      "requires": {
        "@react-native-community/cli-debugger-ui": "^4.13.1",
        "@react-native-community/cli-tools": "^4.13.0",
        "compression": "^1.7.1",
        "connect": "^3.6.5",
        "errorhandler": "^1.5.0",
        "nocache": "^2.1.0",
        "pretty-format": "^25.1.0",
        "serve-static": "^1.13.1",
        "ws": "^1.1.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "25.5.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.5.0.tgz",
          "integrity": "sha512-OXD0RgQ86Tu3MazKo8bnrkDRaDXXMGUqd+kTtLtK1Zb7CRzQcaSRPPPV37SvYTdevXEBVxe0HXylEjs8ibkmCw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^15.0.0",
            "chalk": "^3.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "pretty-format": {
          "version": "25.5.0",
          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.5.0.tgz",
          "integrity": "sha512-kbo/kq2LQ/A/is0PQwsEHM7Ca6//bGPPvU6UnsdDRSKTWxT/ru/xb88v4BJf6a69H+uTytOEsTusT9ksd/1iWQ==",
          "requires": {
            "@jest/types": "^25.5.0",
            "ansi-regex": "^5.0.0",
            "ansi-styles": "^4.0.0",
            "react-is": "^16.12.0"
          }
        },
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "ws": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
          "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
          "requires": {
            "options": ">=0.0.5",
            "ultron": "1.0.x"
          }
        }
      }
    },
    "@react-native-community/cli-tools": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-tools/-/cli-tools-4.13.0.tgz",
      "integrity": "sha512-s4f489h5+EJksn4CfheLgv5PGOM0CDmK1UEBLw2t/ncWs3cW2VI7vXzndcd/WJHTv3GntJhXDcJMuL+Z2IAOgg==",
      "requires": {
        "chalk": "^3.0.0",
        "lodash": "^4.17.15",
        "mime": "^2.4.1",
        "node-fetch": "^2.6.0",
        "open": "^6.2.0",
        "shell-quote": "1.6.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "node-fetch": {
          "version": "2.6.5",
          "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.5.tgz",
          "integrity": "sha512-mmlIVHJEu5rnIxgEgez6b9GgWXbkZj5YZ7fx+2r94a2E+Uirsp6HsPTPlomfdHtpt/B0cdKviwkoaM6pyvUOpQ==",
          "requires": {
            "whatwg-url": "^5.0.0"
          }
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "@react-native-community/cli-types": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/@react-native-community/cli-types/-/cli-types-4.10.1.tgz",
      "integrity": "sha512-ael2f1onoPF3vF7YqHGWy7NnafzGu+yp88BbFbP0ydoCP2xGSUzmZVw0zakPTC040Id+JQ9WeFczujMkDy6jYQ=="
    },
    "@types/istanbul-lib-coverage": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.3.tgz",
      "integrity": "sha512-sz7iLqvVUg1gIedBOvlkxPlc8/uVzyS5OwGz1cKjXzkl3FpL3al0crU8YGU1WoHkxn0Wxbw5tyi6hvzJKNzFsw=="
    },
    "@types/istanbul-lib-report": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
      "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
      "requires": {
        "@types/istanbul-lib-coverage": "*"
      }
    },
    "@types/istanbul-reports": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz",
      "integrity": "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==",
      "requires": {
        "@types/istanbul-lib-report": "*"
      }
    },
    "@types/node": {
      "version": "16.10.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-16.10.3.tgz",
      "integrity": "sha512-ho3Ruq+fFnBrZhUYI46n/bV2GjwzSkwuT4dTf0GkuNFmnb8nq4ny2z9JEVemFi6bdEJanHLlYfy9c6FN9B9McQ=="
    },
    "@types/stack-utils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-1.0.1.tgz",
      "integrity": "sha512-l42BggppR6zLmpfU6fq9HEa2oGPEI8yrSPL3GITjfRInppYFahObbIQOQK3UGxEnyQpltZLaPe75046NOZQikw=="
    },
    "@types/yargs": {
      "version": "15.0.14",
      "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.14.tgz",
      "integrity": "sha512-yEJzHoxf6SyQGhBhIYGXQDSCkJjB6HohDShto7m8vaKg9Yp0Yn8+71J9eakh2bnPg6BfsH9PRMhiRTZnd4eXGQ==",
      "requires": {
        "@types/yargs-parser": "*"
      }
    },
    "@types/yargs-parser": {
      "version": "20.2.1",
      "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-20.2.1.tgz",
      "integrity": "sha512-7tFImggNeNBVMsn0vLrpn1H1uPrUBdnARPTpZoitY37ZrdJREzf7I16tMrlK3hen349gr1NYh8CmZQa7CTG6Aw=="
    },
    "@unimodules/core": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/@unimodules/core/-/core-7.1.2.tgz",
      "integrity": "sha512-lY+e2TAFuebD3vshHMIRqru3X4+k7Xkba4Wa7QsDBd+ex4c4N2dHAO61E2SrGD9+TRBD8w/o7mzK6ljbqRnbyg==",
      "requires": {
        "compare-versions": "^3.4.0"
      }
    },
    "@unimodules/react-native-adapter": {
      "version": "6.3.9",
      "resolved": "https://registry.npmjs.org/@unimodules/react-native-adapter/-/react-native-adapter-6.3.9.tgz",
      "integrity": "sha512-i9/9Si4AQ8awls+YGAKkByFbeAsOPgUNeLoYeh2SQ3ddjxJ5ZJDtq/I74clDnpDcn8zS9pYlcDJ9fgVJa39Glw==",
      "requires": {
        "expo-modules-autolinking": "^0.0.3",
        "invariant": "^2.2.4"
      }
    },
    "@xmldom/xmldom": {
      "version": "0.7.5",
      "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.7.5.tgz",
      "integrity": "sha512-V3BIhmY36fXZ1OtVcI9W+FxQqxVLsPKcNjWigIaa81dLC9IolJl5Mt4Cvhmr0flUnjSpTdrbMTSbXqYqV5dT6A=="
    },
    "abort-controller": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/abort-controller/-/abort-controller-3.0.0.tgz",
      "integrity": "sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==",
      "requires": {
        "event-target-shim": "^5.0.0"
      }
    },
    "absolute-path": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/absolute-path/-/absolute-path-0.0.0.tgz",
      "integrity": "sha1-p4di+9rftSl76ZsV01p4Wy8JW/c="
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "anser": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/anser/-/anser-1.4.10.tgz",
      "integrity": "sha512-hCv9AqTQ8ycjpSd3upOJd7vFwW1JaoYQ7tpham03GJ1ca8/65rqn0RpaWpItOAd6ylW9wAw6luXYPJIyPFVOww=="
    },
    "ansi-colors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-1.1.0.tgz",
      "integrity": "sha512-SFKX67auSNoVR38N3L+nvsPjOE0bybKTYbkf5tRvushrAPQ9V75huw0ZxBkKVeRU9kqH3d6HA4xTckbwZ4ixmA==",
      "requires": {
        "ansi-wrap": "^0.1.0"
      }
    },
    "ansi-cyan": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-cyan/-/ansi-cyan-0.1.1.tgz",
      "integrity": "sha1-U4rlKK+JgvKK4w2G8vF0VtJgmHM=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ=="
    },
    "ansi-fragments": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/ansi-fragments/-/ansi-fragments-0.2.1.tgz",
      "integrity": "sha512-DykbNHxuXQwUDRv5ibc2b0x7uw7wmwOGLBUd5RmaQ5z8Lhx19vwvKV+FAsM5rEA6dEcHxX+/Ad5s9eF2k2bB+w==",
      "requires": {
        "colorette": "^1.0.7",
        "slice-ansi": "^2.0.0",
        "strip-ansi": "^5.0.0"
      }
    },
    "ansi-gray": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-gray/-/ansi-gray-0.1.1.tgz",
      "integrity": "sha1-KWLPVOyXksSFEKPetSRDaGHvclE=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-red": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/ansi-red/-/ansi-red-0.1.1.tgz",
      "integrity": "sha1-jGOPnRCAgAo1PJwoyKgcpHBdlGw=",
      "requires": {
        "ansi-wrap": "0.1.0"
      }
    },
    "ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "ansi-wrap": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/ansi-wrap/-/ansi-wrap-0.1.0.tgz",
      "integrity": "sha1-qCJQ3bABXponyoLoLqYDu/pF768="
    },
    "any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha1-q8av7tzqUugJzcA3au0845Y10X8="
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-1.1.0.tgz",
      "integrity": "sha1-aHwydYFjWI/vfeezb6vklesaOZo=",
      "requires": {
        "arr-flatten": "^1.0.1",
        "array-slice": "^0.2.3"
      }
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
    },
    "arr-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-2.1.0.tgz",
      "integrity": "sha1-IPnqtexw9cfSFbEHexw5Fh0pLH0="
    },
    "array-filter": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/array-filter/-/array-filter-0.0.1.tgz",
      "integrity": "sha1-fajPLiZijtcygDWB/SH2fKzS7uw="
    },
    "array-find-index": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
      "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E="
    },
    "array-map": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-map/-/array-map-0.0.0.tgz",
      "integrity": "sha1-iKK6tz0c97zVwbEYoAP2b2ZfpmI="
    },
    "array-reduce": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/array-reduce/-/array-reduce-0.0.0.tgz",
      "integrity": "sha1-FziZ0//Rx9k4PkR5Ul2+J4yrXys="
    },
    "array-slice": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/array-slice/-/array-slice-0.2.3.tgz",
      "integrity": "sha1-3Tz7gO15c6dRF82sabC5nshhhvU="
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
    },
    "asap": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/asap/-/asap-2.0.6.tgz",
      "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY="
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg=="
    },
    "async": {
      "version": "2.6.3",
      "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "at-least-node": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
      "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg=="
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.3.tgz",
      "integrity": "sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==",
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-plugin-module-resolver": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-module-resolver/-/babel-plugin-module-resolver-3.2.0.tgz",
      "integrity": "sha512-tjR0GvSndzPew/Iayf4uICWZqjBwnlMWjSx6brryfQ81F9rxBVqwDJtFCV8oOs0+vJeefK9TmdZtkIFdFe1UnA==",
      "requires": {
        "find-babel-config": "^1.1.0",
        "glob": "^7.1.2",
        "pkg-up": "^2.0.0",
        "reselect": "^3.0.1",
        "resolve": "^1.4.0"
      }
    },
    "babel-plugin-polyfill-corejs2": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs2/-/babel-plugin-polyfill-corejs2-0.2.2.tgz",
      "integrity": "sha512-kISrENsJ0z5dNPq5eRvcctITNHYXWOA4DUZRFYCz3jYCcvTb/A546LIddmoGNMVYg2U38OyFeNosQwI9ENTqIQ==",
      "requires": {
        "@babel/compat-data": "^7.13.11",
        "@babel/helper-define-polyfill-provider": "^0.2.2",
        "semver": "^6.1.1"
      }
    },
    "babel-plugin-polyfill-corejs3": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-corejs3/-/babel-plugin-polyfill-corejs3-0.2.5.tgz",
      "integrity": "sha512-ninF5MQNwAX9Z7c9ED+H2pGt1mXdP4TqzlHKyPIYmJIYz0N+++uwdM7RnJukklhzJ54Q84vA4ZJkgs7lu5vqcw==",
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.2.2",
        "core-js-compat": "^3.16.2"
      }
    },
    "babel-plugin-polyfill-regenerator": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/babel-plugin-polyfill-regenerator/-/babel-plugin-polyfill-regenerator-0.2.2.tgz",
      "integrity": "sha512-Goy5ghsc21HgPDFtzRkSirpZVW35meGoTmTOb2bxqdl60ghub4xOidgNTHaZfQ2FaxQsKmwvXtOAkcIS4SMBWg==",
      "requires": {
        "@babel/helper-define-polyfill-provider": "^0.2.2"
      }
    },
    "babel-plugin-react-native-web": {
      "version": "0.13.18",
      "resolved": "https://registry.npmjs.org/babel-plugin-react-native-web/-/babel-plugin-react-native-web-0.13.18.tgz",
      "integrity": "sha512-f8pAxyKqXBNRIh8l4Sqju055BNec+DQlItdtutByYxULU0iJ1F7evIYE3skPKAkTB/xJH17l+n3Z8dVabGIIGg=="
    },
    "babel-plugin-syntax-trailing-function-commas": {
      "version": "7.0.0-beta.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-trailing-function-commas/-/babel-plugin-syntax-trailing-function-commas-7.0.0-beta.0.tgz",
      "integrity": "sha512-Xj9XuRuz3nTSbaTXWv3itLOcxyF4oPD8douBBmj7U9BBC6nEBYfyOJYQMf/8PJAFotC62UY5dFfIGEPr7WswzQ=="
    },
    "babel-preset-expo": {
      "version": "8.4.1",
      "resolved": "https://registry.npmjs.org/babel-preset-expo/-/babel-preset-expo-8.4.1.tgz",
      "integrity": "sha512-bfNX+GWhBCC8SzOzuF5VI5rKftv+E+Leyq83R9h3S+nTzDEtGSnMsRoPCqGHXDbleJApBVKXGZpxWXR5B91HlQ==",
      "requires": {
        "@babel/plugin-proposal-decorators": "^7.6.0",
        "@babel/preset-env": "^7.6.3",
        "babel-plugin-module-resolver": "^3.2.0",
        "babel-plugin-react-native-web": "~0.13.6",
        "metro-react-native-babel-preset": "~0.59.0"
      }
    },
    "babel-preset-fbjs": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/babel-preset-fbjs/-/babel-preset-fbjs-3.4.0.tgz",
      "integrity": "sha512-9ywCsCvo1ojrw0b+XYk7aFvTH6D9064t0RIL1rtMf3nsa02Xw41MS7sZw216Im35xj/UY0PDBQsa1brUDDF1Ow==",
      "requires": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-syntax-class-properties": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-member-expression-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-super": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-property-literals": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "babel-plugin-syntax-trailing-function-commas": "^7.0.0-beta.0"
      }
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        }
      }
    },
    "base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
    },
    "big-integer": {
      "version": "1.6.49",
      "resolved": "https://registry.npmjs.org/big-integer/-/big-integer-1.6.49.tgz",
      "integrity": "sha512-KJ7VhqH+f/BOt9a3yMwJNmcZjG53ijWMTjSAGMveQWyLwqIiwkjNP5PFgDob3Snnx86SjDj6I89fIbv0dkQeNw=="
    },
    "bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "optional": true,
      "requires": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "blueimp-md5": {
      "version": "2.19.0",
      "resolved": "https://registry.npmjs.org/blueimp-md5/-/blueimp-md5-2.19.0.tgz",
      "integrity": "sha512-DRQrD6gJyy8FbiE4s+bDoXS9hiW3Vbx5uCdwvcCf3zLHL+Iv7LtGHLpr+GZV8rHG8tK766FGYBwRbu8pELTt+w=="
    },
    "bplist-creator": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/bplist-creator/-/bplist-creator-0.0.8.tgz",
      "integrity": "sha512-Za9JKzD6fjLC16oX2wsXfc+qBEhJBJB1YPInoAQpMLhDuj5aVOv1baGeIQSq1Fr3OCqzvsoQcSBSwGId/Ja2PA==",
      "requires": {
        "stream-buffers": "~2.2.0"
      }
    },
    "bplist-parser": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/bplist-parser/-/bplist-parser-0.2.0.tgz",
      "integrity": "sha512-z0M+byMThzQmD9NILRniCUXYsYpjwnlO8N5uCFaCqIOpqRsJCrQL9NK3JsD67CN5a08nF5oIL2bD6loTdHOuKw==",
      "requires": {
        "big-integer": "^1.6.44"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "browserslist": {
      "version": "4.17.3",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.17.3.tgz",
      "integrity": "sha512-59IqHJV5VGdcJZ+GZ2hU5n4Kv3YiASzW6Xk5g9tf5a/MAzGeFwgGWU39fVzNIOVcgB3+Gp+kiQu0HEfTVU/3VQ==",
      "requires": {
        "caniuse-lite": "^1.0.30001264",
        "electron-to-chromium": "^1.3.857",
        "escalade": "^3.1.1",
        "node-releases": "^1.1.77",
        "picocolors": "^0.2.1"
      }
    },
    "bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "requires": {
        "node-int64": "^0.4.0"
      }
    },
    "buffer-alloc": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
      "integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
      "requires": {
        "buffer-alloc-unsafe": "^1.1.0",
        "buffer-fill": "^1.0.0"
      }
    },
    "buffer-alloc-unsafe": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
      "integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg=="
    },
    "buffer-crc32": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
      "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI="
    },
    "buffer-fill": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
      "integrity": "sha1-+PeLdniYiO858gXNY39o5wISKyw="
    },
    "buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
    },
    "bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "caller-callsite": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "requires": {
        "callsites": "^2.0.0"
      }
    },
    "caller-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
      "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
      "requires": {
        "caller-callsite": "^2.0.0"
      }
    },
    "callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA="
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
    },
    "caniuse-lite": {
      "version": "1.0.30001265",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001265.tgz",
      "integrity": "sha512-YzBnspggWV5hep1m9Z6sZVLOt7vrju8xWooFAgN6BA5qvy98qPAPb7vNUzypFaoh2pb3vlfzbDO8tB57UPGbtw=="
    },
    "capture-exit": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
      "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
      "requires": {
        "rsvp": "^4.8.4"
      }
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "chardet": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.4.2.tgz",
      "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I="
    },
    "ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "arr-union": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
          "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-data-descriptor": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
          "requires": {
            "is-accessor-descriptor": "^0.1.6",
            "is-data-descriptor": "^0.1.4",
            "kind-of": "^5.0.0"
          }
        },
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "requires": {
        "restore-cursor": "^2.0.0"
      }
    },
    "cli-spinners": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.1.tgz",
      "integrity": "sha512-x/5fWmGMnbKQAaNwN+UZlV79qBLM9JFnJuJ03gIi5whrob0xV0ofNVHy9DhwGdsMJQc2OKv0oGmLzvaqvAVv+g=="
    },
    "cli-width": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-2.2.1.tgz",
      "integrity": "sha512-GRMWDxpOB6Dgk2E5Uo+3eEBvtOOlimMmpbFiKuLFnQzYDavtLFY3K5ona41jgN/WdRZtG7utuVSVTL4HbZHGkw=="
    },
    "cliui": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
      "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
      "requires": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^6.2.0"
      },
      "dependencies": {
        "strip-ansi": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "requires": {
            "ansi-regex": "^5.0.1"
          }
        }
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
    },
    "clone-deep": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
      "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
      "requires": {
        "is-plain-object": "^2.0.4",
        "kind-of": "^6.0.2",
        "shallow-clone": "^3.0.0"
      }
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg=="
    },
    "colorette": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.4.0.tgz",
      "integrity": "sha512-Y2oEozpomLn7Q3HFP7dpww7AtMJplbM9lGZP6RDfHqmbeRjiwRg4n6VM6j4KLmRke85uWEI7JqF17f3pqdRA0g=="
    },
    "command-exists": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/command-exists/-/command-exists-1.2.9.tgz",
      "integrity": "sha512-LTQ/SGc+s0Xc0Fu5WaKnR0YiygZkm9eKFvyS+fRsU7/ZWFF8ykFM6Pc9aCVf1+xasOOZpO3BAVgVrKvsqKHV7w=="
    },
    "commander": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-7.2.0.tgz",
      "integrity": "sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw=="
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs="
    },
    "compare-versions": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/compare-versions/-/compare-versions-3.6.0.tgz",
      "integrity": "sha512-W6Af2Iw1z4CB7q4uU4hv646dW9GQuBM+YpC0UvUCWSD8w90SJjp+ujJuXaEMtAXBtSqGfMPuFOVn4/+FlaqfBA=="
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
    },
    "compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "requires": {
        "mime-db": ">= 1.43.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "connect": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/connect/-/connect-3.7.0.tgz",
      "integrity": "sha512-ZqRXc+tZukToSNmh5C2iWMSoV3X1YUcPbqEM4DkEG5tNQXrQUZCNVGGv3IuicnkMtPfGf3Xtp8WCXs295iQ1pQ==",
      "requires": {
        "debug": "2.6.9",
        "finalhandler": "1.1.2",
        "parseurl": "~1.3.3",
        "utils-merge": "1.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "convert-source-map": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
      "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
    },
    "core-js": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-1.2.7.tgz",
      "integrity": "sha1-ZSKUwUZR2yj6k70tX/KYOk8IxjY="
    },
    "core-js-compat": {
      "version": "3.18.2",
      "resolved": "https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.18.2.tgz",
      "integrity": "sha512-25VJYCJtGjZwLguj7d66oiHfmnVw3TMOZ0zV8DyMJp/aeQ3OjR519iOOeck08HMyVVRAqXxafc2Hl+5QstJrsQ==",
      "requires": {
        "browserslist": "^4.17.3",
        "semver": "7.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "7.0.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
          "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A=="
        }
      }
    },
    "core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ=="
    },
    "cosmiconfig": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "requires": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      }
    },
    "create-react-class": {
      "version": "15.7.0",
      "resolved": "https://registry.npmjs.org/create-react-class/-/create-react-class-15.7.0.tgz",
      "integrity": "sha512-QZv4sFWG9S5RUvkTYWbflxeZX+JG7Cz0Tn33rQBJ+WFQTqTfUTjMjiv9tnfXazjsO5r0KhPs+AqCjyrQX6h2ng==",
      "requires": {
        "loose-envify": "^1.3.1",
        "object-assign": "^4.1.1"
      }
    },
    "cross-spawn": {
      "version": "6.0.5",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "requires": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "dependencies": {
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
        }
      }
    },
    "css-in-js-utils": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/css-in-js-utils/-/css-in-js-utils-2.0.1.tgz",
      "integrity": "sha512-PJF0SpJT+WdbVVt0AOYp9C8GnuruRlL/UFW7932nLWmFLQTaWEzTBQEx7/hn4BuV+WON75iAViSUJLiU3PKbpA==",
      "requires": {
        "hyphenate-style-name": "^1.0.2",
        "isobject": "^3.0.1"
      }
    },
    "dayjs": {
      "version": "1.10.7",
      "resolved": "https://registry.npmjs.org/dayjs/-/dayjs-1.10.7.tgz",
      "integrity": "sha512-P6twpd70BcPK34K26uJ1KT3wlhpuOAPoMwJzpsIWUxHZ7wpmbdZL/hQqBDfz7hGurYSa5PhzdhDHtt319hL3ig=="
    },
    "debug": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
      "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",
      "requires": {
        "ms": "2.1.2"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
    },
    "deep-assign": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/deep-assign/-/deep-assign-3.0.0.tgz",
      "integrity": "sha512-YX2i9XjJ7h5q/aQ/IM9PEwEnDqETAIYbggmdDB3HLTlSgo1CxPsj6pvhPG68rq6SVE0+p+6Ywsm5fTYNrYtBWw==",
      "requires": {
        "is-obj": "^1.0.0"
      }
    },
    "deepmerge": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-3.3.0.tgz",
      "integrity": "sha512-GRQOafGHwMHpjPx9iCvTgpu9NojZ49q794EEL94JVEw6VaeA8XTUyBKvAkOOjBX9oJNiV6G3P+T+tihFjo2TqA=="
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "requires": {
        "clone": "^1.0.2"
      }
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      }
    },
    "denodeify": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/denodeify/-/denodeify-1.2.1.tgz",
      "integrity": "sha1-OjYof1A05pnnV3kBBSwubJQlFjE="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "electron-to-chromium": {
      "version": "1.3.864",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.864.tgz",
      "integrity": "sha512-v4rbad8GO6/yVI92WOeU9Wgxc4NA0n4f6P1FvZTY+jyY7JHEhw3bduYu60v3Q1h81Cg6eo4ApZrFPuycwd5hGw=="
    },
    "emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "encoding": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
      "integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
      "requires": {
        "iconv-lite": "^0.6.2"
      }
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "envinfo": {
      "version": "7.8.1",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.8.1.tgz",
      "integrity": "sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw=="
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "error-stack-parser": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/error-stack-parser/-/error-stack-parser-2.0.6.tgz",
      "integrity": "sha512-d51brTeqC+BHlwF0BhPtcYgF5nlzf9ZZ0ZIUQNZpc9ZB9qw5IJ2diTrBY9jlCJkTLITYPjmiX6OWCwH+fuyNgQ==",
      "requires": {
        "stackframe": "^1.1.1"
      }
    },
    "errorhandler": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/errorhandler/-/errorhandler-1.5.1.tgz",
      "integrity": "sha512-rcOwbfvP1WTViVoUjcfZicVzjhjTuhSMntHh6mW3IrEiyE6mJyXvsToJUJGlGlw/2xU9P5whlWNGlIDVeCiT4A==",
      "requires": {
        "accepts": "~1.3.7",
        "escape-html": "~1.0.3"
      }
    },
    "escalade": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
      "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "event-target-shim": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/event-target-shim/-/event-target-shim-5.0.1.tgz",
      "integrity": "sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ=="
    },
    "eventemitter3": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz",
      "integrity": "sha512-tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q=="
    },
    "exec-sh": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.6.tgz",
      "integrity": "sha512-nQn+hI3yp+oD0huYhKwvYI32+JFeq+XkNcD1GAo3Y/MjxsfVGmrrzrnzjWiNY6f+pUCP440fThsFh5gZrRAU/w=="
    },
    "execa": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
      "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
      "requires": {
        "cross-spawn": "^6.0.0",
        "get-stream": "^4.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      }
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-data-descriptor": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
          "requires": {
            "is-accessor-descriptor": "^0.1.6",
            "is-data-descriptor": "^0.1.4",
            "kind-of": "^5.0.0"
          }
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        },
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "expo": {
      "version": "42.0.4",
      "resolved": "https://registry.npmjs.org/expo/-/expo-42.0.4.tgz",
      "integrity": "sha512-i1QvMb3cIXdsx7OQh0/N0KJHkPwFlBGEGsXRr/IF2DJFHMWd/J4DR8IaAnTAhx0ifborWHmENgXj5hgWJgirog==",
      "requires": {
        "@babel/runtime": "^7.1.2",
        "@expo/metro-config": "^0.1.70",
        "@expo/vector-icons": "^12.0.4",
        "@unimodules/core": "~7.1.2",
        "@unimodules/react-native-adapter": "~6.3.7",
        "babel-preset-expo": "~8.4.1",
        "cross-spawn": "^6.0.5",
        "expo-application": "~3.2.0",
        "expo-asset": "~8.3.3",
        "expo-constants": "~11.0.2",
        "expo-error-recovery": "~2.2.0",
        "expo-file-system": "~11.1.3",
        "expo-font": "~9.2.1",
        "expo-keep-awake": "~9.2.0",
        "fbemitter": "^2.1.1",
        "invariant": "^2.2.2",
        "md5-file": "^3.2.3",
        "pretty-format": "^26.4.0",
        "react-native-safe-area-context": "3.2.0",
        "serialize-error": "^2.1.0",
        "uuid": "^3.4.0"
      },
      "dependencies": {
        "react-native-safe-area-context": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/react-native-safe-area-context/-/react-native-safe-area-context-3.2.0.tgz",
          "integrity": "sha512-k2Nty4PwSnrg9HwrYeeE+EYqViYJoOFwEy9LxL5RIRfoqxAq/uQXNGwpUg2/u4gnKpBbEPa9eRh15KKMe/VHkA==",
          "requires": {}
        }
      }
    },
    "expo-application": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/expo-application/-/expo-application-3.2.0.tgz",
      "integrity": "sha512-NDPQAtB05Jeiw771bDYsecbLrLA39X33Jk8uP1VUVdHMy6cCfJrL8PSDssgMLElAzR94K8toeqdGsGx9mVv8zw=="
    },
    "expo-asset": {
      "version": "8.3.3",
      "resolved": "https://registry.npmjs.org/expo-asset/-/expo-asset-8.3.3.tgz",
      "integrity": "sha512-qCm5d14tzswY8DcmRJ+0WkY9tc3OiVikBAiw2hCMC+bFpK/bEdqy4Zwfd69MFIAJ0taJpHWhdUoBRO0byQLlfg==",
      "requires": {
        "blueimp-md5": "^2.10.0",
        "invariant": "^2.2.4",
        "md5-file": "^3.2.3",
        "path-browserify": "^1.0.0",
        "url-parse": "^1.4.4"
      }
    },
    "expo-constants": {
      "version": "11.0.2",
      "resolved": "https://registry.npmjs.org/expo-constants/-/expo-constants-11.0.2.tgz",
      "integrity": "sha512-CVjM+FbOMe/nFOSly5lnj0seMAYsjjc6+q3X8nIXG+gtw9iNBLwMX3Fz308rxiaPRJw+TBdd5/mcGJdNfoS+ew==",
      "requires": {
        "@expo/config": "^4.0.0",
        "expo-modules-core": "~0.2.0",
        "uuid": "^3.3.2"
      },
      "dependencies": {
        "@babel/code-frame": {
          "version": "7.10.4",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.10.4.tgz",
          "integrity": "sha512-vG6SvB6oYEhvgisZNFRmRCUkLz11c7rp+tbNTynGqc6mS1d5ATd/sGyV6W0KZZnXRKMTzZDRgQT3Ou9jhpAfUg==",
          "requires": {
            "@babel/highlight": "^7.10.4"
          }
        },
        "@babel/core": {
          "version": "7.9.0",
          "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.9.0.tgz",
          "integrity": "sha512-kWc7L0fw1xwvI0zi8OKVBuxRVefwGOrKSQMvrQ3dW+bIIavBY3/NpXmpjMy7bQnLgwgzWQZ8TlM57YHpHNHz4w==",
          "requires": {
            "@babel/code-frame": "^7.8.3",
            "@babel/generator": "^7.9.0",
            "@babel/helper-module-transforms": "^7.9.0",
            "@babel/helpers": "^7.9.0",
            "@babel/parser": "^7.9.0",
            "@babel/template": "^7.8.6",
            "@babel/traverse": "^7.9.0",
            "@babel/types": "^7.9.0",
            "convert-source-map": "^1.7.0",
            "debug": "^4.1.0",
            "gensync": "^1.0.0-beta.1",
            "json5": "^2.1.2",
            "lodash": "^4.17.13",
            "resolve": "^1.3.2",
            "semver": "^5.4.1",
            "source-map": "^0.5.0"
          },
          "dependencies": {
            "semver": {
              "version": "5.7.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
              "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
            }
          }
        },
        "@babel/plugin-proposal-class-properties": {
          "version": "7.12.13",
          "resolved": "https://registry.npmjs.org/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.12.13.tgz",
          "integrity": "sha512-8SCJ0Ddrpwv4T7Gwb33EmW1V9PY5lggTO+A8WjyIwxrSHDUyBw4MtF96ifn1n8H806YlxbVCoKXbbmzD6RD+cA==",
          "requires": {
            "@babel/helper-create-class-features-plugin": "^7.12.13",
            "@babel/helper-plugin-utils": "^7.12.13"
          }
        },
        "@babel/preset-env": {
          "version": "7.12.17",
          "resolved": "https://registry.npmjs.org/@babel/preset-env/-/preset-env-7.12.17.tgz",
          "integrity": "sha512-9PMijx8zFbCwTHrd2P4PJR5nWGH3zWebx2OcpTjqQrHhCiL2ssSR2Sc9ko2BsI2VmVBfoaQmPrlMTCui4LmXQg==",
          "requires": {
            "@babel/compat-data": "^7.12.13",
            "@babel/helper-compilation-targets": "^7.12.17",
            "@babel/helper-module-imports": "^7.12.13",
            "@babel/helper-plugin-utils": "^7.12.13",
            "@babel/helper-validator-option": "^7.12.17",
            "@babel/plugin-proposal-async-generator-functions": "^7.12.13",
            "@babel/plugin-proposal-class-properties": "^7.12.13",
            "@babel/plugin-proposal-dynamic-import": "^7.12.17",
            "@babel/plugin-proposal-export-namespace-from": "^7.12.13",
            "@babel/plugin-proposal-json-strings": "^7.12.13",
            "@babel/plugin-proposal-logical-assignment-operators": "^7.12.13",
            "@babel/plugin-proposal-nullish-coalescing-operator": "^7.12.13",
            "@babel/plugin-proposal-numeric-separator": "^7.12.13",
            "@babel/plugin-proposal-object-rest-spread": "^7.12.13",
            "@babel/plugin-proposal-optional-catch-binding": "^7.12.13",
            "@babel/plugin-proposal-optional-chaining": "^7.12.17",
            "@babel/plugin-proposal-private-methods": "^7.12.13",
            "@babel/plugin-proposal-unicode-property-regex": "^7.12.13",
            "@babel/plugin-syntax-async-generators": "^7.8.0",
            "@babel/plugin-syntax-class-properties": "^7.12.13",
            "@babel/plugin-syntax-dynamic-import": "^7.8.0",
            "@babel/plugin-syntax-export-namespace-from": "^7.8.3",
            "@babel/plugin-syntax-json-strings": "^7.8.0",
            "@babel/plugin-syntax-logical-assignment-operators": "^7.10.4",
            "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.0",
            "@babel/plugin-syntax-numeric-separator": "^7.10.4",
            "@babel/plugin-syntax-object-rest-spread": "^7.8.0",
            "@babel/plugin-syntax-optional-catch-binding": "^7.8.0",
            "@babel/plugin-syntax-optional-chaining": "^7.8.0",
            "@babel/plugin-syntax-top-level-await": "^7.12.13",
            "@babel/plugin-transform-arrow-functions": "^7.12.13",
            "@babel/plugin-transform-async-to-generator": "^7.12.13",
            "@babel/plugin-transform-block-scoped-functions": "^7.12.13",
            "@babel/plugin-transform-block-scoping": "^7.12.13",
            "@babel/plugin-transform-classes": "^7.12.13",
            "@babel/plugin-transform-computed-properties": "^7.12.13",
            "@babel/plugin-transform-destructuring": "^7.12.13",
            "@babel/plugin-transform-dotall-regex": "^7.12.13",
            "@babel/plugin-transform-duplicate-keys": "^7.12.13",
            "@babel/plugin-transform-exponentiation-operator": "^7.12.13",
            "@babel/plugin-transform-for-of": "^7.12.13",
            "@babel/plugin-transform-function-name": "^7.12.13",
            "@babel/plugin-transform-literals": "^7.12.13",
            "@babel/plugin-transform-member-expression-literals": "^7.12.13",
            "@babel/plugin-transform-modules-amd": "^7.12.13",
            "@babel/plugin-transform-modules-commonjs": "^7.12.13",
            "@babel/plugin-transform-modules-systemjs": "^7.12.13",
            "@babel/plugin-transform-modules-umd": "^7.12.13",
            "@babel/plugin-transform-named-capturing-groups-regex": "^7.12.13",
            "@babel/plugin-transform-new-target": "^7.12.13",
            "@babel/plugin-transform-object-super": "^7.12.13",
            "@babel/plugin-transform-parameters": "^7.12.13",
            "@babel/plugin-transform-property-literals": "^7.12.13",
            "@babel/plugin-transform-regenerator": "^7.12.13",
            "@babel/plugin-transform-reserved-words": "^7.12.13",
            "@babel/plugin-transform-shorthand-properties": "^7.12.13",
            "@babel/plugin-transform-spread": "^7.12.13",
            "@babel/plugin-transform-sticky-regex": "^7.12.13",
            "@babel/plugin-transform-template-literals": "^7.12.13",
            "@babel/plugin-transform-typeof-symbol": "^7.12.13",
            "@babel/plugin-transform-unicode-escapes": "^7.12.13",
            "@babel/plugin-transform-unicode-regex": "^7.12.13",
            "@babel/preset-modules": "^0.1.3",
            "@babel/types": "^7.12.17",
            "core-js-compat": "^3.8.0",
            "semver": "^5.5.0"
          },
          "dependencies": {
            "semver": {
              "version": "5.7.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
              "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
            }
          }
        },
        "@expo/config": {
          "version": "4.0.4",
          "resolved": "https://registry.npmjs.org/@expo/config/-/config-4.0.4.tgz",
          "integrity": "sha512-O3xRlwMCidOgk1WHIy6eOjh2yp0h/kgBDRNKqPe21+YDiOufyTGGNvbWgHwoax8goa1iMg443WQO7GhvaH286g==",
          "requires": {
            "@babel/core": "7.9.0",
            "@babel/plugin-proposal-class-properties": "~7.12.13",
            "@babel/preset-env": "~7.12.13",
            "@babel/preset-typescript": "~7.12.13",
            "@expo/config-plugins": "2.0.4",
            "@expo/config-types": "^41.0.0",
            "@expo/json-file": "8.2.30",
            "fs-extra": "9.0.0",
            "getenv": "^1.0.0",
            "glob": "7.1.6",
            "require-from-string": "^2.0.2",
            "resolve-from": "^5.0.0",
            "semver": "7.3.2",
            "slugify": "^1.3.4"
          }
        },
        "@expo/config-plugins": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/@expo/config-plugins/-/config-plugins-2.0.4.tgz",
          "integrity": "sha512-JGt/X2tFr7H8KBQrKfbGo9hmCubQraMxq5sj3bqDdKmDOLcE1a/EDCP9g0U4GHsa425J8VDIkQUHYz3h3ndEXQ==",
          "requires": {
            "@expo/config-types": "^41.0.0",
            "@expo/json-file": "8.2.30",
            "@expo/plist": "0.0.13",
            "debug": "^4.3.1",
            "find-up": "~5.0.0",
            "fs-extra": "9.0.0",
            "getenv": "^1.0.0",
            "glob": "7.1.6",
            "resolve-from": "^5.0.0",
            "slash": "^3.0.0",
            "xcode": "^3.0.1",
            "xml2js": "^0.4.23"
          }
        },
        "@expo/config-types": {
          "version": "41.0.0",
          "resolved": "https://registry.npmjs.org/@expo/config-types/-/config-types-41.0.0.tgz",
          "integrity": "sha512-Ax0pHuY5OQaSrzplOkT9DdpdmNzaVDnq9VySb4Ujq7UJ4U4jriLy8u93W98zunOXpcu0iiKubPsqD6lCiq0pig=="
        },
        "@expo/json-file": {
          "version": "8.2.30",
          "resolved": "https://registry.npmjs.org/@expo/json-file/-/json-file-8.2.30.tgz",
          "integrity": "sha512-vrgGyPEXBoFI5NY70IegusCSoSVIFV3T3ry4tjJg1MFQKTUlR7E0r+8g8XR6qC705rc2PawaZQjqXMAVtV6s2A==",
          "requires": {
            "@babel/code-frame": "~7.10.4",
            "fs-extra": "9.0.0",
            "json5": "^1.0.1",
            "write-file-atomic": "^2.3.0"
          },
          "dependencies": {
            "json5": {
              "version": "1.0.1",
              "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
              "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
              "requires": {
                "minimist": "^1.2.0"
              }
            }
          }
        },
        "@expo/plist": {
          "version": "0.0.13",
          "resolved": "https://registry.npmjs.org/@expo/plist/-/plist-0.0.13.tgz",
          "integrity": "sha512-zGPSq9OrCn7lWvwLLHLpHUUq2E40KptUFXn53xyZXPViI0k9lbApcR9KlonQZ95C+ELsf0BQ3gRficwK92Ivcw==",
          "requires": {
            "base64-js": "^1.2.3",
            "xmlbuilder": "^14.0.0",
            "xmldom": "~0.5.0"
          }
        },
        "semver": {
          "version": "7.3.2",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.2.tgz",
          "integrity": "sha512-OrOb32TeeambH6UrhtShmF7CRDqhL6/5XpPNp2DuRH6+9QLw/orhp72j87v8Qa1ScDkvrrBNpZcDejAirJmfXQ=="
        }
      }
    },
    "expo-error-recovery": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/expo-error-recovery/-/expo-error-recovery-2.2.0.tgz",
      "integrity": "sha512-HKbu6VHAlfhoP7y+HaGJwJizoUTY2eBTBHAi1RE7l/r4sc+cAegTmwwqf/3AOR8C7VntDvuQKtW7NZIyA+62KQ=="
    },
    "expo-file-system": {
      "version": "11.1.3",
      "resolved": "https://registry.npmjs.org/expo-file-system/-/expo-file-system-11.1.3.tgz",
      "integrity": "sha512-FBRcD6ojrkrZiTZ8O7Fbo833HhZtkhKtLDj4RNZIMpF1i+ZBD2bmeMcfLMeRHNYcBeJno9C4AVXoNQFqDCGQDg==",
      "requires": {
        "@expo/config-plugins": "^3.0.0",
        "expo-modules-core": "~0.2.0",
        "uuid": "^3.4.0"
      }
    },
    "expo-font": {
      "version": "9.2.1",
      "resolved": "https://registry.npmjs.org/expo-font/-/expo-font-9.2.1.tgz",
      "integrity": "sha512-sT9nm2Dt1nTLz+Ir1fSpyzqH40eJX324Wu5sPyvT2Ivnmu2rw2rxt3gNa8Kvdb8BPRz4qrRvHR/E+YKMqa6ZgQ==",
      "requires": {
        "expo-modules-core": "~0.2.0",
        "fontfaceobserver": "^2.1.0"
      }
    },
    "expo-keep-awake": {
      "version": "9.2.0",
      "resolved": "https://registry.npmjs.org/expo-keep-awake/-/expo-keep-awake-9.2.0.tgz",
      "integrity": "sha512-R5jAx5j3MqrhKFB307FBpaHtYSYeVIFX/rVforBF5inKonYjXRWVhjGoBjolF4geAryNamC3NKhMfxyaaB0W6Q=="
    },
    "expo-modules-autolinking": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/expo-modules-autolinking/-/expo-modules-autolinking-0.0.3.tgz",
      "integrity": "sha512-azkCRYj/DxbK4udDuDxA9beYzQTwpJ5a9QA0bBgha2jHtWdFGF4ZZWSY+zNA5mtU3KqzYt8jWHfoqgSvKyu1Aw==",
      "requires": {
        "chalk": "^4.1.0",
        "commander": "^7.2.0",
        "fast-glob": "^3.2.5",
        "find-up": "~5.0.0",
        "fs-extra": "^9.1.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "4.1.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
          "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "fs-extra": {
          "version": "9.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
          "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
          "requires": {
            "at-least-node": "^1.0.0",
            "graceful-fs": "^4.2.0",
            "jsonfile": "^6.0.1",
            "universalify": "^2.0.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "universalify": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
          "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ=="
        }
      }
    },
    "expo-modules-core": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/expo-modules-core/-/expo-modules-core-0.2.0.tgz",
      "integrity": "sha512-inpfZ5X/BaTtbj2wG9PA9AC0MN8VyId6KSRlVuEg7+ziurHBy/kKDFxpOddUokhwiln2uhoYPSStJjR/tKypdw=="
    },
    "expo-status-bar": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/expo-status-bar/-/expo-status-bar-1.0.4.tgz",
      "integrity": "sha512-s7nc496D/Zn1NGiMJ5wu6HyIdXxbgGtmZZtbHm7rpbcmLdf28GmMSNHDx7M0t00BMhky7VAurTCUo+BJs8ugsw=="
    },
    "extend-shallow": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-1.1.4.tgz",
      "integrity": "sha1-Gda/lN/AnXa6cR85uHLSH/TdkHE=",
      "requires": {
        "kind-of": "^1.1.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-1.1.0.tgz",
          "integrity": "sha1-FAo9LUGjbS78+pN3tiwk+ElaXEQ="
        }
      }
    },
    "external-editor": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-2.2.0.tgz",
      "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
      "requires": {
        "chardet": "^0.4.0",
        "iconv-lite": "^0.4.17",
        "tmp": "^0.0.33"
      },
      "dependencies": {
        "iconv-lite": {
          "version": "0.4.24",
          "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
          "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        }
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        }
      }
    },
    "fancy-log": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/fancy-log/-/fancy-log-1.3.3.tgz",
      "integrity": "sha512-k9oEhlyc0FrVh25qYuSELjr8oxsCoc4/LEZfg2iJJrfEk/tZL9bCoJE47gqAvI2m/AUjluCS4+3I0eTx8n3AEw==",
      "requires": {
        "ansi-gray": "^0.1.1",
        "color-support": "^1.1.3",
        "parse-node-version": "^1.0.0",
        "time-stamp": "^1.0.0"
      }
    },
    "fast-glob": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.2.7.tgz",
      "integrity": "sha512-rYGMRwip6lUMvYD3BTScMwT1HtAs2d71SMv66Vrxs0IekGZEjhM0pcMfjQPnknBt2zeCwQMEupiN02ZP4DiT1Q==",
      "requires": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      }
    },
    "fastq": {
      "version": "1.13.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.13.0.tgz",
      "integrity": "sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==",
      "requires": {
        "reusify": "^1.0.4"
      }
    },
    "fb-watchman": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "requires": {
        "bser": "2.1.1"
      }
    },
    "fbemitter": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/fbemitter/-/fbemitter-2.1.1.tgz",
      "integrity": "sha1-Uj4U/a9SSIBbsC9i78M75wP1GGU=",
      "requires": {
        "fbjs": "^0.8.4"
      }
    },
    "fbjs": {
      "version": "0.8.17",
      "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-0.8.17.tgz",
      "integrity": "sha1-xNWY6taUkRJlPWWIsBpc3Nn5D90=",
      "requires": {
        "core-js": "^1.0.0",
        "isomorphic-fetch": "^2.1.1",
        "loose-envify": "^1.0.0",
        "object-assign": "^4.1.0",
        "promise": "^7.1.1",
        "setimmediate": "^1.0.5",
        "ua-parser-js": "^0.7.18"
      }
    },
    "fbjs-css-vars": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/fbjs-css-vars/-/fbjs-css-vars-1.0.2.tgz",
      "integrity": "sha512-b2XGFAFdWZWg0phtAWLHCk836A1Xann+I+Dgd3Gk64MHKZO44FfoD1KxyvbSh0qZsIoXQGGlVztIY+oitJPpRQ=="
    },
    "fbjs-scripts": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/fbjs-scripts/-/fbjs-scripts-1.2.0.tgz",
      "integrity": "sha512-5krZ8T0Bf8uky0abPoCLrfa7Orxd8UH4Qq8hRUF2RZYNMu+FmEOrBc7Ib3YVONmxTXTlLAvyrrdrVmksDb2OqQ==",
      "requires": {
        "@babel/core": "^7.0.0",
        "ansi-colors": "^1.0.1",
        "babel-preset-fbjs": "^3.2.0",
        "core-js": "^2.4.1",
        "cross-spawn": "^5.1.0",
        "fancy-log": "^1.3.2",
        "object-assign": "^4.0.1",
        "plugin-error": "^0.1.2",
        "semver": "^5.1.0",
        "through2": "^2.0.0"
      },
      "dependencies": {
        "core-js": {
          "version": "2.6.12",
          "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
          "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ=="
        },
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI="
        }
      }
    },
    "figures": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "requires": {
        "escape-string-regexp": "^1.0.5"
      }
    },
    "file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "optional": true
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "find-babel-config": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/find-babel-config/-/find-babel-config-1.2.0.tgz",
      "integrity": "sha512-jB2CHJeqy6a820ssiqwrKMeyC6nNdmrcgkKWJWmpoxpE8RKciYJXCcXRq1h2AzCo5I5BJeN2tkGEO3hLTuePRA==",
      "requires": {
        "json5": "^0.5.1",
        "path-exists": "^3.0.0"
      },
      "dependencies": {
        "json5": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE="
        }
      }
    },
    "find-cache-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      }
    },
    "find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "requires": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "dependencies": {
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
        }
      }
    },
    "fontfaceobserver": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fontfaceobserver/-/fontfaceobserver-2.1.0.tgz",
      "integrity": "sha512-ReOsO2F66jUa0jmv2nlM/s1MiutJx/srhAe2+TE8dJCMi02ZZOcCTxTCQFr3Yet+uODUtnr4Mewg+tNQ+4V1Ng=="
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-extra": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.0.0.tgz",
      "integrity": "sha512-pmEYSk3vYsG/bF651KPUXZ+hvjpgWYw/Gc7W9NFUe3ZVLczKKWIij3IKpOrQcdw4TILtibFslZ0UmR8Vvzig4g==",
      "requires": {
        "at-least-node": "^1.0.0",
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^1.0.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "optional": true,
      "requires": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      }
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
    },
    "gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="
    },
    "get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
    },
    "get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
    },
    "getenv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/getenv/-/getenv-1.0.0.tgz",
      "integrity": "sha512-7yetJWqbS9sbn0vIfliPsFgoXMKn/YMF+Wuiog97x+urnSRRRZ7xB+uVkwGKzRgq9CDFfMQnE9ruL5DHv9c6Xg=="
    },
    "glob": {
      "version": "7.1.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
    },
    "graceful-fs": {
      "version": "4.2.8",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.8.tgz",
      "integrity": "sha512-qkIilPUYcNhJpd33n0GBXTB1MMPp14TxEsEs0pTrsSVucApsYzW5V+Q8Qxhik6KU3evy+qkAAowTByymK0avdg=="
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
    },
    "has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "hermes-engine": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/hermes-engine/-/hermes-engine-0.5.1.tgz",
      "integrity": "sha512-hLwqh8dejHayjlpvZY40e1aDCDvyP98cWx/L5DhAjSJLH8g4z9Tp08D7y4+3vErDsncPOdf1bxm+zUWpx0/Fxg=="
    },
    "hermes-profile-transformer": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/hermes-profile-transformer/-/hermes-profile-transformer-0.0.6.tgz",
      "integrity": "sha512-cnN7bQUm65UWOy6cbGcCcZ3rpwW8Q/j4OP5aWRhEry4Z2t2aR1cjrbp0BS+KiBN0smvP1caBgAuxutvyvJILzQ==",
      "requires": {
        "source-map": "^0.7.3"
      },
      "dependencies": {
        "source-map": {
          "version": "0.7.3",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
          "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
        }
      }
    },
    "http-errors": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.3.tgz",
      "integrity": "sha512-ZTTX0MWrsQ2ZAhA1cejAwDLycFsd7I7nVtnkT3Ol0aqodaKW+0CTZDQ1uBv5whptCnc8e8HeRRJxRs0kmm/Qfw==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.4",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "hyphenate-style-name": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/hyphenate-style-name/-/hyphenate-style-name-1.0.4.tgz",
      "integrity": "sha512-ygGZLjmXfPHj+ZWh6LwbC37l43MhfztxetbFCoYTM2VjkIUpeHgSNn7QIyVFj7YQ1Wl9Cbw5sholVJPzWvC2MQ=="
    },
    "iconv-lite": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      }
    },
    "image-size": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/image-size/-/image-size-0.6.3.tgz",
      "integrity": "sha512-47xSUiQioGaB96nqtp5/q55m0aBQSQdyIloMOc/x+QVTDZLNmXE892IIDrJ0hM1A5vcNUDD5tDffkSP5lCaIIA=="
    },
    "import-fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "requires": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g="
        }
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
    },
    "inline-style-prefixer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/inline-style-prefixer/-/inline-style-prefixer-5.1.2.tgz",
      "integrity": "sha512-PYUF+94gDfhy+LsQxM0g3d6Hge4l1pAqOSOiZuHWzMvQEGsbRQ/ck2WioLqrY2ZkHyPgVUXxn+hrkF7D6QUGbA==",
      "requires": {
        "css-in-js-utils": "^2.0.0"
      }
    },
    "inquirer": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-3.3.0.tgz",
      "integrity": "sha512-h+xtnyk4EwKvFWHrUYsWErEVR+igKtLdchu+o0Z1RL7VU/jVMFbYir2bp6bAj8efFNxWqHX0dIss6fJQ+/+qeQ==",
      "requires": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.0",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^2.0.4",
        "figures": "^2.0.0",
        "lodash": "^4.3.0",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rx-lite": "^4.0.8",
        "rx-lite-aggregates": "^4.0.8",
        "string-width": "^2.1.0",
        "strip-ansi": "^4.0.0",
        "through": "^2.3.6"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "requires": {
        "loose-envify": "^1.0.0"
      }
    },
    "ip": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
      "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
    },
    "is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "requires": {
        "kind-of": "^6.0.0"
      }
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
    },
    "is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "requires": {
        "ci-info": "^2.0.0"
      }
    },
    "is-core-module": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.7.0.tgz",
      "integrity": "sha512-ByY+tjCciCr+9nLryBYcSD50EOGWt95c7tIsKTG1J2ixKKXPvF7Ej3AVd+UfDydAJom3biBGDBALaO79ktwgEQ==",
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "requires": {
        "kind-of": "^6.0.0"
      }
    },
    "is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "requires": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      }
    },
    "is-directory": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE="
    },
    "is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "requires": {
        "is-plain-object": "^2.0.4"
      }
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
    },
    "is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
    },
    "is-obj": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-1.0.1.tgz",
      "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8="
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
    },
    "is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0="
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
    },
    "isomorphic-fetch": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/isomorphic-fetch/-/isomorphic-fetch-2.2.1.tgz",
      "integrity": "sha1-YRrhrPFPXoH3KVB0coGf6XM1WKk=",
      "requires": {
        "node-fetch": "^1.0.1",
        "whatwg-fetch": ">=0.10.0"
      }
    },
    "jest-get-type": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-24.9.0.tgz",
      "integrity": "sha512-lUseMzAley4LhIcpSP9Jf+fTrQ4a1yHQwLNeeVa2cEmbCGeoZAtYPOIv8JaxLD/sUpKxetKGP+gsHl8f8TSj8Q=="
    },
    "jest-haste-map": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-24.9.0.tgz",
      "integrity": "sha512-kfVFmsuWui2Sj1Rp1AJ4D9HqJwE4uwTlS/vO+eRUaMmd54BFpli2XhMQnPC2k4cHFVbB2Q2C+jtI1AGLgEnCjQ==",
      "requires": {
        "@jest/types": "^24.9.0",
        "anymatch": "^2.0.0",
        "fb-watchman": "^2.0.0",
        "fsevents": "^1.2.7",
        "graceful-fs": "^4.1.15",
        "invariant": "^2.2.4",
        "jest-serializer": "^24.9.0",
        "jest-util": "^24.9.0",
        "jest-worker": "^24.9.0",
        "micromatch": "^3.1.10",
        "sane": "^4.0.3",
        "walker": "^1.0.7"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "jest-message-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-24.9.0.tgz",
      "integrity": "sha512-oCj8FiZ3U0hTP4aSui87P4L4jC37BtQwUMqk+zk/b11FR19BJDeZsZAvIHutWnmtw7r85UmR3CEWZ0HWU2mAlw==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "@types/stack-utils": "^1.0.1",
        "chalk": "^2.0.1",
        "micromatch": "^3.1.10",
        "slash": "^2.0.0",
        "stack-utils": "^1.0.1"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "jest-mock": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-24.9.0.tgz",
      "integrity": "sha512-3BEYN5WbSq9wd+SyLDES7AHnjH9A/ROBwmz7l2y+ol+NtSFO8DYiEBzoO1CeFc9a8DYy10EO4dDFVv/wN3zl1w==",
      "requires": {
        "@jest/types": "^24.9.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        }
      }
    },
    "jest-serializer": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-24.9.0.tgz",
      "integrity": "sha512-DxYipDr8OvfrKH3Kel6NdED3OXxjvxXZ1uIY2I9OFbGg+vUkkg7AGvi65qbhbWNPvDckXmzMPbK3u3HaDO49bQ=="
    },
    "jest-util": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-24.9.0.tgz",
      "integrity": "sha512-x+cZU8VRmOJxbA1K5oDBdxQmdq0OIdADarLxk0Mq+3XS4jgvhG/oKGWcIDCtPG0HgjxOYvF+ilPJQsAyXfbNOg==",
      "requires": {
        "@jest/console": "^24.9.0",
        "@jest/fake-timers": "^24.9.0",
        "@jest/source-map": "^24.9.0",
        "@jest/test-result": "^24.9.0",
        "@jest/types": "^24.9.0",
        "callsites": "^3.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.15",
        "is-ci": "^2.0.0",
        "mkdirp": "^0.5.1",
        "slash": "^2.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "callsites": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
        },
        "slash": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/slash/-/slash-2.0.0.tgz",
          "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "jest-validate": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-24.9.0.tgz",
      "integrity": "sha512-HPIt6C5ACwiqSiwi+OfSSHbK8sG7akG8eATl+IPKaeIjtPOeBUd/g3J7DghugzxrGjI93qS/+RPKe1H6PqvhRQ==",
      "requires": {
        "@jest/types": "^24.9.0",
        "camelcase": "^5.3.1",
        "chalk": "^2.0.1",
        "jest-get-type": "^24.9.0",
        "leven": "^3.1.0",
        "pretty-format": "^24.9.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "ansi-regex": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
        },
        "pretty-format": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
          "requires": {
            "@jest/types": "^24.9.0",
            "ansi-regex": "^4.0.0",
            "ansi-styles": "^3.2.0",
            "react-is": "^16.8.4"
          }
        },
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        }
      }
    },
    "jest-worker": {
      "version": "24.9.0",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-24.9.0.tgz",
      "integrity": "sha512-51PE4haMSXcHohnSMdM42anbvZANYTqMrr52tVKPqqsPJMzoP6FYYDVqahX/HrAoKEKz3uUPzSvKs9A3qR4iVw==",
      "requires": {
        "merge-stream": "^2.0.0",
        "supports-color": "^6.1.0"
      },
      "dependencies": {
        "merge-stream": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
        },
        "supports-color": {
          "version": "6.1.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "jetifier": {
      "version": "1.6.8",
      "resolved": "https://registry.npmjs.org/jetifier/-/jetifier-1.6.8.tgz",
      "integrity": "sha512-3Zi16h6L5tXDRQJTb221cnRoVG9/9OvreLdLU2/ZjRv/GILL+2Cemt0IKvkowwkDpvouAU1DQPOJ7qaiHeIdrw=="
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsc-android": {
      "version": "245459.0.0",
      "resolved": "https://registry.npmjs.org/jsc-android/-/jsc-android-245459.0.0.tgz",
      "integrity": "sha512-wkjURqwaB1daNkDi2OYYbsLnIdC/lUM2nPXQKRs5pqEU9chDg435bjvo+LSaHotDENygHQDHe+ntUkkw2gwMtg=="
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw=="
    },
    "json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "requires": {
        "jsonify": "~0.0.0"
      }
    },
    "json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "jsonfile": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
      "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
      "requires": {
        "graceful-fs": "^4.1.6",
        "universalify": "^2.0.0"
      },
      "dependencies": {
        "universalify": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
          "integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ=="
        }
      }
    },
    "jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM="
    },
    "kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
    },
    "klaw": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/klaw/-/klaw-1.3.1.tgz",
      "integrity": "sha1-QIhDO0azsbolnXh4XY6W9zugJDk=",
      "requires": {
        "graceful-fs": "^4.1.9"
      }
    },
    "leven": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
      "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
    },
    "lines-and-columns": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
      "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA="
    },
    "locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "requires": {
        "p-locate": "^5.0.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "lodash._reinterpolate": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/lodash._reinterpolate/-/lodash._reinterpolate-3.0.0.tgz",
      "integrity": "sha1-DM8tiRZq8Ds2Y8eWU4t1rG4RTZ0="
    },
    "lodash.debounce": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/lodash.debounce/-/lodash.debounce-4.0.8.tgz",
      "integrity": "sha1-gteb/zCmfEAF/9XiUVMArZyk168="
    },
    "lodash.frompairs": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.frompairs/-/lodash.frompairs-4.0.1.tgz",
      "integrity": "sha1-vE5SB/onV8E25XNhTpZkUGsrG9I="
    },
    "lodash.isequal": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.isequal/-/lodash.isequal-4.5.0.tgz",
      "integrity": "sha1-QVxEePK8wwEgwizhDtMib30+GOA="
    },
    "lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "lodash.omit": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.omit/-/lodash.omit-4.5.0.tgz",
      "integrity": "sha1-brGa5aHuHdnfC5aeZs4Lf6MLXmA="
    },
    "lodash.pick": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz",
      "integrity": "sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM="
    },
    "lodash.template": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/lodash.template/-/lodash.template-4.5.0.tgz",
      "integrity": "sha512-84vYFxIkmidUiFxidA/KjjH9pAycqW+h980j7Fuz5qxRtO9pgB7MDFTdys1N7A5mcucRiDyEq4fusljItR1T/A==",
      "requires": {
        "lodash._reinterpolate": "^3.0.0",
        "lodash.templatesettings": "^4.0.0"
      }
    },
    "lodash.templatesettings": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/lodash.templatesettings/-/lodash.templatesettings-4.2.0.tgz",
      "integrity": "sha512-stgLz+i3Aa9mZgnjr/O+v9ruKZsPsndy7qPZOchbqk2cnTU1ZaldKK+v7m54WoKIyxiuMZTKT2H81F8BeAc3ZQ==",
      "requires": {
        "lodash._reinterpolate": "^3.0.0"
      }
    },
    "lodash.throttle": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
      "integrity": "sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ="
    },
    "log-symbols": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "requires": {
        "chalk": "^2.0.1"
      }
    },
    "logkitty": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/logkitty/-/logkitty-0.7.1.tgz",
      "integrity": "sha512-/3ER20CTTbahrCrpYfPn7Xavv9diBROZpoXGVZDWMw4b/X4uuUwAC0ki85tgsdMRONURyIJbcOvS94QsUBYPbQ==",
      "requires": {
        "ansi-fragments": "^0.2.1",
        "dayjs": "^1.8.15",
        "yargs": "^15.1.0"
      }
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "make-dir": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "requires": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      },
      "dependencies": {
        "semver": {
          "version": "5.7.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
        }
      }
    },
    "makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "requires": {
        "tmpl": "1.0.x"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "md5-file": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/md5-file/-/md5-file-3.2.3.tgz",
      "integrity": "sha512-3Tkp1piAHaworfcCgH0jKbTvj1jWWFgbvh2cXaNCgHwyTCBxxvD1Y04rmfpvdPm1P4oXMOpm6+2H7sr7v9v8Fw==",
      "requires": {
        "buffer-alloc": "^1.1.0"
      }
    },
    "merge-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg=="
    },
    "metro": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro/-/metro-0.59.0.tgz",
      "integrity": "sha512-OpVgYXyuTvouusFZQJ/UYKEbwfLmialrSCUUTGTFaBor6UMUHZgXPYtK86LzesgMqRc8aiuTQVO78iKW2Iz3wg==",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/core": "^7.0.0",
        "@babel/generator": "^7.5.0",
        "@babel/parser": "^7.0.0",
        "@babel/plugin-external-helpers": "^7.0.0",
        "@babel/template": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "absolute-path": "^0.0.0",
        "async": "^2.4.0",
        "babel-preset-fbjs": "^3.3.0",
        "buffer-crc32": "^0.2.13",
        "chalk": "^2.4.1",
        "ci-info": "^2.0.0",
        "concat-stream": "^1.6.0",
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "denodeify": "^1.2.1",
        "error-stack-parser": "^2.0.6",
        "eventemitter3": "^3.0.0",
        "fbjs": "^1.0.0",
        "fs-extra": "^1.0.0",
        "graceful-fs": "^4.1.3",
        "image-size": "^0.6.0",
        "invariant": "^2.2.4",
        "jest-haste-map": "^24.9.0",
        "jest-worker": "^24.9.0",
        "json-stable-stringify": "^1.0.1",
        "lodash.throttle": "^4.1.1",
        "merge-stream": "^1.0.1",
        "metro-babel-register": "0.59.0",
        "metro-babel-transformer": "0.59.0",
        "metro-cache": "0.59.0",
        "metro-config": "0.59.0",
        "metro-core": "0.59.0",
        "metro-inspector-proxy": "0.59.0",
        "metro-minify-uglify": "0.59.0",
        "metro-react-native-babel-preset": "0.59.0",
        "metro-resolver": "0.59.0",
        "metro-source-map": "0.59.0",
        "metro-symbolicate": "0.59.0",
        "mime-types": "2.1.11",
        "mkdirp": "^0.5.1",
        "node-fetch": "^2.2.0",
        "nullthrows": "^1.1.1",
        "resolve": "^1.5.0",
        "rimraf": "^2.5.4",
        "serialize-error": "^2.1.0",
        "source-map": "^0.5.6",
        "strip-ansi": "^4.0.0",
        "temp": "0.8.3",
        "throat": "^4.1.0",
        "wordwrap": "^1.0.0",
        "ws": "^1.1.5",
        "xpipe": "^1.0.5",
        "yargs": "^14.2.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "cliui": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
          "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
          "requires": {
            "string-width": "^3.1.0",
            "strip-ansi": "^5.2.0",
            "wrap-ansi": "^5.1.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
            },
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "requires": {
                "ansi-regex": "^4.1.0"
              }
            }
          }
        },
        "core-js": {
          "version": "2.6.12",
          "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
          "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ=="
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "emoji-regex": {
          "version": "7.0.3",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
        },
        "fbjs": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
          "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
          "requires": {
            "core-js": "^2.4.1",
            "fbjs-css-vars": "^1.0.0",
            "isomorphic-fetch": "^2.1.1",
            "loose-envify": "^1.0.0",
            "object-assign": "^4.1.0",
            "promise": "^7.1.1",
            "setimmediate": "^1.0.5",
            "ua-parser-js": "^0.7.18"
          }
        },
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "fs-extra": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-1.0.0.tgz",
          "integrity": "sha1-zTzl9+fLYUWIP8rjGR6Yd/hYeVA=",
          "requires": {
            "graceful-fs": "^4.1.2",
            "jsonfile": "^2.1.0",
            "klaw": "^1.0.0"
          }
        },
        "jsonfile": {
          "version": "2.4.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-2.4.0.tgz",
          "integrity": "sha1-NzaitCi4e72gzIO1P6PWM6NcKug=",
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "mime-db": {
          "version": "1.23.0",
          "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.23.0.tgz",
          "integrity": "sha1-oxtAcK2uon1zLqMzdApk0OyaZlk="
        },
        "mime-types": {
          "version": "2.1.11",
          "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.11.tgz",
          "integrity": "sha1-wlnEcb2oCKhdbNGTtDCl+uRHOzw=",
          "requires": {
            "mime-db": "~1.23.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "node-fetch": {
          "version": "2.6.5",
          "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.5.tgz",
          "integrity": "sha512-mmlIVHJEu5rnIxgEgez6b9GgWXbkZj5YZ7fx+2r94a2E+Uirsp6HsPTPlomfdHtpt/B0cdKviwkoaM6pyvUOpQ==",
          "requires": {
            "whatwg-url": "^5.0.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
            },
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "requires": {
                "ansi-regex": "^4.1.0"
              }
            }
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        },
        "wrap-ansi": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
          "requires": {
            "ansi-styles": "^3.2.0",
            "string-width": "^3.0.0",
            "strip-ansi": "^5.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
            },
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "requires": {
                "ansi-regex": "^4.1.0"
              }
            }
          }
        },
        "ws": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
          "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
          "requires": {
            "options": ">=0.0.5",
            "ultron": "1.0.x"
          }
        },
        "yargs": {
          "version": "14.2.3",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz",
          "integrity": "sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==",
          "requires": {
            "cliui": "^5.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^3.0.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^15.0.1"
          }
        },
        "yargs-parser": {
          "version": "15.0.3",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.3.tgz",
          "integrity": "sha512-/MVEVjTXy/cGAjdtQf8dW3V9b97bPN7rNn8ETj6BmAQL7ibC7O1Q9SPJbGjgh3SlwoBNXMzj/ZGIj8mBgl12YA==",
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "metro-babel-register": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-babel-register/-/metro-babel-register-0.59.0.tgz",
      "integrity": "sha512-JtWc29erdsXO/V3loenXKw+aHUXgj7lt0QPaZKPpctLLy8kcEpI/8pfXXgVK9weXICCpCnYtYncIosAyzh0xjg==",
      "requires": {
        "@babel/core": "^7.0.0",
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/register": "^7.0.0",
        "escape-string-regexp": "^1.0.5"
      }
    },
    "metro-babel-transformer": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-babel-transformer/-/metro-babel-transformer-0.59.0.tgz",
      "integrity": "sha512-fdZJl8rs54GVFXokxRdD7ZrQ1TJjxWzOi/xSP25VR3E8tbm3nBZqS+/ylu643qSr/IueABR+jrlqAyACwGEf6w==",
      "requires": {
        "@babel/core": "^7.0.0",
        "metro-source-map": "0.59.0"
      }
    },
    "metro-cache": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-cache/-/metro-cache-0.59.0.tgz",
      "integrity": "sha512-ryWNkSnpyADfRpHGb8BRhQ3+k8bdT/bsxMH2O0ntlZYZ188d8nnYWmxbRvFmEzToJxe/ol4uDw0tJFAaQsN8KA==",
      "requires": {
        "jest-serializer": "^24.9.0",
        "metro-core": "0.59.0",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.5.4"
      }
    },
    "metro-config": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-config/-/metro-config-0.59.0.tgz",
      "integrity": "sha512-MDsknFG9vZ4Nb5VR6OUDmGHaWz6oZg/FtE3up1zVBKPVRTXE1Z+k7zypnPtMXjMh3WHs/Sy4+wU1xnceE/zdnA==",
      "requires": {
        "cosmiconfig": "^5.0.5",
        "jest-validate": "^24.9.0",
        "metro": "0.59.0",
        "metro-cache": "0.59.0",
        "metro-core": "0.59.0"
      }
    },
    "metro-core": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-core/-/metro-core-0.59.0.tgz",
      "integrity": "sha512-kb5LKvV5r2pqMEzGyTid8ai2mIjW13NMduQ8oBmfha7/EPTATcTQ//s+bkhAs1toQD8vqVvjAb0cPNjWQEmcmQ==",
      "requires": {
        "jest-haste-map": "^24.9.0",
        "lodash.throttle": "^4.1.1",
        "metro-resolver": "0.59.0",
        "wordwrap": "^1.0.0"
      }
    },
    "metro-inspector-proxy": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-inspector-proxy/-/metro-inspector-proxy-0.59.0.tgz",
      "integrity": "sha512-hPeAuQcofTOH0F+2GEZqWkvkVY1/skezSSlMocDQDaqds+Kw6JgdA7FlZXxnKmQ/jYrWUzff/pl8SUCDwuYthQ==",
      "requires": {
        "connect": "^3.6.5",
        "debug": "^2.2.0",
        "ws": "^1.1.5",
        "yargs": "^14.2.0"
      },
      "dependencies": {
        "cliui": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
          "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
          "requires": {
            "string-width": "^3.1.0",
            "strip-ansi": "^5.2.0",
            "wrap-ansi": "^5.1.0"
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "emoji-regex": {
          "version": "7.0.3",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
        },
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "wrap-ansi": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
          "requires": {
            "ansi-styles": "^3.2.0",
            "string-width": "^3.0.0",
            "strip-ansi": "^5.0.0"
          }
        },
        "ws": {
          "version": "1.1.5",
          "resolved": "https://registry.npmjs.org/ws/-/ws-1.1.5.tgz",
          "integrity": "sha512-o3KqipXNUdS7wpQzBHSe180lBGO60SoK0yVo3CYJgb2MkobuWuBX6dhkYP5ORCLd55y+SaflMOV5fqAB53ux4w==",
          "requires": {
            "options": ">=0.0.5",
            "ultron": "1.0.x"
          }
        },
        "yargs": {
          "version": "14.2.3",
          "resolved": "https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz",
          "integrity": "sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==",
          "requires": {
            "cliui": "^5.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^3.0.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^15.0.1"
          }
        },
        "yargs-parser": {
          "version": "15.0.3",
          "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.3.tgz",
          "integrity": "sha512-/MVEVjTXy/cGAjdtQf8dW3V9b97bPN7rNn8ETj6BmAQL7ibC7O1Q9SPJbGjgh3SlwoBNXMzj/ZGIj8mBgl12YA==",
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "metro-minify-uglify": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-minify-uglify/-/metro-minify-uglify-0.59.0.tgz",
      "integrity": "sha512-7IzVgCVWZMymgZ/quieg/9v5EQ8QmZWAgDc86Zp9j0Vy6tQTjUn6jlU+YAKW3mfMEjMr6iIUzCD8YklX78tFAw==",
      "requires": {
        "uglify-es": "^3.1.9"
      }
    },
    "metro-react-native-babel-preset": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-preset/-/metro-react-native-babel-preset-0.59.0.tgz",
      "integrity": "sha512-BoO6ncPfceIDReIH8pQ5tQptcGo5yRWQXJGVXfANbiKLq4tfgdZB1C1e2rMUJ6iypmeJU9dzl+EhPmIFKtgREg==",
      "requires": {
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-export-default-from": "^7.0.0",
        "@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
        "@babel/plugin-proposal-optional-catch-binding": "^7.0.0",
        "@babel/plugin-proposal-optional-chaining": "^7.0.0",
        "@babel/plugin-syntax-dynamic-import": "^7.0.0",
        "@babel/plugin-syntax-export-default-from": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.2.0",
        "@babel/plugin-syntax-nullish-coalescing-operator": "^7.0.0",
        "@babel/plugin-syntax-optional-chaining": "^7.0.0",
        "@babel/plugin-transform-arrow-functions": "^7.0.0",
        "@babel/plugin-transform-block-scoping": "^7.0.0",
        "@babel/plugin-transform-classes": "^7.0.0",
        "@babel/plugin-transform-computed-properties": "^7.0.0",
        "@babel/plugin-transform-destructuring": "^7.0.0",
        "@babel/plugin-transform-exponentiation-operator": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.0.0",
        "@babel/plugin-transform-for-of": "^7.0.0",
        "@babel/plugin-transform-function-name": "^7.0.0",
        "@babel/plugin-transform-literals": "^7.0.0",
        "@babel/plugin-transform-modules-commonjs": "^7.0.0",
        "@babel/plugin-transform-object-assign": "^7.0.0",
        "@babel/plugin-transform-parameters": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-react-jsx-self": "^7.0.0",
        "@babel/plugin-transform-react-jsx-source": "^7.0.0",
        "@babel/plugin-transform-regenerator": "^7.0.0",
        "@babel/plugin-transform-runtime": "^7.0.0",
        "@babel/plugin-transform-shorthand-properties": "^7.0.0",
        "@babel/plugin-transform-spread": "^7.0.0",
        "@babel/plugin-transform-sticky-regex": "^7.0.0",
        "@babel/plugin-transform-template-literals": "^7.0.0",
        "@babel/plugin-transform-typescript": "^7.5.0",
        "@babel/plugin-transform-unicode-regex": "^7.0.0",
        "@babel/template": "^7.0.0",
        "react-refresh": "^0.4.0"
      }
    },
    "metro-react-native-babel-transformer": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-react-native-babel-transformer/-/metro-react-native-babel-transformer-0.59.0.tgz",
      "integrity": "sha512-1O3wrnMq4NcPQ1asEcl9lRDn/t+F1Oef6S9WaYVIKEhg9m/EQRGVrrTVP+R6B5Eeaj3+zNKbzM8Dx/NWy1hUbQ==",
      "requires": {
        "@babel/core": "^7.0.0",
        "babel-preset-fbjs": "^3.3.0",
        "metro-babel-transformer": "0.59.0",
        "metro-react-native-babel-preset": "0.59.0",
        "metro-source-map": "0.59.0"
      }
    },
    "metro-resolver": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-resolver/-/metro-resolver-0.59.0.tgz",
      "integrity": "sha512-lbgiumnwoVosffEI96z0FGuq1ejTorHAj3QYUPmp5dFMfitRxLP7Wm/WP9l4ZZjIptxTExsJwuEff1SLRCPD9w==",
      "requires": {
        "absolute-path": "^0.0.0"
      }
    },
    "metro-source-map": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-source-map/-/metro-source-map-0.59.0.tgz",
      "integrity": "sha512-0w5CmCM+ybSqXIjqU4RiK40t4bvANL6lafabQ2GP2XD3vSwkLY+StWzCtsb4mPuyi9R/SgoLBel+ZOXHXAH0eQ==",
      "requires": {
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "invariant": "^2.2.4",
        "metro-symbolicate": "0.59.0",
        "ob1": "0.59.0",
        "source-map": "^0.5.6",
        "vlq": "^1.0.0"
      }
    },
    "metro-symbolicate": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/metro-symbolicate/-/metro-symbolicate-0.59.0.tgz",
      "integrity": "sha512-asLaF2A7rndrToGFIknL13aiohwPJ95RKHf0NM3hP/nipiLDoMzXT6ZnQvBqDxkUKyP+51AI75DMtb+Wcyw4Bw==",
      "requires": {
        "invariant": "^2.2.4",
        "metro-source-map": "0.59.0",
        "source-map": "^0.5.6",
        "through2": "^2.0.1",
        "vlq": "^1.0.0"
      }
    },
    "micromatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
      "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
      "requires": {
        "braces": "^3.0.1",
        "picomatch": "^2.2.3"
      }
    },
    "mime": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/mime/-/mime-2.5.2.tgz",
      "integrity": "sha512-tqkh47FzKeCPD2PUiPB6pkbMzsCasjxAfC62/Wap5qrUWcb+sFasXUC5I3gYM5iBM8v/Qpn4UK0x+j0iHyFPDg=="
    },
    "mime-db": {
      "version": "1.50.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.50.0.tgz",
      "integrity": "sha512-9tMZCDlYHqeERXEHO9f/hKfNXhre5dK2eE/krIvUjZbS2KPcqGDfNShIWS1uW9XOTKQKqK6qbeOci18rbfW77A=="
    },
    "mime-types": {
      "version": "2.1.33",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.33.tgz",
      "integrity": "sha512-plLElXp7pRDd0bNZHw+nMd52vRYjLwQjygaNg7ddJ2uJtTlmnTCjWuPKxVu6//AdaRuME84SvLW91sIkBqGT0g==",
      "requires": {
        "mime-db": "1.50.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ=="
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      }
    },
    "mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s="
    },
    "mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "requires": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "nan": {
      "version": "2.15.0",
      "resolved": "https://registry.npmjs.org/nan/-/nan-2.15.0.tgz",
      "integrity": "sha512-8ZtvEnA2c5aYCZYd1cvgdnU6cqwixRoYg70xPLWUws5ORTa/lnw+u4amixRS/Ac5U5mQVgp9pnlSUnbNWFaWZQ==",
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        }
      }
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
    },
    "nocache": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/nocache/-/nocache-2.1.0.tgz",
      "integrity": "sha512-0L9FvHG3nfnnmaEQPjT9xhfN4ISk0A8/2j4M37Np4mcDesJjHgEUfgPhdCyZuFI954tjokaIj/A3NdpFNdEh4Q=="
    },
    "node-fetch": {
      "version": "1.7.3",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-1.7.3.tgz",
      "integrity": "sha512-NhZ4CsKx7cYm2vSrBAr2PvFOe6sWDf0UYLRqA6svUYg7+/TSfVAu49jYC4BvQ4Sms9SZgdqGBgroqfDhJdTyKQ==",
      "requires": {
        "encoding": "^0.1.11",
        "is-stream": "^1.0.1"
      }
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
    },
    "node-modules-regexp": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
      "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
    },
    "node-releases": {
      "version": "1.1.77",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.77.tgz",
      "integrity": "sha512-rB1DUFUNAN4Gn9keO2K1efO35IDK7yKHCdCaIMvFO7yUYmmZYeDjnGKle26G4rwj+LKRQpjyUUvMkPglwGCYNQ=="
    },
    "node-stream-zip": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/node-stream-zip/-/node-stream-zip-1.15.0.tgz",
      "integrity": "sha512-LN4fydt9TqhZhThkZIVQnF9cwjU3qmUH9h78Mx/K7d3VvfRqqwthLwJEUOEL0QPZ0XQmNN7be5Ggit5+4dq3Bw=="
    },
    "normalize-css-color": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/normalize-css-color/-/normalize-css-color-1.0.2.tgz",
      "integrity": "sha1-Apkel8zOxmI/5XOvu/Deah8+n40="
    },
    "normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "requires": {
        "remove-trailing-separator": "^1.0.1"
      }
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "requires": {
        "path-key": "^2.0.0"
      }
    },
    "nullthrows": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/nullthrows/-/nullthrows-1.1.1.tgz",
      "integrity": "sha512-2vPPEi+Z7WqML2jZYddDIfy5Dqb0r2fze2zTxNNknZaFpVHU3mFB3R+DWeJWGVx0ecvttSGlJTI+WG+8Z4cDWw=="
    },
    "ob1": {
      "version": "0.59.0",
      "resolved": "https://registry.npmjs.org/ob1/-/ob1-0.59.0.tgz",
      "integrity": "sha512-opXMTxyWJ9m68ZglCxwo0OPRESIC/iGmKFPXEXzMZqsVIrgoRXOHmoMDkQzz4y3irVjbyPJRAh5pI9fd0MJTFQ=="
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
          "requires": {
            "kind-of": "^3.0.2"
          }
        },
        "is-data-descriptor": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
          "requires": {
            "kind-of": "^3.0.2"
          }
        },
        "is-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
          "requires": {
            "is-accessor-descriptor": "^0.1.6",
            "is-data-descriptor": "^0.1.4",
            "kind-of": "^5.0.0"
          },
          "dependencies": {
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
            }
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "open": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/open/-/open-6.4.0.tgz",
      "integrity": "sha512-IFenVPgF70fSm1keSd2iDBIDIBZkroLeuffXq+wKTzTJlBpesFWojV9lb8mzOfaAzM1sr7HQHuO0vtV0zYekGg==",
      "requires": {
        "is-wsl": "^1.1.0"
      }
    },
    "options": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/options/-/options-0.0.6.tgz",
      "integrity": "sha1-7CLTEoBrtT5zF3Pnza788cZDEo8="
    },
    "ora": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-3.4.0.tgz",
      "integrity": "sha512-eNwHudNbO1folBP3JsZ19v9azXWtQZjICdr3Q0TDPIaeBQ3mXLrh54wM+er0+hSp+dWKf+Z8KM58CYzEyIYxYg==",
      "requires": {
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^2.0.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^5.2.0",
        "wcwidth": "^1.0.1"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
    },
    "p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "requires": {
        "yocto-queue": "^0.1.0"
      }
    },
    "p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "requires": {
        "p-limit": "^3.0.2"
      }
    },
    "p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
    },
    "parse-json": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
      "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
      "requires": {
        "error-ex": "^1.3.1",
        "json-parse-better-errors": "^1.0.1"
      }
    },
    "parse-node-version": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parse-node-version/-/parse-node-version-1.0.1.tgz",
      "integrity": "sha512-3YHlOa/JgH6Mnpr05jP9eDG254US9ek25LyIxZlDItp2iJtwyaXQb57lBYLdT3MowkUFYEV2XXNAYIPlESvJlA=="
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
    },
    "path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g=="
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
    },
    "picocolors": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-0.2.1.tgz",
      "integrity": "sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA=="
    },
    "picomatch": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz",
      "integrity": "sha512-lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw=="
    },
    "pify": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g=="
    },
    "pirates": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
      "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
      "requires": {
        "node-modules-regexp": "^1.0.0"
      }
    },
    "pkg-dir": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "requires": {
        "find-up": "^3.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "requires": {
            "p-limit": "^2.0.0"
          }
        }
      }
    },
    "pkg-up": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-up/-/pkg-up-2.0.0.tgz",
      "integrity": "sha1-yBmscoBZpGHKscOImivjxJoATX8=",
      "requires": {
        "find-up": "^2.1.0"
      },
      "dependencies": {
        "find-up": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
          "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
          "requires": {
            "locate-path": "^2.0.0"
          }
        },
        "locate-path": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
          "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
          "requires": {
            "p-locate": "^2.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "1.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
          "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
          "requires": {
            "p-try": "^1.0.0"
          }
        },
        "p-locate": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
          "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
          "requires": {
            "p-limit": "^1.1.0"
          }
        },
        "p-try": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
          "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M="
        }
      }
    },
    "plist": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/plist/-/plist-3.0.4.tgz",
      "integrity": "sha512-ksrr8y9+nXOxQB2osVNqrgvX/XQPOXaU4BQMKjYq8PvaY1U18mo+fKgBSwzK+luSyinOuPae956lSVcBwxlAMg==",
      "requires": {
        "base64-js": "^1.5.1",
        "xmlbuilder": "^9.0.7"
      },
      "dependencies": {
        "xmlbuilder": {
          "version": "9.0.7",
          "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.7.tgz",
          "integrity": "sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0="
        }
      }
    },
    "plugin-error": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/plugin-error/-/plugin-error-0.1.2.tgz",
      "integrity": "sha1-O5uzM1zPAPQl4HQ34ZJ2ln2kes4=",
      "requires": {
        "ansi-cyan": "^0.1.1",
        "ansi-red": "^0.1.1",
        "arr-diff": "^1.0.1",
        "arr-union": "^2.0.1",
        "extend-shallow": "^1.1.2"
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
    },
    "pretty-format": {
      "version": "26.6.2",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-26.6.2.tgz",
      "integrity": "sha512-7AeGuCYNGmycyQbCqd/3PWH4eOoX/OiCa0uphp57NVTeAGdJGaAliecxwBDHYQCIvrW7aDBZCYeNTP/WX69mkg==",
      "requires": {
        "@jest/types": "^26.6.2",
        "ansi-regex": "^5.0.0",
        "ansi-styles": "^4.0.0",
        "react-is": "^17.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        }
      }
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "promise": {
      "version": "7.3.1",
      "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
      "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
      "requires": {
        "asap": "~2.0.3"
      }
    },
    "prop-types": {
      "version": "15.7.2",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",
      "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",
      "requires": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.8.1"
      },
      "dependencies": {
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        }
      }
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM="
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "querystringify": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
      "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ=="
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A=="
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "react": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react/-/react-16.13.1.tgz",
      "integrity": "sha512-YMZQQq32xHLX0bz5Mnibv1/LHb3Sqzngu7xstSM+vrkE5Kzr9xE0yMByK5kMoTK30YVJE61WfbxIFFvfeDKT1w==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2"
      }
    },
    "react-devtools-core": {
      "version": "4.19.2",
      "resolved": "https://registry.npmjs.org/react-devtools-core/-/react-devtools-core-4.19.2.tgz",
      "integrity": "sha512-Z9K+h9gjEwimZtZB1NsWm5hQsxAcElW0GI2KXLQDpk2o1YIZQ+lOSesUr0npUyLeb37k2hTtyxp8wumeRJpG5Q==",
      "requires": {
        "shell-quote": "^1.6.1",
        "ws": "^7"
      }
    },
    "react-dom": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-16.13.1.tgz",
      "integrity": "sha512-81PIMmVLnCNLO/fFOQxdQkvEq/+Hfpv24XNJfpyZhTRfO0QcmQIF/PgCa1zCOj2w1hrn12MFLyaJ/G0+Mxtfag==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1",
        "prop-types": "^15.6.2",
        "scheduler": "^0.19.1"
      }
    },
    "react-is": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
      "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
    },
    "react-native": {
      "version": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
      "integrity": "sha512-qWR6pcG4yDu/Rthm+DvAS017rL38LbZFnJv/k4HL4ZUH/WhKuqC+stD7TlpaOBb3N2bkydm9s+GCa14T41MLEg==",
      "requires": {
        "@babel/runtime": "^7.0.0",
        "@react-native-community/cli": "^4.14.0",
        "@react-native-community/cli-platform-android": "^4.13.0",
        "@react-native-community/cli-platform-ios": "^4.13.0",
        "abort-controller": "^3.0.0",
        "anser": "^1.4.9",
        "base64-js": "^1.1.2",
        "event-target-shim": "^5.0.1",
        "fbjs": "^1.0.0",
        "fbjs-scripts": "^1.1.0",
        "hermes-engine": "~0.5.0",
        "invariant": "^2.2.4",
        "jsc-android": "^245459.0.0",
        "metro-babel-register": "0.59.0",
        "metro-react-native-babel-transformer": "0.59.0",
        "metro-source-map": "0.59.0",
        "nullthrows": "^1.1.1",
        "pretty-format": "^24.9.0",
        "promise": "^8.0.3",
        "prop-types": "^15.7.2",
        "react-devtools-core": "^4.6.0",
        "react-refresh": "^0.4.0",
        "regenerator-runtime": "^0.13.2",
        "scheduler": "0.19.1",
        "stacktrace-parser": "^0.1.3",
        "use-subscription": "^1.0.0",
        "whatwg-fetch": "^3.0.0"
      },
      "dependencies": {
        "@jest/types": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/@jest/types/-/types-24.9.0.tgz",
          "integrity": "sha512-XKK7ze1apu5JWQ5eZjHITP66AX+QsLlbaJRBGYr8pNzwcAE2JVkwnf0yqjHTsDRcjR0mujy/NmZMXw5kl+kGBw==",
          "requires": {
            "@types/istanbul-lib-coverage": "^2.0.0",
            "@types/istanbul-reports": "^1.1.1",
            "@types/yargs": "^13.0.0"
          }
        },
        "@react-native-community/cli": {
          "version": "4.14.0",
          "resolved": "https://registry.npmjs.org/@react-native-community/cli/-/cli-4.14.0.tgz",
          "integrity": "sha512-EYJKBuxFxAu/iwNUfwDq41FjORpvSh1wvQ3qsHjzcR5uaGlWEOJrd3uNJDuKBAS0TVvbEesLF9NEXipjyRVr4Q==",
          "requires": {
            "@hapi/joi": "^15.0.3",
            "@react-native-community/cli-debugger-ui": "^4.13.1",
            "@react-native-community/cli-hermes": "^4.13.0",
            "@react-native-community/cli-server-api": "^4.13.1",
            "@react-native-community/cli-tools": "^4.13.0",
            "@react-native-community/cli-types": "^4.10.1",
            "chalk": "^3.0.0",
            "command-exists": "^1.2.8",
            "commander": "^2.19.0",
            "cosmiconfig": "^5.1.0",
            "deepmerge": "^3.2.0",
            "envinfo": "^7.7.2",
            "execa": "^1.0.0",
            "find-up": "^4.1.0",
            "fs-extra": "^8.1.0",
            "glob": "^7.1.3",
            "graceful-fs": "^4.1.3",
            "inquirer": "^3.0.6",
            "leven": "^3.1.0",
            "lodash": "^4.17.15",
            "metro": "^0.59.0",
            "metro-config": "^0.59.0",
            "metro-core": "^0.59.0",
            "metro-react-native-babel-transformer": "^0.59.0",
            "metro-resolver": "^0.59.0",
            "minimist": "^1.2.0",
            "mkdirp": "^0.5.1",
            "node-stream-zip": "^1.9.1",
            "ora": "^3.4.0",
            "pretty-format": "^25.2.0",
            "semver": "^6.3.0",
            "serve-static": "^1.13.1",
            "strip-ansi": "^5.2.0",
            "sudo-prompt": "^9.0.0",
            "wcwidth": "^1.0.1"
          },
          "dependencies": {
            "@jest/types": {
              "version": "25.5.0",
              "resolved": "https://registry.npmjs.org/@jest/types/-/types-25.5.0.tgz",
              "integrity": "sha512-OXD0RgQ86Tu3MazKo8bnrkDRaDXXMGUqd+kTtLtK1Zb7CRzQcaSRPPPV37SvYTdevXEBVxe0HXylEjs8ibkmCw==",
              "requires": {
                "@types/istanbul-lib-coverage": "^2.0.0",
                "@types/istanbul-reports": "^1.1.1",
                "@types/yargs": "^15.0.0",
                "chalk": "^3.0.0"
              }
            },
            "@types/yargs": {
              "version": "15.0.14",
              "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.14.tgz",
              "integrity": "sha512-yEJzHoxf6SyQGhBhIYGXQDSCkJjB6HohDShto7m8vaKg9Yp0Yn8+71J9eakh2bnPg6BfsH9PRMhiRTZnd4eXGQ==",
              "requires": {
                "@types/yargs-parser": "*"
              }
            },
            "ansi-styles": {
              "version": "4.3.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
              "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
              "requires": {
                "color-convert": "^2.0.1"
              }
            },
            "pretty-format": {
              "version": "25.5.0",
              "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-25.5.0.tgz",
              "integrity": "sha512-kbo/kq2LQ/A/is0PQwsEHM7Ca6//bGPPvU6UnsdDRSKTWxT/ru/xb88v4BJf6a69H+uTytOEsTusT9ksd/1iWQ==",
              "requires": {
                "@jest/types": "^25.5.0",
                "ansi-regex": "^5.0.0",
                "ansi-styles": "^4.0.0",
                "react-is": "^16.12.0"
              }
            }
          }
        },
        "@types/istanbul-reports": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-1.1.2.tgz",
          "integrity": "sha512-P/W9yOX/3oPZSpaYOCQzGqgCQRXn0FFO/V8bWrCQs+wLmvVVxk6CRBXALEvNs9OHIatlnlFokfhuDo2ug01ciw==",
          "requires": {
            "@types/istanbul-lib-coverage": "*",
            "@types/istanbul-lib-report": "*"
          }
        },
        "@types/yargs": {
          "version": "13.0.12",
          "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-13.0.12.tgz",
          "integrity": "sha512-qCxJE1qgz2y0hA4pIxjBR+PelCH0U5CK1XJXFwCNqfmliatKp47UCXXE9Dyk1OXBDLvsCF57TqQEJaeLfDYEOQ==",
          "requires": {
            "@types/yargs-parser": "*"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          },
          "dependencies": {
            "ansi-styles": {
              "version": "4.3.0",
              "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
              "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
              "requires": {
                "color-convert": "^2.0.1"
              }
            }
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "commander": {
          "version": "2.20.3",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
          "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ=="
        },
        "core-js": {
          "version": "2.6.12",
          "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
          "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ=="
        },
        "fbjs": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
          "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
          "requires": {
            "core-js": "^2.4.1",
            "fbjs-css-vars": "^1.0.0",
            "isomorphic-fetch": "^2.1.1",
            "loose-envify": "^1.0.0",
            "object-assign": "^4.1.0",
            "promise": "^7.1.1",
            "setimmediate": "^1.0.5",
            "ua-parser-js": "^0.7.18"
          },
          "dependencies": {
            "promise": {
              "version": "7.3.1",
              "resolved": "https://registry.npmjs.org/promise/-/promise-7.3.1.tgz",
              "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
              "requires": {
                "asap": "~2.0.3"
              }
            }
          }
        },
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "fs-extra": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
          "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
          "requires": {
            "graceful-fs": "^4.2.0",
            "jsonfile": "^4.0.0",
            "universalify": "^0.1.0"
          }
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "jsonfile": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
          "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
          "requires": {
            "graceful-fs": "^4.1.6"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
        },
        "pretty-format": {
          "version": "24.9.0",
          "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-24.9.0.tgz",
          "integrity": "sha512-00ZMZUiHaJrNfk33guavqgvfJS30sLYf0f8+Srklv0AMPodGGHcoHgksZ3OThYnIvOd+8yMCn0YiEOogjlgsnA==",
          "requires": {
            "@jest/types": "^24.9.0",
            "ansi-regex": "^4.0.0",
            "ansi-styles": "^3.2.0",
            "react-is": "^16.8.4"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "4.1.0",
              "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
              "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
            }
          }
        },
        "promise": {
          "version": "8.1.0",
          "resolved": "https://registry.npmjs.org/promise/-/promise-8.1.0.tgz",
          "integrity": "sha512-W04AqnILOL/sPRXziNicCjSNRruLAuIHEOVBazepu0545DDNGYHz7ar9ZgZ1fMU8/MA4mVxp5rkBWRi6OXIy3Q==",
          "requires": {
            "asap": "~2.0.6"
          }
        },
        "react-is": {
          "version": "16.13.1",
          "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
          "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "universalify": {
          "version": "0.1.2",
          "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
          "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        }
      }
    },
    "react-native-web": {
      "version": "0.13.18",
      "resolved": "https://registry.npmjs.org/react-native-web/-/react-native-web-0.13.18.tgz",
      "integrity": "sha512-WR/0ECAmwLQ2+2cL2Ur+0/swXFAtcSM0URoADJmG6D4MnY+wGc91JO8LoOTlgY0USBOY+qG/beRrjFa+RAuOiA==",
      "requires": {
        "array-find-index": "^1.0.2",
        "create-react-class": "^15.6.2",
        "deep-assign": "^3.0.0",
        "fbjs": "^1.0.0",
        "hyphenate-style-name": "^1.0.3",
        "inline-style-prefixer": "^5.1.0",
        "normalize-css-color": "^1.0.2",
        "prop-types": "^15.6.0",
        "react-timer-mixin": "^0.13.4"
      },
      "dependencies": {
        "core-js": {
          "version": "2.6.12",
          "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
          "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ=="
        },
        "fbjs": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/fbjs/-/fbjs-1.0.0.tgz",
          "integrity": "sha512-MUgcMEJaFhCaF1QtWGnmq9ZDRAzECTCRAF7O6UZIlAlkTs1SasiX9aP0Iw7wfD2mJ7wDTNfg2w7u5fSCwJk1OA==",
          "requires": {
            "core-js": "^2.4.1",
            "fbjs-css-vars": "^1.0.0",
            "isomorphic-fetch": "^2.1.1",
            "loose-envify": "^1.0.0",
            "object-assign": "^4.1.0",
            "promise": "^7.1.1",
            "setimmediate": "^1.0.5",
            "ua-parser-js": "^0.7.18"
          }
        }
      }
    },
    "react-refresh": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.4.3.tgz",
      "integrity": "sha512-Hwln1VNuGl/6bVwnd0Xdn1e84gT/8T9aYNL+HAKDArLCS7LWjwr7StE30IEYbIkx0Vi3vs+coQxe+SQDbGbbpA=="
    },
    "react-timer-mixin": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/react-timer-mixin/-/react-timer-mixin-0.13.4.tgz",
      "integrity": "sha512-4+ow23tp/Tv7hBM5Az5/Be/eKKF7DIvJ09voz5LyHGQaqqz9WV8YMs31eFvcYQs7d451LSg7kDJV70XYN/Ug/Q=="
    },
    "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "regenerate": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/regenerate/-/regenerate-1.4.2.tgz",
      "integrity": "sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A=="
    },
    "regenerate-unicode-properties": {
      "version": "9.0.0",
      "resolved": "https://registry.npmjs.org/regenerate-unicode-properties/-/regenerate-unicode-properties-9.0.0.tgz",
      "integrity": "sha512-3E12UeNSPfjrgwjkR81m5J7Aw/T55Tu7nUyZVQYCKEOs+2dkxEY+DpPtZzO4YruuiPb7NkYLVcyJC4+zCbk5pA==",
      "requires": {
        "regenerate": "^1.4.2"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.9",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.9.tgz",
      "integrity": "sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA=="
    },
    "regenerator-transform": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/regenerator-transform/-/regenerator-transform-0.14.5.tgz",
      "integrity": "sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==",
      "requires": {
        "@babel/runtime": "^7.8.4"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        }
      }
    },
    "regexpu-core": {
      "version": "4.8.0",
      "resolved": "https://registry.npmjs.org/regexpu-core/-/regexpu-core-4.8.0.tgz",
      "integrity": "sha512-1F6bYsoYiz6is+oz70NWur2Vlh9KWtswuRuzJOfeYUrfPX2o8n74AnUVaOGDbUqVGO9fNHu48/pjJO4sNVwsOg==",
      "requires": {
        "regenerate": "^1.4.2",
        "regenerate-unicode-properties": "^9.0.0",
        "regjsgen": "^0.5.2",
        "regjsparser": "^0.7.0",
        "unicode-match-property-ecmascript": "^2.0.0",
        "unicode-match-property-value-ecmascript": "^2.0.0"
      }
    },
    "regjsgen": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/regjsgen/-/regjsgen-0.5.2.tgz",
      "integrity": "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A=="
    },
    "regjsparser": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/regjsparser/-/regjsparser-0.7.0.tgz",
      "integrity": "sha512-A4pcaORqmNMDVwUjWoTzuhwMGpP+NykpfqAsEgI1FSH/EzC7lrN5TMd+kN8YCovX+jMpu8eaqXgXPCa0g8FQNQ==",
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0="
        }
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
    },
    "repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ=="
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
    },
    "require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw=="
    },
    "require-main-filename": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
      "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
    },
    "requires-port": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8="
    },
    "reselect": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/reselect/-/reselect-3.0.1.tgz",
      "integrity": "sha1-79qpjqdFEyTQkrKyFjpqHXqaIUc="
    },
    "resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "requires": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      }
    },
    "resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "requires": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
    },
    "reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw=="
    },
    "rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "rsvp": {
      "version": "4.8.5",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
      "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA=="
    },
    "run-async": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
      "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ=="
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "rx-lite": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite/-/rx-lite-4.0.8.tgz",
      "integrity": "sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ="
    },
    "rx-lite-aggregates": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz",
      "integrity": "sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=",
      "requires": {
        "rx-lite": "*"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sane": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
      "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
      "requires": {
        "@cnakazawa/watch": "^1.0.3",
        "anymatch": "^2.0.0",
        "capture-exit": "^2.0.0",
        "exec-sh": "^0.3.2",
        "execa": "^1.0.0",
        "fb-watchman": "^2.0.0",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-extendable": {
              "version": "0.1.1",
              "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
              "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
            }
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "scheduler": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.19.1.tgz",
      "integrity": "sha512-n/zwRWRYSUj0/3g/otKDRPMh6qv2SYMWNq85IEa8iZyAv8od9zDYpGSnpBEjNgcMNq6Scbu5KfIPxNF72R/2EA==",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    },
    "semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
            }
          }
        },
        "mime": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
          "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
        }
      }
    },
    "serialize-error": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-2.1.0.tgz",
      "integrity": "sha1-ULZ51WNc34Rme9yOWa9OW4HV9go="
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        }
      }
    },
    "setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "shallow-clone": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
      "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
      "requires": {
        "kind-of": "^6.0.2"
      }
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
    },
    "shell-quote": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.6.1.tgz",
      "integrity": "sha1-9HgZSczkAmlxJ0MOo7PFR29IF2c=",
      "requires": {
        "array-filter": "~0.0.0",
        "array-map": "~0.0.0",
        "array-reduce": "~0.0.0",
        "jsonify": "~0.0.0"
      }
    },
    "signal-exit": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.5.tgz",
      "integrity": "sha512-KWcOiKeQj6ZyXx7zq4YxSMgHRlod4czeBQZrPb8OKcohcqAXShm7E20kEMle9WBt26hFcAf0qLOcp5zmY7kOqQ=="
    },
    "simple-plist": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/simple-plist/-/simple-plist-1.1.1.tgz",
      "integrity": "sha512-pKMCVKvZbZTsqYR6RKgLfBHkh2cV89GXcA/0CVPje3sOiNOnXA8+rp/ciAMZ7JRaUdLzlEM6JFfUn+fS6Nt3hg==",
      "requires": {
        "bplist-creator": "0.0.8",
        "bplist-parser": "0.2.0",
        "plist": "^3.0.1"
      }
    },
    "slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
    },
    "slice-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/slice-ansi/-/slice-ansi-2.1.0.tgz",
      "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
      "requires": {
        "ansi-styles": "^3.2.0",
        "astral-regex": "^1.0.0",
        "is-fullwidth-code-point": "^2.0.0"
      }
    },
    "slugify": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/slugify/-/slugify-1.6.1.tgz",
      "integrity": "sha512-5ofqMTbetNhxlzjYYLBaZFQd6oiTuSkQlyfPEFIMwgUABlZQ0hbk5xIV9Ydd5jghWeRoO7GkiJliUvTpLOjNRA=="
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-data-descriptor": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
          "requires": {
            "is-accessor-descriptor": "^0.1.6",
            "is-data-descriptor": "^0.1.4",
            "kind-of": "^5.0.0"
          }
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        },
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.20",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.20.tgz",
      "integrity": "sha512-n1lZZ8Ve4ksRqizaBQgxXDgKwttHDhyfQjA6YZZn8+AroHbsIz+JjwxQDxbp+7y5OYCI8t1Yk7etjD9CRd2hIw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw=="
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "requires": {
        "extend-shallow": "^3.0.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        }
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
    },
    "stack-utils": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.5.tgz",
      "integrity": "sha512-KZiTzuV3CnSnSvgMRrARVCj+Ht7rMbauGDK0LdVFRGyenwdylpajAp4Q0i6SX8rEmbTpMMf6ryq2gb8pPq2WgQ==",
      "requires": {
        "escape-string-regexp": "^2.0.0"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
          "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
        }
      }
    },
    "stackframe": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/stackframe/-/stackframe-1.2.0.tgz",
      "integrity": "sha512-GrdeshiRmS1YLMYgzF16olf2jJ/IzxXY9lhKOskuVziubpTYcYqyOwYeJKzQkwy7uN0fYSsbsC4RQaXf9LCrYA=="
    },
    "stacktrace-parser": {
      "version": "0.1.10",
      "resolved": "https://registry.npmjs.org/stacktrace-parser/-/stacktrace-parser-0.1.10.tgz",
      "integrity": "sha512-KJP1OCML99+8fhOHxwwzyWrlUuVX5GQ0ZpJTd1DFXhdkrvg1szxfHhawXUZ3g9TkXORQd4/WG68jMlQZ2p8wlg==",
      "requires": {
        "type-fest": "^0.7.1"
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
          "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-data-descriptor": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
          "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "is-descriptor": {
          "version": "0.1.6",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
          "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
          "requires": {
            "is-accessor-descriptor": "^0.1.6",
            "is-data-descriptor": "^0.1.4",
            "kind-of": "^5.0.0"
          }
        },
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "stream-buffers": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/stream-buffers/-/stream-buffers-2.2.0.tgz",
      "integrity": "sha1-kdX1Ew0c75bc+n9yaUUYh0HQnuQ="
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "dependencies": {
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
        },
        "strip-ansi": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "requires": {
            "ansi-regex": "^5.0.1"
          }
        }
      }
    },
    "strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "requires": {
        "ansi-regex": "^4.1.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
          "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
        }
      }
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
    },
    "sucrase": {
      "version": "3.20.2",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.20.2.tgz",
      "integrity": "sha512-EdJ5M6VEvToIZwIWiZ71cxe4CklDRG8PdSjUSst+BZCUGlaEhnrdQo/LOXsuq3MjWRbfepg1XTffClK0Tmo0HQ==",
      "requires": {
        "commander": "^4.0.0",
        "glob": "7.1.6",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "dependencies": {
        "commander": {
          "version": "4.1.1",
          "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
          "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA=="
        }
      }
    },
    "sudo-prompt": {
      "version": "9.2.1",
      "resolved": "https://registry.npmjs.org/sudo-prompt/-/sudo-prompt-9.2.1.tgz",
      "integrity": "sha512-Mu7R0g4ig9TUuGSxJavny5Rv0egCEtpZRNMrZaYS1vxkiIxGiGUwoezU3LazIQ+KE04hTrTfNPgxU5gzi7F5Pw=="
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "temp": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/temp/-/temp-0.8.3.tgz",
      "integrity": "sha1-4Ma8TSa5AxJEEOT+2BEDAU38H1k=",
      "requires": {
        "os-tmpdir": "^1.0.0",
        "rimraf": "~2.2.6"
      },
      "dependencies": {
        "rimraf": {
          "version": "2.2.8",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.2.8.tgz",
          "integrity": "sha1-5Dm+Kq7jJzIZUnMPmaiSnk/FBYI="
        }
      }
    },
    "thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "requires": {
        "any-promise": "^1.0.0"
      }
    },
    "thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha1-GhkY1ALY/D+Y+/I02wvMjMEOlyY=",
      "requires": {
        "thenify": ">= 3.1.0 < 4"
      }
    },
    "throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo="
    },
    "through": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
    },
    "through2": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "requires": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "time-stamp": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/time-stamp/-/time-stamp-1.1.0.tgz",
      "integrity": "sha1-dkpaEa9QVhkhsTPztE5hhofg9cM="
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "requires": {
        "os-tmpdir": "~1.0.2"
      }
    },
    "tmpl": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
      "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "3.0.2",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
          "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
          "requires": {
            "assign-symbols": "^1.0.0",
            "is-extendable": "^1.0.1"
          }
        }
      }
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
    },
    "tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o="
    },
    "ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA=="
    },
    "type-fest": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.7.1.tgz",
      "integrity": "sha512-Ne2YiiGN8bmrmJJEuTWTLJR32nh/JdL1+PSicowtNb0WFpn59GK8/lfD61bVtzguz7b3PBt74nxpv/Pw5po5Rg=="
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "ua-parser-js": {
      "version": "0.7.28",
      "resolved": "https://registry.npmjs.org/ua-parser-js/-/ua-parser-js-0.7.28.tgz",
      "integrity": "sha512-6Gurc1n//gjp9eQNXjD9O3M/sMwVtN5S8Lv9bvOYBfKfDNiIIhqiyi01vMBO45u4zkDE420w/e0se7Vs+sIg+g=="
    },
    "uglify-es": {
      "version": "3.3.9",
      "resolved": "https://registry.npmjs.org/uglify-es/-/uglify-es-3.3.9.tgz",
      "integrity": "sha512-r+MU0rfv4L/0eeW3xZrd16t4NZfK8Ld4SWVglYBb7ez5uXFWHuVRs6xCTrf1yirs9a4j4Y27nn7SRfO6v67XsQ==",
      "requires": {
        "commander": "~2.13.0",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "commander": {
          "version": "2.13.0",
          "resolved": "https://registry.npmjs.org/commander/-/commander-2.13.0.tgz",
          "integrity": "sha512-MVuS359B+YzaWqjCL/c+22gfryv+mCBPHAv3zyVI2GN8EY6IRP8VwtasXn8jyyhvvq84R4ImN1OKRtcbIasjYA=="
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        }
      }
    },
    "ultron": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.0.2.tgz",
      "integrity": "sha1-rOEWq1V80Zc4ak6I9GhTeMiy5Po="
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-2.0.0.tgz",
      "integrity": "sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ=="
    },
    "unicode-match-property-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==",
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^2.0.0",
        "unicode-property-aliases-ecmascript": "^2.0.0"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-2.0.0.tgz",
      "integrity": "sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw=="
    },
    "unicode-property-aliases-ecmascript": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-2.0.0.tgz",
      "integrity": "sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ=="
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "dependencies": {
        "arr-union": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
          "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
        },
        "is-extendable": {
          "version": "0.1.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
          "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        }
      }
    },
    "universalify": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-1.0.0.tgz",
      "integrity": "sha512-rb6X1W158d7pRQBg5gkR8uPaSfiids68LTJQYOtEUhoJUWBdaQHsuT/EUduxXYxcrt4r5PJ4fuHW1MHT6p0qug=="
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
        }
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
    },
    "url-parse": {
      "version": "1.5.3",
      "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.5.3.tgz",
      "integrity": "sha512-IIORyIQD9rvj0A4CLWsHkBBJuNqWpFQe224b6j9t/ABmquIS0qDU2pY6kl6AuOrL5OkCXHMCFNe1jBcuAggjvQ==",
      "requires": {
        "querystringify": "^2.1.1",
        "requires-port": "^1.0.0"
      }
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
    },
    "use-subscription": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/use-subscription/-/use-subscription-1.5.1.tgz",
      "integrity": "sha512-Xv2a1P/yReAjAbhylMfFplFKj9GssgTwN7RlcTxBujFQcloStWNDQdc4g4NRWH9xS4i/FDk04vQBptAXoF3VcA==",
      "requires": {
        "object-assign": "^4.1.1"
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "vlq": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/vlq/-/vlq-1.0.1.tgz",
      "integrity": "sha512-gQpnTgkubC6hQgdIcRdYGDSDc+SaujOdyesZQMv6JlfQee/9Mp0Qhnys6WxDWvQnL5WZdT7o2Ul187aSt0Rq+w=="
    },
    "walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "requires": {
        "makeerror": "1.0.x"
      }
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE="
    },
    "whatwg-fetch": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-3.6.2.tgz",
      "integrity": "sha512-bJlen0FcuU/0EMLrdbJ7zOnW6ITZLrZMIarMUVmdKtsGvZna8vxKYaexICWPfZ8qwf9fzNq+UEIZrnSaApt6RA=="
    },
    "whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
      "requires": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
    },
    "wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus="
    },
    "wrap-ansi": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
      "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
      "requires": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "4.3.0",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
          "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
          "requires": {
            "color-convert": "^2.0.1"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "strip-ansi": {
          "version": "6.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
          "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
          "requires": {
            "ansi-regex": "^5.0.1"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write-file-atomic": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
      "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
      "requires": {
        "graceful-fs": "^4.1.11",
        "imurmurhash": "^0.1.4",
        "signal-exit": "^3.0.2"
      }
    },
    "ws": {
      "version": "7.5.5",
      "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.5.tgz",
      "integrity": "sha512-BAkMFcAzl8as1G/hArkxOxq3G7pjUqQ3gzYbLL0/5zNkph70e+lCoxBGnm6AW1+/aiNeV4fnKqZ8m4GZewmH2w==",
      "requires": {}
    },
    "xcode": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/xcode/-/xcode-3.0.1.tgz",
      "integrity": "sha512-kCz5k7J7XbJtjABOvkc5lJmkiDh8VhjVCGNiqdKCscmVpdVUpEAyXv1xmCLkQJ5dsHqx3IPO4XW+NTDhU/fatA==",
      "requires": {
        "simple-plist": "^1.1.0",
        "uuid": "^7.0.3"
      },
      "dependencies": {
        "uuid": {
          "version": "7.0.3",
          "resolved": "https://registry.npmjs.org/uuid/-/uuid-7.0.3.tgz",
          "integrity": "sha512-DPSke0pXhTZgoF/d+WSt2QaKMCFSfx7QegxEWT+JOuHF5aWrKEn0G+ztjuJg/gG8/ItK+rbPCD/yNv8yyih6Cg=="
        }
      }
    },
    "xml2js": {
      "version": "0.4.23",
      "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.23.tgz",
      "integrity": "sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==",
      "requires": {
        "sax": ">=0.6.0",
        "xmlbuilder": "~11.0.0"
      },
      "dependencies": {
        "xmlbuilder": {
          "version": "11.0.1",
          "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
          "integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA=="
        }
      }
    },
    "xmlbuilder": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-14.0.0.tgz",
      "integrity": "sha512-ts+B2rSe4fIckR6iquDjsKbQFK2NlUk6iG5nf14mDEyldgoc2nEKZ3jZWMPTxGQwVgToSjt6VGIho1H8/fNFTg=="
    },
    "xmldoc": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/xmldoc/-/xmldoc-1.1.2.tgz",
      "integrity": "sha512-ruPC/fyPNck2BD1dpz0AZZyrEwMOrWTO5lDdIXS91rs3wtm4j+T8Rp2o+zoOYkkAxJTZRPOSnOGei1egoRmKMQ==",
      "requires": {
        "sax": "^1.2.1"
      }
    },
    "xmldom": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/xmldom/-/xmldom-0.5.0.tgz",
      "integrity": "sha512-Foaj5FXVzgn7xFzsKeNIde9g6aFBxTPi37iwsno8QvApmtg7KYrr+OPyRHcJF7dud2a5nGRBXK3n0dL62Gf7PA=="
    },
    "xpipe": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/xpipe/-/xpipe-1.0.5.tgz",
      "integrity": "sha1-jdi/Rfw/f1Xw4FS4ePQ6YmFNr98="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "y18n": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
      "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ=="
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    },
    "yargs": {
      "version": "15.4.1",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
      "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
      "requires": {
        "cliui": "^6.0.0",
        "decamelize": "^1.2.0",
        "find-up": "^4.1.0",
        "get-caller-file": "^2.0.1",
        "require-directory": "^2.1.1",
        "require-main-filename": "^2.0.0",
        "set-blocking": "^2.0.0",
        "string-width": "^4.2.0",
        "which-module": "^2.0.0",
        "y18n": "^4.0.0",
        "yargs-parser": "^18.1.2"
      },
      "dependencies": {
        "find-up": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.3.0",
          "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
          "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
        }
      }
    },
    "yargs-parser": {
      "version": "18.1.3",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
      "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
      "requires": {
        "camelcase": "^5.0.0",
        "decamelize": "^1.2.0"
      }
    },
    "yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q=="
    }
  }
}
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "expo": "~42.0.1",
    "expo-status-bar": "~1.0.4",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
    "react-native-web": "~0.13.12"
  },
  "devDependencies": {
    "@babel/core": "^7.9.0"
  },
  "private": true
}
