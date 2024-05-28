import { Link, LinkProps } from 'react-router-dom';

// Omitted 'to' field from Link component props just to add my own 'to' that isn't required
interface ConditionalLink extends Omit<LinkProps, 'to'> {
  to?: string;
}

export default function ConditionalLink({
  children,
  to,
  ...props
}: ConditionalLink) {
  return to ? (
    <Link {...props} to={to}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}
