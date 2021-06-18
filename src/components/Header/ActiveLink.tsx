import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { Link as ChakraLink, useBreakpointValue } from '@chakra-ui/react'

interface ActiveLinkProps extends LinkProps {
  children: string
  shouldMatchExactHref?: boolean
  barPosition?: 'bottom' | 'left'
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  barPosition = 'bottom',
  ...rest
}: ActiveLinkProps) {
  const isMobileVersion = useBreakpointValue({
    sm: true,
    md: false
  })

  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  const bottomBarStyle = {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: 1,
    borderTopRadius: 4,
    bottom: 0,
    background: 'pink.500'
  }

  const leftBarStyle = {
    content: '""',
    position: 'absolute',
    width: 1,
    height: '100%',
    borderRightRadius: 4,
    left: 0,
    background: 'pink.500'
  }

  return (
    <Link {...rest}>
      <ChakraLink
        display="flex"
        alignItems="center"
        justifyContent={{ sm: 'flex-start', md: 'center' }}
        position="relative"
        height="100%"
        px={{ sm: '5', md: '3' }}
        py={{ sm: '2', md: '0' }}
        bgGradient={isMobileVersion && 'linear(to-r, gray.600, gray.800)'}
        color={isActive ? 'orange.50' : 'orange.100'}
        opacity={!isActive && 0.4}
        fontWeight={isActive ? '600' : '300'}
        _hover={{
          color: 'gray.50',
          textDecoration: 'none',
          opacity: 1,
          transitionDuration: '0.2s',
          _after: !isMobileVersion ? bottomBarStyle : leftBarStyle
        }}
        _after={
          !isMobileVersion
            ? isActive && bottomBarStyle
            : isActive && leftBarStyle
        }
      >
        {children}
      </ChakraLink>
    </Link>
  )
}
