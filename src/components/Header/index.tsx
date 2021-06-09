import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Nav } from './Nav'

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="16"
      mx="auto"
      px="12"
      align="center"
      bgColor="gray.800"
      color="gray.50"
    >
      <Logo isFullLogo mt="28" />

      <Nav />
    </Flex>
  )
}
