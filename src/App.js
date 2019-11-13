import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [
        { "name": "Audi", "details": "Germany" },
        { "name": "BMW", "details": "Germany" },
        { "name": "Chevrolet", "details": "USA" },
        { "name": "Citroen", "details": "France" },
        { "name": "Hyundai", "details": "South Korea" },
        { "name": "Mercedes-Benz", "details": "Germany" },
        { "name": "Renault", "details": "France" },
        { "name": "Seat", "details": "Spain" },
        { "name": "Dodge", "details": "USA" },
        { "name": "BMW", "details": "Germany" },
        { "name": "Tesla", "details": "USA" },
        { "name": "Volkswagen", "details": "Germany" },
        { "name": "Hyundai", "details": "South Korea" },
        { "name": "Jaguar", "details": "United Kingdom" },
        { "name": "GMC", "details": "USA" },
        { "name": "Bentley", "details": "United Kingdom" },
      ],
      numberOfitemsShown: 5,
    }
  }

  showMore = () => {
    if (this.state.numberOfitemsShown + 5 <= this.state.cars.length) {
      this.setState(state => ({ numberOfitemsShown: state.numberOfitemsShown + 5 }));
    } else {
      this.setState({ numberOfitemsShown: this.state.cars.length })
    }
  };

  render() {
    const itemsToShow = this.state.cars
        .slice(0, this.state.numberOfitemsShown)
        .map(car => <li key={car.name}>{car.name}</li>);

    return (
        <div>
          <ul>
            {itemsToShow.length ? itemsToShow : "Loading..."}
          </ul>
          <button onClick={this.showMore}>
            show more
          </button>
        </div>
    );
  }
}
export default App;
