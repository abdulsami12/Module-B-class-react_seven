

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../component/dashborad";


const { Box } = require("@mui/material");

function Routing(){

return(

    <Box>
<BrowserRouter>
<Routes>

    <Route path="dashboard/*" element={<Dashboard />} />

</Routes>
</BrowserRouter>
    </Box>
)

}

export default Routing;