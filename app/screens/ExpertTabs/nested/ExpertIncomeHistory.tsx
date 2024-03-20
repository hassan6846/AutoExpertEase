import { ScrollView, View, StyleSheet } from 'react-native'
import React from 'react'

//Text
import { Text } from "@rneui/themed"
import { getHeight } from '../../../utils/GetDimension'

const ExpertIncomeHistory = () => {
  return (
    <ScrollView style={Style.container}>
<View style={{marginTop:getHeight/17}}>

      {/* Task Wrapper....ROw */}
      <View style={{ flexDirection: "row", width: '100%', paddingHorizontal: 21, marginBottom: 5,justifyContent:"space-between" }}>
        {/* 1 */}
        <View style={Style.TaskCards}>
          <Text style={{ color: "#007787" }} h4>Task Doned</Text>
          <Text style={{ color: "#007787" }} h3>0</Text>
        </View>
        {/* 2 */}
        <View style={Style.TaskCardTwo}>
          <Text style={{ color: "#0675BB" }} h4>Earned</Text>
          <Text style={{ color: "#0675BB" }} h3>500</Text>
        </View>
      </View>
      {/* Row Ends */}
      <View style={{ paddingHorizontal: 20 }}>
        <View style={Style.RatingCard}>
          <Text style={{ color: "#E04E2F" }} h4>Rattings</Text>
          <Text style={{ color: "#E04E2F" }} h2>5.0</Text>
        </View>
      </View>

</View>

    </ScrollView>
  )
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",


  },
  TaskCards: {
    width: '49%',
    marginRight: 2,
    display: 'flex',
    justifyContent: "center",
    backgroundColor: "#EBF4F6",
    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 5,
    paddingHorizontal: 6,
  },
  TaskCardTwo: {
    backgroundColor: "#BEDAED",
    width: '49%',
    display: 'flex',
    justifyContent: "center",

    alignItems: "center",
    paddingVertical: 14,
    borderRadius: 5,
    paddingHorizontal: 6,
  },
  RatingCard: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,

    borderRadius: 5,
    backgroundColor: "#F6CCC3",

  }
})
export default ExpertIncomeHistory