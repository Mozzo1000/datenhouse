import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import UnDrawData from '../undraw_data_re_80ws.svg';

function Home() {
  return (
    <div className="container mx-auto py-10">
      <section>
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl uppercase">Datenhouse</h1>
                  <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Providing services and infrastructure for  various datasets</p>
                  <div className="flex gap-4">
                      <Button className="hover:bg-purple-800" color="purple" as={Link} to="/datasets">View datasets</Button>
                  </div>
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={UnDrawData} alt="mockup"/>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home