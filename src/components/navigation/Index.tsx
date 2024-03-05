"use client"

import { usePathname } from "next/navigation";
import AboutUsNavigation from "./AboutUs";
import LandingNavigation from "./Landing";
export default function IndexNavigation() {
  const pathname = usePathname() 

  return pathname === '/' ?
    <LandingNavigation />
    : pathname === '/about-us' ?
    <AboutUsNavigation /> : ''
}
