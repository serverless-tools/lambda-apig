import * as util from "util";

// Payload tests
import getOrdem from "./payloads/get-ordem";
import postOrdem from "./payloads/post-ordem";

// Lambda handle
// const {handler} = require("../dist/index"); // node bundle
import {handler} from "./index"; // typescript

// Exe
const log = (d:any) => console.log( util.inspect(d, true, 8, true) );

(async () => {
    log( await handler(postOrdem as any) );
})()
