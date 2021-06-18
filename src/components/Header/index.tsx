import { Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { LoginButton } from './LoginButton'
import { Logo } from './Logo'
import { MenuToggle } from './MenuToggle'
import { NavLinks } from './NavLinks'

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { isOpen, onToggle } = useDisclosure()
  const isWideVersion = useBreakpointValue({
    sm: false,
    lg: true
  })

  const isMobileVersion = useBreakpointValue({
    sm: true,
    md: false
  })

  return (
    <Flex
      as="header"
      direction={isMobileVersion ? 'column' : 'row'}
      w="100%"
      maxW={1480}
      h={isMobileVersion && isOpen ? '28rem' : '16'}
      px="6"
      pb={isMobileVersion && '12'}
      align="center"
      bgColor="gray.800"
      color="gray.50"
    >
      <Flex w="100%" h="100%">
        <Logo isFullLogo={isWideVersion} alignSelf="flex-start" marginTop="4" />

        {!isMobileVersion && <NavLinks />}

        {isMobileVersion && (
          <MenuToggle
            isOpen={isOpen}
            onToggle={onToggle}
            alignSelf="flex-start"
            marginTop="3"
            marginLeft="auto"
          />
        )}
      </Flex>

      {isMobileVersion && isOpen && <NavLinks />}

      {(!isMobileVersion || isOpen) && (
        <LoginButton marginLeft={!isMobileVersion && 'auto'} />
      )}
    </Flex>
  )
}
