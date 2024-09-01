import * as React from 'react';
import { Stack } from '@fluentui/react/lib/components/Stack/Stack';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { useId } from "@fluentui/react-hooks";
import { DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react/lib/components/Dropdown/Dropdown.types';
import { IStackTokens } from '@fluentui/react/lib/components/Stack/Stack.types';
import { Dropdown } from '@fluentui/react/lib/components/Dropdown/Dropdown';
import { ListPicker } from "@pnp/spfx-controls-react/lib/ListPicker";



export interface IAppProps {
    webpartContext: WebPartContext;
}

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };



const App: React.FunctionComponent<IAppProps> = (props) => {

    const appComponentKey = useId("appComponentKey");

    const { webpartContext } = props;

    const onListPickerChange = (lists: string | string[]): void => {
        console.log(lists);
    };

    return (
        <Stack key={`${appComponentKey}_main_wrapper`} tokens={stackTokens}>
            <Dropdown
                placeholder="Select an option"
                label="Basic uncontrolled example"
                options={options}
                styles={dropdownStyles}
            />

            <ListPicker context={webpartContext}
                label="Select your list(s)"
                placeHolder="Select your list(s)"
                baseTemplate={100}
                contentTypeId="0x0101"
                includeHidden={false}
                multiSelect={false}
                onSelectionChanged={onListPickerChange} />


        </Stack>
    );
};

export default App;

App.displayName = 'App';