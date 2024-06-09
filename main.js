console.log('Hello, World! from main');

let data = [];

import { FakeStoreApi } from "./modules/api";

async function callApi() {
    data = await FakeStoreApi(data);
    console.log("data", data);
}

console.log(callApi());