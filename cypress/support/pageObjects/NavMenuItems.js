export class NavMenuItems {

    mainMenuItems = {
        home: 'nav > :nth-child(1) > :nth-child(1) > .waves-effect',
        hotels: '.main-menu-content [href*="hotels"]',
        flights: '.main-menu-content [href*="flights"]',
        tours: '.main-menu-content [href*="tours"]',
        visa: '.main-menu-content [href*="visa"]',
        blog: '.main-menu-content [href*="blog"]',
        offers: '.main-menu-content [href*="offers"]',
        company: '.main-menu-content [href="company"]'
    }

    sidebarMenuItems = {
        dashboard: '.sidebar-menu [href*="dashboard"]',
        myBookings: '.sidebar-menu [href*="bookings"]',
        addFunds: '.sidebar-menu [href*="add_funds"]',
        myProfile: '.sidebar-menu [href*="profile"]',
        logout: '.sidebar-menu [href*="logout"]',
    }

    navigationList = {
        mainMenuList: '.main-menu-content .waves-effect',
        sidebarList: '.sidebar-menu .waves-effect'
    }

}
