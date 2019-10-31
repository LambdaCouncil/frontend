import React from 'react';
import { Picker } from 'native-base';

const CouncilNames = () => {
  return (
    <>
      <Picker.Item label="Bishopric" value="bishopric" />
      <Picker.Item label="Ward Council" value="wardCouncil" />
      <Picker.Item label="Elders" value="elders" />
      <Picker.Item label="Relief Society" value="reliefSociety" />
      <Picker.Item label="Young Men" value="youngMen" />
      <Picker.Item label="Young Women" value="youngWomen" />
      <Picker.Item label="Sunday School" value="sundaySchool" />
      <Picker.Item label="Primary" value="primary" />
      <Picker.Item label="Ward Missionary" value="wardMissionary" />
    </>
  );
}

export default CouncilNames;