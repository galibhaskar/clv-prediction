import * as React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import {
    ActionButton, Label,
    ChoiceGroup, Dropdown,
    Icon, IconButton,
    IDropdownOption,
    Pivot, PivotItem,
    PrimaryButton,
    TextField,
    Spinner,
    SpinnerSize
} from '@fluentui/react';
import { FormConfig } from '../../configs/FormConfig';
import { ITabConfig } from '../../concerns/TabConfig';
import { IField } from '../../concerns/Field';
import { FieldType } from '../../concerns/FieldType';
import *as  _ from 'lodash';
import { Depths } from '@fluentui/theme';
import { FieldValue } from '../../concerns/FieldValue';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import './styles.scss';
import { IPredicationService } from '../../contracts/PredictionService';
import { PredictionService } from '../../providers/PredictionService';
import Result from '../result';
initializeIcons();

export interface IFormProps { }

export interface IFormState {
    formValues: any;
    selectedTabIndex: number;
    isError: boolean;
    errorMessage: string;
    isLoading: boolean;
    response: any;
}

class Form extends React.Component<IFormProps, IFormState> {
    private _predictionService: IPredicationService;

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            formValues: {},
            selectedTabIndex: 0,
            isError: false,
            errorMessage: "",
            isLoading: false,
            response: {
                clv: 2000
            }
        }
        this._predictionService = new PredictionService();
        window.scrollTo(0, 0);
    }

    private handleChange = (key: string, value: any) => {
        let _formValues = _.cloneDeep(this.state.formValues);
        this.setState({
            formValues: {
                ..._formValues,
                [`${key}`]: value
            }
        });
    }

    private isFormValid = () => {
        let _formValues = _.cloneDeep(this.state.formValues);
        return true;
        return Object.values(FieldValue).map(_value => {
            if (!_formValues[_value])
                return false;
            return true;
        }).every(_item => _item);
    }

    private validateTabDetails = (tabConfig: ITabConfig): boolean => {
        let _fields: IField[] = tabConfig.fields;
        let _formValues = _.cloneDeep(this.state.formValues);
        return true;
        return _fields.map(_field => {
            if (!_formValues[_field.key])
                return false;
            switch (_field.type) {
                case FieldType.Integer: {
                    if (!parseInt(_formValues[_field.key]))
                        return false;
                    return true;
                }
                case FieldType.Float: {
                    if (!parseFloat(_formValues[_field.key]))
                        return false;
                    return true;
                }
                default: return true;
            }
        }).every(_item => _item);
    }

    private renderFormField = (field: IField, key: number) => {
        let _formValues = _.cloneDeep(this.state.formValues);

        switch (field.type) {
            case FieldType.Integer:
            case FieldType.Float:
                return <TextField
                    key={key}
                    type={field.type ? field.type : 'string'}
                    styles={{ root: { marginBottom: 10, maxWidth: 300 } }}
                    label={field.displayName}
                    defaultValue={"0"}
                    required
                    placeholder={field.placeholder}
                    value={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChange={(event: any) => this.handleChange(field.key, event.target.value)}
                />
            case FieldType.Choice:
                return <ChoiceGroup
                    key={key}
                    styles={{
                        root: {
                            marginBottom: 10,
                        }
                    }}
                    options={
                        field.options ? field.options.map(_option => {
                            return {
                                key: _option,
                                text: _option
                            }
                        }) : []
                    }
                    selectedKey={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChange={(event: any, option: any) => this.handleChange(field.key, option.key)
                    }
                    label={field.displayName}
                    required
                />
            case FieldType.CustomChoice:
                return <ChoiceGroup
                    key={key}
                    styles={{ root: { marginBottom: 10, maxWidth: 400 } }}
                    options={field.options ? field.options : []}
                    selectedKey={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChange={(event: any, option: any) => this.handleChange(field.key, option.key)}
                    label={field.displayName}
                    required
                />
            case FieldType.Dropdown:
                return <Dropdown
                    key={key}
                    placeholder={field.placeholder ? field.placeholder : "Select an option"}
                    label={`${field.displayName}`}
                    options={
                        field.options ? field.options.map(_option => {
                            return {
                                key: _option,
                                text: _option
                            }
                        }) : []
                    }
                    required
                    styles={{ root: { width: 300, marginBottom: 10 } }}
                    selectedKey={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChanged={(option: IDropdownOption) => this.handleChange(field.key, option.key)}
                />
            case FieldType.MultiSelect_Dropdown:
                return <Dropdown
                    key={key}
                    placeholder={field.placeholder ? field.placeholder : "Select an option"}
                    label={`${field.displayName}`}
                    multiSelect
                    options={
                        field.options ? field.options.map(_option => {
                            return {
                                key: _option,
                                text: _option
                            }
                        }) : []
                    }
                    required
                    styles={{ dropdown: { width: 300, marginBottom: 10 } }}
                    selectedKeys={_formValues[`${field.key}`] ?
                        [..._formValues[`${field.key}`]].length > 0 ?
                            [..._formValues[`${field.key}`]] : _formValues[`${field.key}`] : null
                    }
                    onChanged={
                        (option: IDropdownOption) => this.handleChange(field.key, _formValues[`${field.key}`] &&
                            [..._formValues[`${field.key}`]].length > 0 ?
                            [..._formValues[`${field.key}`], option.key] : option.key)
                    }
                />
            default: return <Label key={key} >{field.displayName}</Label >
        }
    }

    private handleTabClick = (tabValue: string) => {
        let _filteredTab: ITabConfig[] = FormConfig.tabs.filter(_tab => _tab.displayName === tabValue);
        if (_filteredTab.length && this.validateTabDetails(_filteredTab[0]))
            this.setState({ selectedTabIndex: _filteredTab[0].key });
        // else
        //     this.setState({ isError: true, errorMessage: `Please fill the details with appropriate values` });
    }

    private renderMessageBar = (props: any) => {
        return <div className={`messageBarContainer`}>
            <Icon
                className={"errorBadge"}
                iconName="ErrorBadge"
            />
            <span>
                {props.message}
            </span>
            <Icon
                iconName="Clear"
                className={"clearIcon"}
                onClick={props.close}
            />
        </div>
    }

    private handleSubmit = () => {
        let _formValues = _.cloneDeep(this.state.formValues);
        this.setState({
            isLoading: true,
            formValues: {},
            selectedTabIndex: 0
        });
        this._predictionService.getPredictionResult(_formValues)
            .then((response) => {
                this.setState({
                    isLoading: false,
                    response
                })
            })
            .catch(error => {
                this.setState({
                    isError: true,
                    errorMessage: `Sorry! something went wrong..Please try again`,
                    isLoading: false
                });
            });
    }

    public render() {
        let { selectedTabIndex, errorMessage, isError, response, isLoading } = _.cloneDeep(this.state);
        let tabsCount: number = FormConfig.tabs.length;

        if (isLoading)
            return <Spinner
                className={"spinner"}
                label={`loading...`}
                size={SpinnerSize.large}
            />;

        return <Stack
            style={{
                padding: 30,
                paddingTop: 100,
                display: 'flex',
                maxWidth: '60%',
                margin: 'auto'
                // alignItems: 'center'
            }}
        >
            {
                response ? <Result
                    clv={response.clv}
                    suggestions={[]}
                /> : <Pivot
                    defaultSelectedKey={selectedTabIndex.toString()}
                    selectedKey={selectedTabIndex.toString()}
                    onClick={(event: any) => this.handleTabClick(event.target.innerText)}
                >
                    {
                        FormConfig.tabs.map((_tab: ITabConfig, index: number) => <PivotItem
                            style={{
                                boxShadow: Depths.depth8,
                                padding: 20
                            }}
                            key={_tab.key}
                            className={`tabPivotItem`}
                            headerText={_tab.displayName}
                        >
                            {
                                isError && this.renderMessageBar({
                                    close: () => this.setState({
                                        ...this.state,
                                        isError: false,
                                        errorMessage: ``
                                    }),
                                    message: errorMessage
                                })
                            }
                            {
                                selectedTabIndex > 0 && <ActionButton
                                    iconProps={{ iconName: 'SkypeArrow' }}
                                    title="Back"
                                    text="Back"
                                    ariaLabel="Back"
                                    onClick={() => this.setState({ selectedTabIndex: index - 1 })}
                                />
                            }
                            {
                                <div className={"tabPanel"}>
                                    {
                                        index % 2 !== 0 && <img
                                            src={_tab.tabImage}
                                            alt={"image1"}
                                            width={'50%'}
                                            className={"rightPanel"}
                                        />
                                    }
                                    <div className={"leftPanel"}>
                                        {
                                            _tab.fields.map((_field: IField, index: number) => this.renderFormField(_field, index))
                                        }
                                    </div>
                                    {
                                        index % 2 === 0 && <img
                                            src={_tab.tabImage}
                                            alt={"image2"}
                                            width={'50%'}
                                            className={"rightPanel"}
                                        />
                                    }
                                </div>
                            }
                            {
                                selectedTabIndex < tabsCount - 1 && <IconButton
                                    iconProps={{ iconName: 'SkypeArrow' }}
                                    className={`nextButton`}
                                    title="Next"
                                    disabled={!this.validateTabDetails(_tab)}
                                    onClick={() => this.setState({ selectedTabIndex: index + 1 })}
                                />
                            }
                            {
                                selectedTabIndex === tabsCount - 1 && <PrimaryButton
                                    disabled={!this.isFormValid()}
                                    style={{
                                        maxWidth: 200,
                                        margin: 20,
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}
                                    onClick={this.handleSubmit}
                                    text={`Predict CLV`}
                                />
                            }
                        </PivotItem>
                        )
                    }
                </Pivot>

            }
        </Stack >;
    }
}

export default Form;