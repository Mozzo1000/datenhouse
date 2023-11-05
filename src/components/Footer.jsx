import React from 'react'
import { Footer as FFooter } from 'flowbite-react';

function Footer() {
  return (
    <FFooter container className="sticky top-[100vh]">
      <FFooter.Copyright href="/" by="Datenhouse" year={2023} />
    </FFooter>
  )
}

export default Footer