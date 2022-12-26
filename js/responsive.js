class aside {
    constructor(mobileicon, navbar, items) {
        this.mobileicon = document.querySelector(mobileicon)
        this.navbar = document.querySelector(navbar)
        this.items = document.querySelectorAll(items)
        this.active = "active"
    }
    bringNavBar = () => {
        this.navbar.classList.toggle(this.active)
        this.animeItems()

    }

    animeItems = () => {
        this.items.forEach((value, index) => {
            value.style.animation ? (value.style.animation = "") :
                (value.style.animation = `showitems ${index / 0.5}s ease forwards 0.3`)
        })

    }


    clickOnIcon = () => {
        this.mobileicon.addEventListener('click', this.bringNavBar)
    }

    render = () => {
        if (this.mobileicon) {
            this.clickOnIcon()
        }
    }
}

const show = new aside('.mobileIcon', '.nav-bar', '.items')
show.render()