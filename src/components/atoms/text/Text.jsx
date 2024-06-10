import './styles.css'

function Text({ variant = 'paragraph', children, gutterBottom }) {
  return (
    <p className={`text text-${variant} ${gutterBottom ? 'gutterBottom' : ''}`}>
      {children}
    </p>
  )
}

export default Text
