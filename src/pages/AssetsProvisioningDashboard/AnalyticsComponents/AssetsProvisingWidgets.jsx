import NumberWidgets from "../../../components/Widgets/NumberWidgets"
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AssetsProvisingWidgets = () => {
    return (
        <>
            <div>
                <div className="flex gap-5 justify-around" >
                    <div>
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Active Assets"}
                            count={70}
                            countType={""}
                            icon={<ToggleOnIcon/>}
                            width={80}
                            height={40}

                        />
                    </div>
                    <div>
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Deactive Assets"}
                            count={50}
                            countType={""}
                            icon={<ToggleOffIcon/>}
                            width={80}
                        height={40}
                        />
                    </div>
                    <div>
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Pending Updates"}
                            count={40}
                            countType={""}
                            icon={<PendingIcon/>}
                            width={80}
                            height={40}
                        />
                    </div>
                    <div>
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Latest Firmware"}
                            count={50}
                            countType={""}
                            icon={<CheckCircleIcon/>}
                            width={80}
                        height={40}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetsProvisingWidgets