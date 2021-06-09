import React ,{Component} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

export class ReportDropDown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      value: null,
      items: [{label: 'ירי', value: 'shooting', icon: () => <MaterialCommunityIcons name="target-account" color='#000000' size={24} />},
              {label: 'חטיפה', value: 'kidnap', icon: () => <MaterialCommunityIcons name="account-search" color='#000000' size={24} />},
              {label: 'תאונה', value: 'accident', icon: () => <FontAwesome5 name="car-crash" color='#000000' size={22} />},
              {label: 'דקירה', value: 'stabbing', icon: () => <MaterialCommunityIcons name="knife-military" color='#000000' size={24} />}]
    };

    this.setValue = this.setValue.bind(this);
  }

  setOpen(open) {
    this.setState({
      open
    });
  }

  setValue(callback) {
    this.setState(state => ({
      value: callback(state.value)
    }));
  }

  setItems(callback) {
    this.setState(state => ({
      items: callback(state.items)
    }));
  }

  render() {
    const { open, value, items } = this.state;

    return (
      <DropDownPicker 
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="בחר אירוע"
              placeholderStyle={{
                color: "grey",
                fontWeight: "bold"
              }}
              textStyle={{
                fontSize: 18
              }}
              
            />
    );
  }
}