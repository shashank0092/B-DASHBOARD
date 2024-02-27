import LOGO from "../assets/AxonsLabLogo.svg"
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Navbar.css"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setMapFilter } from "../store/slice/mapfilterSlice";
import Sidebar from "../components/Sidebar/Sidebar";





const Navbar = () => {
  const currentRoute = useLocation().pathname
  const viewRoute = currentRoute.split("/")
  console.log(viewRoute)
  const dispatch = useDispatch()

  const [currentmapfilter, setCurrentMapFilter] = useState("activeUser")



  useEffect(() => {
    changeMapFilter()
  }, [currentmapfilter])

  const changeMapFilter = () => {
    dispatch(setMapFilter(currentmapfilter))
  }

  const HandleMapFilterChange = (e) => {

    setCurrentMapFilter(e.target.value)
  }






  return (
    <>
      <div className="flex bg-white border items-center " >
        <div className="flex-1">
          <div className="flex items-center" >
            <div className="">
              <img src={LOGO} className="w-40" alt="" />
             
            </div>
            <div className="flex gap-5" >
              <div>
                <Link to="/home/analytics" className={`${currentRoute == "/home/analytics" || currentRoute == "/home/maps" ? ("text-[#F99494]") : ("text-[#475673]")} font-dm-font font-bold text-lg`} >Dashboard</Link>
              </div>
              <div>
                <Link to="/assetsProvisioning/analytics" className={`${currentRoute == "/assetsProvisioning/analytics" || currentRoute == `/assetsProvisioning/maps/${viewRoute[3]}` ? ("text-[#F99494]") : ("text-[#475673]")} font-dm-font font-bold text-lg`} >Assets Provising</Link>
              </div>
              <div>

                <Link to="/performance/analytics/motor" className={`${currentRoute == `/performance/analytics/${viewRoute[3]}` || currentRoute == `/performance/maps/${viewRoute[3]}` ? ("text-[#F99494]") : ("text-[#475673]")} font-dm-font font-bold text-lg`} >Performance</Link>

              </div>
              <div className={`${viewRoute[1] == "home" ? ("flex") : ("hidden")}`} >
                <div>
                  <>
                    <Tooltip title={`Click to See ${viewRoute[2] == "maps" ? ("Analytics View") : ("Map View")}`} >
                      <Link
                        to={`${viewRoute[2] == "maps" ? (`/${viewRoute[1]}/analytics`) : (`/${viewRoute[1]}/maps`)}`} className="font-dm-font font-bold text-[#475673] "  >


                        {viewRoute[2] == "maps" ? ("Analytics View") : ("Map View")}


                      </Link>
                    </Tooltip >
                  </>
                </div>
              </div>

              <div>
                {
                  viewRoute[1] == "performance" ?
                    (<>
                      <Tooltip title={`Click to see ${viewRoute[3] == "motor" ? ("battery") : ("motor")}`} >
                        <Link
                          to={
                            `${viewRoute[3] == "motor" ? ("/performance/analytics/battery") : ("/performance/analytics/motor")}`
                          }
                          className="font-dm-font font-bold text-[#475673] "
                        >
                          {viewRoute[3] == "motor" ? ("Battery") : ("Motor")}
                        </Link>
                      </Tooltip>

                    </>) :
                    (<></>)
                }
              </div>
            </div>
          </div>
        </div>
        <div className="flex pr-10 gap-5 items-center" >

          <div className={`  ${viewRoute[1] == "assetsProvisioning" && viewRoute[2] == "maps" ? ("hidden") : ("flex")} `}    >

            {
              viewRoute[1] == "home" && viewRoute[2] == "maps" ?
                (<>
                  <div className="w-36 py-1" >
                  <InputLabel id="demo-simple-select-label"  ><p className="font-dm-font font-bold text-[#475673] text-xs" >Filters</p></InputLabel>
                  <FormControl fullWidth >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Filter"
                      value={currentmapfilter}
                      onChange={HandleMapFilterChange}

                    >

                      <MenuItem value={"activeUser"}> <p className="font-dm-font font-bold " >Active</p> </MenuItem>
                      <MenuItem value={"accident"}> <p className="font-dm-font font-bold " >Accident</p> </MenuItem>
                      <MenuItem value={"sold"}><p className="font-dm-font font-bold " >Sold</p></MenuItem>
                      <MenuItem value={"usageScore"}><p className="font-dm-font font-bold " >Usage Score</p></MenuItem>
                      <MenuItem value={"maintance"}><p className="font-dm-font font-bold " >Maintance</p></MenuItem>
                    </Select>
                  </FormControl>
                  </div>
                </>)
                :
                (<>
                  <Sidebar/>
                </>)
            }

          </div>
          <div>
            <IconButton>
              <SettingsIcon fontSize="large" color="#475673" />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <AccountCircleIcon fontSize="large" color="#475673" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar