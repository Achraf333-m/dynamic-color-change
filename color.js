// here I am getting all the spans in the element with the id "dynamicColor"
let indivLetter = document.body.querySelectorAll("#dynamicColor span")

//  here this is basically calling what's inside every 100ms
setInterval(() => {
    // getting each span element individually from above
    indivLetter.forEach((letter) => {
        // getting random color(in hex form) and adding it to the style of the element
        letter.style.color = getColor()
        // adding a little smoothness to the transition between colors
        letter.style.transition = 'all 300ms ease'
    })
}, 100)


const getColor = () => {
    // these are the letters a hex color is composed of
    const hex = '012345689ABCDEF'
    // this the string i am going to add on, to get a form like "#FE10D2"
    let color = '#'

    counter = 0
    // this loop will run until counter equals 6
    while (counter < 6) {
        // this generates a random number that enables the hex to return one character
        color += hex[Math.floor(Math.random() * 16)]
        // adding 1 to counter each iteration
        counter += 1
    }
    return color
}