import { configureStore } from "@reduxjs/toolkit";

import detail from "./slices/detail";

export default configureStore({
    reducer: {
        detail
    }
})