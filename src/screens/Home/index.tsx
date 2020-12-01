import React from 'react';
import {Text, Button, View} from 'react-native';
import {StackParams} from '../../navigation';
import {Container} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {color} from '../../components/colors';
import Card from '../../components/assets/Card';
import {UserInfo} from '../../components/content/modules/userInfo';

type NavigationProps = StackNavigationProp<StackParams, 'Home'>;

export function Home() {
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <Container>
      <Text>Home Screen</Text>
      <View
        style={{
          height: 300,
          width: 400,
        }}>
        <Card fill={color.pank} borderRadius={40}>
          <UserInfo userName="Bresnow" title="designer"></UserInfo>
        </Card>
      </View>

      <Button
        testID="details"
        title="Go to Details"
        onPress={() => navigate('Details', {data: '🤪'})}
      />
    </Container>
  );
}
