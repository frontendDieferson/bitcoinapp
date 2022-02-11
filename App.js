import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationItems from './src/components/QuotationsList/QuotationItems';

function addZero(number) {
  if(number <=9) {
    return '0' + number
  }
  return number
}

function url(qtdDays) {
  const data = new Date();
  const listLastDays = qtdDays
  const end_date
  const start_date
  return `https://api`

}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      <StatusBar 
        backgroundColor='#f50d41'
        barStyle='light-content'
      />
      
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationItems />
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0,
    
  },
});
