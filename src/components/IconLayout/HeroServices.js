import { Box, Grid, Typography } from "@mui/material";
import appointmentIcon from "../../assets/appointments.png";
import waitingTime from "../../assets/waiting.png";
import bedIcon from "../../assets/bed.png";
import communityIcon from "../../assets/community.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  // By using useMemo, you ensure that the Services array is not recreated on every render, only on first render. This can be particularly useful if the component re-renders frequently or if the computation of the services array is complex.
  const Services = useMemo(
    () => [
      { img: appointmentIcon, title: "No Appointments" },
      { img: waitingTime, title: "No Waiting" },
      { img: bedIcon, title: "No Bed Charges"},
      { img: communityIcon, title: "Community Health Camp" },
      { img: ambulanceIcon, title: "Ambulance" },
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
        Walk in the Clinic
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
