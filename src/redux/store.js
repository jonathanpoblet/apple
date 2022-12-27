import { configureStore } from "@reduxjs/toolkit";

import detail from "./slices/detail";
import cart from "./slices/cart";

export default configureStore({
    reducer: {
        detail,
        cart,
    }
})