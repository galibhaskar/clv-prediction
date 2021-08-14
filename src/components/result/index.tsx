import * as React from 'react';
import './styles.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BasePlanImage from '../../assets/Basic.svg';
import _ from 'lodash';
import { DefaultButton, Dialog, DialogContent, DialogFooter, DialogType, PrimaryButton, Spinner, SpinnerSize, TextField } from '@fluentui/react';
import emailjs, { init } from 'emailjs-com';
import { A, Email, Item, renderEmail } from 'react-html-email'
import Success from '../../assets/success.gif';
import Failed from '../../assets/Fail.png';

export interface IResultProps {
    clv: number;
    suggestions: any[];
}

export interface IResultState {
    progressorValue: number;
    userEmail: string;
    mailDialogVisibility: boolean;
    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    recommendedSuggestion: any;
}

const EmailTemplate = ({ name }: any) => {
    return <>
        <Email title='link'>
            <Item>
                Hello {name}
                <A style={{ paddingLeft: 10 }} href='/blog/'>Click me!</A>
            </Item>
            {/* <Item>
                {children}
            </Item> */}
        </Email>
    </>;
}

class Result extends React.Component<IResultProps, IResultState> {
    constructor(props: IResultProps) {
        super(props);
        this.state = {
            progressorValue: 0,
            userEmail: "",
            mailDialogVisibility: false,
            isError: false,
            isLoading: false,
            isSuccess: false,
            recommendedSuggestion: ""
        };
    }

    public componentDidMount() {
        let _intervalId = setInterval(() => {
            let _progressorValue = _.clone(this.state.progressorValue);
            let _clv = parseInt(_.clone(this.props.clv).toFixed(0));
            if (_progressorValue >= _clv)
                clearInterval(_intervalId);
            else
                this.setState({
                    progressorValue: _progressorValue + 100
                });
        }, 10);
    }

    private renderSuggestion(item: any, key: number) {
        return <div className={"suggestionItemWrapper"}>
            <div className={"title"}>
                {`${item.plan}`}
            </div>
            <div className={"planWrapper"}>
                <img
                    src={BasePlanImage}
                    alt={"planImage"}
                    className={"planImageContainer"}
                />
                <div className={"percentWrapper"}>
                    <div className={"percentContainer"}>
                        <span className={"percent"}>
                            {`${item.discountPercentage}%`}
                        </span>
                        <span className={"offText"}>
                            {`Off`}
                        </span>
                    </div>
                </div>
            </div>
            <div className={"pricingWrapper"}>
                <div className={"amountWrapper"}>
                    {`Rs. ${item.planPrice} per month`}
                </div>
                <div className={"loyaltyWrapper"}>
                    <span className={"loyaltyPoints"}>
                        {`${item.loyaltyPoints}`}
                    </span>
                    <span className={"text"}>
                        {`Loyalty Points`}
                    </span>
                </div>
            </div>
            <div className={"recommendButton"}
                onClick={() => this.setState({ mailDialogVisibility: true, recommendedSuggestion: item })}
            >
                {`Recommend now`}
            </div>
        </div>
    }

    private triggerEmail = (event: any) => {
        console.log(event.target);
        this.setState({
            isLoading: true
        });
        emailjs.send('gmail', 'template_pxs8i53', {
            from_name: 'Team singham',
            plan_name: this.state.recommendedSuggestion.plan,
            ddiscount_percent: this.state.recommendedSuggestion.discountPercentage,
            amount: this.state.recommendedSuggestion.planPrice,
            reply_to: this.state.userEmail
        }, "user_kRkxp0ZsnVkwZGbmfbDZk").then((response) => this.setState({
            isSuccess: true,
            isLoading: false, isError: false
        }))
            .catch((error) => this.setState({
                isSuccess: true,
                isLoading: false, isError: false
            }));
    }

    public render() {
        let _requestServed = (this.state.isSuccess || this.state.isError);
        return <div className={"resultContainer"}>
            {
                this.state.mailDialogVisibility &&
                <Dialog
                    dialogContentProps={
                        _requestServed ? undefined :
                            {
                                type: DialogType.normal,
                                title: 'Recommend Offer',
                                closeButtonAriaLabel: 'Close',
                                subText: 'This is send email to the user with the details of insurance plan',
                            }
                    }
                    hidden={!this.state.mailDialogVisibility}
                    onDismiss={() => this.setState({
                        mailDialogVisibility: false,
                        userEmail: "",
                        isError: false,
                        isSuccess: false,
                        isLoading: false
                    })}
                >
                    {
                        this.state.isLoading ? <Spinner
                            label={`Sending email`}
                            size={SpinnerSize.medium}
                        /> : <>
                            {
                                _requestServed ?
                                    <>
                                        {
                                            this.state.isSuccess && <img src={Success} alt="success" />
                                        }
                                        {
                                            this.state.isError && <img src={Failed} alt="failed" />
                                        }
                                    </> : <>
                                        <TextField
                                            label={"Customer Email"}
                                            placeholder={"Enter customer email"}
                                            onChange={(event: any) => this.setState({ userEmail: event.target.value })}
                                        />
                                    </>
                            }
                            <DialogFooter>
                                {
                                    !_requestServed && <>
                                        <PrimaryButton
                                            onClick={this.triggerEmail}
                                            text="Send"
                                        />
                                    </>
                                }
                                <DefaultButton
                                    onClick={() => this.setState({
                                        mailDialogVisibility: false,
                                        userEmail: "",
                                        isError: false,
                                        isSuccess: false,
                                        isLoading: false
                                    })}
                                    text={_requestServed ? "Close" : "Cancel"}
                                />
                            </DialogFooter>
                        </>
                    }
                </Dialog>
            }
            <div className={"clvContainer"}>
                <CircularProgressbar
                    value={this.state.progressorValue}
                    text={`${this.props.clv.toFixed(0)}/10000`}
                    circleRatio={0.75}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "butt",
                        trailColor: "#eee",
                        textSize: '14px',
                        pathColor: '#6730e3',
                        textColor: '#6730e3',
                    })}
                    maxValue={10000}
                    className={"clvProgressBarContainer"}
                />
                <div className={"clvText"}>
                    {`Customer LifeTime Value`}
                </div>
            </div>
            {
                this.props.suggestions.length !== 0 &&
                <h1>{`Recommendations`}</h1>
            }
            <div className={"suggestionsContainer"}>
                {this.props.suggestions.map((_suggestion: any, index: number) => this.renderSuggestion(_suggestion, index))}
            </div>
        </div>;
    }
}

export default Result;