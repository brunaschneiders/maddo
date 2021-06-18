import { IconButton, Icon, IconButtonProps } from '@chakra-ui/react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

interface MenuToggleProps extends IconButtonProps {
  isOpen?: boolean
  onToggle: () => void
}

export function MenuToggle({
  isOpen = false,
  onToggle,
  ...rest
}: Omit<MenuToggleProps, 'aria-label'>) {
  return (
    <IconButton
      display="flex"
      align="center"
      aria-label="Open menu"
      icon={<Icon as={isOpen ? AiOutlineClose : BiMenuAltRight} />}
      fontSize="32"
      variant="unstyled"
      onClick={onToggle}
      color="orange.50"
      {...rest}
    />
  )
}
