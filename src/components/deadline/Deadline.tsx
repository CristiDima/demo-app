import React, { useEffect, useState } from 'react';
import { DeadlineOptions } from '../../models/DeadlineOptions';
import RadioButtonsForm from './RadionButtonsForm';

export default function Deadline () {
    const getOptions = (): DeadlineOptions[] => {
        const loadedOptions = [];
        let loadedOption: DeadlineOptions = new DeadlineOptions();
        loadedOption.id = 1;
        loadedOption.value = '30 zile';
        loadedOptions.push(loadedOption);
        loadedOption = new DeadlineOptions();
        loadedOption.id = 2;
        loadedOption.value = '15 zile';
        loadedOptions.push(loadedOption);
        loadedOption = new DeadlineOptions();
        loadedOption.id = 3;
        loadedOption.value = '7 zile';
        loadedOptions.push(loadedOption);
        loadedOption = new DeadlineOptions();
        loadedOption.id = 4;
        loadedOption.value = 'urgent';
        loadedOptions.push(loadedOption);

        return loadedOptions;
    }

    const [currentOptions, setOptions] = useState([]);
    const [selectedOpt, setSelectedOpt] = useState();

    useEffect(() => {
        const loadedOptions = getOptions;
        setOptions(loadedOptions as any);
      }, []);

    

    return (
        <div>
            <RadioButtonsForm options={currentOptions} selectedOption={selectedOpt} onUpdateSelectedOpt={(option: any) => setSelectedOpt(option)}></RadioButtonsForm>
        </div>
    );

}