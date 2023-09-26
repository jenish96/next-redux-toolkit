import Image from 'next/image'
import styles from './page.module.css'
import AddUser from './components/AddUser'
import AddTodo from './components/AddTodo'
import DisplayUser from './components/DisplayUser'
import DisplayTodo from './components/DisplayTodo'

export default function Home() {
  return (
    <div>
      <AddUser />
      <br />
      <DisplayUser />
      <br />
      <AddTodo />
      <br />
      <DisplayTodo />
    </div>

  )
}
