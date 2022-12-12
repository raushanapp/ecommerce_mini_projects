import { Flex, Image, Spacer, Text,Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsSearch ,BsBasket3} from "react-icons/bs"
import {RiUser3Line} from "react-icons/ri"
export const Navbar = () => {
    
    return (
        <Flex
            bg='white'
            borderBottom='1px solid #ccc'
            p={1}
            align='center'
        >
            <Spacer/>
            <Image src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_192x32.png?v=1647508945"
                alt="flat heads icon"
                h='20px'
                m='5px'
                fit='contain'
            />
            <Spacer />
            <Link to='/collections/all'>
                <Text px='4px' py='2px'>SHOP</Text>
            </Link>
            <Link to='/collections/all'>
                <Text  px='4px' py='2px'>MEN</Text>
            </Link>
            <Link to='/collections/all'>
                <Text  px='4px' py='2px'>NEW ARRIVALS</Text>
            </Link>
            <Link to='/collections/all'>
                <Text  px='4px' py='2px'>ABOUT</Text>
            </Link>
            <Link to='/collections/all'>
                <Text  px='4px' py='2px'>HELP</Text>
            </Link>
            <Spacer />
            <Icon as={BsSearch} fontSize='20px'  mx='5'/>
            <Icon as={ RiUser3Line} fontSize='20px' mx='5' />
            <Icon as={BsBasket3} fontSize='20px' mx='1' />
            <Text>0</Text>
            <Spacer/>
        </Flex>
    )
}