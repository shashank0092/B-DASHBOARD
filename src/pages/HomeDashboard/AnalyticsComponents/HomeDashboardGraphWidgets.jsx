import NumberWidgets  from "../../../components/Widgets/NumberWidgets"
import MultipleNumberWidget from "../../../components/Widgets/MultipleNumberWidget"
import EngineeringIcon from '@mui/icons-material/Engineering';
import BugReportIcon from '@mui/icons-material/BugReport';


const HomeDashboardGraphWidgets=()=>{
    const asset = {
        title: "Maintaince Demand",
        titleIcon: <EngineeringIcon />,
        values: [
            { "subtitle": "Current Demand", "count": "50",countType:"%"  },
            { "subtitle": "Predicted Demand", "count": "25", countType:"%" },

        ]
    }
    return(
        <>
            <div>
                <div className="flex flex-col gap-5 mr-10 " >
                        <div>
                            <NumberWidgets
                                  bgColor={"white"}
                                  title={"Ticket Count"}
                                  count={100}
                                  icon={<BugReportIcon/>}
                                  countType={""}
                                  width={32}
                                  height={20}

              
                            />
                        </div>
                        <div>
                            <MultipleNumberWidget
                               bgColor={"white"}
                               assets={asset}
                               width={32}
                               height={32}
                            />
                        </div>
                       
                </div>
            </div>
        </>
    )
}

export default HomeDashboardGraphWidgets