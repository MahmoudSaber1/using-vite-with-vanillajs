import axios from "axios";

async function FakeStoreApi(data) {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");

        data = response.data;
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { FakeStoreApi };
