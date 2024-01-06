import { classNames } from 'shared/lib/classNames/ClassNames'
import cls from './AppLink.module.scss'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames('', {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
