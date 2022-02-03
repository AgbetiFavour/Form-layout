import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
	styles: {
		global: props => ({
			body: {
				fontFamily: "body",
				color: mode("gray.800", "gray.800")(props),

				// bg: mode("red", "gray.800")(props),
				// lineHeight: "base",
			},
			select: {
				bg: mode("#fff", "#fff")(props),
			},
		}),
	},
})

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)
