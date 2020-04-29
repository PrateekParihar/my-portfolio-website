import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

export default [

  {
    id: Math.random(),
    url: "https://github.com/PrateekParihar",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://twitter.com/_PrateekParihar",
    image: <FaTwitterSquare className="twitter-icon" />,
  },
]
