import { HStack } from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'

export function Nav() {
  return (
    <HStack as="nav" spacing="8" px="5" height="100%">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="#">Atividades</ActiveLink>
      <ActiveLink href="#">Agenda</ActiveLink>
      <ActiveLink href="#">Profes</ActiveLink>
      <ActiveLink href="#">Valores</ActiveLink>
    </HStack>
  )
}
