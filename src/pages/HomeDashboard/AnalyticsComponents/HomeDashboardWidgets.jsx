import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SensorsIcon from '@mui/icons-material/Sensors';
import StarRateIcon from '@mui/icons-material/StarRate';
import UpdateIcon from '@mui/icons-material/Update';
import MultipleNumberWidget from '../../../components/Widgets/MultipleNumberWidget';
import NumberWidgets from "../../../components/Widgets/NumberWidgets"


const HomeDashboardWidgets = () => {
    const asset = {
        title: "Assets",
        titleIcon: <SensorsIcon />,
        values: [
            { "subtitle": "Connected Assets", "count": "50", icon: "" },
            { "subtitle": "Active Assets", "count": "25", icon: "" },

        ]
    }
    return (
        <>
            <div className='flex justify-around' >
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Production Count"}
                        count={100}
                        countType={""}
                        icon={<ConfirmationNumberIcon />}
                        width={80}
                        
                        

                    />
                </div>
                <div  >
                    <MultipleNumberWidget
                        bgColor={"white"}
                        assets={asset}
                        width={80}
                        height={36}

                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Most Popular Model"}
                        count={"Hundai S3"}
                        icon={<StarRateIcon />}
                        width={80}
                        height={20}


                    />
                </div>
                <div>
                    <NumberWidgets
                        bgColor={"white"}
                        title={"Assets For Update"}
                        count={100}
                        countType={""}
                        icon={<UpdateIcon />}
                        width={80}
                        height={40}

                    />
                </div>
            </div>
        </>
    )
}

export default HomeDashboardWidgets