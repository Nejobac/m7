import {run} from './app/models/index.js'
import { queriesDrilling } from './util.js';

async function init(){
    await run();
    await queriesDrilling();
};

init();