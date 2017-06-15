// Credit https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md#using-enzyme-with-jsdom
import {jsdom} from "jsdom"

global.document = jsdom('<!doctype html><html><body><div id="app"></div></body></html>', { url: 'http://localhost/'});
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'mocha'
};

process.on('unhandledRejection', (reason) => {
    console.log('Reason: ', reason);
});
