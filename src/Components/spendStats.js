import React, { Fragment, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import PieChart  from 'react-minimal-pie-chart';

const SpendStats = (props) => {

  const [clicked, setClicked] = useState(true)

    const reducer = (accumulator, currentValue) => accumulator + currentValue

    let eatingOutAdd = () => {
      const eatingOutFilter = props.shownPurchases.filter(purchase => purchase.category === "Eating Out")
      const eatingOutMap = eatingOutFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (eatingOutMap == 0 ){
        return false
      } else {
        return parseFloat(eatingOutMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let eatOut = () => {
      if(eatingOutAdd()==false)return "No eating out purchases this month"
      return `Eating Out: $${eatingOutAdd()} / ${parseFloat((parseFloat(eatingOutAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let groceriesAdd = () => {
      const groceriesFilter = props.shownPurchases.filter(purchase => purchase.category === "Groceries")
      const groceriesMap = groceriesFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (groceriesMap == 0 ){
        return false
      } else {
        return parseFloat(groceriesMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let grocery = () => {
      if(groceriesAdd()==false)return "No grocery purchases this month"
      return `Groceries: $${groceriesAdd()} / ${parseFloat((parseFloat(groceriesAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let entertainmentAdd = () => {
      const entertainmentFilter = props.shownPurchases.filter(purchase => purchase.category === "Entertainment")
      const entertainmentMap = entertainmentFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (entertainmentMap == 0 ){
        return false
      } else {
        return parseFloat(entertainmentMap.reduce(reducer, 0)).toFixed(2)
      }

    }

    let entertainment = () => {
      if(entertainmentAdd()==false)return "No entertainment purchases this month"
      return `Entertainment: $${entertainmentAdd()} / ${parseFloat((parseFloat(entertainmentAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let giftsAdd = () => {
      const giftsFilter = props.shownPurchases.filter(purchase => purchase.category === "Gifts")
      const giftsMap = giftsFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (giftsMap == 0 ){
        return false
      } else {
        return parseFloat(giftsMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let gift = () => {
      if(giftsAdd()==false)return "No gift purchases this month"
      return `Gifts: $${giftsAdd()} / ${parseFloat((parseFloat(giftsAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let boozeAdd = () => {
      const boozeFilter = props.shownPurchases.filter(purchase => purchase.category === "Booze/Night Out")
      const boozeMap = boozeFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (boozeMap == 0 ){
        return false
      } else {
        return parseFloat(boozeMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let booze = () => {
      if(boozeAdd()==false)return "No booze purchases this month"
      return `Booze: $${boozeAdd()} / ${parseFloat((parseFloat(boozeAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let transportAdd = () => {
      const transportFilter = props.shownPurchases.filter(purchase => purchase.category === "Transportation/ Gas")
      const transportMap = transportFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (transportMap == 0 ){
        return false
      } else {
        return parseFloat(transportMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let transport = () => {
      if(transportAdd()==false)return "No transportation purchases this month"
      return `Transportation/Gas: $${transportAdd()} / ${parseFloat((parseFloat(transportAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let clothesAdd = () => {
      const clothesFilter = props.shownPurchases.filter(purchase => purchase.category === "Clothes/Accessories")
      const clothesMap = clothesFilter.map(purchase => parseFloat(purchase.actual_paid))
      return parseFloat(clothesMap.reduce(reducer, 0)).toFixed(2)
    }

    let clothes = () => {
      if(clothesAdd()==false)return "No clothes purchases this month"
      return `Clothes: $${clothesAdd()} / ${parseFloat((parseFloat(clothesAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let travelAdd = () => {
      const travelFilter = props.shownPurchases.filter(purchase => purchase.category === "Flights/ Hotels")
      const travelMap = travelFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (travelMap == 0 ){
        return false
      } else {
        return parseFloat(travelMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let travel = () => {
      if(travelAdd()==false)return "No flight or hotel purchases this month"
      return `Flights/Hotels: $${travelAdd()} / ${parseFloat((parseFloat(travelAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }

    let miscAdd = () => {
      const miscFilter = props.shownPurchases.filter(purchase => purchase.category === "Misc.")
      const miscMap = miscFilter.map(purchase => parseFloat(purchase.actual_paid))
      if (miscMap == 0 ){
        return false
      } else {
        return parseFloat(miscMap.reduce(reducer, 0)).toFixed(2)
      }
    }

    let misc = () => {
      if(miscAdd()==false)return "No miscellaneous purchases this month"
      return `Miscellaneous: $${miscAdd()} / ${parseFloat((parseFloat(miscAdd())/(parseFloat(props.total)))*100).toFixed(2)}%`
    }


    return(
    <Fragment>
      {clicked ? (
        <div centered onClick={() => setClicked(!clicked)} className='color'>
          <Grid textAlign='center' className='color-container'>
            <Grid.Row color="blue">
              <p>{eatOut()}</p>
            </Grid.Row>
            <Grid.Row color="teal">
              <p>{grocery()}</p>
            </Grid.Row>
            <Grid.Row color="green">
              <p>{entertainment()}</p>
            </Grid.Row>
            <Grid.Row color="red">
              <p>{clothes()}</p>
            </Grid.Row>
            <Grid.Row color="yellow">
              <p>{booze()}</p>
            </Grid.Row>
            <Grid.Row color="purple">
              <p>{transport()}</p>
            </Grid.Row>
            <Grid.Row color="orange">
              <p>{travel()}</p>
            </Grid.Row>
            <Grid.Row color="brown">
              <p>{misc()}</p>
            </Grid.Row>
            <Grid.Row color="pink">
              <p>{gift()}</p>
            </Grid.Row>
          </Grid>
        </div>
      ) : (
        <div centered >
          <PieChart
          onClick={() => setClicked(!clicked)}
            data={[
              { title: 'Eating Out', value: parseFloat(eatingOutAdd()), color:"#2185d0" },
              { title: 'Groceries', value: parseFloat(groceriesAdd()), color: "#00b5ad" },
              { title: 'Entertainment', value: parseFloat(entertainmentAdd()), color: '#21ba45' },
              { title: 'Clothes/Accessories', value: parseFloat(clothesAdd()), color: '#db2828' },
              { title: 'Booze/Night Out', value: parseFloat(boozeAdd()), color: '#fbbd08' },
              { title: 'Transportation/ Gas', value: parseFloat(transportAdd()), color: '#a333c8' },
              { title: 'Flights/ Hotels', value: parseFloat(travelAdd()), color: '#f2711c'},
              { title: 'Misc', value: parseFloat(miscAdd()), color: "#86512f" },
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
        </div>
      )}
    </Fragment>
  )
}



export default SpendStats
