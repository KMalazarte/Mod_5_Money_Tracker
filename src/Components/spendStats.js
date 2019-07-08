import React, { Fragment } from 'react'
import { Grid, Card } from 'semantic-ui-react'
import PieChart  from 'react-minimal-pie-chart';



class SpendStats extends React.Component {

  state={
    clicked: true
  }

  cardClicker = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

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


    let clicked = this.state.clicked
    console.log("spend Stats", parseFloat((parseFloat(groceriesAdd())/(parseFloat(this.props.spent)))*100).toFixed(4)   )
    return(
    <Fragment>
      {clicked ? (
        <Card onClick={this.cardClicker}>
          <Grid textAlign='center' >
            <Grid.Row color="blue">
              <p>Eating Out: ${eatingOutAdd()} / {parseFloat((parseFloat(eatingOutAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}% </p>
            </Grid.Row>
            <Grid.Row color="teal">
              <p>Groceries: ${groceriesAdd()} / {parseFloat((parseFloat(groceriesAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%  </p>
            </Grid.Row>
            <Grid.Row color="green">
              <p>Entertainment: ${entertainmentAdd()} / {parseFloat((parseFloat(entertainmentAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}% </p>
            </Grid.Row>
            <Grid.Row color="red">
              <p>Clothes/Accessories: ${clothesAdd()} / {parseFloat((parseFloat(clothesAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%</p>
            </Grid.Row>
            <Grid.Row color="yellow">
              <p>Booze/Night Out: ${boozeAdd()} / {parseFloat((parseFloat(boozeAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%</p>
            </Grid.Row>
            <Grid.Row color="purple">
              <p>Transportation/ Gas: ${transportAdd()} / {parseFloat((parseFloat(transportAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%</p>
            </Grid.Row>
            <Grid.Row color="orange">
              <p>Flights/ Hotels: ${travelAdd()} / {parseFloat((parseFloat(travelAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}% </p>
            </Grid.Row>
            <Grid.Row color="brown">
              <p>Misc: ${miscAdd()} / {parseFloat((parseFloat(miscAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%</p>
            </Grid.Row>
            <Grid.Row color="pink">
              <p>Gifts: ${giftsAdd()} / {parseFloat((parseFloat(giftsAdd())/(parseFloat(this.props.spent)))*100).toFixed(2)}%</p>
            </Grid.Row>
          </Grid>
        </Card>
      ) : (
        <Card>
          <PieChart
          onClick={this.cardClicker}
            data={[
              { title: 'Eating Out', value: parseFloat(eatingOutAdd()), color:"#2185d0" },
              { title: 'Groceries', value: parseFloat(groceriesAdd()), color: "#00b5ad" },
              { title: 'Entertainment', value: parseFloat(entertainmentAdd()), color: '#21ba45' },
              { title: 'Clothes/Accessories', value: parseFloat(clothesAdd()), color: '#db2828' },
              { title: 'Booze/Night Out', value: parseFloat(boozeAdd()), color: '#fbbd08' },
              { title: 'Transportation/ Gas', value: parseFloat(transportAdd()), color: '#a333c8' },
              { title: 'Flights/ Hotels', value: parseFloat(travelAdd()), color: '#f2711c'},
              { title: 'Misc', value: parseFloat(miscAdd()), color: '#a5673f' },
              { title: 'Gifts', value: parseFloat(giftsAdd()), color: '#e03997' },
            ]}
            label={({ data, dataIndex }) =>
              Math.round(data[dataIndex].percentage) + '%'
            }
            animate
            labelStyle={{
              fontSize: '5px',
              fontFamily: 'sans-serif',
              fill: '#fff'
            }}
            style={{height: '350px'}}
          />
        </Card>
      )}
    </Fragment>
  )
}
}



export default SpendStats
