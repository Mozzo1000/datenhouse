import React from 'react'
import data from '../datasets.json'
import { Table, Card  } from 'flowbite-react';
import { BsDatabaseFill } from 'react-icons/bs';
import { FiHardDrive } from 'react-icons/fi';

function Datasets() {
  return (
    <div className="container mx-auto py-10 flex flex-col gap-8">
      <h2 className="text-4xl font-bold">All datasets ({data.length})</h2>
      {data?.map(item => {
          return (
            <Card href={"/datasets/" + item.id} className="max-w">
              <div className="flex flex-row">
                <div className="flex w-32">
                  <BsDatabaseFill size={64} />
                </div>
                <div className="flex-1">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                    {item.name}
                  </h5>
                </div>
                <div className="flex basis-64 gap-2">
                  <FiHardDrive size={24}/> 
                  {item.size}
                </div>
              </div>
            </Card>
          )
      })}


    </div>
  )
}

export default Datasets