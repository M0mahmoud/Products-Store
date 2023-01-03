import React, { useState } from "react";
import { Pagination, Stack } from "@mui/material";

const PRODUCT_PER_PAGE = 15;

const Paginate = ({ setSkip, isLoading }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    if (value < 1 || value > 7) return;
    let calcSkip = (value - 1) * PRODUCT_PER_PAGE;
    value === 1 ? setSkip(0) : setSkip(calcSkip);
    window.scrollTo({ top: 750, behavior: "smooth" });
    setPage(value);
  };

  return (
    <>
      {!isLoading && (
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
      )}
    </>
  );
};

export default Paginate;
