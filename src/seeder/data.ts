import { Product } from "../types.ts"
import chair from "../assets/chair.png"
import iphone from "../assets/iphone.png"
import fitbit from "../assets/fitbit.png"
import shoes from "../assets/shoes.png"
import mobile from "../assets/mobile.jpg"
import Flip6 from "../assets/Flip6.jpg"
import speaker from "../assets/speaker.png"
import tws from "../assets/tws.jpg"
import smartwatch from "../assets/smartwatch.png"
import eDisplayXG from "../assets/eDisplay-XG.png"
import eDisplayXE from "../assets/eDisplay-XE.png"
import eDisplayXS from "../assets/eDisplay-XS.png"
import eWatchBlack from "../assets/eWatch-sf-3-black.png"
import eWatchWhite from "../assets/eWatch-sf-3-white.png"
import eWatch from "../assets/eWatch-sf-4.png"
import headphoneE11g from "../assets/headphone-e11g.png"
import headphoneX29m from "../assets/headphone-x28m.png"
import headphoneZ23c from "../assets/headphone-z23c.png"
import headphoneOr27c from "../assets/headphone-or27n.png"
import iphoneWhite from "../assets/iphone-15-white.png"

export const productImage: Product[] = [
    {
        id: 1,
        name: "Headphones x-28m",
        imageSrc: headphoneX29m,
        price: "11,999",
        rating: 4.3
    },
    {
        id: 2,
        name: "Iphone 6",
        imageSrc: iphone,
        price: "47,999",
        rating: 4.1
    },
    {
        id: 3,
        name: "Mi Smart Band",
        imageSrc: fitbit,
        price: "1,899",
        rating: 4.2
    },
    {
        id: 4,
        name: "eDisplay XG",
        imageSrc: eDisplayXG,
        price: "54,499",
        rating: 4.4
    },
    {
        id: 5,
        name: "Moto G86 Plus",
        imageSrc: mobile,
        price: "17,999",
        rating: 4.3
    },
    {
        id: 6,
        name: "Sonos Speaker",
        imageSrc: speaker,
        price: "5,999",
        rating: 4.5
    },
    {
        id: 7,
        name: "Noise Wireless Earphones",
        imageSrc: tws,
        price: "2,999",
        rating: 4.0
    },
    {
        id: 8,
        name: "eWatch SF 4",
        imageSrc: eWatch,
        price: "29,499",
        rating: 4.6
    },
    {
        id: 9,
        name: "Apple Watch Series 9",
        imageSrc: smartwatch,
        price: "39,499",
        rating: 4.6
    },
    {
        id: 10,
        name: "Nike Sport shoes (Red)",
        imageSrc: shoes,
        price: "39,499",
        rating: 4.6
    },
    {
        id: 11,
        name: "eWatch SF 3 Black",
        imageSrc: eWatchBlack,
        price: "25,499",
        rating: 4.6
    },
    {
        id: 12,
        name: "Headphone e11g",
        imageSrc: headphoneE11g,
        price: "8,199",
        rating: 4.6
    },
    {
        id: 13,
        name: "eDisplay XS",
        imageSrc: eDisplayXS,
        price: "54,499",
        rating: 4.5
    },
    {
        id: 14,
        name: "Iphone 15 White",
        imageSrc: iphoneWhite,
        price: "67,499",
        rating: 4.6
    },
    {
        id: 15,
        name: "Headphone z-23c",
        imageSrc: headphoneZ23c,
        price: "11,999",
        rating: 4.6
    },
    {
        id: 16,
        name: "eWatch SF 3 White",
        imageSrc: eWatchWhite,
        price: "39,500",
        rating: 4.6
    },
    {
        id: 17,
        name: "Chair",
        imageSrc: chair,
        price: "39,500",
        rating: 4.5
    },
    {
        id: 18,
        name: "eDiaplay XE",
        imageSrc: eDisplayXE,
        price: "54,499",
        rating: 4.5
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Flip6",
        imageSrc: Flip6,
        price: "95,999",
        rating: 4.5
    },
    {
        id: 20,
        name: "Headphone or-27n",
        imageSrc: headphoneOr27c,
        price: "8,199",
        rating: 4.5
    },
]