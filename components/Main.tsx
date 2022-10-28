import React from 'react'
import Link from "next/link"
import LargeButton from "./Buttons/LargeButton"
import FadeUp from './Transition/FadeUp'


type Props = {}

const Main = (props: Props) => {

  return (
    <FadeUp>
      <div className="main-container">
        <div className="flex-col-8 sm:gap-10">
          <h1>Da Nang</h1>
          <h2>The fantastic city</h2>
        </div>
        <Link href="/attractions">
          <LargeButton>Explore</LargeButton>
        </Link>
      </div>
    </FadeUp>
  )
}

export default Main