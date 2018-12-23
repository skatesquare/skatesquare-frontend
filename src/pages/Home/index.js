import React, {Component} from "react";
import './home.css';
import { Page, Form, Grid } from 'tabler-react'
import LocationList from './../../components/Location/LocationList';
import Favorites from './../../components/Favorites/index';

class Home extends Component {
  state = {
    favorites: [
      { id: 1, name: "Skatepark Landweert", city: "Venray" },
      { id: 2, name: "Skatepark Wetteling", city: "Venray" },
      { id: 3, name: "Skatepark The B", city: "Venray" },
    ]
  }

  render() {
    return(
      <Page.Content>
        <Grid.Row cards>

          <Grid.Col sm={12} xl={8}>
            <Form.Group>
              <Form.Input
                name="location-search"
                placeholder="Search..."
                icon="search" position="append"
              />
            </Form.Group>

            <LocationList />

          </Grid.Col>

          <Grid.Col sm={12} xl={4}>
            <Favorites favorites={this.state.favorites || []} />
          </Grid.Col>

        </Grid.Row>
      </Page.Content>
    )
  }
}

export default Home;