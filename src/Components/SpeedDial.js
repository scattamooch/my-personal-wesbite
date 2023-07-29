import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';



const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
    //   left: theme.spacing(2),
    },
  }));

function BasicSpeedDial() {

    function handleViewClick() {
    //    const resumeURL = "file path"
    //    window.open(resumeURL, "_blank"); 
        console.log("Ayo nothin to view here");
    }

    function handleDownload() {
        console.log("Ayo nothin to download here");
    }

    function handlePrint() {
        console.log("Ayo nothin to print here");
    }

    const actions = [
        { icon: <SearchIcon />, name: 'View Resume', onClick: handleViewClick },
        { icon: <SaveIcon />, name: 'Download Resume', onClick: handleDownload },
        { icon: <PrintIcon />, name: 'Print Resume', onClick: handlePrint },
      ];

  return (
    <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'relative', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction={"down"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}

export default BasicSpeedDial;