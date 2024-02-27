import NumberWidgets from "../../../components/Widgets/NumberWidgets"
import NotificationsIcon from '@mui/icons-material/Notifications';


const AssetsProvisingTableWidget = () => {
    return (
        <>
            <div>
                <div className="mr-10 flex flex-col gap-10 ">
                    <div className="w-72">
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Alerts"}
                            count={50}
                            icon={<NotificationsIcon/>}
                            countType={""}
                            
                            
                            height={20}
                        />
                    </div>
                    <div>
                        <NumberWidgets
                            bgColor={"white"}
                            title={"Alerts"}
                            count={50}
                            icon={<NotificationsIcon/>}
                            countType={""}
                            width={32}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssetsProvisingTableWidget