import Header from './Header'

export const generated = () => {
  return <Header title="My Budget" onOpen={() => console.log('open')} />
}

export default { title: 'Components/Header' }
