
const dynamicComponent = (Component) => {
    return (props) => <Component {...props} />
}

export default dynamicComponent