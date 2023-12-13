import React from 'react';
import { Text, TouchableOpacity, onPress} from 'react-native';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={{
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5,
    }} onPress={onPress}>
        <Text style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: 1.5,
        }}>
            {title}
        </Text>
    </TouchableOpacity>
    )
};

export { CustomButton };