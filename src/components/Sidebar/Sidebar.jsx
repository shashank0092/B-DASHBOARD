import * as React from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import DateFilter from "./DateFilter/DateFilter";
import DistributorFilter from "./DistributorFilter/DistributorFilter";
import RegionFilter from "./RegionFilter/RegionFilter";
import AssetFilter from "./AssetFilter/AssetFilter";
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation } from "react-router";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slice/filterSlice";






const Sidebar = () => {
    const currentRoute = useLocation().pathname
    const viewRoute = currentRoute.split("/")
    console.log(viewRoute,"this is view route")

    const[filterPage,setFilterPage]=useState(null)
    const dispatch=useDispatch()

    

    useEffect(()=>{
       viewRoute.length==3?(setFilterPage(viewRoute[1])):(setFilterPage(viewRoute[1]+viewRoute[3]))
    },[])
    console.log(filterPage,"this is filter for page")
    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')  ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleFilter = (anchor) => {
        
        dispatch(setFilter({type:filterPage}))
        // toggleDrawer(anchor,false)
        setState({ ...state, [anchor]: false });
        

    }


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
          
            onKeyDown={toggleDrawer(anchor, false)}
            className="flex flex-col items-center gap-5"
        >

            <div className="mt-5 px-3" >
                <p className="font-dm-font text-2xl font-light" >Apply Filter Of Your Choice</p>
            </div>
            <List>
                <ListItem>
                    <Accordion  >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className="font-dm-font font-bold text-xl flex items-center gap-3"  >Date  <EditCalendarIcon /> </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DateFilter />
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className="font-dm-font font-bold text-xl flex items-center gap-3"  >Distributor  <ManageAccountsIcon /> </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DistributorFilter />
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className="font-dm-font font-bold text-xl flex items-center gap-3"  >Region  <LocationSearchingIcon /> </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <RegionFilter />
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <ListItem>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <p className="font-dm-font font-bold text-xl flex items-center gap-3"  >Asset  <WebAssetIcon /> </p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AssetFilter />
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
            </List>
            <div className="mb-5" >
                <Button variant="contained" onClick={()=>handleFilter('right')} >Apply <FilterListIcon /> </Button>
            </div>

        </Box>
    );
    return (
        <>
            <div>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <IconButton onClick={toggleDrawer(anchor, true)}> <FilterAltIcon fontSize="large" color="#475673" /> </IconButton>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>

        </>
    )
}

export default Sidebar