import React from 'react'
import data from '../datasets.json'
import { Button, Table, TextInput, Badge  } from 'flowbite-react';

function Datasets() {
  return (
    <div className="container mx-auto py-10">
      <Table striped hoverable className="border">
                <Table.Head>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                  {data?.map(item => {
                    return (
                      <Table.Row>
                        <Table.Cell>
                          {item.id}
                        </Table.Cell>
                        <Table.Cell>
                          {item.name}
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
            </Table>
     
    </div>
  )
}

export default Datasets