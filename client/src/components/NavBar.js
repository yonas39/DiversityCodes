import React from "react"
import { Link } from "react-router-dom"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const NavBar = () => {
	return (
		<nav className="flex items-center justify-center p-6 bg-grey-500">
			<NavigationMenu>
				<NavigationMenuList className="space-x-4">
					<NavigationMenuItem>
						<Link to="/" className="text-xl text-black hover:text-blue-500">
							Home
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to="/admin"
							className="text-xl text-black hover:text-blue-300"
						>
							Admin
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	)
}

export default NavBar
