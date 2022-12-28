import { Button, Container } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";

const CategoryList = ({ catg }) => {
  const navigate = useNavigate()
  const options = {
    type: "loop",
    autoWidth: true,
    gap: "35px",
    perMove: 2,
    pagination: false,
  };
  return (
    <Container maxWidth="lg" sx={{ margin: "1rem auto" }}>
      <Splide options={options}>
        {catg?.map((name) => (
          <SplideSlide key={name}>
            <Button
              onClick={()=>navigate(`/category/${name}`)}
              sx={{
                bgcolor: "#1565c0",
                color: "#fff",
                ":hover": { bgcolor: "#0f2a48" },
              }}
            >
              {name}
            </Button>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
};

export default CategoryList;
