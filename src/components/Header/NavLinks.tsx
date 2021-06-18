import { Stack } from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'

export function NavLinks() {
  return (
    <Stack
      as="nav"
      spacing="4"
      px={{ sm: 0, md: '5' }}
      py={{ sm: '4', md: 0 }}
      width={{ sm: '100%' }}
      direction={{ sm: 'column', md: 'row' }}
    >
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="#">Atividades</ActiveLink>
      <ActiveLink href="#">Agenda</ActiveLink>
      <ActiveLink href="#">Profes</ActiveLink>
      <ActiveLink href="#">Valores</ActiveLink>
    </Stack>
  )
}
