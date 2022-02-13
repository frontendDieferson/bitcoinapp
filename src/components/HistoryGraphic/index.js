import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";




export default function HistoryGraphic(props) {

    return(
        <View>
            <LineChart 
                data={{
                    datasets: [
                        {
                            data: props.infoDataGraphic
                        }
                    ]
                }}
                width={Dimensions.get('window').width}
                height={220}
                yAxisLabel='$'
                yAxisSuffix="k"
                withVerticalLines={false}
                yLabelsOffset={1}
                withVerticalLabels={false}
                chartConfig={{
                    backgroundColor: '#000',
                    backgroundGradientFrom: "#324AF8",
                    backgroundGradientTo: "#FF5C37",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                      r: "1",
                      strokeWidth: "1",
                      stroke: "#f50d41",
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            
            
            />
        </View>
    )
}