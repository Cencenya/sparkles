import { useEffect, useState } from "react";
import { Drawer, Icon, Spin, Progress } from "antd";
import { feature } from "../../Components/Header";
import { templates } from "../../../../config/StrConfig";
// import { ProgressBar, ContentBox, Child1Chart, Child2Chart, Child3Table } from './compoents'

const css = require("../../../../styles/custom.css");
const scss = require("../../../../styles/scss/sharepage.scss");

let vh = px => (px / 1080) * 100 + "vh";

interface Props {
    visible: boolean;
    template: string;
}
export default function LDPolice({ visible, template }: Props) {
    const [config, setConfig] = useState(null);
    useEffect(() => {
        fetch(templates[template].configPath)
            .then(r => r.json())
            .then(setConfig)
            .catch(console.table);

    }, []);

    return (
        <>
            <Drawer
                placement="left"
                closable={false}
                maskClosable={false}
                mask={false}
                width={420}
                className={
                    scss["drawer-content"] +
                    " " +
                    scss["drawer-left"] +
                    " " +
                    scss["ldPolice-left"]
                    //  +
                    // " " +
                    // scss["pe-none"]
                }
                visible={visible}
            >
                <div className={scss["left"]}>
                    {config ? (
                        <>
                            <div>
                                {/* {
                                    config.leftContent.detail.map((r, i) => {
                                        return <div key={i} className={scss['left-content-box']}>
                                            <div className={scss['']}>
                                                <img src={config.leftContent.imgUrl} alt="" />
                                                <span>{r.typeName}</span>
                                            </div>
                                            <ProgressBar width={r.count / config.leftContent.total * 100} />
                                            <div>{r.count}</div>
                                        </div>
                                    })
                                } */}
                            </div>
                        </>
                    ) : (
                        <Spin size="large" />
                    )}
                </div>
            </Drawer>
            <Drawer
                placement="right"
                closable={false}
                mask={false}
                width={440}
                style={{ width: "auto" }}
                className={
                    scss["drawer-content"] +
                    " " +
                    scss["drawer-right"] +
                    " " +
                    scss["ldPolice-right"]
                    // +" " +
                    // scss["pe-none"]
                }
                visible={visible}
            >
                <div className={scss["right"]}>
                    {config ? (
                        <>
                            <img src={config.rightUrl} alt="" />
                        </>
                    ) : (
                        <Spin size="large" />
                    )}
                </div>
            </Drawer>
        </>
    );
}
