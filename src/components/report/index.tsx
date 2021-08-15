import { Icon } from '@fluentui/react';
import * as React from 'react';
import './styles.scss';

export interface IReportProps { }

export interface IReportState { }

class Report extends React.Component<IReportProps, IReportState> {
    constructor(props: IReportProps) {
        super(props);
        this.state = {
        }
    }

    public componentDidMount() {
        let iframe: any = document.getElementById('iframeId');
        let element = iframe.contentWindow.document.getElementsByTagName("auto-auth")[0];
        console.log(element);
    }

    public render() {
        return <div className={"reportContainer"}>
            <iframe
                id="iframeId"
                className={"reportWrapper"}
                src="https://app.powerbi.com/reportEmbed?reportId=1881f7b6-3203-427a-8d79-6f17928225aa&autoAuth=true&ctid=865cc515-a530-4538-8ef8-072b7b2be759&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
                frameBorder="0"
                allowFullScreen={true}
            ></iframe>
            <a href={'./Inferential_Statistics.pbix'} download="CLV-Statistical-Analysis-Report" >
                <Icon
                    iconName={"Download"}
                    className={"downloadIconButton"}
                />
            </a>
        </div>;
    }
}

export default Report;

