import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { Link as ChakraLink } from '@chakra-ui/react'

interface ActiveLinkProps extends LinkProps {
  children: string
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
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
    left: 0,
    background: 'pink.500'
  }

  return (
    <Link {...rest}>
      <ChakraLink
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        height="100%"
        px="3"
        color={isActive ? 'orange.50' : 'orange.100'}
        opacity={!isActive && 0.4}
        fontWeight={isActive ? '600' : '300'}
        _hover={{
          color: 'gray.50',
          textDecoration: 'none',
          opacity: 1,
          transitionDuration: '0.2s',
          _after: bottomBarStyle
        }}
        _after={isActive && bottomBarStyle}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}
