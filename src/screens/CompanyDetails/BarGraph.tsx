import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface InvestmentInfo {
  percentage: number;
  investmentRaised: number;
  numberOfInvestors: number;
}

const HorizontalBar = ({
  percentage,
  investmentRaised,
  numberOfInvestors,
}: InvestmentInfo) => {
  return (
    <View style={styles.barContainer}>
      <View style={[styles.bar, {width: `${percentage}%`}]}>
        <Text style={styles.invRaised}>
          {investmentRaised} from {numberOfInvestors} investors
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginTop: 20,
    backgroundColor: '#DFE3E9',
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  bar: {
    backgroundColor: '#62BE7E',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  invRaised: {
    color: '#222F3A',
    fontSize: 14,
  },
});

export default HorizontalBar;
