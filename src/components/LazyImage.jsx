import NextImage from "next/image";
import styled from "@mui/material/styles/styled";
const LazyImage = styled(NextImage)({
  width: "100%",
  height: "auto"
});
export default LazyImage;