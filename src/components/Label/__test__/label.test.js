import React from 'react';

import { render, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Label from '../label'

describe('label', ()=>{
    it('render correct value', () => {
        const { getByText } = render(<Label message="label message"></Label>)
        expect(getByText("label message"))
    })
})