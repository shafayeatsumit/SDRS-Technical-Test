import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface InvestmentInfo {
  percentage: number;
  investmentRaised: string;
  numberOfInvestors: number;
}

const HorizontalBar = ({
  percentage,
  investmentRaised,
  numberOfInvestors,
}: InvestmentInfo) => {
  // deals with investment raised more than 100%
  const barWidth = percentage > 100 ? 100 : percentage;

  return (
    <View style={styles.barContainer}>
      <Text style={styles.invRaised}>
        {investmentRaised} from {numberOfInvestors} investors
      </Text>
      <View style={[styles.bar, {width: `${barWidth}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginTop: 20,
    backgroundColor: '#DFE3E9',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    // paddingLeft: 10,
  },
  bar: {
    backgroundColor: '#62BE7E',
    height: '100%',
    borderRadius: 20,

    position: 'absolute',
  },
  invRaised: {
    color: '#222F3A',
    fontSize: 14,
    zIndex: 10,
    paddingLeft: 20,
  },
});

export default HorizontalBar;
