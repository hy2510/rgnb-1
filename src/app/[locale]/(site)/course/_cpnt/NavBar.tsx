import { NavBarBox, NavItemBox } from '@/app/_ui/StyledCourse'

export default function NavBar() {
  return (
    <NavBarBox>
      <NavItem name="Alphabet" count={30} active={true} />
      <NavItem name="Phonics" count={60} active={false} />
      <NavItem name="Sight Word" count={60} active={false} />
    </NavBarBox>
  )
}

function NavItem({
  name,
  count,
  active,
}: {
  name: string
  count: number
  active: boolean
}) {
  return (
    <NavItemBox $active={active}>
      {name}({count})
    </NavItemBox>
  )
}
