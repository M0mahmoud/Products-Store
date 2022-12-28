import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";

const Paginate = ({ setSkip }) => {
  const productPerPage = 15;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    let calcSkip = (value - 1) * productPerPage;
    value === 1 ? setSkip(0) : setSkip(calcSkip);
    setPage(value);
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  return (
    <Stack sx={{ my: { lg: "40px", xs: "30px" } }} alignItems="center">
      <Pagination
        count={7}
        defaultPage={1}
        onChange={handleChange}
        page={page}
        size="large"
        color="primary"
        shape="rounded"
        hideNextButton={true}
        hidePrevButton={true}
      />
    </Stack>
  );
};

export default Paginate;
