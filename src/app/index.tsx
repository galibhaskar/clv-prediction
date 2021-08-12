import * as React from 'react';
import { Stack } from '@fluentui/react/lib/Stack';
import {
    ChoiceGroup, Dropdown, IDropdownOption, Label,
    Pivot, PivotItem, PrimaryButton, TextField
} from '@fluentui/react';
import { FormConfig } from '../configs/FormConfig';
import { ITabConfig } from '../concerns/TabConfig';
import { IField } from '../concerns/Field';
import { FieldType } from '../concerns/FieldType';
import *as  _ from 'lodash';
import { Depths } from '@fluentui/theme';
import { FieldValue } from '../concerns/FieldValue';

export interface IAppProps { }

export interface IAppState {
    formValues: any;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            formValues: {}
        }
    }

    private handleChange = (key: string, value: any) => {
        let _formValues = _.cloneDeep(this.state.formValues);
        console.log(key, value);
        this.setState({
            formValues: {
                ..._formValues,
                [`${key}`]: value
            }
        });
    }

    private isFormValid = () => {
        let _formValues = _.cloneDeep(this.state.formValues);
        console.log(_formValues);
        let a = Object.values(FieldValue).map(_value => {
            if (!_formValues[_value])
                return false;
            return true;
        });
        let b = a.every(_item => _item);
        console.log(a, b);
        return b;
    }

    private renderFormField = (field: IField) => {
        let _formValues = _.cloneDeep(this.state.formValues);

        switch (field.type) {
            case FieldType.Integer:
                return <TextField
                    styles={{ root: { width: 300 } }}
                    label={field.displayName}
                    defaultValue={"0"}
                    required
                    value={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChange={(event: any) => this.handleChange(field.key, event.target.value)}
                />
            case FieldType.Choice:
                return <ChoiceGroup
                    options={
                        field.options ? field.options.map(_option => {
                            return {
                                key: _option,
                                text: _option
                            }
                        }) : []
                    }
                    selectedKey={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChange={(event: any, option: any) => this.handleChange(field.key, option.key)}
                    label="Pick one"
                    required
                />
            case FieldType.Dropdown:
                return <Dropdown
                    placeholder="Select an option"
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
                    styles={{ dropdown: { width: 300 } }}
                    selectedKey={_formValues[`${field.key}`] ? _formValues[`${field.key}`] : null}
                    onChanged={(option: IDropdownOption) => this.handleChange(field.key, option.key)}
                />
            case FieldType.MultiSelect_Dropdown:
                return <Dropdown
                    placeholder="Select an option"
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
                    styles={{ dropdown: { width: 300 } }}
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
            default:
                return <Label>{field.displayName}</Label>
        }
    }

    public render() {
        return <Stack style={{ padding: 30, width: '80%', alignContent: 'center' }}>
            <Pivot aria-label="Basic Pivot Example">
                {
                    FormConfig.tabs.map((_tab: ITabConfig) =>
                        <PivotItem
                            style={{ boxShadow: Depths.depth8, padding: 20 }}
                            key={_tab.key}
                            headerText={_tab.displayName}
                        // headerButtonProps={{
                        //     'data-order': 1,
                        //     'data-title': 'My Files Title',
                        // }}
                        >
                            {
                                _tab.fields.map((_field: IField) => this.renderFormField(_field))
                            }
                        </PivotItem>
                    )
                }
            </Pivot>
            <PrimaryButton
                disabled={!this.isFormValid()}
                style={{ maxWidth: 200, margin: 20, marginLeft: 'auto', marginRight: 'auto' }}
                onClick={() => console.log(this.state.formValues)}
                text={`Post details`}
            />
        </Stack>;
    }
}

export default App;