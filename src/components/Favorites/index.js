import React from 'react';
import { Card, Table, Icon } from 'tabler-react'

class Favorites extends React.Component {
  render() {
    return(
      <Card title="Favorites">
        <Table cards striped responsive className="table-vcenter">
          <Table.Header>
            <Table.Row>
              <Table.ColHeader>Spot</Table.ColHeader>
              <Table.ColHeader>City</Table.ColHeader>
              <Table.ColHeader className="w-1" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.favorites.map(favorite => (
              <Table.Row key={favorite.id}>
                <Table.Col>{favorite.name}</Table.Col>
                <Table.Col>{favorite.city}</Table.Col>
                <Table.Col><Icon link name="trash" /></Table.Col>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    )
  }
}

export default Favorites;