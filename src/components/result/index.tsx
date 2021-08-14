import * as React from 'react';
import './styles.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export interface IResultProps {
    clv: number;
    suggestions: any[];
}

export interface IResultState { }

class Result extends React.Component<IResultProps, IResultState> {
    constructor(props: IResultProps) {
        super(props);
        this.state = {}
    }

    private renderSuggestion(item: any, key: number) {
        return <div className={"suggestionItemWrapper"}>
            <div className={"planWrapper"}>
                <span className={"planTitle"}>
                    {"Basic"}
                </span>
            </div>
            <div className={"loyalityPointsWrapper"}>
                <span className={"loyalityPoints"}>
                    {'5X'}
                </span>
                <span className={"text"}>
                    {`Loyality Points`}
                </span>
            </div>
            <div className={"priceWrapper"}>
                <span className={"discountPrice"}>
                    {4000}
                </span>
                <span className={"actualPrice"}>
                    {5000}
                </span>
                <span className={"discountPercent"}>
                    {'20%'}
                </span>
            </div>
            <div className={"subscribeButton"}>
                {`Purchase Now`}
            </div>
        </div>
    }

    public render() {
        return <div className={"resultContainer"}>
            <CircularProgressbar
                className={"clvProgressBarContainer"}
                value={this.props.clv}
                text={`${this.props.clv}%`}
            />
            <div className={"suggestionsContainer"}>
                {[1, 2, 3, 4, 5, 6].map((_suggestion: any, index: number) => this.renderSuggestion(_suggestion, index))}
            </div>
        </div>;
    }
}

export default Result;