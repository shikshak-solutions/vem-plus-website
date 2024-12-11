import { Box, Grid, Typography } from "@mui/material";
import ecgIcon from "../../assets/ecg.png";
import assessmentIcon from "../../assets/assessment.png";
import transportationIcon from "../../assets/transportation.png";
import trainingIcon from "../../assets/training.png";
import checkupIcon from "../../assets/checkups.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  // By using useMemo, you ensure that the Services array is not recreated on every render, only on first render. This can be particularly useful if the component re-renders frequently or if the computation of the services array is complex.
  const Services = useMemo(
    () => [
      { img: ecgIcon, title: "ECG, VBG, ABG, RBS" },
      { img: assessmentIcon, title: "Systematic Emergency Assessment" },
      { img: transportationIcon, title: "Safe Patient Transportation"},
      { img: trainingIcon, title: "Life Saving Training & Health Education" },
      { img: checkupIcon, title: "Routine Health Checkups" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#ED1C24"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
       Point of Care Investigation
      </Typography>
      <Grid
        container
        rowSpacing={{xs:2}}
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={12} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
