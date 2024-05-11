import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        src="https://orevapedia.onrender.com/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem" }}
        alt="advert"
      />
      <FlexBetween>
        <Typography color={main}>La Belle Cosmetics</Typography>
        <Typography color={medium}>labellecosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your Pathway to stunning and immaculate Beauty, ensuring your skin
        remains exfoilated and shinnig
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
