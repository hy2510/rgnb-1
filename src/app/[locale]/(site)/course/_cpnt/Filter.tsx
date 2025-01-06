import { FilterBox, FilterButtonBox } from '@/app/_ui/StyledCourse'

export default function Filter() {
  return (
    <FilterBox>
      <FilterButton name="모든 코스" active={true} />
      <FilterButton name="미완료 코스" active={false} />
      <FilterButton name="완료한 코스" active={false} />
    </FilterBox>
  )
}

function FilterButton({ name, active }: { name: string; active: boolean }) {
  return (
    <FilterButtonBox className={`${active ? 'active' : null}`}>
      {name}
    </FilterButtonBox>
  )
}
