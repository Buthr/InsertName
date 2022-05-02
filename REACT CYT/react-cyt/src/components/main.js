import React from "react";
import { Switch, Route } from 'react-router-dom';
import secondpage from './secondpage';

const main = () => (
    <main>
        <switch>
            <route exact path='/' component={secondpage} />
        </switch>
    </main>
)

export default main;