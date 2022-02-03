import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Image,
	Input,
	Radio,
	Text,
} from "@chakra-ui/react"
import React from "react"
import { NavLink, Route, Switch } from "react-router-dom"
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa"

function Home() {
	const links = [
		{ name: "TRIPS", route: "/" },
		{ name: "RECENTLY VIEWED", route: "/" },
		{ name: "BOOKINGS", route: "/" },
	]
	return (
		<>
			<Flex justifyContent="flex-end" px={20}>
				<Box
					width="50%"
					display="flex"
					justifyContent="space-evenly"
					color="#262626"
					maxWidth="100%"
					padding={["5px", "10px", "20px"]}
				>
					{links.map((link, index) => {
						return (
							<>
								<NavLink
									exact
									to={link.route}
									pos="relative"
									activeClassName="activeLink"
									key={index}
								>
									{link.name}
								</NavLink>
							</>
						)
					})}
				</Box>
				<Image
					borderRadius="full"
					boxSize="60px"
					src="https://bit.ly/dan-abramov"
					alt="Dan Abramov"
				/>
			</Flex>

			<Divider w="90%" mt={10} />

			<Flex justifyContent="space-between" mt={2} px={20}>
				<Box  w="40%">
					<Text fontWeight="bold">Payment Information</Text>
					<Text fontSize="sm" color="#f4f4f4">
						choose your method of payment
					</Text>
					<Image
						src="https://cardtrak.com/wp-content/uploads/2017/06/debit-mastercard-privileges.png"
						alt="MasterCard"
						mt={10}
					/>
				</Box>
				<Box width="40%"  h="400px">
					<HStack px={20} justifyContent="flex-end" fontSize="2rem">
						<FaCcVisa color="#0E4595" />
						<FaCcMastercard color="#f2f2f2" />
						<FaCcPaypal color="#0E4595" />
					</HStack>
					<Flex mt={20} px={10}>
						<FormControl>
							<FormLabel htmlFor="creditCardNumber">
								Credit card number
							</FormLabel>
							<Input w="80%" id="creditNum" type="number" />
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="date">Expiration date</FormLabel>
							<Input w="80%" id="date" type="date" />
						</FormControl>
					</Flex>
					<Flex mt={5} px={10}>
						<FormControl>
							<FormLabel htmlFor="securityCode">Security code</FormLabel>
							<Input w="80%" id="security" type="number" />
						</FormControl>
						<FormControl>
							<FormLabel htmlFor="posalCode">Postal code</FormLabel>
							<Input w="80%" id="postal" type="text" />
						</FormControl>
					</Flex>
					<Text px={10} mt={5}>
						<Radio></Radio> Use this card for next purchase
					</Text>
					<Button ml={10} mt={5} w="80%" bg="#3F67E9" color="#fff" size="lg">
						Add Card
					</Button>
				</Box>
			</Flex>
			<Flex px={20} justifyContent="space-between" mt={5}>
				<Box>
					<Text fontWeight="bold">Subtotal</Text>
					<Text fontWeight="bold">Estimated TAX</Text>
					<Text fontWeight="bold">
						Promotional Code: <b style={{ color: "#f2f2f2" }}>Z4KXLM9A</b>
					</Text>
					<Button bg="#3F67E9" color="#fff" size="lg" mt={5}>
						Complete payment
					</Button>
				</Box>
				<Box>
					<Text fontWeight="bold">₦2,497.00</Text>
					<Text fontWeight="bold">₦119.64</Text>
					<Text fontWeight="bold">₦-60.00</Text>
					<Text fontWeight="bold" mt={5} fontSize="1.5rem">
						TOTAL:₦2556.64
					</Text>
				</Box>
			</Flex>
		</>
	)
}

export default Home
