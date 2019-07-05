import React, { Fragment } from 'react'
import { Header } from 'semantic-ui-react'


class SpendStats extends React.Component {


  render() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    let eatingOutAdd = () => {
      const eatingOutFilter = this.props.purchases.filter(purchase => purchase.category === "Eating Out")
      const eatingOutMap = eatingOutFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(eatingOutMap.reduce(reducer, 0)).toFixed(2)
    }

    let groceriesAdd = () => {
      const groceriesFilter = this.props.purchases.filter(purchase => purchase.category === "Groceries")
      const groceriesMap = groceriesFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(groceriesMap.reduce(reducer, 0)).toFixed(2)
    }

    let entertainmentAdd = () => {
      const entertainmentFilter = this.props.purchases.filter(purchase => purchase.category === "Entertainment")
      const entertainmentMap = entertainmentFilter.map(purchase => parseFloat(purchase.actual_paid))
      console.log("userStats", entertainmentMap )
      return parseFloat(entertainmentMap.reduce(reducer, 0)).toFixed(2)
    }

    let giftsAdd = () => {
      const giftsFilter = this.props.purchases.filter(purchase => purchase.category === "Gifts")
      const giftsMap = giftsFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(giftsMap.reduce(reducer, 0)).toFixed(2)
    }

    let boozeAdd = () => {
      const boozeFilter = this.props.purchases.filter(purchase => purchase.category === "Booze/Night Out")
      const boozeMap = boozeFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(boozeMap.reduce(reducer, 0)).toFixed(2)
    }

    let transportAdd = () => {
      const transportFilter = this.props.purchases.filter(purchase => purchase.category === "Transportation/ Gas")
      const transportMap = transportFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(transportMap.reduce(reducer, 0)).toFixed(2)
    }

    let clothesAdd = () => {
      const clothesFilter = this.props.purchases.filter(purchase => purchase.category === "Clothes/Accessories")
      const clothesMap = clothesFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(clothesMap.reduce(reducer, 0)).toFixed(2)
    }

    let travelAdd = () => {
      const travelFilter = this.props.purchases.filter(purchase => purchase.category === "Flights/ Hotels")
      const travelMap = travelFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(travelMap.reduce(reducer, 0)).toFixed(2)
    }

    let miscAdd = () => {
      const miscFilter = this.props.purchases.filter(purchase => purchase.category === "Misc.")
      const miscMap = miscFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(miscMap.reduce(reducer, 0)).toFixed(2)
    }


    return(
    <Fragment>
      <Header size="huge" inverted color="orange">
        Hello from SpendStats Page
      </Header>
      <p>Eating Out: ${eatingOutAdd()} </p>
      <p>Groceries: ${groceriesAdd()} </p>
      <p>Entertainment: ${entertainmentAdd()} </p>
      <p>Clothes/Accessories: ${clothesAdd()} </p>
      <p>Booze/Night Out: ${boozeAdd()} </p>
      <p>Transportation/ Gas: ${transportAdd()} </p>
      <p>Flights/ Hotels: ${travelAdd()} </p>
      <p>Misc: ${miscAdd()} </p>
      <p>Gifts: ${giftsAdd()} </p>
    </Fragment>
    )
  }
}

export default SpendStats
