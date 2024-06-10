import './styles.css'

function Flex({ children }) {
  return <div className="flex">{children}</div>
}

Flex.FlexItem = function FlexItem({ children }) {
  return <div className="flex-item">{children}</div>
}

export default Flex
