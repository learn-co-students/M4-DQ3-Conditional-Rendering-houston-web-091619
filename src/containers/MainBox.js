import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoPage: "profile"
    }
  }

  handleClick = (event) => {
    if (event.target.id === "profile") {
      this.setState({
        shoPage: "profile"
      })
    } else if (event.target.id === "photo") {
      this.setState({
        shoPage: "photos"
      })

    } else if (event.target.id === "cocktail") {
      this.setState({
        shoPage: "cocktail"
      })

    } else {
      this.setState({
        shoPage: "pokemon"
      })
    }

  }


  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should have state? 
    Which component should have methods to control state? Where should these methods be called?
    */

    const detailsToDisplay = () => {
      if (this.state.shoPage === "profile") {
        return Profile()
      } else if (this.state.shoPage === "photos") {
        return Photos()
      } else if (this.state.shoPage === "cocktail") {
        return Cocktails()
      } else {
        return <Pokemon />
      }
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>  {/* when you click on the menu bar */}
        {detailsToDisplay()} {/* what you display */}
      </div>
    )
  }

}


export default MainBox
