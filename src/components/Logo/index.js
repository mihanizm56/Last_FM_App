import React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"
import {
  withPressAnimation,
  compose,
} from "../../libs/Animation"
import { SmallImage } from "../"

const LogoAnimation = compose(withPressAnimation)

export const Logo = LogoAnimation(() => {
  return (
    <Link to="/">
      <SmallImage image={"images/logo.png"} />
    </Link>
  )
})
