

function customRender(reactElement, Container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    Container.appendChild(domElement)
    */
   const domElement = document.createElement
   (reactElement.type)
   domElement.innerHTML = reactElement.Children
   for (const prop in props){
    
   }
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')


customRender(reactElement, mainContainer)


