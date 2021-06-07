import React, {Component} from 'react';
import { Pages } from 'react-native-pages';
class Example extends Component {
    render(){
        return(
            <Pages>
                  <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 1, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
            </Pages>
            
        )
    }
}