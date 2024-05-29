import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';

const ExpertVerification = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseExpiration, setLicenseExpiration] = useState('');
    const [cnicFront, setCnicFront] = useState<string | null>(null);

    const [cnicBack, setCnicBack] = useState<string | null>(null);
    const [faceImage, setFaceImage] = useState<string | null>(null);

    const handleCnicFrontUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
     
            setCnicFront(result.assets[0].uri);

        }
    };

    const handleCnicBackUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setCnicBack(result.assets[0].uri);
        }
    };

    const handleFaceImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setFaceImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Basic Info</Text>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>ID Confirmation</Text>
            <TouchableOpacity onPress={handleCnicFrontUpload}>
                <Text>Upload CNIC Front Side</Text>
            </TouchableOpacity>
            {cnicFront && <Image source={{ uri: cnicFront }} style={{ width: 200, height: 100 }} />}
            <TouchableOpacity onPress={handleCnicBackUpload}>
                <Text>Upload CNIC Back Side</Text>
            </TouchableOpacity>
            {cnicBack && <Image source={{ uri: cnicBack }} style={{ width: 200, height: 100 }} />}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Face Verification</Text>
            <TouchableOpacity onPress={handleFaceImageUpload}>
                <Avatar
                    rounded
                    size="medium"
                    icon={{ name: 'user', type: 'font-awesome' }}
                    source={{ uri: faceImage }}
                />
            </TouchableOpacity>
            <Text>Scan Face for Verification</Text>
        </View>
    );
}

export default ExpertVerification;
