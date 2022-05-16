import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoute';

export default function (Stack) {
    return (
        <React.Fragment>
            <Stack.Screen
                name={navigationStrings.TABS}
                component={TabRoutes}
            />
        </React.Fragment>
    )

}