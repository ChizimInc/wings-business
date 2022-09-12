import Slide from "../components/Slide"
import Galery from "../components/Galery"
import Link from "next/link"

export default function Projects() {
  return (
    <>
      <div className="flex justify-around items-center h-[84vh]">
        <div className="flex items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300">
          <Link href="products/purchase"> Purchase of agricultural raw materials </Link>
        </div>
        <div className="flex items-center cursor-pointer bg-[#f8f8f8] hover:bg-[#ebebeb] p-5 rounded-3xl ease-out duration-300">
          <Link href="products/sale"> Sale of agricultural raw materials </Link>
        </div>
      </div>
    </>
  )
}