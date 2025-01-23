import SiteLayoutComponent from './SiteLayoutComponent'

export const metadata = {
  title: 'RG Class',
  description: 'English Library',
}

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <SiteLayoutComponent>{children}</SiteLayoutComponent>
}
