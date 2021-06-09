import { Image, ImageProps } from '@chakra-ui/react'

interface LogoProps extends ImageProps {
  isFullLogo?: boolean
}

export function Logo({ isFullLogo = false, ...rest }: LogoProps) {
  return (
    <Image
      src={isFullLogo ? 'images/full_logo.png' : 'images/logo.png'}
      width={isFullLogo ? 250 : 75}
      objectFit="cover"
      borderRadius="8"
      boxShadow="md"
      {...rest}
    />
  )
}
